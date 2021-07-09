import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function Header() {
  const { user, setUser } = useContext(UserContext);

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
        <Link to="/cutri" className="link">
          Danh sách cử tri
        </Link>
        <Link to="/ungvien" className="link">
          Danh sách ứng viên
        </Link>
        <Link to="/danhsachdangky" className="link">
          Danh sách đăng ký
        </Link>
        <Link to="/danhsachkiemtra" className="link">
          Danh sách kiểm tra
        </Link>
        <Link to="/admin" className="link">
          Admin
        </Link>
      </div>
      <div className="header__right">
        {!user && (
          <Link className="link" to="/login">
            Đăng nhập
          </Link>
        )}
        {user && (
          <Link className="link" to="/info">
            {user.username}
          </Link>
        )}
        {user && (
          <Link
            className="link"
            onClick={() => {
              localStorage.removeItem("token");
              setUser(null);
            }}
          >
            Đăng xuất
          </Link>
        )}
      </div>
    </div>
  );
}

export default Header;
