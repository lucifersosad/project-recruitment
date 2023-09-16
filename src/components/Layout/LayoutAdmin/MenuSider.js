import { Link, useLocation } from "react-router-dom";
import {
  DashboardOutlined,
  UserOutlined,
  UnorderedListOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";

function MenuSider(){
  const location = useLocation();
  const items = [
    {
      key: "/admin",
      icon: <DashboardOutlined />,
      label: <Link to="/admin">Tổng quan</Link>
    },
    {
      key: "/info-company",
      icon: <UserOutlined />,
      label: <Link to="/info-company">Thông tin công ty</Link>
    },
    {
      key: "/job-manage",
      icon: <UnorderedListOutlined />,
      label: <Link to="/job-manage">Quản lý việc làm</Link>
    },
    {
      key: "/cv-manage",
      icon: <FileDoneOutlined />,
      label: <Link to="/cv-manage">Quản lý CV</Link>
    },
  ]

  return (
    <>
      <Menu 
        items={items}
        mode="inline"
        defaultOpenKeys={["/admin"]}
        defaultSelectedKeys={[location.pathname]}
      />
    </>
  )
}
export default MenuSider;