import React from "react";
interface userProps {
  id: string;
  name: string;
  birthday: string;
  gender: string;
  job: string;
}

export default function CustomerTable(props: userProps) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.birthday}</td>
        <td>{props.gender}</td>
        <td>{props.job}</td>
      </tr>
    </>
  );
}
