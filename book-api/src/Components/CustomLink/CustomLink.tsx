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
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default CustomLink;
