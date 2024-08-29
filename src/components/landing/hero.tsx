import { Button } from "../ui/button";
import { H1 } from "../ui/headers";

export default function Hero() {
  return (
    <section className="grid place-content-center h-[700px] px-4 bg-neutral-100">
      <div className="max-w-lg space-y-4 text-center">
        <H1>Landing Hook</H1>
        <p className="text-lg text-black/70 font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          nihil similique at ratione, numquam possimus.
        </p>
        <div className="space-x-2">
          <Button>Primary Action</Button>
          <Button variant={"secondary"}>Secondary Action</Button>
        </div>
      </div>
    </section>
  );
}
