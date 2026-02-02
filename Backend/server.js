import app from "./app.js";
import cloudinary from "cloudinary";

// ✅ Cloudinary Configuration
cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// ✅ Use Render's PORT or fallback for local
const PORT = process.env.PORT || 4000;

// (Optional) Root route to avoid "Cannot GET /"
app.get("/", (req, res) => {
  res.send("HMS Backend is Live 🚀");
});

// ✅ Start Server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
