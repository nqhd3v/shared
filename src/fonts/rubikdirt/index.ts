import local from "next/font/local";

export const rubikDirt = local({
  variable: "--font-rubik",
  src: [
    // THIN 100
    // EXTRA-LIGHT 200
    // LIGHT 300
    // REGULAR 400
    {
      path: "./RubikDirt-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // MEDIUM 500
    // SEMIBOLD 600
    // BOLD 700
  ],
});
