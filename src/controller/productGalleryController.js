const express = require("express");
const multer = require("multer");
const {
  uploadToCloudinary,
  getAllImages,
  deleteImage,
} = require("../cloudinery");
const router = express.Router();
const upload = multer({ dest: "uploads/" });

// ✅ Upload Route
router.post("/upload", upload.single("image"), async (req, res) => {
  try {
    const imageUrl = await uploadToCloudinary(req.file.path);
    res.json({ url: imageUrl });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ✅ Fetch All Images Route
router.get("/images", async (req, res) => {
  try {
    const imageUrls = await getAllImages();
    res.json(imageUrls);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/deleteImage", async (req, res) => {
  try {
    const { public_id } = req.body;
    if (!public_id) {
      return res
        .status(400)
        .json({ success: false, error: "public_id missing" });
    }

    const result = await deleteImage(public_id);
    if (result.success) {
      return res.status(200).json(result);
    } else {
      return res.status(500).json(result);
    }
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
