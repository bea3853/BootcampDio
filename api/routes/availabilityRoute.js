var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");

const Day = require("../models/day").model;



router.post("/", function(req, res, next) {
  console.log("request attempted");

  console.log(req.body);
  const dateTime = new Date(req.body.date);

  Day.find({ date: dateTime }, (err, docs) => {
    if (!err) {
      if (docs.length > 0) {
          console.log("Dados existentes");
        res.status(200).send(docs[0]);
      } else {   
        const allTables = require("../data/allTables");
        const day = new Day({
          date: dateTime,
          tables: allTables
        });
        day.save(err => {
          if (err) {
            res.status(400).send("erro ao salvar a data");
          } else {
               console.log("Nova data criada");
            Day.find({ date: dateTime }, (err, docs) => {
              err ? res.sendStatus(400) : res.status(200).send(docs[0]);
            });
          }
        });
      }
    } else {
      res.status(400).send("Não foram encontrado dados para a data");
    }
  });
});

module.exports = router;