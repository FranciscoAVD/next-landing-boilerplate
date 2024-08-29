import React from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { H2 } from "../ui/headers";

export default function Contact() {
  return (
    <section className="py-20 bg-neutral-100">
      <div className="container space-y-10">
        <div className="text-center">
          <H2>Get in Contact</H2>
          <p className="text-lg font-medium text-black/70">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, dolor.
          </p>
        </div>

        <form action="" className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <div>
            <Label>First Name</Label>
            <Input />
          </div>
          <div>
            <Label>Last Name</Label>
            <Input />
          </div>
          <div className="col-span-full">
            <Label>Email</Label>
            <Input />
          </div>
          <div className="col-span-full">
            <Label>Phone Number</Label>
            <Input />
          </div>
          <div className="col-span-full">
            <Label>Extra Field</Label>
            <Input />
          </div>
          <div className="col-span-full">
            <Label>Additional Details</Label>
            <Textarea />
          </div>

          <Button type="submit" className="col-span-full">
            Let's Talk
          </Button>
        </form>
      </div>
    </section>
  );
}
