/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Footer from "./Footer";
import Header from "./Header";
import "./LayoutDefault.scss";
import Main from "./Main";

function LayoutDefault() {
  const authen = useSelector((state) => state.authenReducer);
  
  return (
    <>
      <div className="layout-default">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
export default LayoutDefault;
