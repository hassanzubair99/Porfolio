import { pgTable, text, serial, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Messages table schema
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Message schemas and types
export const insertMessageSchema = createInsertSchema(messages).pick({
  name: true,
  email: true,
  message: true,
});

export type Message = typeof messages.$inferSelect;
export type InsertMessage = z.infer<typeof insertMessageSchema>;

// Users table schema
export const users = pgTable("users", {
  id: text("id").primaryKey(),
  username: text("username").notNull(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// User validation schema
export const userSchema = createInsertSchema(users, {
  username: z.string().min(3),
  name: z.string().min(2),
  email: z.string().email(),
});

// Inferred types from schemas
export type { 
  User as UserType,  // Export with a different name to avoid conflicts
  InsertUser as InsertUserType  // Export with a different name to avoid conflicts
} from 'drizzle-orm/pg-core';

// Define our actual types
export type User = typeof users.$inferSelect;
export type InsertUser = z.infer<typeof userSchema>;