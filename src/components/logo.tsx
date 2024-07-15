import { Alegreya } from "@/app/fonts";
import { cn } from "@/lib/utils";

function Logo() {
  return <h1 className={cn("text-2xl", Alegreya.className)}>SHKAR</h1>;
}

export default Logo;
