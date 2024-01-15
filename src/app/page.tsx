"use client";
import styles from "./page.module.css";
import { getImages } from "@/services/requests";
import {  useQuery } from "@tanstack/react-query";
import { ImageList, ImageListItem } from "@mui/material/";
import Image from "next/image";

type Images = {
  id: string;
  slug: string;
  created_at: string;
  updated_at: string;
  urls: {
    small: string,
  };
};

export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["first-visit-images"],
    queryFn: getImages,
  });
  return (
    <main style={{ marginTop: "7.5rem" }}>
      {!isPending && (
        <ImageList cols={3} rowHeight={257}>
          {data.map((item: Images) => (
            <ImageListItem key={item.id}>
              <Image
                src={item.urls.small}
                alt="Picture"
                loading="lazy"
                width="400"
                height="267"
              />
            </ImageListItem>
          ))}
        </ImageList>
      )}
    </main>
  );
  
}
