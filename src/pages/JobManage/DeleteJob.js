import { Button, Popconfirm, Tooltip } from "antd";
import { deleteJob } from "../../services/jobService";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteJob(props){
  const { record, onReload } = props;

  const handleDelete = async () => {
    const result = await deleteJob(record.id);
    if (result){
      onReload();
    }
  };

  return (
    <>
      <Tooltip title="Xóa bản ghi">
        <Popconfirm title="Bạn có chắc muốn xóa?" onConfirm={handleDelete}>
          <Button 
            className="ml-5"
            danger
            ghost
            icon={<DeleteOutlined />}
          ></Button>
        </Popconfirm>
      </Tooltip>
    </>
  )
}
export default DeleteJob;