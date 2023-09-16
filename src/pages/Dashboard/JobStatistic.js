/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListJob } from "../../services/jobService";
import { Card } from "antd";

function JobStatistic() {
  const idCompany = getCookie("id");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListJob(idCompany);
      if (result) {
        let obj = {
          total: 0,
          statusTrue: 0,
          statusFalse: 0,
        };

        obj.total = result.length;
        result.forEach((item) => {
          item.status ? obj.statusTrue++ : obj.statusFalse++;
        });
        setData(obj);
      }
    };
    fetchApi();
  }, []);

  return (
    <>
      {data && (
        <Card title="Job" className="mb-20" size="small">
          <div>
            Số lượng job: <strong>{data.total}</strong>
          </div>
          <div>
            Job đang bật: <strong>{data.statusTrue}</strong>
          </div>
          <div>
            Job đang tắt: <strong>{data.statusFalse}</strong>
          </div>
        </Card>
      )}
    </>
  );
}
export default JobStatistic;
