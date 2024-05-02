type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper = (props: WrapperProps) => {
  // console.log(props);
  return <div>{props.children}</div>;
};

export default Wrapper;
