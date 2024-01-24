import { getPhotoById } from "@/services/requests";
import Image from "next/image";
import { MainHeader } from "@/components";
import { redirect } from "next/navigation";


type PhotoParams = {
  params: {
    photoId: string;
  };
};

export default async function Photo({params}: PhotoParams) {
  const pictureData = await getPhotoById(params.photoId);
  if (pictureData.errors) {
    redirect('/404/');
  }
    return (
      <>
        <MainHeader />
        <Image
          src={pictureData?.urls?.regular}
          alt="picture"
          width="800"
          height="600"
          priority={true}
        />
      </>
    );
}