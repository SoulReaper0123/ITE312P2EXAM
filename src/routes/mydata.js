import { Router } from 'express';

const router = Router();

router.get('/mydata', (req, res) => {
    const subject = "ITE314";
    const exam = "P2";
    const node = "NODEJS";
  res.status(200).send({ subject, exam, node});
});

export default router;
