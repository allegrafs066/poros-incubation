import React from "react";
import NavBar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import styles from "./App.module.css";

const App: React.FC = () => {
  return (
    <body className={styles.customBody}>
      <div
        style={{ display: "flex", flexDirection: "column", height: "100vh" }}
      >
        <NavBar />
        <Main />
        <Footer />
      </div>
    </body>
  );
};

export default App;
