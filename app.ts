import cors from 'cors';
import express from 'express';

const port = 3000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Servidor backend está rodando.`);
});

app.get('/', (req, res) => {
  res.send(`Rodando GET na porta ${port}.`);
});
