'use client';
import Image from 'next/image';
import {styled} from '@mui/system';
import {EventHandler, SyntheticEvent} from 'react';

type StyledImage = {
  sx?: React.CSSProperties;
  src: string;
  width: number;
  height: number;
  alt: string;
  priority?: boolean;
  onClick?: EventHandler<SyntheticEvent>;
  onLoad?: EventHandler<SyntheticEvent>;
};

export function ImageStyled({
  sx = {},
  src,
  width,
  height,
  alt,
  priority = false,
  onClick,
  onLoad,
}: StyledImage) {
  const IMG = styled(Image)({...sx});
  return (
    <IMG
      src={src}
      width={width}
      height={height}
      alt={alt}
      priority={priority}
      onClick={onClick}
      onLoad={onLoad}
    />
  );
}
