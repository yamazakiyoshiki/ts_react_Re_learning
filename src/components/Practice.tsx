import React from "react";

const anyType: any = {
  id: "0001",
  name: "aaa",
};

console.log(anyType);

type objType = {
  id: string;
  name: string;
};

const unknownType: unknown = {
  id: "0001",
  name: "aaa",
};

console.log((unknownType as objType).id);

type strNumArr = (string | number)[];

const arr1: strNumArr = ["aaa", 100, 200];
console.log(arr1);

type addNumType = (a: number, b: number) => void;
const addNum: addNumType = (a, b) => {
  console.log(a + b);
};

addNum(1, 2);

type minusNumType = (a: number, b?: number) => void;

const minusNum: minusNumType = (a, b) => {
  if (b === undefined) {
    console.log(a);
  } else {
    console.log(a - b);
  }
};

minusNum(10, 2);

type loadingType = {
  state: "loading";
};

type errorType = {
  state: "error";
};

type successType = {
  state: "success";
  posts?: {
    id: number;
    title: string;
  };
};

type stateType = loadingType | successType | errorType;

function consoleState(data: stateType): void {
  switch (data.state) {
    case "loading":
      console.log("ローディング中");
      break;
    case "success":
      console.log(data.posts?.title);
      break;
    case "error":
      console.log("エラー");
  }
}
consoleState({
  state: "success",
  posts: { id: 4, title: "タイトル" },
});

const arr = ["1", "2", "3"];

// function getFirst(arr: (number | string)[]) {
//   return arr[0];
// }

type apiType<T> = {
  data: T;
};

type studentType = apiType<{ id: string; name: string; age: number }>;
type ArticleType = apiType<{ id: string; title: string; desc: string }>;

function getFirst<T>(arr: T[]) {
  return arr[0];
}

const first = getFirst(arr);
console.log(first);

const student: studentType = {
  data: {
    id: "0001",
    name: "tanaka",
    age: 21,
  },
};

const article: ArticleType = {
  data: {
    id: "0001",
    title: "title",
    desc: "description",
  },
};

console.log(student);
console.log(article);

const AnyUnknown = () => {
  return <div>AnyUnknown</div>;
};

export default AnyUnknown;
