import { Router } from 'express';

const router = Router();

router.get('/exam', (req, res) => {
  const exam = "P2";
  res.status(200).send({ exam});
});

export default router;
