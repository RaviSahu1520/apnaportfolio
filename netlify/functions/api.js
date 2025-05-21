// netlify/functions/api.js
import express from 'express';
import serverless from 'serverless-http';
import { z } from 'zod';

const app = express();
app.use(express.json());

// Validation schema for contact form
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(2, { message: "Subject is required" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

// Contact form submission endpoint
app.post("/api/contact", async (req, res) => {
  try {
    // Validate form data
    const validatedData = contactFormSchema.parse(req.body);
    
    // In a real application, you would send an email, store in database, etc.
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

// Export the serverless function
export const handler = serverless(app);