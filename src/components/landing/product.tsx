import { H2 } from "../ui/headers";

export default function Product() {
  return ( 
    <section className="py-32 space-y-20">
      <div className="text-center px-4">
        <H2>Product Section</H2>
        <p className="max-w-md mx-auto text-lg font-medium text-black/70">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque,
          placeat?
        </p>
      </div>
      <section className="container grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    </section>
  );
}

function Card() {
  return (
    <div className="flex flex-col items-center justify-evenly gap-y-4 p-4 mx-auto max-w-lg bg-neutral-200 border border-neutral-300 rounded-lg shadow-md">
      <div className="size-16 rounded-full bg-white" />
      <p className="text-justify font-medium text-black/70">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae atque
        ipsa, totam maiores suscipit maxime! Nam ipsa possimus sunt cumque.
      </p>
    </div>
  );
}
