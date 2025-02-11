const express = require("express");
const {
  getTickets,
  addTicket,
  getTicket,
  updateTicket,
} = require("../controllers/ticketControl");
const protect = require("../middleWare/authMiddleware");

const router = express.Router();

router.route("/").get(protect, getTickets).post(protect, addTicket);
router.route("/:id").get(protect, getTicket).put(protect, updateTicket);



//Re Routing Toward /api/ticket/:ticketID/note//

router.use("/:ticketId/notes", require("./notesRoutes"))

module.exports = router;
