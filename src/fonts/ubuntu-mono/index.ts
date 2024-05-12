import local from "next/font/local";

export const ubuntuMono = local({
  variable: "--font-ubuntu",
  src: [
    // THIN 100
    // EXTRA-LIGHT 200
    // LIGHT 300
    // REGULAR 400
    {
      path: "./UbuntuMono-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./UbuntuMono-Italic.ttf",
      weight: "400",
      style: "italic",
    },
    // MEDIUM 500
    // SEMIBOLD 600
    // BOLD 700
    {
      path: "./UbuntuMono-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./UbuntuMono-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
  ],
});
