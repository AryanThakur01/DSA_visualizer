import { MetadataRoute } from "next";

const manifest = (): MetadataRoute.Manifest => {
  return {
    name: "Dsa Visualizer",
    short_name: "DSA Viz",
    description:
      "A Data Structures and Algorithms (DSA) visualizer is a tool or software application designed to help individuals understand, analyze, and learn about the various data structures and algorithms used in computer science and programming. The primary purpose of a DSA visualizer is to provide a graphical representation of how these data structures and algorithms work, making it easier for users to grasp their functionality and behavior.",
    start_url: "/",
    display: "standalone",
    background_color: "#020817",
    theme_color: "#020817",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
};

export default manifest;
