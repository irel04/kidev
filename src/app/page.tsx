import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";


export default function Home() {



  return (
    <>
      <section>
        <h1 className="text-brand-500">Hello pipol</h1>
        <Button className="rounded-full" variant="link" >
          <ArrowUpRight />
          IREL
        </Button>
      </section>
    </>
  );
}
