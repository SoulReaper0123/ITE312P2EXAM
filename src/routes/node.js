import { Router } from 'express';

const router = Router();

router.get('/node', (req, res) => {
    const node = "NODEJS";
  res.status(200).send({ node});
});

export default router;
