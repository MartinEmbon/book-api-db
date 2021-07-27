//const Sequelize = require("sequelize")

const {Livros} = require("../models/")

const indexController = {    
    index:async(req,res)=>{
        const livros = await Livros.findAll()        
        res.json(livros);
    },

    novo: (req, res) => {        
        res.json() 
    },
    create: async (req, res) => {
        
        
        let {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body;


        const livro = await Livros.create({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        })
        
        livro.titulo ==null ? "" : res.json("error")
        
        .then(res.status(200).json({            
            status: 'OK',
            message: "Cadastrado com suceso",
            livro:`${titulo}`
          }))
          .catch((err)=>{
              console.log(err)
          })
         
    },
    atualizar: async (req, res) => {
        let {
            id
        } = req.params;

        let {
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        } = req.body;

        const livro = await Livros.update({
            titulo,
            quantidade_paginas,
            autor,
            ano_lancamento,
            estoque
        }, {
            where: {
                id
            }
        });
    },
    editar: async (req, res) => {
        let {
            id
        } = req.params;

        const livro = await Livros.findByPk(id);
        res.json('livro');
    },



}
module.exports = indexController