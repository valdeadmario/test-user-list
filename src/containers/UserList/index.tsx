import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { RootState } from "../../store/types";
import { loadUsers } from "./actions";
import { UserType } from "../../types/user.type";

import User from "../../components/User";
import Pagination from "../Pagination";
import Spinner from "../../components/Spinner";

import "./style.css";

const ELEMENT_OF_PAGE = 5;

const UserList = () => {
  const dispatch = useDispatch();
  const { items, isLoading } = useSelector((state: RootState) => state.users);
  const [currentPage, setCurrentPage] = useState(1);
  const [displayItems, setDisplayItems] = useState<UserType[]>([]);

  const countPages = Math.ceil(Number(items.length) / ELEMENT_OF_PAGE);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  useEffect(() => {
    setDisplayItems(
      items.slice(
        (currentPage - 1) * ELEMENT_OF_PAGE,
        (currentPage - 1) * ELEMENT_OF_PAGE + ELEMENT_OF_PAGE
      )
    );
  }, [currentPage, items]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <div className="user-container">
      <ul className="user-list">
        {displayItems.map((user: UserType) => (
          <User user={user} key={`user-${user.id}`} />
        ))}
      </ul>
      <Pagination
        countPages={countPages}
        currentPage={currentPage}
        changePage={onPageChange}
      />
    </div>
  );
};

export default UserList;
