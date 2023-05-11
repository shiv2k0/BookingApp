const express = require("express");
const {
  updateUser,
  deleteUser,
  getUsers,
  getUser,
} = require("../controllers/user");
const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

const router = express.Router();

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("hello user you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user you are authorized and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello Admin ");
// });

// UPDATE
router.put("/:id", verifyUser, updateUser);

// DELETE
router.delete("/:id", verifyUser, deleteUser);

// GET ALL USERS
router.get("/", verifyAdmin, getUsers);

// GET USER
router.get("/:id", verifyUser, getUser);

module.exports = router;
