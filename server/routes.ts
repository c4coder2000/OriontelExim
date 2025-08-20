import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, type InsertContact } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      
      // In a real application, you would:
      // 1. Save to database: const contact = await storage.createContact(validatedData);
      // 2. Send email notification
      // 3. Integrate with CRM system
      
      // For now, we'll just log and return success
      console.log("Contact form submission:", validatedData);
      
      res.json({ 
        success: true, 
        message: "Thank you for your message! We will get back to you within 24 hours." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Please check your form inputs", 
          errors: error.errors 
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred. Please try again later." 
        });
      }
    }
  });

  // Analytics endpoint for tracking user interactions
  app.post("/api/analytics", async (req, res) => {
    try {
      const { event, data } = req.body;
      
      // In a real application, integrate with analytics services like GA4, Mixpanel, etc.
      console.log("Analytics event:", { event, data, timestamp: new Date().toISOString() });
      
      res.json({ success: true });
    } catch (error) {
      console.error("Analytics error:", error);
      res.status(500).json({ success: false });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
