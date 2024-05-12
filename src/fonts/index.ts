import { twMerge } from "tailwind-merge";
import { notoMono } from "./noto-sans-mono";
import { rubikDirt } from "./rubikdirt";
import { ubuntuMono } from "./ubuntu-mono";
import { yanone } from "./yanone-kaffeesatz";

export const appFonts = twMerge(
  notoMono.variable,
  rubikDirt.variable,
  ubuntuMono.variable,
  yanone.variable
);
