import Link from 'next/link';
import React from 'react';

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  css?: React.CSSProperties;
};

export function ButtonLink({
  href,
  children,
  css,
}: ButtonLinkProps): JSX.Element {
  return (
    <Link
      href={href}
      style={css ? css : {textDecoration: 'none', color: '#1976d2'}}
      target="_blank"
    >
      {children}
    </Link>
  );
}
