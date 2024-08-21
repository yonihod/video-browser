import { Input } from "@components/common/Input";
import useData from "@hooks/useData";
import Select, { components } from "react-select";

const DropdownIndicator = (props: any) => {
  return (
    <components.DropdownIndicator {...props}>
      <svg
        className="dropdown-indicator"
        focusable="false"
        aria-hidden="true"
        viewBox="0 0 24 24"
        data-testid="ArrowDropDownIcon"
      >
        <path d="M7 10l5 5 5-5z"></path>
      </svg>
    </components.DropdownIndicator>
  );
};

const IndicatorSeparator = () => {
  return null;
};

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
      <div className="flex flex-col md:flex-row gap-2">
        <Input
          className="border py-2 w-48 h-12 border-[#d2d2d2] placeholder-gray-600 focus-visible:border-[#2684ff] outline-none focus-visible:border-2"
          onChange={(e) => onFreeTextChange(e.target.value)}
          placeholder="Search Video..."
        />
        <Select
          placeholder="Select by Year"
          isClearable
          isSearchable
          styles={{
            placeholder: (defaultStyles) => {
              return {
                ...defaultStyles,
                color: "rgb(75 85 99)",
              };
            },
            control: (baseStyles) => ({
              ...baseStyles,
              borderRadius: 2,
            }),
          }}
          classNames={{
            control: (state) =>
              `border rounded-sm py-2 min-w-48 h-12 border-[#d2d2d2] ${
                state.isFocused ? "border-[#2684ff]" : ""
              }`,
          }}
          options={years}
          onChange={onYearChange}
          components={{ DropdownIndicator, IndicatorSeparator }}
        />
        <Select
          placeholder="Select by Genre"
          options={genres.map(({ id, name }) => ({ value: id, label: name }))}
          classNames={{
            control: (state) =>
              `border rounded-sm py-2 w-48 h-12 border-[#d2d2d2] ${
                state.isFocused ? "border-[#2684ff]" : ""
              }`,
          }}
          styles={{
            placeholder: (defaultStyles) => {
              return {
                ...defaultStyles,
                color: "rgb(75 85 99)",
              };
            },
            control: (baseStyles) => ({
              ...baseStyles,
              borderRadius: 2,
            }),
          }}
          isMulti
          onChange={onGenreChange}
          components={{ DropdownIndicator, IndicatorSeparator }}
        />
      </div>
    </header>
  );
}
