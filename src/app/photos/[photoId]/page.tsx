import { getPhotoById } from "@/services/requests";
import Image from "next/image";
import { MainHeader, Likes, ButtonLink } from "@/components";
import { notFound } from "next/navigation";
import { Typography, Box, ButtonGroup, Button } from "@mui/material";
import { headerHeight } from "@/components/MainHeader/header-config";

type PhotoParams = {
  params: {
    photoId: string;
  };
};

export default async function Photo({
  params,
}: PhotoParams): Promise<JSX.Element> {
  const pictureData = await getPhotoById(params.photoId);
  if (pictureData.errors) {
    notFound();
  }
  return (
    <>
      <MainHeader />
      <Box
        component="main"
        sx={{
          marginTop: `calc(${headerHeight} + 1.2rem)`,
          display: "flex",
          alignItems: "center",
          justifyItems: "center",
        }}
      >
        <Image
          src={pictureData?.urls?.regular}
          alt="picture"
          width={800}
          height={800}
          priority={true}
          style={{ height: `calc(100vh - ${headerHeight} - 1.2rem)` }}
        />
        <Box>
          <Typography>Author: {pictureData?.user.username}</Typography>
          <Typography>
            Description:
            {pictureData?.description
              ? pictureData.description
              : pictureData.alt_description}
          </Typography>
          <Likes
            likes={pictureData?.likes}
            likedByUser={pictureData?.liked_by_user}
          />
          <ButtonGroup>
            <Button>
              <ButtonLink href={pictureData?.urls.full}>Full</ButtonLink>
            </Button>
            <Button>
              <ButtonLink href={pictureData?.urls.regular}>Large</ButtonLink>
            </Button>
            <Button>
              <ButtonLink href={pictureData?.urls.small}>Small</ButtonLink>
            </Button>
            <Button>
              <ButtonLink href={pictureData?.urls.thumb}>Very small</ButtonLink>
            </Button>
          </ButtonGroup>
        </Box>
      </Box>
    </>
  );
}
