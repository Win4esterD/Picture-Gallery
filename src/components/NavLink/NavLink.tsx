import Link from "next/link";
import styles from './NavLink.module.css';
import Button from "@mui/material/Button";

type NavLinkProps = {
  link: string,
  text: string,
}

export function NavLink({ link, text }: NavLinkProps) {
  return (
    <Button variant="contained" color="secondary" size="large">
      <Link className={styles.link} href={link}>
        {text}
      </Link>
    </Button>
  );
}