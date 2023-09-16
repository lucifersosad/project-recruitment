import { Link } from "react-router-dom";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import JobList from "./JobList";
function JobManage(){
  return (
    <>
      <h2>Danh sách việc làm</h2>
      <Link to="/create-job">
        <Button icon={<PlusOutlined />}>
          Tạo việc mới
        </Button>
      </Link>
      <JobList className="mt-20" />
    </>
  )
}
export default JobManage;