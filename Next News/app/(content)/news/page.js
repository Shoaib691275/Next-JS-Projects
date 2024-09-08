import { DUMMY_NEWS } from "@/dummy-data";
import Link from "next/link";
import Image from "next/image";
import NewsList from "@/components/newsList";
export default function News() {
  return (
    <>
      <h1>News Items</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}
