import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("./calendar/calendar.pug");
});

export default router;
