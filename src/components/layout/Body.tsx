import Video from "@components/common/Video";
import { Data } from "@web-types/common";

export default function Body({ data }: { data: Data }) {
  return (
    <div className="grid grid-cols-3 gap-2">
      {data.videos.map((video) => (
        <Video {...video} />
      ))}
    </div>
  );
}
