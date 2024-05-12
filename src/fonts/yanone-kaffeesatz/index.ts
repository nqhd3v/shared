import local from "next/font/local";

export const yanone = local({
  variable: "--font-yanone",
  src: [
    // THIN 100
    // EXTRA-LIGHT 200
    {
      path: "./YanoneKaffeesatz-Regular.ttf",
      weight: "200",
      style: "normal",
    },
    // LIGHT 300
    {
      path: "./YanoneKaffeesatz-Regular.ttf",
      weight: "300",
      style: "normal",
    },
    // REGULAR 400
    {
      path: "./YanoneKaffeesatz-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    // MEDIUM 500
    {
      path: "./YanoneKaffeesatz-Regular.ttf",
      weight: "500",
      style: "normal",
    },
    // SEMIBOLD 600
    {
      path: "./YanoneKaffeesatz-Regular.ttf",
      weight: "600",
      style: "normal",
    },
    // BOLD 700
    {
      path: "./YanoneKaffeesatz-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});
