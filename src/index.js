import express from 'express';
import exam from './routes/exam.js';
import subject from './routes/subject.js';
import mydata from './routes/mydata.js';
import node from './routes/node.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).send(`
    Welcome!<br>
    Available routes:<br>
    /exam<br>
    /mydata<br>
    /node<br>
    /subject
  `);
});

app.use('/exam', exam);
app.use('/subject', subject);
app.use('/mydata', mydata);
app.use('/node', node);

const PORT = process.env.PORT || 3333;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
