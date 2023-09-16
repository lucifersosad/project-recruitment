import { Col, Row } from "antd";
import JobStatistic from "./JobStatistic";
import CVStatistic from "./CVStatistic";
import InfoCompany from "./InfoCompany";
function Dashboard(){
  return (
    <>
      <h2>Tổng quan</h2>
      <Row gutter={[20,20]}>
        <Col span={8}>
          <JobStatistic />
        </Col>
        <Col span={8}>
          <CVStatistic />
        </Col>
        <Col span={8}>
          <InfoCompany />
        </Col>
      </Row>
    </>
  )
}
export default Dashboard;