import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerTable from "./CustomerTable";

interface customerProps {
  name: string;
}

export default function Customer(): JSX.Element {
  const [customer, setCustomer] = useState<any[]>([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/user/list")
      .then((res) => {
        setCustomer(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // console.log(Array.isArray(customer));

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이름</th>
            <th scope="col">생년월일</th>
            <th scope="col">성별</th>
            <th scope="col">직업</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {customer.map((data) => {
            return (
              <CustomerTable
                id={data.id}
                name={data.name}
                birth={data.birthday}
                gender={data.gender}
                job={data.job}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
