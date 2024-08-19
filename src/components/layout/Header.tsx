/* Add 3 inputs here based on material ui the first one should be an input the second one should be a select and the third one should be a select with multiple options */
import {
  Box,
  Chip,
  FormControl,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ChangeEvent, useState } from "react";

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

export default function Header() {
  const [personName, setPersonName] = useState<string[]>([]);
  const [year, setYear] = useState<string>("");

  return (
    <header className="p-4 flex flex-col justify-center items-center w-full">
      <h1 className="text-3xl font-semibold">Video Browser</h1>
      <div className="flex gap-2">
        <FormControl sx={{ m: 1, width: 300 }}>
          <TextField
            id="outlined-basic"
            label="Search video"
            variant="outlined"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              console.log(event.target.value);
            }}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Search by year"
            value={year}
            onChange={(event: SelectChangeEvent) => {
              console.log(event.target.value);
              setYear(event.target.value as string);
            }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl sx={{ m: 1, width: 300 }}>
          <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={(event: SelectChangeEvent<typeof personName>) => {
              const {
                target: { value },
              } = event;
              setPersonName(
                // On autofill we get a stringified value.
                typeof value === "string" ? value.split(",") : value
              );
            }}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </header>
  );
}
