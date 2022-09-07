import React from "react";
import DeleteCustomer from "./DeleteCustomer";
import UpdateCustomer from "./UpdateCustomer";

interface Props {
  id: string;
  name: string;
  birthday: string;
  gender: string;
  job: string;
}

export default function CustomerTable(props: Props) {
  return (
    <>
      <tr>
        <th scope="row">{props.id}</th>
        <td>{props.name}</td>
        <td>{props.birthday}</td>
        <td>{props.gender}</td>
        <td>{props.job}</td>
        <td>
          <UpdateCustomer />
        </td>
        <td>
          <DeleteCustomer id={props.id} />
        </td>
      </tr>
    </>
  );
}
