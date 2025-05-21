import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { z } from "zod";
import { storage } from "./storage";

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate form data
      const validatedData = contactFormSchema.parse(req.body);
      
      // In a real application, you would send an email, store in database, etc.
      // For now, we'll just log the data and return success
      console.log("Contact form submission:", validatedData);
      
      return res.status(200).json({ 
        success: true, 
        message: "Message received successfully. We will get back to you soon." 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation failed", 
          errors: error.errors 
        });
      }
      
      console.error("Error processing contact form:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred. Please try again later." 
      });
    }
  });

  // API endpoint to get team member details
  app.get("/api/team/:id", async (req: Request, res: Response) => {
    try {
      // In a real app, this would fetch from a database
      // For this project, we're handling this on the client side with the data files
      
      return res.status(200).json({ 
        success: true,
        message: "Team member details would be returned here in a full implementation."
      });
    } catch (error) {
      console.error("Error fetching team member:", error);
      return res.status(500).json({ 
        success: false, 
        message: "An unexpected error occurred. Please try again later." 
      });
    }
  });

  // Create the HTTP server
  const httpServer = createServer(app);

  return httpServer;
}
