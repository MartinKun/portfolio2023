import "./index.css";
type Props = React.ComponentProps<"div">;

const index = ({ children }: Props) => {
  return <div className="container">{children}</div>;
};

export default index;
