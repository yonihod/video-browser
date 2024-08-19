import Video from "@components/common/Video";
import useData from "@hooks/useData";
import { useAutoAnimate } from "@formkit/auto-animate/react";

type MainProps = ReturnType<typeof useData>;
export default function Main({ videos }: MainProps) {
  const [parent] = useAutoAnimate();

  return (
    <main className="bg-white h-screen px-2">
      <ul className="grid grid-cols-3 gap-2" ref={parent}>
        {videos.map(({ id, ...video }) => (
          <Video key={id} {...video} />
        ))}
      </ul>
    </main>
  );
}
