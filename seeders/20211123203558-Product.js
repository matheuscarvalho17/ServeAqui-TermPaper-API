'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Products', [{
        price: 20,
        amount: 20,
        editable: false,
        type: "food",
        title: "Bife suíno com salada",
        description: "Bife suíno com salada de batata, tomate e alface",
        ingredients: "Bife suíno, batata, tomate e alface",
        image_url:
          "https://s1.1zoom.me/big0/233/Meat_products_Potato_Vegetables_White_background_535614_1280x853.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 25,
        amount: 20,
        editable: true,
        type: "food",
        title: "Filé de peixe com salada",
        description: "Filé de peixe com salada de tomate e alface",
        ingredients: "Filé de peixe, tomate e alface",
        image_url: "https://img.freepik.com/fotos-gratis/dois-pedacos-de-peixe-frito-com-limao-e-salada-de-folhas-verdes-em-um-fundo-branco-objeto-isolado_223622-1244.jpg?size=626&ext=jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 18,
        amount: 20,
        editable: false,
        type: "food",
        title: "Espetinho de churrasco com salada",
        description:
          "Espetinho de churrasco com salada de batatas, tomate e alface e creme para acompanhamento",
        ingredients: "Carne bovina, batata, tomate e alface",
        image_url:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfBbz0-5LdssKIWgXEjFHmDmxWALtl2SI15kojRnS6JLm2XgBgf8sdcBtMaDA_2-0Nkg&usqp=CAU",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 26,
        amount: 20,
        editable: true,
        type: "food",
        title: "Prato feito completo com fritas",
        description:
          "Prato feito com arroz, feijão inteiro, batata frita e salada de alface e tomate",
        ingredients: "Arroz, feijão inteiro, batata frita e salada de alface e tomate",
        image_url:
          "https://www.natuslanches.com.br/wp-content/uploads/2014/12/natus-lanches-passo-fundo-67-file-simples-600x400.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 3,
        amount: 20,
        editable: false,
        type: "drink",
        title: "Coca-Cola Lata 350ml",
        description: "Coca-Cola Lata",
        ingredients: "Vide embalagem",
        image_url:
          "https://thumbs.dreamstime.com/b/ilustra%C3%A7%C3%A3o-vetorial-da-c%C3%B3acola-cl%C3%A1ssica-pode-ser-isolada-em-fundo-branco-para-uso-editorial-empresa-de-cocacola-%C3%A9-mais-185464472.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 4,
        amount: 20,
        editable: false,
        type: "drink",
        title: "Heineken Lata 350ml",
        description: "Heineken Lata",
        ingredients: "Vide embalagem",
        image_url: "https://www.paodeacucar.com/img/uploads/1/623/17634623.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 99,
        amount: 20,
        editable: false,
        type: "drink",
        title: "Gin Tanqueray 750ml",
        description: "Garrafa de gin Tanqueray",
        ingredients: "Vide embalagem",
        image_url:
          "https://www.bebidasfamosas.com.br/pub/media/catalog/product/cache/fcbf346594084df8e9404a9b89c007fe/g/i/gin-tanqueray_1.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 12,
        amount: 20,
        editable: true,
        type: "iced",
        title: "Açaí com morango 200ml",
        description: "Pote de açaí com morangos picados e nozes",
        ingredients: "Açaí, morangos e nozes.",
        image_url:
          "https://images-americanas.b2w.io/produtos/5949268/imagens/gin-tanqueray-750ml/5949268_1_xlarge.jpg",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 6,
        amount: 20,
        editable: true,
        type: "iced",
        title: "Picolé de Chocolate",
        description: "Picolé de chocolate com recheio cremoso",
        ingredients: "Vide embalagem",
        image_url:
          "https://lospaleteros.com.br/wp-content/uploads/2016/04/BRIGADEIRO-1021x1024.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        price: 25,
        amount: 20,
        editable: true,
        type: "iced",
        title: "Taça sorvete 2 sabores",
        description: "Sorvete em taça com dois sabores à escolha",
        ingredients: "Vide escolha",
        image_url:
          "https://www.kindpng.com/picc/m/53-538712_taa-de-aa-deligeli-sorvete-taa-png-transparent.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
  }
};
