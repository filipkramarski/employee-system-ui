import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import employeeService from "../services/EmployeeService";
import Employee from "./Employee";
import EmployeeService from "../services/EmployeeService";

const EmployeeList = () => {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await employeeService.getEmployees();
                setEmployees(response.data);
            }catch (error){
                console.log(error);
            }
            setLoading(false);
        };
        fetchData();
    },[])

    const deleteEmployee = (e,id) => {
        e.preventDefault();
        EmployeeService.deleteEmployees(id).then((res) => {
           if(employees){
               setEmployees((prevElement) => {
                   return prevElement.filter((employee) => employee.id !== id);
               })
           }
        });
    }

    return (
        <div className="container mx-auto my-4">
            <div className="h-25">
                <button
                    onClick={() => navigate("/addEmployee")}
                    className="rounded bg-secondary text-white px-6 py-2 fw-semibold" >Add Employee</button>
            </div>
            <div className="border-bottom shadow">
                <table className="table">
                    <thead className="bg-light">
                        <tr>
                            <th scope="col" className="fw-light text-uppercase px-5 py-2">First Name</th>
                            <th scope="col" className="fw-light text-uppercase px-5 py-2">Last Name</th>
                            <th scope="col" className="fw-light text-uppercase px-5 py-2">E-mail ID</th>
                            <th scope="col" className="text-end fw-light text-uppercase px-5 py-2">Actions</th>
                        </tr>
                    </thead>
                    {!loading && (
                        <tbody>
                            {employees.map((employee) => (
                                <Employee
                                    employee={employee}
                                    deleteEmployee={deleteEmployee}
                                    key={employee.id}>
                                </Employee>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList