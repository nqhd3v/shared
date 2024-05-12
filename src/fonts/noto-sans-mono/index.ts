import local from "next/font/local";

export const notoMono = local({
  variable: "--font-noto",
  src: [
    // THIN 100
    {
      path: "./NotoSansMono-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    // EXTRA-LIGHT 200
    {
      path: "./NotoSansMono-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    // LIGHT 300
    {
      path: "./NotoSansMono-Light.ttf",
      weight: "300",
      style: "normal",
    },
    // REGULAR 400
    {
      path: "./NotoSansMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // MEDIUM 500
    {
      path: "./NotoSansMono-Medium.ttf",
      weight: "400",
      style: "normal",
    },
    // SEMIBOLD 600
    {
      path: "./NotoSansMono-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    // BOLD 700
    {
      path: "./NotoSansMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
