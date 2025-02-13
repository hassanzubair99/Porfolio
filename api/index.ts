import app from '../server';

const handler = (req: any, res: any) => {
  // Ensure we're not trying to start a server
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  return app(req, res);
};

export default handler; 