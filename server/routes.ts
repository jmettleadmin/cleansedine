import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post('/api/create-payment', async (req, res) => {
    try {
      const { amount, paymentMethod, customerInfo, shippingAddress, items } = req.body;

      if (!amount || !paymentMethod || !customerInfo || !shippingAddress) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      const secretKey = process.env.PAYMONGO_SECRET_KEY;
      if (!secretKey) {
        console.error('PAYMONGO_SECRET_KEY not configured');
        return res.status(500).json({ error: 'Payment gateway not configured' });
      }

      const lineItems = items.map((item: any) => ({
        currency: 'PHP',
        amount: item.amount,
        name: item.name,
        quantity: item.quantity,
      }));

      const paymentMethodType = paymentMethod === 'card' ? 'card' : 
                                paymentMethod === 'gcash' ? 'gcash' : 
                                paymentMethod === 'grabpay' ? 'grab_pay' :
                                paymentMethod === 'paymaya' ? 'paymaya' : 'card';

      const checkoutSessionData = {
        data: {
          attributes: {
            send_email_receipt: true,
            show_description: true,
            show_line_items: true,
            line_items: lineItems,
            payment_method_types: [paymentMethodType],
            description: `BioPets Order - ${items.length} item(s)`,
            billing: {
              name: customerInfo.name,
              email: customerInfo.email,
              phone: customerInfo.phone,
              address: {
                line1: shippingAddress.address,
                city: shippingAddress.city,
                postal_code: shippingAddress.postal,
                country: 'PH',
              },
            },
            success_url: `${req.protocol}://${req.get('host')}/success`,
            cancel_url: `${req.protocol}://${req.get('host')}/checkout`,
          },
        },
      };

      const response = await fetch('https://api.paymongo.com/v1/checkout_sessions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Basic ${Buffer.from(secretKey).toString('base64')}`,
        },
        body: JSON.stringify(checkoutSessionData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.error('Paymongo API error:', data);
        return res.status(response.status).json({ 
          error: data.errors?.[0]?.detail || 'Failed to create payment session' 
        });
      }

      return res.json({
        checkoutUrl: data.data.attributes.checkout_url,
        sessionId: data.data.id,
      });
    } catch (error) {
      console.error('Payment creation error:', error);
      return res.status(500).json({ 
        error: 'Internal server error while creating payment' 
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
