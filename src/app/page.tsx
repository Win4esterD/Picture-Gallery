"use client";
import styles from "./page.module.css";
import { getImages } from "@/services/requests";
import {  useQuery } from "@tanstack/react-query";



export default function Home() {
  const { isPending, isError, data, error } = useQuery({
    queryKey: ["first-visit-images"],
    queryFn: getImages,
  });

  return (
      <main style={{ marginTop: "7.5rem" }}>Hello</main>
  );
  
}
