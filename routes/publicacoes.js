const express = require("express");
const router = express.Router();
const controller = require("../controllers/publicacoes");

router.get("/nova", controller.novaPublicacao);

router.post("/nova", controller.insertirPublicacao);

router.get("/categoria/:categoriaId", controller.listarPublicacoes);

router.get("/excluir/:categoriaId/:id", controller.excluirPublicacao);

router.get("/editar/:categoriaId/:id", controller.editarPublicacao);

router.post("/editar/:categoriaId/:id", controller.atualizarPublicacao);

router.get("/ler/:categoriaId/:id", controller.lerPublicacao);

module.exports = router;
