import React, { useEffect } from 'react';
import axios from 'axios';

function Customer() {
  useEffect(() => {
    axios.get('http://localhost:5000/user/list').then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">이미지</th>
            <th scope="col">이름</th>
            <th scope="col">생년월일</th>
            <th scope="col">성별</th>
            <th scope="col">직업</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Customer;
