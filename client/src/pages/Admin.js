import React, { useState } from "react";
import TaotaikhoanForm from "../components/TaotaikhoanForm";

function Admin() {
  const [accountList, setaccountList] = useState([]);

  return (
    <div className="main">
      <div className="title">Danh sách tài khoản</div>
      {/* <DanhsachtaikhoanTable /> */}
      <div className="title">Tạo tài khoản</div>
      <TaotaikhoanForm />
    </div>
  );
}

export default Admin;
