import { useState } from "react";
import "./Search.css";
import { useSnackContext } from "../../context/snacks-context";
import { snacks as snacksDb } from "../../db/db";
export const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { setSnacks } = useSnackContext();
  const searchHandler = (e) => {
    setSearchQuery(e.target.value);
    setSnacks(() =>
      snacksDb.filter(
        ({ product_name, ingredients }) =>
          product_name.toLowerCase().includes(e.target.value.toLowerCase()) ||
          ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(e.target.value.toLowerCase())
          )
      )
    );
  };
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={searchHandler}
      />
    </div>
  );
};
