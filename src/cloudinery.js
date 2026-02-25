// cloudinary.js
const cloudinary = require("cloudinary").v2;
const fs = require("fs");

// ✅ Configure Cloudinary
cloudinary.config({
  cloud_name: "dxktzyxfo",
  api_key: "518119476165627",
  api_secret: "AXbzhe9OKJnz-V2sSZxZqgv9BiQ",
});

// ✅ Upload image to Cloudinary
const uploadToCloudinary = async (filePath) => {
  try {
    const result = await cloudinary.uploader.upload(filePath, {
      folder: "imageflow-gallery",
    });
    fs.unlinkSync(filePath); // delete local temp file
    return { url: result.secure_url, public_id: result.public_id };
  } catch (err) {
    throw new Error("Cloudinary upload failed: " + err.message);
  }
};

// ✅ Fetch all uploaded images from Cloudinary
const getAllImages = async () => {
  try {
    const result = await cloudinary.api.resources({
      type: "upload",
      prefix: "imageflow-gallery/",
      max_results: 100,
    });
      //   const result = await cloudinary.uploader.upload(filePath, {
    //   folder: "imageflow-gallery",
    //   tags: [category, type], // ⭐ IMPORTANT
    // });
    return result.resources.map((img) => ({
      url: img.secure_url,
      public_id: img.public_id,
    }));
  } catch (err) {
    throw new Error("Failed to fetch Cloudinary images: " + err.message);
  }
};


// controllers/galleryController.js
const getImagesByTag = async (req, res) => {
  try {
    const { tag } = req.params;

    const result = await cloudinary.api.resources_by_tag(tag);

    const images = result.resources.map((img) => ({
      url: img.secure_url,
      public_id: img.public_id,
    }));

    res.json(images);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteImage = async (public_id) => {
  try {
    const result = await cloudinary.uploader.destroy(public_id);
    return { success: true, result };
  } catch (error) {
    console.error("Delete error:", error);
    return { success: false, error: error.message };
  }
};

module.exports = { cloudinary, uploadToCloudinary, getAllImages, deleteImage };
