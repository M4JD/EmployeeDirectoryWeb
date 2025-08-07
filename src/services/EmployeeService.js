import APIService from "./base/APIService";

const getEmployee = (pageNumber, pageSize) => {
    return APIService().get(`employee`, { p: pageNumber, s: pageSize });
};

const getEmployees = (id) => {
    return APIService().get(`employee`,);
};

const updateEmployee = (request) => {
    return APIService().put(`profile/${request.id}`, request);
};

const deleteEmployee = (request) => {
    return APIService().delete(`profile/${request.id}`, request);
};

export {
    getEmployee,
    getEmployees,
    updateEmployee,
    deleteEmployee,
}