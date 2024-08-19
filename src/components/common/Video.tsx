import { Video as VideoType } from "@web-types/common";

export default function Video({
  artist,
  title,
  release_year,
  image_url,
}: Omit<VideoType, "id">) {
  return (
    <li className="bg-pipi text-black">
      <img src={image_url} className="w-full" alt={title} />
      <div className="p-1 flex flex-col items-center align-middle">
        <div>{artist}</div>
        <div>{title}</div>
        <div>{release_year}</div>
      </div>
    </li>
  );
}
