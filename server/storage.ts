import { users, type User, type InsertUser } from "@shared/schema";
import { messages, type Message, type InsertMessage } from "@shared/schema";
import { db } from "./db";

// modify the interface with any CRUD methods
// you might need

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  createMessage(message: InsertMessage): Promise<Message>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  currentId: number;

  constructor() {
    this.users = new Map();
    this.currentId = 1;
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId++.toString();
    const user: User = { ...insertUser, id, createdAt: new Date() };
    this.users.set(id, user);
    return user;
  }

  async createMessage(message: InsertMessage): Promise<Message> {
    throw new Error("Method not implemented.");
  }
}

export class DatabaseStorage implements IStorage {
  async getUser(id: string): Promise<User | undefined> {
    const user = await db.user.findUnique();
    return user || undefined;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const users = await db.user.findMany();
    return users.find(u => u.username === username);
  }

  async createUser(user: InsertUser): Promise<User> {
    return db.user.create(user);
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const [message] = await db.insert(messages)
      .values(insertMessage)
      .returning();
    return message;
  }
}

export const userStorage = new MemStorage();
export const messageStorage = new DatabaseStorage();