import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, ...rest }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={isActive ? "text-cyan-500" : "text-gray-800"}
      href={href}
      {...rest}
    />
  );
};

export default NavLink;
