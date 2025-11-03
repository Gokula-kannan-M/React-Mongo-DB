import { useEffect, useState } from "react";
import { getEmployees } from "../api";
import { Link } from "react-router-dom";
// import { getEmployeeById } from "../api";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    async function getAllEmployees() {
      const data = await getEmployees();
      // console.log(data);
      setEmployees(data);
    }
    getAllEmployees();
  }, []);
  return (
    <div>
      {employees.length > 0 &&
        employees.map((emp) => {
          const { _id, name, imageUrl } = emp;
          return (
            <div style={{ border: "1px solid red", padding: "1em" }} key={_id}>
              <img src={imageUrl} alt={imageUrl} width="100px" />
              <p>{name}</p>
              <br />
              <Link to={`/employee/${_id}`}>view</Link>
              <br />
              <Link to={`/edit/${_id}`}>edit</Link>
              <br />
              <Link to={`/delete/${_id}`}>delete</Link>
              {/* <button onClick={() => getEmployeeById(_id)}>click</button> */}
            </div>
          );
        })}

      {employees.length === 0 && <h2>Sorry no employees to display</h2>}
    </div>
  );
};

export default EmployeeList;
