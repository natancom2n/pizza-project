import { Request, Router, Response } from 'express';

const router = Router();

router.get('/test', (req: Request, res: Response) => {
    return res.json({ name: 'Pizza-Man!!' })
});

export { router };