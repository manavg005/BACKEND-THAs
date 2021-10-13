const express = require("express");
const product = require("../models/product");
const router = express.Router();
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const query = req.query;
    const count = parseInt(query.count) || 10;
    const page = parseInt(query.page) || 1;
    const after = parseInt(aery.after);
    let sql = {};
    if (after) {
      sql = {
        where: {
          id: {
            [Op.gt]: after,
          },
        },
      };
    } else {
      sql = {
        offset: count * (page - 1),
      };
    }

    const products = await product.findAll({
      ...sql,
      attributes: ["id", "title", "description", "price", "image"],
      limit: count,
    });
    res.status(200).send({
      count: products.length,
      items: products,
    });
  } catch (err) {
    res.status(500).send({ error: err, message: "Cannot process your query" });
  }
});

module.exports = router;
