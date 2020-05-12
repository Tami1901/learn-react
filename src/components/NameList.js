import React from "react";
import Person from "./Person";

function NameList() {
  const names = ["Fran", "Tamara", "Kandi", "Fran"];
  const persons = [
    {
      id: 1,
      name: "Fran",
      age: 19,
      skill: "React",
    },
    {
      id: 2,
      name: "Tamara",
      age: 20,
      skill: "HTML",
    },
    {
      id: 3,
      name: "Kandi",
      age: 4,
      skill: "Sleep",
    },
  ];
  const nameList = names.map((name, index) => (
    <h2 key={index}>
      {index} - {name}
    </h2>
  ));
  return <div>{nameList}</div>;
}

export default NameList;
