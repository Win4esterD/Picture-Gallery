'use client';
import {Button, ButtonGroup, useMediaQuery} from '@mui/material';
import React from 'react';
import {queries} from '@/utils/queries/queries';

type PhotoSizeButtonsProps = {
  regular: string;
  small: string;
  thumb: string;
};

export function PhotoSizeButtons({
  regular,
  small,
  thumb,
}: PhotoSizeButtonsProps): JSX.Element {
  const desktop: boolean = useMediaQuery(queries.desktop);
  const smallDesktop: boolean = useMediaQuery(
    `${queries.smallDesktop} and (min-width: 801px)`,
  );
  const tablet: boolean = useMediaQuery(queries.tablet);

  function determineSize(): 'small' | 'medium' | 'large' {
    if (desktop) {
      return 'large';
    } else if (smallDesktop) {
      return 'medium';
    } else {
      return 'small';
    }
  }
  return (
    <ButtonGroup
      size={determineSize()}
      fullWidth={true}
      orientation={!tablet ? 'horizontal' : 'vertical'}
      sx={{width: '90%'}}
    >
      <Button href={regular} target="_blank">
        Large
      </Button>
      <Button href={small} target="_blank">
        Medium
      </Button>
      <Button href={thumb} target="_blank">
        Small
      </Button>
    </ButtonGroup>
  );
}
