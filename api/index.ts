import app from '../server';

// Handle any initialization
const handler = async (req: any, res: any) => {
  try {
    return app(req, res);
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ 
      error: 'Internal Server Error',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default handler; 