// src/lib/utils.cloudinary.ts
const uploadImageToCloudinary = async (file: File): Promise<string | null> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("upload_preset", `${import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET}`); // from Cloudinary

  try {
    const res = await fetch(
      `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDINARY_CLOUD_NAME}/image/upload`,
      { method: "POST", body: formData }
    );
    const data = await res.json();
    return data.secure_url;
  } catch (err) {
    console.error("Image upload failed", err);
    return null;
  }
};

export default uploadImageToCloudinary;
