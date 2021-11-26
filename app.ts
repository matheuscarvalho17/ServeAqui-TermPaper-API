import cors from 'cors';
import models from './models';
import express from 'express';
import Sequelize from 'sequelize';

//All constants declaration
const port = 3000;
const app = express();
const Op = Sequelize.Op;
const user = models.User;
const order = models.Order;
const table = models.Table;
const request = models.Request;
const product = models.Product;
const arrayTables = ['id', 'name', 'status', 'callWaiter'];
const arrayProduct = [
  'id',
  'type',
  'price',
  'title',
  'amount',
  'editable',
  'image_url',
  'description',
  'ingredients',
];

//All required extension declarations
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//
//Notice
//
//Operation notice
app.listen(port, () => {
  console.log(`Servidor backend está rodando.`);
});

//
//Users
//
//Post to login
app.post('/ws/users/login', async (req, res) => {
  const response = await user.findOne({
    attributes: ['id'],
    where: {
      password: req.body.password,
      credential: req.body.credential,
    },
  });
  if (response === null) {
    res.send({ warm: 'Credencial inválida ou senha incorreta!' });
  } else {
    res.send(response);
  }
});

//
//Products
//
//Get all products and products by type
app.get('/ws/products', async (req, res) => {
  const response = await product.findAll({
    attributes: arrayProduct,
    where:
      req.query.type != null
        ? {
            type: req.query.type,
          }
        : {},
  });
  res.send(response);
});

//Get products by name
app.get('/ws/products/name', async (req, res) => {
  const response = await product.findAll({
    attributes: arrayProduct,
    where:
      req.query.title != null
        ? {
            title: {
              [Op.like]: '%' + req.query.title + '%',
            },
          }
        : {},
  });
  res.send(response);
});

//Get product by id
app.get('/ws/product', async (req, res) => {
  const response = await product.findOne({
    attributes: arrayProduct,
    where:
      req.query.id != null
        ? {
            id: req.query.id,
          }
        : {},
  });
  res.send(response);
});

//Edit product amount by id
app.put('/ws/product/update', async (req, res) => {
  await product.update(
    { amount: req.body.amount },
    {
      where: {
        id: req.body.id,
      },
    },
  );
  res.send({ warm: 'Atualização realizada com sucesso!' });
});

//
//Tables
//
//Get all tables
app.get('/ws/tables', async (req, res) => {
  const response = await table.findAll({
    attributes: arrayTables,
  });
  res.send(response);
});

//Get table by id
app.get('/ws/table', async (req, res) => {
  const response = await table.findOne({
    attributes: arrayTables,
    where:
      req.query.id != null
        ? {
            id: req.query.id,
          }
        : {},
  });
  res.send(response);
});

//Edit table status by id
app.put('/ws/table/status', async (req, res) => {
  await table.update(
    { status: req.body.status },
    {
      where: {
        id: req.body.id,
      },
    },
  );
  res.send({ warm: 'Solicitação realizada com sucesso!' });
});

//Call Waiter on table by id
app.put('/ws/table/callwaiter', async (req, res) => {
  await table.update(
    { callWaiter: req.body.callWaiter },
    {
      where: {
        id: req.body.idTable,
      },
    },
  );
  res.send({ warm: 'Solicitação realizada com sucesso!' });
});

//
//Orders and Requests
//
//Create new order
app.post('/ws/comercial/order/create', async (req, res) => {
  await order.create({
    status: req.body.status,
    idTable: req.body.idTable,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send({ warm: 'Pedido criada com sucesso!' });
});

//Create new request
app.post('/ws/comercial/request/create', async (req, res) => {
  await request.create({
    amount: req.body.amount,
    idOrder: req.body.idOrder,
    idProduct: req.body.idProduct,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send({ warm: 'Solicitação criada com sucesso!' });
});
