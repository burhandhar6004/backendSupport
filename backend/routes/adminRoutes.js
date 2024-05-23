const express = require("express");
const { getAllTickets } = require("../controllers/adminControl");
const isAdmin = require("../middleWare/authMiddleware");

const router = express.Router();

router.route("/tickets").get(  isAdmin, getAllTickets);

module.exports = router;
