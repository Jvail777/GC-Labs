import { useState } from "react";
import { Pet } from "../models/Pet";
import "../models/Pet.ts";

export function ArraysEx() {
  const [colors, setColors] = useState<string[]>([
    "red",
    "orange",
    "yellow",
    "green",
  ]);
  const [pets, setPets] = useState<Pet[]>([
    { name: "Buddy", type: "Dog", id: 1 },
    { name: "Cali", type: "Dog", id: 2 },
    { name: "Cloe", type: "Dog", id: 3 },
    { name: "molly", type: "cat", id: 4 },
  ]);

  function addColor(color: string): void {
    setColors([...colors, color]);
  }
  function removePet(id: number): void {
    setPets(pets.filter((pet) => pet.id !== id));
  }
  return (
    <div>
      <ol>
        {colors.map((color, index) => (
          <li key={index}>{color}</li>
        ))}
      </ol>
      <button onClick={() => addColor("blue")}>Blue</button>
      <button onClick={() => addColor("indigo")}>indigo</button>
      <button onClick={() => addColor("violet")}>violet</button>

      <table>
        <th>Name</th>
        <th>Type</th>
        <th>Action</th>

        {pets.map((pet) => (
          <tr key={pet.id}>
            <td>{pet.name}</td>
            <td>{pet.type}</td>
            <td>
              <button onClick={() => removePet(pet.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}
