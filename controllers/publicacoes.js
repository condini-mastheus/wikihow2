const api = require("../api");

const novaPublicacao = async (req, res) => {
  const categorias = await api.list("categorias");
  res.render("publicacoes/nova", { categorias });
};

const insertirPublicacao = async (req, res) => {
  const { titulo, conteudo, categoria } = req.body;
  await api.insert(`publicacoes/${categoria}`, {
    titulo: titulo,
    conteudo: conteudo
  });
  res.redirect(`/publicacoes/categoria/${categoria}`);
};

const listarPublicacoes = async (req, res) => {
  const { categoriaId } = req.params;
  const publicacoes = await api.list(`publicacoes/${categoriaId}`);
  res.render("publicacoes/index", { publicacoes: publicacoes, categoriaId });
};

const excluirPublicacao = async (req, res) => {
  const { categoriaId, id } = req.params;
  await api.remove(`publicacoes/${categoriaId}`, id);
  res.redirect(`/publicacoes/categoria/${categoriaId}`);
};

const editarPublicacao = async (req, res) => {
  const categorias = await api.list("categorias");
  const { id, categoriaId } = req.params;
  const publicacao = await api.listById(`publicacoes/${categoriaId}`, id);
  res.render("publicacoes/editar", {
    publicacao,
    categorias,
    categoriaId
  });
};

const atualizarPublicacao = async (req, res) => {
  const { id, categoriaId } = req.params;
  const { titulo, conteudo, categoria } = req.body;
  await api.remove(`publicacoes/${categoriaId}`, id);
  await api.update(`publicacoes/${categoria}`, id, {
    titulo,
    conteudo
  });

  res.redirect(`/publicacoes/categoria/${categoria}`);
};

const lerPublicacao = async (req, res) => {
  const { id, categoriaId } = req.params;
  const publicacao = await api.listById(`publicacoes/${categoriaId}`, id);
  res.render("publicacoes/ler", { publicacao, categoriaId });
};

module.exports = {
  novaPublicacao,
  insertirPublicacao,
  listarPublicacoes,
  excluirPublicacao,
  editarPublicacao,
  atualizarPublicacao,
  lerPublicacao
};
