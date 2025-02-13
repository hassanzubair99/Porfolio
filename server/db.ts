import type { User, InsertUser } from '../shared/schema';

// Mock database implementation without requiring DATABASE_URL
export const db = {
  user: {
    findMany: async (): Promise<User[]> => [],
    findUnique: async (): Promise<User | null> => null,
    create: async (data: InsertUser): Promise<User> => ({
      id: '1',
      name: data.name,
      email: data.email,
      username: data.username,
      createdAt: new Date()
    }),
    update: async (): Promise<User> => ({
      id: '1',
      name: '',
      email: '',
      username: '',
      createdAt: new Date()
    }),
    delete: async (): Promise<User> => ({
      id: '1',
      name: '',
      email: '',
      username: '',
      createdAt: new Date()
    }),
    insert: async (data: InsertUser): Promise<User> => ({
      id: '1',
      name: data.name,
      email: data.email,
      username: data.username,
      createdAt: new Date()
    })
  },
  users: {
    findMany: async (): Promise<User[]> => [],
    findUnique: async (): Promise<User | null> => null
  },
  query: async () => ({})
}

// Export a dummy client that doesn't need DATABASE_URL
export const client = {
  connect: async () => {},
  disconnect: async () => {}
} 