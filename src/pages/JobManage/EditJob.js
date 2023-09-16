import { Button, Col, Form, Input, Modal, Row, Select, Switch, Tooltip, message } from "antd";
import { useEffect, useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import { getListCity } from "../../services/cityService";
import { getListTag } from "../../services/tagService";
import { getTimeCurrent } from "../../helpers/getTime";
import { rules } from "../../contants";
import { updateJob } from "../../services/jobService";
const { TextArea } = Input;

function EditJob(props) {
  const { record, onReload } = props;
  const [tags, setTags] = useState([]);
  const [city, setCity] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mess, contextHolder] = message.useMessage();
  const [form] = Form.useForm();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListTag();
      if (response) {
        setTags(response);
      }
    };
    fetchApi();
  }, []);

  useEffect(() => {
    const fetchApi = async () => {
      const response = await getListCity();
      if (response) {
        setCity(response);
      }
    };
    fetchApi();
  }, []);

  const handleFinish = async (values) => {
    values.updateAt = getTimeCurrent();
    const result = await updateJob(record.id, values);
    if (result){
      setIsModalOpen(false);
      onReload();
      mess.open({
        type: "success",
        content: "Cập nhật thành công!",
        duration: 5,
      });
    } else {
      mess.open({
        type: "error",
        content: "Cập nhật không thành công!",
        duration: 3
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Tooltip title="Chỉnh sửa">
        <Button 
          onClick={showModal}
          className="ml-5"
          icon={<EditOutlined />}
          type="primary"
          ghost
        />
      </Tooltip>
      <Modal
        title="Chỉnh sửa"
        open={isModalOpen}
        onCancel={handleCancel}
        width={1000}
        footer={null}
      >
        <Form
          onFinish={handleFinish}
          initialValues={record}
          layout="vertical"
          form={form}
        >
          <Row gutter={20}>
            <Col span={24}>
              <Form.Item label="Tên job" name="name" rules={rules}>
                <Input />
              </Form.Item>
            </Col>
            <Col span={16}>
              <Form.Item label="Tags" name="tags" rules={rules}>
                <Select mode="multiple" options={tags}/>
              </Form.Item>
            </Col>
            <Col span={8}>
              <Form.Item label="Mức lương" name="salary" rules={rules}>
                <Input addonAfter="$"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Thành phố" name="city" rules={rules}>
                <Select mode="multiple" options={city}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Mô tả" name="description">
                <TextArea rows={16}/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                valuePropName="checked"
                label="Trạng thái"
                name="status"
              >
                <Switch checkedChildren="Bật" unCheckedChildren="Tắt"/>
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item>
                <Button type="primary" htmlType="submit">Cập nhật</Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}
export default EditJob;
