import axios from "axios";

interface Props {
  id: string;
}

export default function DeleteCustomer(props: Props): JSX.Element {
  const url = "/user/list" + props.id;

  const deleteCustomer = async () => {
    try {
      await axios.delete(url);
    } catch (error) {
      console.log(error);
    }
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
