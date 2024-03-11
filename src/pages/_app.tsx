import "../styles/globals.css";
import { useState } from "react";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <>
      <div className="flex absolute top-[14px] right-[70px]">
        <select
          className="inline-flex items-center rounded-lg bg-gradient-to-sr px-2 bg-orange-700 hover:bg-orange-900 text-white justify-center whitespace-nowrap  text-sm font-medium disabled:pointer-events-none h-7  w-full"
          onChange={() => toggleTheme()} // Remove the (e) parameter
        >
          <option value="light">Light</option>
          <option value="dark">Dark</option>
        </select>
      </div>
      <Component {...pageProps} />
    </>
  );
}
