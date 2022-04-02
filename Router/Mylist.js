const express = require("express");
const router = express.Router();
const MylistController = require("../Controller/Mylist");

router.use(express.json());
router.get("/getList", MylistController.getList);
router.post("/createList", MylistController.createList);

module.exports = router;
