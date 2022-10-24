import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom";
import employeeService from "../services/EmployeeService";

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
                                <tr>
                                    <td className="px-5 py-2">
                                        <div className="text-sm-start">
                                            {employee.firstName}
                                        </div></td>
                                    <td className="px-5 py-2">
                                        <div className="text-sm-start">
                                            {employee.lastName}
                                        </div></td>
                                    <td className="px-5 py-2">
                                        <div className="text-sm-start">
                                            {employee.emailId}
                                        </div></td>
                                    <td className="text-end px-5 py-2">
                                        <a href="#" className="text-danger px-3">Edit</a>
                                        <a href="#" className="text-danger">Delete</a>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default EmployeeList