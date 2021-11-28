import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import Loading from "../../Components/Loading/Loading";
import "./LoginPage.scss";
import {
  requestGuestLogin,
  setLoginRequest,
} from "../../reducer/Login/LoginAction";

function GuestLoginIn(props) {
  const dispatch = useDispatch();
  const query = new URLSearchParams(useLocation().search);
  useEffect(() => {
    var data = {
      email: "",
      password: "",
      continue: 0,
      app_id: 14,
      query_id: parseInt(query.get("query_id")),
    };
    dispatch(setLoginRequest(data));
    dispatch(requestGuestLogin(data));
  }, [dispatch, query]);

  return (
    <>
      <Loading />
    </>
  );
}

export default GuestLoginIn;
