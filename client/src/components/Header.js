import React, { useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { UserContext } from "../contexts/userContext";

function Header(props) {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="header">
      <div className="header__left">
        <Link
          to="/stats"
          className={
            "link " +
            (props.location.pathname === "/stats"
              ? "link-active"
              : props.location.pathname === "/"
              ? "link-active"
              : "")
          }
        >
          Thống kê
        </Link>
        {user && user.role === "CT" && (
          <React.Fragment>
            <Link
              to="/register"
              className={
                "link " +
                (props.location.pathname === "/register" ? "link-active" : "")
              }
            >
              Đăng ký bỏ phiếu
            </Link>
            <Link
              to="/vote"
              className={
                "link " +
                (props.location.pathname === "/vote" ? "link-active" : "")
              }
            >
              Bỏ phiếu
            </Link>
            <Link
              to="/info"
              className={
                "link " +
                (props.location.pathname === "/info" ? "link-active" : "")
              }
            >
              Thông tin cá nhân
            </Link>
          </React.Fragment>
        )}
        {user && user.role === "DH" && (
          <React.Fragment>
            <Link
              to="/cutri"
              className={
                "link " +
                (props.location.pathname === "/cutri" ? "link-active" : "")
              }
            >
              Danh sách cử tri
            </Link>
            <Link
              to="/ungvien"
              className={
                "link " +
                (props.location.pathname === "/ungvien" ? "link-active" : "")
              }
            >
              Danh sách ứng viên
            </Link>
          </React.Fragment>
        )}
        {user && user.role === "DK" && (
          <Link
            to="/danhsachdangky"
            className={
              "link " +
              (props.location.pathname === "/danhsachdangky"
                ? "link-active"
                : "")
            }
          >
            Danh sách đăng ký
          </Link>
        )}
        {user && user.role === "KT" && (
          <Link
            to="/danhsachkiemtra"
            className={
              "link " +
              (props.location.pathname === "/danhsachkiemtra"
                ? "link-active"
                : "")
            }
          >
            Danh sách kiểm tra
          </Link>
        )}
        {user && user.role === "Ad" && (
          <Link
            to="/admin"
            className={
              "link " +
              (props.location.pathname === "/admin" ? "link-active" : "")
            }
          >
            Admin
          </Link>
        )}
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
            to="/stats"
            className="link"
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
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

export default withRouter(Header);
