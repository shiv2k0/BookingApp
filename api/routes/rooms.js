const express = require("express");
const { verifyAdmin } = require("../utils/verifyToken");
const {
  createRoom,
  deleteRoom,
  getRoom,
  getRooms,
  updateRoom,
} = require("../controllers/room");
const router = express.Router();

router.post("/:hotelid", verifyAdmin, createRoom);
router.put("/:id", verifyAdmin, updateRoom);

router.delete("/:id/:hotelid", verifyAdmin, deleteRoom);

router.get("/:id", getRoom);

router.get("/", getRooms);

module.exports = router;
