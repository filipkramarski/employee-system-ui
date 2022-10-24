import axios from "axios/dist/axios";

const EMPLOYEE_API_BASE_URL="http://localhost:8081/api/v1/employees"

class EmployeeService {

    saveEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();