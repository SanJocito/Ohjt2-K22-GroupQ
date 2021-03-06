const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const recordRoutes = express.Router();

// This will help us connect to the database
const dbo = require("../db/conn");

// This help convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// This section will help you create a new record.
recordRoutes.route("/record/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    kohde: req.body.kohde,
    paikka: req.body.paikka,
    maa: req.body.maa,
    kuvaus: req.body.kuvaus,
  };

  db_connect.collection("tarinat").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you create a new record.
recordRoutes.route("/record/add/omat").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    matka: req.body.matka,
      tarina: req.body.tarina,
      yksityisyys: req.body.yksityisyys
  };

  db_connect.collection("omat").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

recordRoutes.route("/record/add/user").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    nimimerkki: req.body.nimimerkki,
    etunimi: req.body.etunimi,
    sukunimi: req.body.sukunimi,
    sposti: req.body.sposti,
    paikkakunta: req.body.paikkakunta,
    maa: req.body.maa,
    bio: req.body.bio,
    salasana: req.body.salasana
  };

  db_connect.collection("user").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// This section will help you get a list of all the records.
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("matkat");
  db_connect
    .collection("tarinat")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the records.
recordRoutes.route("/record/user").get(function (req, res) {
  let db_connect = dbo.getDb("matkat");
  db_connect
    .collection("user")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a list of all the records.
recordRoutes.route("/record/omat").get(function (req, res) {
  let db_connect = dbo.getDb("matkat");
  db_connect
    .collection("omat")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("tarinat").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});



// This section will help you get a single record by id
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("user").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("user").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("omat").findOne(myquery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});






// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      kohde: req.body.kohde,
      paikka: req.body.paikka,
      maa: req.body.maa,
      kuvaus: req.body.kuvaus,
    },
  };
  db_connect
    .collection("tarinat")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      matka: req.body.matka,
      tarina: req.body.tarina,
      yksityisyys: req.body.yksityisyys
    },
  };
  db_connect
    .collection("omat")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// OMAT MATKAT


// This section will help you get a single record by id



// This section will help you update a record by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      matka: req.body.matka,
      tarina: req.body.tarina,
      yksityisyys: req.body.yksityisyys
    },
  };
  db_connect
    .collection("omat")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

// This section will help you delete a record
recordRoutes.route("/omat/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("omat").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

// This section will help you delete a record
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("tarinat").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;
