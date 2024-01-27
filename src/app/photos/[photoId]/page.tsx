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
        }}
      >
        <Image
          src={pictureData?.urls?.regular}
          alt="picture"
          width={800}
          height={800}
          priority={true}
          style={{ width: "50%", height: "100%" }}
        />
        <Box
          sx={{
            height: `calc(100vh - ${headerHeight})`,
            width: "50%",
          }}
        >
          <Box
            sx={{
              paddingLeft: "10%",
              marginTop: "1.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "3rem",
            }}
          >
            <Typography sx={{ fontSize: "1.5rem", paddingRight: "5%" }}>
              <b>Author:</b> {pictureData?.user.username}
            </Typography>
            <Typography sx={{ fontSize: "1.5rem", paddingRight: "5%" }}>
              <b>Description:</b>
              {pictureData?.description
                ? pictureData.description
                : pictureData.alt_description}
            </Typography>
            <Likes
              likes={pictureData?.likes}
              likedByUser={pictureData?.liked_by_user}
            />
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography variant="h4">Download</Typography>
              <ButtonGroup>
                <Button>
                  <ButtonLink href={pictureData?.urls.regular}>
                    Large
                  </ButtonLink>
                </Button>
                <Button>
                  <ButtonLink href={pictureData?.urls.small}>Mediun</ButtonLink>
                </Button>
                <Button>
                  <ButtonLink href={pictureData?.urls.thumb}>Small</ButtonLink>
                </Button>
              </ButtonGroup>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                paddingRight: "2%",
                gap: "1rem",
              }}
            >
              <Typography variant="h4">Related topics</Typography>
              <ButtonGroup
                sx={{ display: "flex", flexWrap: "wrap", paddingRight: "2%" }}
                variant="text"
              >
                {pictureData?.tags.map((item: tags, index: number) => (
                  <Button key={index}>
                    <ButtonLink href={`/?query=${item.title}&page=1`}>
                      {item.title}
                    </ButtonLink>
                  </Button>
                ))}
              </ButtonGroup>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
