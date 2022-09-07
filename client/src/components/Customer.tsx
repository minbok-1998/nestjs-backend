import React, { useEffect, useState } from "react";
import axios from "axios";
import CustomerTable from "./CustomerTable";
import AddCustomer from "./AddCustomer";

export default function Customer(): JSX.Element {
  const [customer, setCustomer] = useState<any[]>([]);

  const getUserList = async () => {
    try {
      const data = await axios.get("/user/list").then((res) => res.data);
      setCustomer(data);
      // setCustomer(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserList();
  }, [customer]);

  return (
    <div className="d-flex p-2 flex-column">
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
                  key={data.id}
                  id={data.id}
                  name={data.name}
                  birthday={data.birthday}
                  gender={data.gender}
                  job={data.job}
                />
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="d-flex justify-content-end">
        <AddCustomer />
      </div>
    </div>
  );
}
