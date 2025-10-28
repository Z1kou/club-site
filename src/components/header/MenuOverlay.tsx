import React from "react";
import NavLink from "./Navlink";
import Link from "next/link";
import { Button } from "../ui/button";

export type LinksType = 
    {
        title: string,
        path: string,
    }[]

const MenuOverlay = ({ links }: {links: LinksType}) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
      <Link href="/sign">
        <Button variant="destructive">SignUp</Button>
      </Link>
    </ul>
  );
};

export default MenuOverlay;