import express from 'express';
import cors from 'cors';

const port = 3000;
const app = express();
import bodyParser from 'body-parser';

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Servidor backend está rodando.`);
});

app.get('/', (req, res) => {
  res.send(`Rodando GET na porta ${port}.`);
});
