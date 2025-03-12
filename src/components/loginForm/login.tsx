import React from "react";

export default function LoginForm() {
  return (
    <div>
      <form className="login-form" method="post" action="/Login">
        <input type="text" name="username" placeholder="Email/Số điện thoại/Tên đăng nhập" required />
        <input type="password" name="password" placeholder="Mật khẩu" required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}
