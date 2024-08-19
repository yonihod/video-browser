import Video from "@components/common/Video";
import { Data } from "@web-types/common";

export default function Main({ data }: { data: Data }) {
  return (
    <main className="bg-white h-screen px-2">
      <div className="grid grid-cols-3 gap-2">
        {data.videos.map(({ id, ...video }) => (
          <Video key={id} {...video} />
        ))}
      </div>
    </main>
  );
}
