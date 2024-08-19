import { Input } from "@components/common/Input";
import useData from "@hooks/useData";
import Select from "react-select";

type HeaderProps = ReturnType<typeof useData>;
export default function Header({
  genres,
  years,
  onGenreChange,
  onFreeTextChange,
  onYearChange,
}: HeaderProps) {
  return (
    <header className="p-4 flex flex-col gap-2 justify-center items-center w-full">
      <h1 className="text-3xl font-semibold">Video Browser</h1>
      <div />
      <div className="flex gap-2">
        <Input
          onChange={(e) => onFreeTextChange(e.target.value)}
          placeholder="Search"
        />
        <Select options={years} onChange={onYearChange} />
        <Select
          options={genres.map(({ id, name }) => ({ value: id, label: name }))}
          isMulti
          onChange={onGenreChange}
        />
      </div>
    </header>
  );
}
