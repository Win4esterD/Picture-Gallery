"use client";
import Image from "next/image";
import {styled} from '@mui/system';
import { Theme } from "@mui/material";


type StyledImage = {
  sx?: React.CSSProperties;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
};

export function ImageStyled({sx={}, src, width, height, alt, priority=false}: StyledImage) {
  const Styles = styled(Image)({...sx})
  return <Styles src={src} width={width} height={height} alt={alt} priority={priority}/>;
}