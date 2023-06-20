import Link from "next/link";

const BustleLink = ({ children, href, ...rest }: any) => {
  return (
    <Link href={"article"} {...rest}>
      {children}
    </Link>
  );
};

export default BustleLink;
