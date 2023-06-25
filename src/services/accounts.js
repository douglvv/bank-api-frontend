import Api from "./api";
import { loginSuccess, updateAccount} from '../auth/authSlice';
import store from '../store/store';
import jwtDecode from "jwt-decode";

const AccountService = {
    register: async (params) => {
        const response = await Api.post('/account/create', params)
        
        return response
    },
    
    login: async (params) => {
        const response = await Api.post('/account/login', params);
        const token = response.data.token;
        const decoded = await jwtDecode(JSON.stringify(token));
        const account = decoded.account;
        
        store.dispatch(loginSuccess({account: account, token: token})); // Faz o dispatch da conta e token para a store do redux;

        return response;
    },

    showAccount: async (accountId) => {
        const token = localStorage.getItem('token');

        const response = await Api.get(`/account/${accountId}`, {
            headers: { Authorization: token}
        });

        const account = await response.data;

        store.dispatch(updateAccount({account: account}));
        
        return response;
    },
    
    /**
     * Envia a requisição para editar os dados da conta.
     * 
     * @param {*} accountId 
     * @param {*} formData: { name: "", cpf: "", password: "" }
     * @returns retorna a resposta da requisição
     */
    editAccount: async (accountId, formData) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`/account/${accountId}/edit`, formData, {
            headers: { Authorization: token}
        });

        const account = await response.data;

        store.dispatch(updateAccount({account: account}));

        return response;
    },
}

export default AccountService;