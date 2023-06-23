import { useState } from "react";
import { useSnackContext } from "../../context/snacks-context";
import "./Table.css";
export const Table = () => {
  const { snacks, setSnacks } = useSnackContext();
  const [flag, setFlag] = useState(false);
  const alphabeticalSort = ["product_name", "ingredients"];
  const sortHandler = (e) => {
    alphabeticalSort.some((element) => element === e.target.id)
      ? setSnacks((prev) =>
          [...prev].sort((a, b) =>
            flag
              ? a[e.target.id] < b[e.target.id]
                ? -1
                : 1
              : a[e.target.id] < b[e.target.id]
              ? 1
              : -1
          )
        )
      : setSnacks((prev) =>
          [...prev].sort((a, b) =>
            flag
              ? a[e.target.id] - b[e.target.id]
              : b[e.target.id] - a[e.target.id]
          )
        );
    setFlag(!flag);
  };
  return (
    <table>
      <tbody>
        <tr>
          <th id="id" onClick={(e) => sortHandler(e)}>
            ID
          </th>
          <th id="product_name" onClick={sortHandler}>
            Product Name
          </th>
          <th id="product_weight" onClick={sortHandler}>
            Product Weight
          </th>
          <th id="price" onClick={sortHandler}>
            Price (INR)
          </th>
          <th id="calories" onClick={sortHandler}>
            Calories
          </th>
          <th id="ingredients" onClick={sortHandler}>
            Ingredients
          </th>
        </tr>
        {snacks.map((snack) => (
          <tr key={snack.id}>
            {Object.values(snack).map((s, index) =>
              index === 5 ? (
                <td key={index}>{s.join(", ")}</td>
              ) : (
                <td key={index}>{s}</td>
              )
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
