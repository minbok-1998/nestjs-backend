import axios from "axios";
import React, { useState } from "react";

interface Props {
  id: string;
  name: string;
  birthday: string;
  gender: string;
  job: string;
}

export default function UpdateCustomer(props: Props) {
  const url = "/user/list" + props.id;

  const [name, setName] = useState(props.name);
  const [birthday, setBirthday] = useState(props.birthday);
  const [gender, setGender] = useState(props.gender);
  const [job, setJob] = useState(props.job);
  const [isOpen, setIsOpen] = useState(false);

  const hadleChangeName = async (e: any) => {
    setName(e.target.value);
  };

  const hadleChangeBirthday = async (e: any) => {
    setBirthday(e.target.value);
  };

  const hadleChangeGender = async (e: any) => {
    setGender(e.target.value);
  };

  const hadleChangeJob = async (e: any) => {
    setJob(e.target.value);
  };

  const handleModal = async () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const close = async () => {
    setIsOpen(false);
  };

  const refresh = () => {
    setName("");
    setBirthday("");
    setGender("");
    setJob("");
  };

  const update = async () => {
    try {
      await axios.put(url, {
        name,
        birthday,
        gender,
        job,
      });
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button
        type="button"
        className="btn btn-primary btn-sm"
        onClick={handleModal}
      >
        수정
      </button>
      {isOpen ? (
        <div
          style={{
            position: "fixed",
            display: "flex",
            flexDirection: "column",
            width: "auto",
            height: "auto",
            backgroundColor: "lightGray",
            zIndex: "100",
          }}
        >
          <input
            type="text"
            className="form-control"
            placeholder="이름"
            aria-label="name"
            value={name}
            onChange={hadleChangeName}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="생년월일"
            aria-label="birthday"
            value={birthday}
            onChange={hadleChangeBirthday}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="성별"
            aria-label="gender"
            value={gender}
            onChange={hadleChangeGender}
          />
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="직업"
            aria-label="job"
            value={job}
            onChange={hadleChangeJob}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "end",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            <button
              type="button"
              className="btn btn-primary btn-sm"
              style={{ marginRight: "5px" }}
              onClick={update}
            >
              확인
            </button>
            <button
              type="button"
              className="btn btn-danger btn-sm"
              onClick={close}
            >
              취소
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}
