import { getPhotoById } from "@/services/requests";
import Image from "next/image";
import { MainHeader } from "@/components";

type PhotoParams = {
  params: {
    photoId: string;
  };
};

export default async function Photo({params}: PhotoParams) {
  const pictureData = await getPhotoById(params.photoId);
  return (
    <>
      <MainHeader />
      <Image
        src={pictureData?.data.urls.regular}
        alt="picture"
        width="800"
        height="600"
        priority={true}
      />
    </>
  );
}