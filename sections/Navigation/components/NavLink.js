import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@mui/material/styles";

const NavLink = ({ href, ...rest }) => {
  const theme = useTheme();
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <Link
      className={
        isActive ? theme.palette.secondary.main : theme.palette.secondary.light
      }
      href={href}
      {...rest}
    />
  );
};

export default NavLink;
