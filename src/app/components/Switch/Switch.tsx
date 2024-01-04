import React from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "./MoonIcon";
import { SunIcon } from "./SunIcon";

export default function ModeSwitch() {
  return (
    <Switch
      defaultSelected
      size="sm"
      startContent={<SunIcon />}
      endContent={<MoonIcon />}
    ></Switch>
  );
}
