import React, { LegacyRef } from "react";
import Image from "next/image";

interface ImageCanvasProps {
  selectedImage: File | null;
  borderWidth: number;
  borderStyle: string;
  borderColor: string;
  text: string;
  fontSize: number;
  textColor: string;
  positionX: number;
  positionY: number;
  divRef: LegacyRef<HTMLDivElement> | null; // Adjusted type here
}

const ImageCanvas: React.FC<ImageCanvasProps> = ({
  selectedImage,
  borderWidth,
  borderStyle,
  borderColor,
  text,
  fontSize,
  textColor,
  positionX,
  positionY,
  divRef,
}) => {
  return (
    <div
      ref={divRef}
      className="img-div items-center rounded-lg mb-10 flex"
      style={{
        position: "relative",
        marginTop: "20px",
        border: `${borderWidth}px ${borderStyle} ${borderColor}`,
      }}
    >
      {selectedImage && (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Editable"
          className={`rounded-lg self-center`}
          height={500}
          width={500}
        />
      )}
      {text && selectedImage && (
        <div
          style={{
            position: "absolute",
            top: `${positionY}px`,
            left: `${positionX}px`,
            fontSize: `${fontSize}px`,
            color: textColor,
          }}
        >
          {text}
        </div>
      )}
      <canvas style={{ display: "none" }} width={500} height={500} />
    </div>
  );
};

export default ImageCanvas;
