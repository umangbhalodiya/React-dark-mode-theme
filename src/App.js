import React, { useState, useEffect } from "react";
import data from "./data";
import Article from "./Display";

const getStorageTheme = () => {
  let theme = "light-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

function App() {
  const [theme, setThemeType] = useState(getStorageTheme());
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setThemeType("dark-theme");
    } else {
      setThemeType("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
    console.log("theme", theme);
  }, [theme]);
  
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>{theme === "dark-theme" ? "Dark Mode" : "Light Mode"}</h1>
          <button className="btn" onClick={toggleTheme}>
            {theme === "dark-theme" ? "Light" : "Dark"}
          </button>
        </div>
      </nav>
      <section className="articles">
        {data?.map((item) => {
          return <Article key={item?.id} {...item} />;
        })}
      </section>
    </main>
  );
}

export default App;
