import React from "react";
import "./home.scss";
import { Stories } from "../../componenets/stories/Stories";
import { Posts } from "../../componenets/posts/Posts";

export const Home = () => {
  return (
    <div className="home">
      <Stories />
      <Posts />
    </div>
  );
};
