import Link from "next/link";

type MainLink = {
  href: string;
  text: string;
};

export function MainLink({ href, text }: MainLink) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "#1976d2" }}>
      {text}
    </Link>
  );
}