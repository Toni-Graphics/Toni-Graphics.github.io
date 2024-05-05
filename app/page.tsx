import { Introduction } from "@/components/Introduction";
import { Repos } from "@/components/Repos";
import { Blog } from "@/components/Blog";
import { Navbar } from "@/components/Navbar";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="w-full h-full">
      <div className="grid">
        <Navbar />
        <Separator />

        <Introduction />

        <Repos />

        <Blog />
      </div>
    </div>
  );
}
