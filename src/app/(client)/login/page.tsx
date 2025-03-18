"use client";

// pages/register.tsx
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(
        "https://attt-kappa.vercel.app/api/register",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password }),
        }
      );

      // Parse response as JSON
      const data = await response.json();

      if (data.success) {
        alert(data.message);
        router.push("/"); // Chuyển trang sau khi đăng ký
      } else {
        setError(data.message || "Đăng ký thất bại");
      }
    } catch (err) {
      setError("Có lỗi xảy ra");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
    <div className="header flex justify-between w-full px-6 py-4 bg-white shadow-md">
      <div className="flex items-center">
        <img src="/img/HClogo.png" alt="Shopee Logo" className="h-10 mr-2" />
        <span className="text-lg font-semibold">Đăng Ký</span>
      </div>
      <a href="#" className="text-blue-500">Bạn cần giúp đỡ?</a>
    </div>

    <div className="bg-white p-8 rounded shadow-md w-96 mt-6">
      <h2 className="text-2xl mb-4 text-center">Đăng Ký</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="login-form">
        <input
          type="text"
          placeholder="Email/Số điện thoại/Tên đăng nhập"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded mb-2"
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full px-3 py-2 border rounded mb-2"
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        >
          Đăng Ký
        </button>
      </form>
      <div className="text-center mt-4">
        <span>HOẶC</span>
      </div>
      <div className="flex flex-col items-center mt-4">
        <button className="w-full flex items-center justify-center bg-blue-600 text-white py-2 rounded mb-2">
          <img src="/img/fb.png" alt="Facebook" className="w-6 h-6 mr-2" /> Facebook
        </button>
        <button className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded">
          <img src="/img/gg.png" alt="Google" className="w-6 h-6 mr-2" /> Google
        </button>
      </div>
      <div className="text-center mt-4">
        <span>Bạn đã có tài khoản? <a href="#" className="text-blue-500">Đăng nhập</a></span>
      </div>
    </div>

    <footer className="mt-10 text-center text-gray-600 text-sm">
      <p>© 2025 Shopee. Tất cả các quyền được bảo lưu.</p>
      <p>Quốc gia & Khu vực: Singapore | Indonesia | Thái Lan | Malaysia | Việt Nam | Philippines | Brazil | México | Colombia | Chile | Đài Loan</p>
    </footer>
  </div>
);
};

