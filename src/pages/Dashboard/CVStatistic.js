/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { getCookie } from "../../helpers/cookie";
import { getListCV } from "../../services/cvService";
import { Card } from "antd";
function CVStatistic() {
  const idCompnay = getCookie("id");
  const [data, setData] = useState();

  useEffect(() => {
    const fetchApi = async () => {
      const result = await getListCV(idCompnay);
      if (result) {
        let obj = {
          total: 0,
          statusTrue: 0,
          statusFalse: 0,
        };
        obj.total = result.length;
        result.forEach((item) => {
          item.statusRead ? obj.statusTrue++ : obj.statusFalse++;
        });
        setData(obj);
      }
    };
    fetchApi();
  }, []);

  console.log(data);

  return (
    <>
      {data && (
        <Card title="CV" className="mb-20" size="small">
          <div>
            Số lượng CV: <strong>{data.total}</strong>
          </div>
          <div>
            CV chưa đọc: <strong>{data.statusFalse}</strong>
          </div>
          <div>
            CV đã đọc: <strong>{data.statusTrue}</strong>
          </div>
        </Card>
      )}
    </>
  );
}
export default CVStatistic;
