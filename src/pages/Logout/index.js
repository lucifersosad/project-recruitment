/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAllCookies } from "../../helpers/cookie";
import { useEffect } from "react";
import { checkAuthen } from "../../actions/authentication";

function Logout() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  deleteAllCookies();
  useEffect(() => {
    dispatch(checkAuthen(false));
    navigate("/login");
  }, []);
  
  return (
    <></>
  )
}
export default Logout;