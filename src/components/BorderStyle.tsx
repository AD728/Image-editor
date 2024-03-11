import React from "react";

interface BorderStyleProps {
  borderWidth: number;
  setBorderWidth: (borderWidth: number) => void;
  borderColor: string;
  setBorderColor: (borderColor: string) => void;
  borderStyle: string;
  setBorderStyle: (borderStyle: string) => void;
}

const BorderStyle: React.FC<BorderStyleProps> = ({
  borderColor,
  setBorderColor,
  borderWidth,
  setBorderWidth,
  borderStyle,
  setBorderStyle,
}) => {
  return (
    <>
      {/* Border Width */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="borderWidth">
          Border Width
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="borderWidth"
          value={borderWidth}
          onChange={(e) => setBorderWidth(parseInt(e.target.value))}
          placeholder="0"
          type="number"
        />
      </div>

      {/* Border color */}
      <div className="flex flex-col mb-4">
        <label className="text-sm text-gray-400 mb-1" htmlFor="colorPicker">
          Border Color
        </label>
        <input
          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          id="colorPicker"
          type="color"
          value={borderColor}
          onChange={(e) => setBorderColor(e.target.value)}
        />
      </div>

      {/* Border Style */}
      <label className="text-sm text-gray-400 mb-1" htmlFor="colorPicker">
        Border Style
      </label>
      <select
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring bg-orange-700 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white w-full"
        id="borderStyle"
        value={borderStyle}
        onChange={(e) => setBorderStyle(e.target.value)}
      >
        <option value="solid">Solid</option>
        <option value="dotted">Dotted</option>
        <option value="dashed">Dashed</option>
      </select>
    </>
  );
};

export default BorderStyle;
