import { Inter, Noto_Sans_Arabic, Alegreya_Sans } from "next/font/google";
export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});
export const noto = Noto_Sans_Arabic({
  subsets: ["arabic"],
  weight: ["400", "700", "900"],
  display: "swap",
});
export const Alegreya = Alegreya_Sans({ subsets: ["greek"], weight: "700" });
