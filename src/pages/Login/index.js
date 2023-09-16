import * as company from "../../services/companyService";
import { getCookie, setCookie } from "../../helpers/cookie";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { checkAuthen } from "../../actions/authentication";
import { Button, Card, Col, Form, Input, Row, message } from "antd";
import { rules } from "../../contants";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const token = getCookie("token");

  const handleFinish = async (values) => {
    const data = await company.login(values.email, values.password);
    if (data.length > 0) {
      const time = 1;
      setCookie("id", data[0].id, time);
      setCookie("companyName", data[0].companyName, time);
      setCookie("email", data[0].email, time);
      setCookie("token", data[0].token, time);
      dispatch(checkAuthen(true));
      navigate("/");
    } else {
      messageApi.error("Tài khoản hoặc mật khẩu không chính xác!");
    }
  };

  return (
    <>
      {contextHolder}
      {token ? (
        <Navigate to="/admin" />
      ) : (
        <Row justify="center">
          <Col span={12}>
            <Card title="Đăng nhập">
              <Form layout="vertical" onFinish={handleFinish}>
                <Form.Item
                  initialValue="contact@abc.com"
                  label="Email"
                  name="email"
                  rules={rules}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  initialValue="123456"
                  label="Password"
                  name="password"
                  rules={rules}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item rules={rules}>
                  <Button type="primary" htmlType="submit">
                    Đăng nhập
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}
export default Login;
