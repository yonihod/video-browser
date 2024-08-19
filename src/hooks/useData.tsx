import { Data, Genre } from "@web-types/common";
import { useMemo, useState } from "react";
import { MultiValue, SingleValue } from "react-select";

export default function useData(data: Data = { videos: [], genres: [] }) {
  const [selectedGenre, setSelectedGenre] = useState<Genre[]>([]);
  const [selectedYear, setSelectedYear] = useState<string>();
  const [freeText, setFreeText] = useState<string>();

  const onGenreChange = (
    genre: MultiValue<{ value: number; label: string }>
  ) => {
    console.log("onGenreChange", genre);
    // find genre object from data.genres
    const selectedGenres = data.genres.filter((g) =>
      genre.some((selected) => selected.value === g.id)
    );
    setSelectedGenre(selectedGenres);
  };

  const onYearChange = (
    year: SingleValue<{
      label: number;
      value: number;
    }>
  ) => {
    console.log("onYearChange", year);
    if (!year) {
      return;
    }
    setSelectedYear(year.value.toString());
  };

  const onFreeTextChange = (text: string) => {
    console.log("onFreeTextChange", text);
    setFreeText(text);
  };

  const filteredVideos = useMemo(() => {
    let fv = data.videos || [];
    if (selectedGenre && selectedGenre.length > 0) {
      fv = fv.filter((video) =>
        selectedGenre.some((genre) => genre.id === video.genre_id)
      );
    }
    if (selectedYear) {
      fv = fv.filter((video) => video.release_year.toString() === selectedYear);
    }
    if (freeText) {
      debugger;
      fv = fv.filter((video) => {
        console.log("video", video);
        return (
          video.title
            .toString()
            .toLowerCase()
            .includes(freeText.toLowerCase()) ||
          video.artist?.toLowerCase().includes(freeText.toLowerCase())
        );
      });
    }

    return fv;
  }, [selectedGenre, selectedYear, freeText, data]);

  const years = useMemo(() => {
    const duplicatedYears = data?.videos.map((video) => ({
      label: video.release_year,
      value: video.release_year,
    }));
    return duplicatedYears.filter(
      (year, index, self) =>
        index ===
        self.findIndex((t) => t.label === year.label && t.value === year.value)
    );
  }, [data.videos]);

  console.log("filteredVideos", {
    length: filteredVideos.length,
    filteredVideos,
  });

  return {
    videos: filteredVideos,
    years,
    genres: data.genres,
    selectedGenre,
    onGenreChange,
    onYearChange,
    onFreeTextChange,
  };
}
