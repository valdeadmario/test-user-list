import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";
import { loadUsers } from "./actions";

const UserList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state: RootState) => state.users);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);
  console.log(items);
  return <div>Hello</div>;
};

export default UserList;
