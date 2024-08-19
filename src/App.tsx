import useSWR from "swr";
import { DATA_URL } from "@constants";
import fetcher from "@api/index";
import Header from "@components/layout/Header";
import Loading from "@components/common/Loading";
import { Data } from "@web-types/common";
import Body from "@components/layout/Body";

function App() {
  const { data, error, isLoading } = useSWR<Data>(DATA_URL, fetcher);
  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <div>No data</div>;
  if (isLoading) return <Loading />;

  return (
    <main className="bg-slate-300 h-screen">
      <Header />
      <Body data={data} />
      <div>{JSON.stringify(data)}</div>
    </main>
  );
}

export default App;
