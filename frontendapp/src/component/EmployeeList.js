import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const EmployeeList = () => {
    const [employee, setEmp] = useState([]);
    console.log("hii");
    useEffect(() => {
        axios.get("http://localhost:4000/").then((response)=>{
            setEmp(response.data);
            console.log(response.data);
        });
    }, []);

    const renderList = () =>{
        return employee.map((emp)=>{
            return <tr key={emp.empid}><td>{emp.empid}</td>
            <td>{emp.ename}</td>
            <td>{emp.sal}</td>
            </tr>
        });
    }
 
    return (
        <div>
            <h1>employees</h1>
            <table style={{"textAlign":"center","border":"2px","border-collapse":"collapse"}}>
                <thead><th><td>Emp Id</td><td>Emp Name</td><td>Salary</td></th></thead>
                <tbody>
                    {renderList()}
                </tbody>
            </table>
        </div>
    )
}

export default EmployeeList;