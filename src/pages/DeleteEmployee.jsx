import { useNavigate, useParams } from "react-router-dom";
import { deleteEmployee } from "../api";
import { useEffect } from "react";
const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const confirmDelete = async () => {
      if (window.confirm("Are you sure you want to delete this employee?")) {
        await deleteEmployee(id);
      }
      navigate("/");
    };
    confirmDelete();
  }, [id, navigate]);

  return <div>deleting employee..</div>;
};
export default DeleteEmployee;
