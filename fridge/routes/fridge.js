import express from "express";
const router = express.Router();

router.get("/", async (req, res) => {
  res.send("안녕");
});

export default router;
