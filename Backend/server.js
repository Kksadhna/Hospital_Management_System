import app from "./app.js";
import cloudinary from "cloudinary"


cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_API_SECRET,
})

const PORT = process.env.PORT || 4000;

app.listen(PORT,()=>{
    console.log(`Server Listening on port ${PORT}`);
}).on('error', (err) => {
    console.error('Server failed to start:', err);
    process.exit(1);
});
