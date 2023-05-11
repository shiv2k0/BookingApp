const express = require("express");
const Hotel = require("../models/Hotel");
const createError = require("../utils/error");
const {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/:id", getHotel);

router.get("/", getHotels);

module.exports = router;
