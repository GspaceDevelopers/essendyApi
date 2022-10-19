import Produtos from "../schemas/Produtos";

class ProdutoController {
  async index(req, res) {
    const Produtolist = await Produtos.find();

    return res.json(Produtolist);
  }

  async store(req, res) {
    const {
      comprimento,
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    } = req.body;

    const Produtolist = await Produtos.create({
      produto,
      modelo,
      tipo,
      preco,
      largura,
      altura,
      descricao,
      modo,
      urlFoto,
      urlFoto2,
      urlFoto5,
      urlFoto6,
      urlFoto7,
      urlFoto8,
    });

    return res.json(Produtolist);
  }
}

export default new ProdutoController();
