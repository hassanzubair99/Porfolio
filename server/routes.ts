import type { Express } from "express";
import { createServer, type Server } from "http";
import { messageStorage } from "./storage";
import { insertMessageSchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/messages", async (req, res) => {
    try {
      const message = insertMessageSchema.parse(req.body);
      const created = await messageStorage.createMessage(message);
      res.json(created);
    } catch (error) {
      res.status(400).json({ error: "Invalid message data" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}