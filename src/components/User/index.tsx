import React from "react";
import { useDispatch } from "react-redux";

import { UserType } from "../../types/user.type";

import "./style.css";

type Props = {
  user: UserType;
};

const User = ({ user }: Props) => {
  const dispatch = useDispatch();
  const { id, name, surname, desc } = user;

  return (
    <div className="user-card">
      <div className="main-info">
        <h3 className="title">
          {name} {surname}
        </h3>
        <span className="identificator">#{id}</span>
      </div>
      <p>{desc}</p>
    </div>
  );
};

export default User;
