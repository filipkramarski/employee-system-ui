import React, {useState} from 'react'
import EmployeeService from "../services/EmployeeService";

const AddEmployee = () => {

    const [employee, setEmployee] = useState({
        id:"",
        firstName:"",
        lastName:"",
        emailId:"",
    });

    const handleChange = (e) =>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]: value })
    }

    const saveEmployee = (e) =>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee).then((response)=>{
            console.log(response);
        }).catch((error)=>{
            console.log(error);
        });
    }

    return (
        <div className="w-25 mx-auto shadow border-bottom">
            <div className="px-4 py-4">
                <div className="text-opacity-25 fw-semibold">
                    Add New Employee
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
                    <button onClick={saveEmployee}
                            type="submit" className="btn btn-space rounded text-white fw-semibold bg-success py-2 px-6 m-1">Save</button>
                    <button type="submit" className="btn btn-space rounded text-white fw-semibold bg-danger py-2 px-6 ">Clear</button>
                </div>
            </div>
        </div>
    );
};

export default AddEmployee