// ImageUpload.tsx
import React from "react";

interface ImageUploadProps {
  handleImageChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ handleImageChange }) => {
  return (
    <>
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
        Upload Image
      </h2>
      <input
        className=" h-10 mb-4 text-gray-800 bg-white file:border-orange-700 file:rounded-lg  file:h-full cursor-pointer flex w-full  rounded-lg border border-input bg-background text-sm shadow-sm transition-colors file:border-1 file:rounded-sm file:border-1 file:bg-transparent file:text-sm  placeholder:text-muted-foreground file:shadow-none focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
        id="picture"
        onChange={handleImageChange}
        name="picture"
        type="file"
        accept="image/*"
      />
    </>
  );
};

export default ImageUpload;
