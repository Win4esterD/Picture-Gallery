"use client";
import { Button, ButtonGroup, useMediaQuery } from "@mui/material";
import { ButtonLink } from "..";
import React from "react";

type PhotoSizeButtonsProps = {
  regular: string;
  small: string;
  thumb: string;
};

export function PhotoSizeButtons({ regular, small, thumb }: PhotoSizeButtonsProps): JSX.Element {
  const desktop: boolean = useMediaQuery("(min-width: 1100px)");
  const smallDesktop: boolean = useMediaQuery("(max-width: 1100px) and (min-width: 801px)");
  const mobile: boolean = useMediaQuery("(max-width: 600px)");

  function determineSize(): 'small' | 'medium' | 'large' {
    if(desktop) {
      return "large"
    } else if (smallDesktop) {
      return "medium";
    }else {
      return 'small'
    }
  }
  return (
    <ButtonGroup
      size={determineSize()}
      fullWidth={true}
      orientation={!mobile? 'horizontal': 'vertical'}
      sx={{ width: "90%" }}
    >
      <Button>
        <ButtonLink href={regular}>Large</ButtonLink>
      </Button>
      <Button>
        <ButtonLink href={small}>Medium</ButtonLink>
      </Button>
      <Button>
        <ButtonLink href={thumb}>Small</ButtonLink>
      </Button>
    </ButtonGroup>
  );
}