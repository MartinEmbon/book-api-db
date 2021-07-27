const express = require("express");
const router = express.Router();
const indexController = require("../controllers/indeController")

router.get("/", indexController.index)
router.get("/create", indexController.novo)
router.post("/create", indexController.create)
router.put("/atualizar/:id", indexController.atualizar)
router.put("/editar/:id", indexController.editar)

module.exports = router;