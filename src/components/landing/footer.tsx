import Link from "next/link";
import { FacebookIcon, InstagramIcon, TwitterIcon } from "../icons";
import Logo from "../logo";
const neutral100 = "#f5f5f5" as const;
const opacity70 = "b3";
const Icons = [FacebookIcon, InstagramIcon, TwitterIcon];
export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-neutral-100/70">
      <div className="container py-10">
        <div className="flex justify-between">
          <div className="flex items-center gap-x-2">
            <Logo />
            <small>Company name 20XX&copy;</small>
          </div>

          <div className="flex items-center gap-x-4">
            {Icons.map((Icon, idx) => (
              <Link key={idx} href="/">
                <Icon className="size-6" fill={neutral100 + opacity70} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
