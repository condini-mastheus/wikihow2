const api = require("../api");

const novaCategoria = (req, res) => res.render("categorias/nova");

const inserirCategoria = async (req, res) => {
  await api.insert("categorias", {
    categoria: req.body.categoria
  });
  res.redirect("/categorias");
};

const listarCategorias = async (req, res) => {
  const categorias = await api.list("categorias");
  res.render("categorias/index", { categorias: categorias });
};

const excluirCategoria = async (req, res) => {
  await api.remove("categorias", req.params.id);
  await api.remove("publicacoes", req.params.id);
  res.redirect("/categorias");
};

const editarCategoria = async (req, res) => {
  const categoria = await api.listById("categorias", req.params.id);
  res.render("categorias/editar", {
    categoria
  });
};

const atualizarCategoria = async (req, res) => {
  await api.update("categorias", req.params.id, {
    categoria: req.body.categoria
  });
  res.redirect("/categorias");
};

module.exports = {
  novaCategoria,
  inserirCategoria,
  listarCategorias,
  excluirCategoria,
  editarCategoria,
  atualizarCategoria
};
