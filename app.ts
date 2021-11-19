import cors from 'cors';
import express from 'express';
import models from './models';

const port = 3000;
const user = models.User;
const product = models.Product;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Servidor backend está rodando.`);
});
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});
app.get('/port', (req, res) => {
  res.send({ port: port });
});

//User
// app.get('/ws/users/credential/create', async (req, res) => {
//   await user.create({
//     credential: '#81001110',
//     password: 'P@ss1232',
//     createdAt: new Date(),
//     updatedAt: new Date(),
//   });
//   res.send({ warm: 'Credencial criado com sucesso!' });
// });

app.post('/ws/users/login', async (req, res) => {
  let response = await user.findOne({
    where: { credential: req.body.name, password: req.body.password },
  });
  if (response === null) {
    res.send({ warm: 'Credencial inválida ou senha incorreta!' });
  } else {
    res.send({ response: response });
  }
});

app.get('/ws/user', async (req, res) => {
  let read = await user.findAll({
    raw: true,
    where: {
      credential: '#81001473',
    },
  });
  res.send({ response: read });
});

//Products
app.get('/ws/products', async (req, res) => {
  let read = await product.findAll({
    raw: true,
  });
  res.send({ response: read });
});

app.get('/ws/products/food', async (req, res) => {
  let read = await product.findAll({
    raw: true,
    where: {
      type: 'food',
    },
  });
  res.send({ response: read });
});

// app.get('/update', async (req, res) => {
//   let update = await user
//     .findByPk(2, { include: [{ all: true }] })
//     .then((response) => {
//       response.Trackings[0].local = 'Nova Cidade';
//       response.Trackings[0].save();
//     });
// });

// app.get('/delete', async (req, res) => {
//   user.destroy({
//     where: { id: 2 },
//   });
// });
