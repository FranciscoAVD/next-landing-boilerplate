import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
        <div>
          <div className="size-12 rounded-full bg-neutral-500" />
          <span className="sr-only">Logo</span>
        </div>
    </Link>
  )
}
