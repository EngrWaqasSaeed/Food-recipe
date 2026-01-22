const express = require("express");
const { getRecipes } = require("../controller/reciper");
const router = express.Router();

router.get("/", getRecipes);

module.exports = router;
