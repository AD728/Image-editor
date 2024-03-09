export const applyFilters = (
  hiddenCanvasRef,
  selectedImage,
  text,
  positionX,
  positionY,
  textColor,
  fontSize,
  filter,
  borderStyle,
  borderColor,
  borderWidth
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

      // Apply filter
      hiddenContext.filter = filter === "none" ? "none" : `${filter}()`;

      // Apply border
      hiddenContext.strokeStyle = borderColor;
      hiddenContext.lineWidth = borderWidth;
      hiddenContext.setLineDash(
        borderStyle === "dotted"
          ? [2, 2]
          : borderStyle === "dashed"
          ? [5, 5]
          : []
      );
      hiddenContext.strokeRect(0, 0, hiddenCanvas.width, hiddenCanvas.height);

      // Adjust text position based on canvas size
      const canvasTextX = (positionX / 500) * hiddenCanvas.width;
      const canvasTextY = (positionY / 500) * hiddenCanvas.height;

      // Draw text overlay
      hiddenContext.font = `${fontSize}px Arial`;
      hiddenContext.fillStyle = textColor;
      hiddenContext.fillText(text, canvasTextX, canvasTextY);

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
