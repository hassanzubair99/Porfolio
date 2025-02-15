import { z } from "zod";

// Message types
export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  createdAt: Date;
}

export const insertMessageSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  message: z.string()
});

export type InsertMessage = z.infer<typeof insertMessageSchema>;

// User types
export interface User {
  id: string;
  username: string;
  name: string;
  email: string;
  createdAt: Date;
}

export const userSchema = z.object({
  username: z.string().min(3),
  name: z.string().min(2),
  email: z.string().email(),
});

export type InsertUser = z.infer<typeof userSchema>;