import { Input, Select, Form, Button, Row, Col } from "antd";
import { useEffect, useState } from "react";
import { getListCity } from "../../services/cityService";
import { useNavigate } from "react-router-dom";

function SearchForm() {
  const [city, setCity] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListCity();
      if (result) {
        const objAll = {
          key: 0,
          value: "All",
        };
        setCity([objAll, ...result]);
      }
    };
    fetchApi();
  }, []);

  const handleFinish = (values) => {
    let city = values.city || "";
    city = values.city === "All" ? "" : city;
    navigate(
      `search?city=${city}&keyword=${values.keyword || ""}`
    )
  };

  return (
    <>
      <h1>1000+ IT Jobs For Developers</h1>
      {city && (
        <Form onFinish={handleFinish}>
          <Row gutter={[12, 12]}>
            <Col lg={6}>
              <Form.Item name="city">
                <Select options={city} placeholder="Chọn thành phố" />
              </Form.Item>
            </Col>
            <Col lg={15}>
              <Form.Item name="keyword">
                <Input placeholder="Nhập từ khóa..." />
              </Form.Item>
            </Col>
            <Col lg={3}>
              <Form.Item name="keyword">
                <Button type="primary" htmlType="sumbit" block>
                  Tìm kiếm
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}
export default SearchForm;
