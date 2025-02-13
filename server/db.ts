// Mock database implementation without requiring DATABASE_URL
export const db = {
  user: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({})
  },
  // Add insert method
  insert: async () => ({}),
  // Add query method if needed
  query: async () => ({})
}

// Export a dummy client that doesn't need DATABASE_URL
export const client = {
  connect: async () => {},
  disconnect: async () => {}
} 