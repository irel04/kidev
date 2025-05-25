import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="m-5">
      <h1 className="text-brand-500">Hello pipol</h1>
      <Button className="rounded-full" variant="primary" size="icon">
        <ArrowUpRight/>
      </Button>
    </div>
  );
}
