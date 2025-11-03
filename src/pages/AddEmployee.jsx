import { useState } from "react";
import { addEmployee } from "../api";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [form, setForm] = useState({
    name: "",
    password: "",
    imageUrl: "",
    role: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addEmployee(form);
    navigate("/")
  };

  return (
    <div>
      <h2>Add Employeee</h2>
      <form onSubmit={handleSubmit}>
        <input
          required
          placeholder="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          required
          placeholder="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
        />
        <input
          required
          placeholder="add image url"
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
        />
        <input
          required
          placeholder="role"
          name="role"
          value={form.role}
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
    </div>
  );
};

export default AddEmployee;
