import express from "express";
import { Post } from "#/db";

const router = express.Router();

router.get("/", async (req, res) => {
  const posts = await Post.findAll({
    order: [["createdAt", "DESC"]],
    limit: 10,
  });
  const texts = posts.map((p) => p.dataValues.text);
  res.json(texts);
});

export default router;