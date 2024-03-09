export const handleSaveImage = (
  hiddenCanvasRef,
  selectedImage,
  text,
  positionX,
  positionY,
  fontSize,
  textColor
) => {
  if (!hiddenCanvasRef.current) return;

  const hiddenCanvas = hiddenCanvasRef.current;
  const hiddenContext = hiddenCanvas.getContext("2d");

  if (hiddenContext) {
    // Clear the hidden canvas
    hiddenContext.clearRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);

    // Draw the image
    const img = new Image();
    img.src = URL.createObjectURL(selectedImage);
    img.onload = () => {
      hiddenContext.drawImage(
        img,
        0,
        0,
        hiddenCanvas.width,
        hiddenCanvas.height
      );

      // Draw text overlay
      hiddenContext.font = `${fontSize}px Arial`;
      hiddenContext.fillStyle = textColor;
      hiddenContext.fillText(text, positionX, positionY);

      // Convert hidden canvas to image and download
      const image = hiddenCanvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      const link = document.createElement("a");
      link.href = image;
      link.download = "preview.png";
      link.click();
    };
  }
};
