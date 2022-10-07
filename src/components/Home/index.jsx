import React from "react";
import "./style.css";
import AllPosts from "../AllPosts";

export default () => {
  return (
    <div>

      <h1>Добро пожаловать в наш блог</h1>
      <img src="https://allwordpress.ru/wp-content/uploads/2020/03/111-1.jpg"width="300"></img>
      <AllPosts/>
    </div>
  );
};
