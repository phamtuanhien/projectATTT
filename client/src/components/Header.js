import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <Link to="/stats" className="link">
          Thống kê
        </Link>
        <Link to="/register" className="link">
          Đăng ký bỏ phiếu
        </Link>
        <Link to="/vote" className="link">
          Bỏ phiếu
        </Link>
        <Link to="/info" className="link">
          Thông tin cá nhân
        </Link>
      </div>
      <div className="header__right">
        <Link className="link" to="/login">
          Đăng nhập
        </Link>
      </div>
    </div>
  );
}

export default Header;
