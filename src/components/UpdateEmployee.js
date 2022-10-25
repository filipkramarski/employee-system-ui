import React, {useEffect} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {useState} from "react";
import employeeService from "../services/EmployeeService";

const UpdateEmployee = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [employee, setEmployee] = useState({
        id: id,
        firstName: "",
        lastName: "",
        emailId: "",
    });

    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({ ...employee, [e.target.name]: value });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await employeeService.getEmployeeById(employee.id);
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const updateEmployee = (e) => {
        e.preventDefault();
        console.log(employee);
        employeeService.updateEmployee(employee, id)
            .then((response) => {
                navigate("/employeeList");
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-25 mx-auto shadow border-bottom">
            <div className="px-4 py-4">
                <div className="text-opacity-25 fw-semibold">
                    Update Employee
                </div>
                <div className="align-items-center justify-content-center h-25 my-4">
                    <label className="d-block text-gray font-monospace">First Name</label>
                    <input className="h-25 w-75 border mt-2 px-sm-2 py-sm-2"
                           type="text"
                           name="firstName"
                           value={employee.firstName}
                           onChange={(e) => handleChange(e)}>
                    </input>
                </div>
                <div className="align-items-center justify-content-center h-25 my-4">
                    <label className="d-block text-gray font-monospace">Last Name</label>
                    <input className="h-25 w-75 border mt-2 px-sm-2 py-sm-2"
                           type="text"
                           name="lastName"
                           value={employee.lastName}
                           onChange={(e) => handleChange(e)}>
                    </input>
                </div>
                <div className="align-items-center justify-content-center h-25 my-4">
                    <label className="d-block text-gray font-monospace">E-mail</label>
                    <input className="h-25 w-75 border mt-2 px-sm-2 py-sm-2"
                           type="email"
                           name="emailId"
                           value={employee.emailId}
                           onChange={(e) => handleChange(e)}>
                    </input>
                </div>
                <div className="align-items-center justify-content-center h-25 my-4 ">
                    <button onClick={updateEmployee}
                            type="submit" className="btn btn-space rounded text-white fw-semibold bg-success py-2 px-6 m-1">Update</button>
                    <button type="submit" className="btn btn-space rounded text-white fw-semibold bg-danger py-2 px-6 ">Cancel</button>
                </div>
            </div>
        </div>
    );
}

export default UpdateEmployee;