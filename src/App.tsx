import Header from "@components/Header";
import useSWR from "swr";
import fetcher from "@api/index";
import { DATA_URL } from "@constants";
import { Data } from "@web-types/common";

function App() {
  const { data, error, isLoading } = useSWR<Data>(DATA_URL, fetcher);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <main className="bg-slate-300 h-screen">
      <Header />
      <div>{JSON.stringify(data)}</div>
      <div className="bg-red-200 p-4 rounded-full text-2xl text-green-300">
        Hello World
      </div>
    </main>
  );
}

export default App;
