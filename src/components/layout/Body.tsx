import Video from "@components/common/Video";
import useData from "@hooks/useData";

type MainProps = ReturnType<typeof useData>;
export default function Main({ videos }: MainProps) {
  return (
    <main className="bg-white h-screen px-2">
      <div className="grid grid-cols-3 gap-2">
        {videos.map(({ id, ...video }) => (
          <Video key={id} {...video} />
        ))}
      </div>
    </main>
  );
}
