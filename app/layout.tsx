import type { Metadata } from "next";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Selim Dilşad Ercan",
};

function layout() {
  redirect("https://foritu-app.framer.website//");
}

export default layout;
