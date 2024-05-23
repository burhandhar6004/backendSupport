const express = require("express");
const protect = require("../middleWare/authMiddleware");
const { getNotes, addNote } = require("../controllers/noteControl");
const router = express.Router({ mergeParams: true });

router.route("/").get(protect, getNotes).post(protect, addNote);

module.exports = router;
