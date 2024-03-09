// TextOverlay.tsx
import React from "react";

interface TextOverlayProps {
  text: string;
  setText: (text: string) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  textColor: string;
  setTextColor: (textColor: string) => void;
  positionX: number;
  setPositionX: (positionX: number) => void;
  positionY: number;
  setPositionY: (positionY: number) => void;
}

const TextOverlay: React.FC<TextOverlayProps> = ({
  text,
  setText,
  fontSize,
  setFontSize,
  textColor,
  setTextColor,
  positionX,
  setPositionX,
  positionY,
  setPositionY,
}) => {
  return (
    <>
      {/* Overlay text */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="fontSize">
          Overlay Text
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Overlay Text"
          type="text"
        />{" "}
      </div>
      {/* Font size */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="fontSize">
          Font size
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="fontSize"
          placeholder="14"
          type="number"
          value={fontSize}
          onChange={(e) => setFontSize(parseInt(e.target.value))}
        />
      </div>

      {/* Font color */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="colorPicker">
          Color
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="colorPicker"
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>

      {/* Postion X */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="fontSize">
          Position X:
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="number"
          id="positionX"
          value={positionX}
          onChange={(e) => setPositionX(parseInt(e.target.value))}
        />
      </div>

      {/* Postion X */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="fontSize">
          Position Y:
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          type="number"
          id="positionY"
          value={positionY}
          onChange={(e) => setPositionY(parseInt(e.target.value))}
        />
      </div>
    </>
  );
};

export default TextOverlay;
