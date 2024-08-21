import useSWR from "swr";
import { DATA_URL } from "@constants";
import fetcher from "@api/index";
import Header from "@components/layout/Header";
import Loading from "@components/common/Loading";
import { Data } from "@web-types/common";
import Main from "@components/layout/Body";
import { DataContext } from "./context";
import useData from "@hooks/useData";

function App() {
  const { data, error, isLoading } = useSWR<Data>(DATA_URL, fetcher);
  const dataProps = useData(data);
  if (error) return <div>Error: {error.message}</div>;
  if (isLoading) return <Loading />;
  if (!data) return <div>No data</div>;

  return (
    <DataContext.Provider value={data}>
      <Header {...dataProps} />
      <Main {...dataProps} />
    </DataContext.Provider>
  );
}

export default App;
