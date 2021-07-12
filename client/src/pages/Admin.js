import React, { useEffect, useState } from "react";
import TaotaikhoanForm from "../components/TaotaikhoanForm";
import DanhsachtaikhoanTable from "../components/DanhsachtaikhoanTable";
import axios from "axios";

function Admin() {
  const [accountList, setaccountList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://localhost:4000/api/account`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      })
      .then((res) => setaccountList(res.data));
  }, []);

  const addAccount = (v) => {
    const _accountList = [...accountList];
    _accountList.push(v);
    setaccountList(_accountList);
  };

  return (
    <div className="main">
      <div className="title">Danh sách tài khoản</div>
      <DanhsachtaikhoanTable accountList={accountList} />
      <div className="title" style={{ marginTop: "20px" }}>
        Tạo tài khoản
      </div>
      <TaotaikhoanForm addAccount={addAccount} />
    </div>
  );
}

export default Admin;
