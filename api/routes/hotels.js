const express = require("express");
const {
  createHotel,
  deleteHotel,
  getHotel,
  getHotels,
  updateHotel,
  countByCity,
  countByType,
  getHotelRooms,
} = require("../controllers/hotel");
const { verifyAdmin } = require("../utils/verifyToken");

const router = express.Router();

router.post("/", verifyAdmin, createHotel);
router.put("/:id", verifyAdmin, updateHotel);

router.delete("/:id", verifyAdmin, deleteHotel);

router.get("/find/:id", getHotel);

router.get("/", getHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/room/:id", getHotelRooms);

module.exports = router;
