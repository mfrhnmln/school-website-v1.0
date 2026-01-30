import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer";

const UserLayout = () => {
  const [theme] = useState("system"); // default system

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <div
      className="flex min-h-screen flex-col transition-all"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Header */}
      <Header />

      {/* Konten utama */}
      <main
        className="flex-1"
        style={{ backgroundColor: "var(--background)" }}
      >
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default UserLayout;
