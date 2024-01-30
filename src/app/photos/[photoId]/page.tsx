import { getPhotoById } from "@/services/requests";
import Image from "next/image";
import { MainHeader, Likes, ButtonLink, PhotoSizeButtons } from "@/components";
import { notFound } from "next/navigation";
import { Typography, Box, Button } from "@mui/material";
import {
  headerHeight,
  headerSmallDesktopHeight,
} from "@/components/MainHeader/header-config";
import { queries } from "@/utils/queries/queries";
import styles from "./photos.module.css";

type PhotoParams = {
  params: {
    photoId: string;
  };
};

type tags = {
  title: string;
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
          marginTop: `calc(${headerHeight})`,
          display: "flex",
          height: `calc(100vh - ${headerHeight})`,
          [queries.smallDesktop]: {
            marginTop: `calc(${headerSmallDesktopHeight})`,
            height: `calc(100vh - ${headerSmallDesktopHeight})`,
          },
          [queries.bigTablet]: {
            flexDirection: "column",
            height: "100%",
          },
        }}
      >
        <Image
          src={pictureData?.urls?.regular}
          alt="picture"
          width={800}
          height={800}
          priority={true}
          className={styles.photo}
        />
        <Box
          sx={{
            height: `calc(100vh - ${headerHeight})`,
            width: "50%",
            [queries.bigTablet]: {
              width: "100%",
              height: '100%',
            },
          }}
        >
          <Box
            sx={{
              paddingLeft: "10%",
              marginTop: "3vh",
              display: "flex",
              flexDirection: "column",
              gap: "5vh",
              [queries.smallDesktop]: {
                gap: "3vh",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: "1.5rem",
                paddingRight: "5%",
                [queries.smallDesktop]: { fontSize: "1rem" },
                [queries.tablet]: { fontSize: "0.9rem" },
              }}
            >
              <b>Author:</b> {pictureData?.user.username}
            </Typography>
            <Typography
              sx={{
                fontSize: "1.5rem",
                paddingRight: "5%",
                [queries.smallDesktop]: { fontSize: "1rem" },
                [queries.tablet]: { fontSize: "0.8rem" },
              }}
            >
              <b>Description: </b>
              {pictureData?.description
                ? pictureData.description
                : pictureData.alt_description}
            </Typography>
            <Likes
              likes={pictureData?.likes}
              likedByUser={pictureData?.liked_by_user}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography
                variant="h4"
                sx={{
                  [queries.smallDesktop]: {
                    fontSize: "1.5rem",
                  },
                }}
              >
                Download
              </Typography>
              <PhotoSizeButtons
                regular={pictureData?.urls.regular}
                small={pictureData?.urls.small}
                thumb={pictureData?.urls.thumb}
              />
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "2%",
                gap: "1%",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  [queries.smallDesktop]: {
                    fontSize: "1.5rem",
                  },
                }}
              >
                Related topics
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1%",
                  marginTop: "1vh",
                }}
              >
                {pictureData?.tags.map((item: tags, index: number) => (
                  <Button key={index} variant="outlined" size="small">
                    <ButtonLink href={`/?query=${item.title}&page=1`}>
                      {item.title}
                    </ButtonLink>
                  </Button>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
