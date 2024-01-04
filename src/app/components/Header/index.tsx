"use client";
import React from "react";

import Logo from "./logo";

import {
  NavbarBrand,
  Navbar,
  NavbarItem,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import ModeSwitch from "../Switch/Switch";
import Image from "next/image";
import GitLogo from "./GitLogo";

import ThemeSwitch from "../Switch/themSwitch";

function Header() {
  return (
    <Navbar isBordered isBlurred={false} position="sticky">
      {/* mobile Navbar */}

      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle></NavbarMenuToggle>
      </NavbarContent>

      <NavbarContent className="flex sm:hidden gap-4" justify="center">
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden" justify="end">
        <div className="FlexCenter gap-2">
          <GitLogo />
          <ThemeSwitch />
        </div>
      </NavbarContent>

      <NavbarMenu>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Latests
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            <Dropdown backdrop="blur">
              <DropdownTrigger>Posts</DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="react">React</DropdownItem>
                <DropdownItem key="animation">Animation</DropdownItem>
                <DropdownItem key="CSS">CSS</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  News
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="foreground" href="#">
            Goodies
          </Link>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link color="danger" href="#">
            Learn
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>

      {/* desktop Navbar */}
      <NavbarBrand className="hidden sm:flex">
        <Logo />
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Latests
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="#">
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button className="bg-transparent">Posts</Button>
              </DropdownTrigger>
              <DropdownMenu variant="faded" aria-label="Static Actions">
                <DropdownItem key="react">React</DropdownItem>
                <DropdownItem key="animation">Animation</DropdownItem>
                <DropdownItem key="CSS">CSS</DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  News
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Goodies
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent className="hidden sm:flex" justify="end">
        <NavbarItem className="FlexBetween flex-row-reverse gap-3">
          <Button
            variant="bordered"
            size="sm"
            className=" cursor-pointer  FlexCenter"
            color="danger"
            href="#"
          >
            <span className="mr-[2px]">
              <>{"</>"}</>
            </span>
            Learn
          </Button>
          <GitLogo />
          <ThemeSwitch />
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}

export default Header;
