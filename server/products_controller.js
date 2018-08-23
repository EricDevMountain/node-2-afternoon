module.exports = {
  create: (req, res, next) => {
    const db = req.app.get("db");
    const { name, description, price, imageurl } = req.body;

    db.create_product([name, description, price, imageurl])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops!" });
        console.log(err);
      });
  },

  getOne: (req, res, next) => {
    const db = req.app.get("db");

    db.read_product([req.params.id])
      .then(product => res.status(200).send(product))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops!" });
        console.log(err);
      });
  },

  getAll: (req, res, next) => {
    const db = req.app.get("db");

    db.read_products()
      .then(products => res.status(200).send(products))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops!" });
        console.log(err);
      });
  },

  update: (req, res, next) => {
    const db = req.app.get("db");

    db.update_product([req.params.id, req.query.desc])
      .then(() => res.sendStatus(200))
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops!" });
        console.log(err);
      });
  },

  delete: (req, res, next) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.delete_product(id)
      .then(() => res.status(200).send())
      .catch(err => {
        res.status(500).send({ errorMessage: "Oops!" });
        console.log(err);
      });
  }
};
