import cors from 'cors';
import models from './models';
import express from 'express';
import Sequelize from 'sequelize';

const port = 3000;
const app = express();
const Op = Sequelize.Op;

const user = models.User;
const table = models.Table;
const product = models.Product;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Servidor backend está rodando.`);
});
app.get('/', (req, res) => {
  res.send('Servidor rodando!');
});

//
//Users

//Post to login
app.post('/ws/users/login', async (req, res) => {
  const response = await user.findOne({
    where: { credential: req.body.credential, password: req.body.password },
    attributes: ['id'],
  });
  if (response === null) {
    res.send({ warm: 'Credencial inválida ou senha incorreta!' });
  } else {
    res.send(response);
  }
});

//
//Products

//Get all products and products by type
app.get('/ws/products', async (req, res) => {
  let typeRequest = req.query;

  const response = await product.findAll({
    where:
      typeRequest.type != null
        ? {
            type: typeRequest.type,
          }
        : {},
  });
  res.send(response);
});

//Get products by name
app.get('/ws/products/name', async (req, res) => {
  let titleRequest = req.query;

  const response = await product.findAll({
    where:
      titleRequest.title != null
        ? {
            title: {
              [Op.like]: '%' + titleRequest.title + '%',
            },
          }
        : {},
  });
  res.send(response);
});

//Get product by id
app.get('/ws/product', async (req, res) => {
  let idRequest = req.query;

  const response = await product.findOne({
    where:
      idRequest.id != null
        ? {
            id: idRequest.id,
          }
        : {},
  });
  res.send(response);
});

//
//Tables

//Get all tables by id
app.get('/ws/tables', async (req, res) => {
  const response = await table.findAll({
    attributes: ['id', 'name', 'status', 'callWaiter'],
  });
  res.send(response);
});

//
//
//
//
//
//
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
