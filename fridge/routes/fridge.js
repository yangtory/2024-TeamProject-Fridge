import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.render("fridge/menu");
});

export default router;
