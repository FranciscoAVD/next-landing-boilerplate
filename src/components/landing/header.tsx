import { MenuIcon } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "../ui/sheet";
import Logo from "../logo";
const navLinks = [
  { label: "Link", href: "/" },
  { label: "Link", href: "/" },
  { label: "Link", href: "/" },
  { label: "Link", href: "/" },
  { label: "Link", href: "/" },
];
export default function Header() {
  return (
    <header className="sticky top-0 bg-white shadow">
      <div className="container flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden lg:flex items-center gap-x-10">
          <ul className="flex gap-x-2">
            {navLinks.map(({ label, href }, idx) => (
              <li key={idx}>
                <Button variant={"link"} asChild>
                  <Link href={href}>{label}</Link>
                </Button>
              </li>
            ))}
          </ul>
          <div className="space-x-2">
            <Button>Sign up</Button>
            <Button variant={"secondary"}>Sign in</Button>
          </div>
        </nav>
        <MobileNavigation />
      </div>
    </header>
  );
}

function MobileNavigation() {
  return (
    <Sheet>
      <SheetTrigger className="lg:hidden">
        <MenuIcon className="size-6" />
        <span className="sr-only">Menu</span>
      </SheetTrigger>
      <SheetContent className="flex flex-col pt-4">
        <SheetHeader className="pb-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <nav>
          <ul>
            {navLinks.map(({ label, href }, idx) => (
              <li key={idx + "mobile"}>
                <Button variant={"link"} asChild>
                  <Link href={href}>{label}</Link>
                </Button>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto flex flex-col gap-y-2">
          <Button>Sign up</Button>
          <Button variant={"secondary"}>Sign in</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
