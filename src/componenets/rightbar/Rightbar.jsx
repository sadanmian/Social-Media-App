import React from "react";
import "./rightbar.scss";

export const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="container">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <span>Sadan Mian</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <span>Sadan Mian</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
        </div>
        <div className="item">
          <span>Latest Activities</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <p>
                <span>Sadan Mian</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <p>
                <span>Sadan Mian</span> changed their cover picture
              </p>
            </div>
            <span>1 min ago</span>
          </div>
        </div>
        <div className="item">
          <span>Online Friends</span>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sadan Mian</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sadan Mian</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sadan Mian</span>
            </div>
          </div>
          <div className="user">
            <div className="userInfo">
              <img
                src="https://pbs.twimg.com/profile_images/1283759937177317376/iKqA9lOB_400x400.jpg"
                alt=""
              />
              <div className="online" />
              <span>Sadan Mian</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
