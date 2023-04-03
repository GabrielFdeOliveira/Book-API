import { Link, LinkProps } from "react-router-dom";

type CustomLinkProps = LinkProps & {
  to: {
    pathname: string;
    state: {
      title: string;
      author: string;
      price: string;
      index: number;
    };
  };
};

const CustomLink: React.FC<CustomLinkProps> = ({ to, children, ...rest }) => {
  const handleClick = () => {
    console.log("CustomLink handleClick to:", to);
  };
  return (
    <Link to={to} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
