const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const categoriasRoutes = require("./routes/categorias");
const publicacoesRoutes = require("./routes/publicacoes");
const PORT = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.render("index");
});

app.use("/categorias", categoriasRoutes);
app.use("/publicacoes", publicacoesRoutes);

app.listen(PORT, err => {
  if (err) {
    console.log(err);
  } else {
    console.log("Wikihow server is running...", PORT);
  }
});
