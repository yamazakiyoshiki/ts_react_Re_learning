// import React, { useState } from "react";
// // import { Route } from "react-router-dom";

// import TodoList from "./components/TodoList";
// import NewTodo from "./components/NewTodo";
// import { Todo } from "./todo.model";
// import Dashboard from "./components/Dashboard";

// const App: React.FC = () => {
//   const [todos, setTodos] = useState<Todo[]>([]);

//   const todoAddHandler = (text: string) => {
//     setTodos((prevTodos) => [
//       ...prevTodos,
//       { id: Math.random().toString(), text: text },
//     ]);
//   };

//   const todoDeleteHandler = (todoId: string) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
//   };

//   return (
//     <div className="App">
//       <NewTodo onAddTodo={todoAddHandler} />
//       <TodoList items={todos} onDeleteTodo={todoDeleteHandler} />
//       <Dashboard
//         username="yamazaki"
//         notification={10}
//         name={{ firstName: "yamazaki", lastName: "yoshiki" }}
//       />
//       {/* <Dashboard username="yamazaki" notification={10} /> */}
//     </div>
//   );
// };

// export default App;
import Dashboard from "./components/Dashboard";
import Event from "./components/Event";
import FollowerTips from "./components/FollowerTips";
import PropsTips from "./components/PropsTips";
import Status from "./components/Status";
import StyleProps from "./components/StyleProps";
import Text from "./components/Text";
import UseReducer from "./components/UseReducer";
import UseState from "./components/UseState";
import Wrapper from "./components/Wrapper";

const App = () => {
  const followers = [
    { firstName: "ken", lastName: "yamamot" },
    { firstName: "jun", lastName: "yamamot" },
    { firstName: "ryo", lastName: "yamamot" },
  ];
  const name = {
    firstName: "yamazaki",
    lastName: "yoshiki",
  };

  return (
    <div>
      <Dashboard
        username="yamazaki"
        notification={10}
        name={name}
        followers={followers}
      />
      <Status status="loading" />
      <Status />
      <Wrapper>
        <Text>チルドレンです</Text>
      </Wrapper>
      <Event click={(e, text) => alert(text)} change={(e) => console.log(e)} />
      <StyleProps style={{ fontSize: "40px", color: "red" }} />
      <PropsTips firstName="山田" lastName="太郎" />
      <FollowerTips
        followerName={{ firstName: "yoshiki", lastName: "yamazaki" }}
      />
      <UseState />
      <UseReducer />
    </div>
  );
};

export default App;
