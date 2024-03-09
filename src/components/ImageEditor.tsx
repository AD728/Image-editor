import React, { useState, useRef } from "react";
import html2canvas from "html2canvas";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import ImageUpload from "./ImageUpload";
import TextOverlay from "./TextOverlay";
import BorderStyle from "./BorderStyle";
import ImageCanvas from "./ImageCanvas";

export default function ImageEditor() {
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [fileName, setFileName] = useState<string | null>(null);
  const [selectedTab, setSelectTab] = useState<number | null>(0);
  const [text, setText] = useState("overlay text");
  const [loading, setLoading] = useState(true);
  const [fontSize, setFontSize] = useState(16);
  const [textColor, setTextColor] = useState("#000000");
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [borderColor, setBorderColor] = useState("000000");
  const [borderStyle, setBorderStyle] = useState("solid");
  const [borderWidth, setBorderWidth] = useState(0);
  const hiddenCanvasRef = useRef<HTMLCanvasElement>(null);
  const router = useRouter();
  const divRef = useRef<HTMLDivElement>(null);

  const onLogout = () => {
    Cookies.remove("session-token");
    router.push("/");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoading(true);
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
    setLoading(false);
  };

  const handleSaveImageWithFilters = () => {
    if (divRef.current) {
      divRef.current.style.border = `${borderWidth}px ${borderStyle} ${borderColor}`;

      html2canvas(divRef.current).then((canvas) => {
        setCapturedImage(canvas.toDataURL());
      });

      if (capturedImage) {
        const link = document.createElement("a");
        link.href = capturedImage;
        link.download = fileName ? `${fileName}.png` : "image.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br bg-gray-200  dark:bg-gray-800">
      <aside className="flex  bg-gradient-to-br flex-col items-center dark:bg-gradient-to-br from-red-300 dark:from-black dark:to-black px-4 py-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="text-orange-800 dark:text-white h-6 w-6 mb-6"
        >
          <line x1="4" x2="20" y1="12" y2="12"></line>
          <line x1="4" x2="20" y1="6" y2="6"></line>
          <line x1="4" x2="20" y1="18" y2="18"></line>
        </svg>
        <div className="flex flex-col space-y-4">
          <button
            onClick={() => setSelectTab(0)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white w-full ${
              selectedTab === 0 ? "bg-orange-700" : "bg-green-900"
            }`}
          >
            Upload
          </button>
          <button
            onClick={() => selectedImage && setSelectTab(1)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white w-full ${
              selectedTab === 1 ? "bg-orange-700" : "bg-green-900"
            }`}
          >
            Text
          </button>
          <button
            onClick={() => selectedImage && setSelectTab(2)}
            className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2  text-white w-full ${
              selectedTab === 2 ? "bg-orange-700" : "bg-green-900"
            }`}
          >
            Border
          </button>
        </div>
      </aside>
      <main className="flex-1">
        <header className="flex bg-gradient-to-br justify-center self-center py-4 dark:bg-gradient-to-br from-red-300 dark:from-black dark:to-black">
          <h1 className="text-xl font-bold text-orange-700 dark:text-white">
            Image Editor
          </h1>
          <button
            onClick={() => onLogout()}
            className="pointer text-sm absolute right-2 font-bold text-orange-700 dark:text-white"
          >
            Logout
          </button>
        </header>
        <div className="flex justify-between p-6">
          <div className="flex flex-col w-1/3 p-4 bg-gradient-to-br from-blue-200 dark:to-black  dark:from-black rounded-lg">
            {/* Tab 1 - Image Upload */}
            {selectedTab === 0 && (
              <>
                <ImageUpload handleImageChange={handleImageChange} />
              </>
            )}
            {/* Tab - 2 For text Overlay */}
            {selectedImage && selectedTab === 1 && (
              <TextOverlay
                text={text}
                setText={setText}
                fontSize={fontSize}
                setFontSize={setFontSize}
                textColor={textColor}
                setTextColor={setTextColor}
                positionX={positionX}
                setPositionX={setPositionX}
                positionY={positionY}
                setPositionY={setPositionY}
              />
            )}

            {/* Tab - 3 For Border */}
            {selectedImage && selectedTab === 2 && (
              <BorderStyle
                borderColor={borderColor}
                setBorderColor={setBorderColor}
                borderWidth={borderWidth}
                setBorderWidth={setBorderWidth}
                borderStyle={borderStyle}
                setBorderStyle={setBorderStyle}
              />
            )}
          </div>

          <div className="flex flex-col items-center w-2/3">
            <ImageCanvas
              selectedImage={selectedImage}
              borderWidth={borderWidth}
              borderStyle={borderStyle}
              borderColor={borderColor}
              text={text}
              fontSize={fontSize}
              textColor={textColor}
              positionX={positionX}
              positionY={positionX}
              divRef={divRef}
            />

            <div className="flex flex-col w-full items-center">
              <input
                onChange={(e) => setFileName(e.target.value)}
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4"
                placeholder="File name"
              />
              <button
                className="justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 bg-orange-700 text-white flex items-center"
                onClick={handleSaveImageWithFilters}
                disabled={loading}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="text-white h-6 w-6 mr-2"
                >
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                  <polyline points="7 10 12 15 17 10"></polyline>
                  <line x1="12" x2="12" y1="15" y2="3"></line>
                </svg>
                Download
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
