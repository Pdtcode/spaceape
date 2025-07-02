import {
  Fira_Code as FontMono,
  Inter as FontSans,
  Jua as FontJua,
  Martian_Mono as FontMartianMono,
  Passion_One as FontPassionOne,
} from "next/font/google";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const fontJua = FontJua({
  subsets: ["latin"],
  variable: "--font-jua",
  weight: ["400"],
});

export const fontMartianMono = FontMartianMono({
  subsets: ["latin"],
  variable: "--font-martian-mono",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const fontPassionOne = FontPassionOne({
  subsets: ["latin"],
  variable: "--font-passion-one",
  weight: ["400", "700", "900"],
});
