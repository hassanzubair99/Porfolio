// Mock database implementation without requiring DATABASE_URL
export const db = {
  user: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({})
  },
  users: {
    insert: async () => ({}),
    findMany: async () => [],
    findUnique: async () => null
  },
  query: async () => ({})
}

// Export a dummy client that doesn't need DATABASE_URL
export const client = {
  connect: async () => {},
  disconnect: async () => {}
} 