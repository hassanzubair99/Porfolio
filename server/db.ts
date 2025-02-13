// Mock database implementation without requiring DATABASE_URL
export const db = {
  // Add any methods your code uses here
  // For example:
  user: {
    findMany: async () => [],
    findUnique: async () => null,
    create: async () => ({}),
    update: async () => ({}),
    delete: async () => ({})
  }
}

// Export a dummy client that doesn't need DATABASE_URL
export const client = {
  connect: async () => {},
  disconnect: async () => {}
} 