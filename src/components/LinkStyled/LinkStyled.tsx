"use client";
import Link from "next/link";
import {styled} from '@mui/system';

type LinkStyledProps = {
  href: string;
  sx?: React.CSSProperties;
  target?: '_blank' | '_self ' | '_parent' | '_top ';
  children: React.ReactNode;
};

export function LinkStyled({href, sx={}, target='_self ', children}: LinkStyledProps): JSX.Element {
  const NewLink = styled(Link)({...sx});
  return (
    <NewLink href={href} target={target}>
      {children}
    </NewLink>
  );
}