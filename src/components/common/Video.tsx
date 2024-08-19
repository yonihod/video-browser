import { Video as VideoType } from "@web-types/common";

export default function Video({
  id,
  artist,
  title,
  release_year,
  genre_id,
  image_url,
}: VideoType) {
  return (
    <div key={id} className="bg-slate-400 p-4 rounded-lg text-black">
      <div className="text-2xl">{artist}</div>
      <div>{title}</div>
      <div>{release_year}</div>
      <div>{genre_id}</div>
      <img src={image_url} alt={title} />
    </div>
  );
}
