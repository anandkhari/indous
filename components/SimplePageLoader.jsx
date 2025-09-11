"use client";

import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners"; // or any spinner you like

export default function SimplePageLoader({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Optional: wait a fixed time or until images are loaded
    const timer = setTimeout(() => setLoading(false), 1000); // 1 sec loader
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <ClipLoader color="#14B8A6" size={60} />
      </div>
    );
  }

  return <>{children}</>;
}
