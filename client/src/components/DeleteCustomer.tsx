import axios from "axios";

interface Props {
  id: string;
}

export default function DeleteCustomer(props: Props): JSX.Element {
  const url = "/user/list" + props.id;

  const deleteCustomer = async () => {
    await axios
      .delete(url)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={deleteCustomer}
    >
      삭제
    </button>
  );
}
