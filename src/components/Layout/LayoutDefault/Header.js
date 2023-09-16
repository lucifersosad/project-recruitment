import { Button } from "antd";
import { Link } from "react-router-dom";
import { getCookie } from "../../../helpers/cookie";
import { UserOutlined, LogoutOutlined } from "@ant-design/icons";

function Header() {
  const token = getCookie("token");
  
  return (
    <>
      <header className="layout-default__header">
        <div className="container">
          <div className="layout-default__wrapper">
            <div className="layout-default__logo">
              <Link to="/">IT Jobs</Link>
            </div>
            <div className="account">
              {token ? (
                <>
                  <Link to="/admin">
                    <Button icon={<UserOutlined />}>Quản lý</Button>
                  </Link>
                  <Link to="/logout" className="ml-10">
                    <Button icon={<LogoutOutlined />}>Đăng xuất</Button>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button>Đăng nhập</Button>
                  </Link>
                  <Link to="/register">
                    <Button type="primary" className="ml-10">
                      Đăng ký
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
export default Header;
