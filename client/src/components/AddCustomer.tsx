import axios from "axios";
import React, { useState } from "react";

export default function AddCustomer() {
  const [name, setName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [job, setJob] = useState("");

  const hadleChangeName = (e: any) => {
    setName(e.target.value);
  };

  const hadleChangeBirth = (e: any) => {
    setBirthday(e.target.value);
  };

  const hadleChangeGender = (e: any) => {
    setGender(e.target.value);
  };

  const hadleChangeJob = (e: any) => {
    setJob(e.target.value);
  };

  const refresh = () => {
    setName("");
    setBirthday("");
    setGender("");
    setJob("");
  };

  const url = "/user/list";

  const submit = async () => {
    try {
      await axios.post(url, {
        name: name,
        birthday: birthday,
        gender: gender,
        job: job,
      });
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="이름"
        aria-label="name"
        value={name}
        onChange={hadleChangeName}
      />
      <input
        type="text"
        className="form-control"
        placeholder="생년월일"
        aria-label="birth"
        value={birthday}
        onChange={hadleChangeBirth}
      />
      <input
        type="text"
        className="form-control"
        placeholder="성별"
        aria-label="gender"
        value={gender}
        onChange={hadleChangeGender}
      />
      <input
        type="text"
        className="form-control"
        placeholder="직업"
        aria-label="job"
        value={job}
        onChange={hadleChangeJob}
      />
      <button
        type="button"
        className="btn btn-primary btn-sm"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        onClick={submit}
      >
        고객 정보 추가
      </button>
    </div>

    // 모달창
    // <>
    //   <div className="d-flex p-2">
    // <button
    //   type="button"
    //   className="btn btn-primary btn-sm"
    //   data-bs-toggle="modal"
    //   data-bs-target="#exampleModal"
    // >
    //   고객 정보 추가
    // </button>

    //     <div
    //       className="modal fade"
    //       id="exampleModal"
    //       tabIndex={-1}
    //       aria-labelledby="exampleModalLabel"
    //       aria-hidden="true"
    //     >
    //       <div className="modal-dialog modal-dialog-scrollable">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <h5 className="modal-title" id="exampleModalLabel">
    //               Modal title
    //             </h5>
    //             <button
    //               type="button"
    //               className="btn-close"
    //               data-bs-dismiss="modal"
    //               aria-label="Close"
    //             ></button>
    //           </div>
    //           <div className="modal-body">...</div>
    //           <div className="modal-footer">
    //             <button
    //               type="button"
    //               className="btn btn-secondary"
    //               data-bs-dismiss="modal"
    //             >
    //               Close
    //             </button>
    //             <button type="button" className="btn btn-primary">
    //               Save changes
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
