import React from "react";

type UserProps = {
  username: string;
  notification: number;
  name: {
    firstName: string;
    lastName: string;
  };
  followers: {
    firstName: string;
    lastName: string;
  }[];
};

const Dashboard = ({ username, notification, name, followers }: UserProps) => {
  return (
    <div>
      <h1>{username}</h1>
      <h2>
        こんにちは!{name.firstName} {name.lastName}さん
      </h2>
      <p>新着の通知が{notification}件あります。</p>

      <h2>フォロワー</h2>
      <div>
        {followers.map((follower, index) => (
          <p key={index}>
            {follower.firstName} {follower.lastName}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
