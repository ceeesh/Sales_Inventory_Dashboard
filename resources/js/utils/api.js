import axios from 'axios';

const BASED_URL = 'http://127.0.0.1:8000/'

class AuthApi {

    // LOGOUT
    logout = async () => {
        return await axios.post(`${BASED_URL}logout`)
    }

    // GET retrieving all active users 
    getAllActiveUsers = async (token) => {
        return await axios.get(`${BASED_URL}active_users`)
        // , { headers: token }
    }

    // GET retrieving all projects 
    getAllProjects = async (token) => {
        return await axios.get(`${BASED_URL}projects`)
        // , { headers: token }
    }

    // GET retrieving all In Progress Projects 
    getAllInProgressProjects = async (token) => {
        return await axios.get(`${BASED_URL}in_progress_projects`)
        // , { headers: token }
    }

    // GET retrieving all completed Projects
    getAllCompletedProjects = async (token) => {
        return await axios.get(`${BASED_URL}completed_projects`)
        // , { headers: token }
    }

    // GET retrieving all Products
    getAllProducts = async (token) => {
        return await axios.get(`${BASED_URL}products`)
        // , { headers: token }
    }

    // GET retrieving Inventories Quantities 
    getInventoriesQuantity = async (token) => {
        return await axios.get(`${BASED_URL}inventories`)
        // , { headers: token }
    }

    //GET retrieving all Sales
    getAllSales = async (token) => {
        return await axios.get(`${BASED_URL}sales`)
        // , { headers: token }
    }

    // POST new sales
    createNewSale = async (data) => {
        return await axios.post(`${BASED_URL}new_sales`, data)
    }

    // Update selected sales
    updateSale = async (data, sale_id) => {
        return await axios.put(`${BASED_URL}sales/${sale_id}`, data)
    }


    // DELETE selected sale
    deleteSale = async (sale_id) => {
        return await axios.delete(`${BASED_URL}sales/${sale_id}`)
    }

    // POST new product
    createNewProduct = async (data) => {
        return await axios.post(`${BASED_URL}new_product`, data)
    }

    // Update selected product
    updateProduct = async (data, product_id) => {
        return await axios.put(`${BASED_URL}product/${product_id}`, data)
    }

    // DELETE selected product
    deleteProduct = async (product_id) => {
        return await axios.delete(`${BASED_URL}product/${product_id}`)
    }

     // PUT new product
     activateButton = async (data, product_id) => {
        return await axios.put(`${BASED_URL}product/activate/${product_id}`, data)
    }

    // PUT new product
    imageUpload = async (data, product_id) => {
        return await axios.post(`${BASED_URL}product/image/${product_id}`, data)
    }
    // 'product/image/{product_id}'
}

export default new AuthApi();


// // POST Login user
// export const login = async ({ email, password }) => {
//     return await axios.post(`${BASED_URL}login`, { email, password })
// }

// POST Register user
// export const registerAcc = async ({ email, password, password_confirmation, name }) => {
//     return await axios.post(`${BASED_URL}register`, { email, password, password_confirmation, name })
// }

// POST Register user
