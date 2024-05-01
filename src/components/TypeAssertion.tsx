const addOrConcat = (
  a: number,
  b: number,
  c: "add" | "concat"
): number | string => {
  if (c === "add") {
    return a + b;
  } else {
    return "" + a + b;
  }
};

const result = addOrConcat(1, 2, "concat") as string;
console.log(result);

// const div = document.querySelector("div");
// const container = document.querySelector(".container") as HTMLDivElement;

const wrapper = document.querySelector("#wrapper") as HTMLDivElement;
wrapper.setAttribute("class", "wrapper");
wrapper.textContent = "おはよう";
