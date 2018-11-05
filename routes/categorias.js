const express = require("express");
const router = express.Router();
const controller = require("../controllers/categorias");

router.get("/nova", controller.novaCategoria);

router.post("/nova", controller.inserirCategoria);

router.get("/", controller.listarCategorias);

router.get("/excluir/:id", controller.excluirCategoria);

router.get("/editar/:id", controller.editarCategoria);

router.post("/editar/:id", controller.atualizarCategoria);

module.exports = router;
