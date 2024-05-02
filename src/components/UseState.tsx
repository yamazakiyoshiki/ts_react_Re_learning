import React, { useState } from "react";

type User = {
  name: string;
  email: string;
};

const UseState = () => {
  const [user, setUser] = useState<User>({} as User);
  const isLogIn = () => {
    setUser({
      name: "yamazaki",
      email: "yamazaki.com",
    });
  };
  return (
    <div>
      <button onClick={isLogIn}>ログイン</button>
      <p>ユーザー名: {user.name}</p>
      <p>メールアドレス: {user.email}</p>
    </div>
  );
};

export default UseState;
