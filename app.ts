import express from 'express';

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Servidor está rodando na porta ${port}.`);
});
