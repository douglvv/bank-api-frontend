import Api from "./api";
import { loginSuccess, updateAccount } from '../auth/authSlice';
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

        store.dispatch(loginSuccess({ account: account, token: token })); // Faz o dispatch da conta e token para a store do redux;

        return response;
    },

    showAccount: async (accountId) => {
        const token = localStorage.getItem('token');

        const response = await Api.get(`/account/${accountId}`, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    },

    /**
     * Envia a requisição para editar os dados da conta.
     * 
     * @param {Int} accountId 
     * @param {{ name: String, cpf: String }} formData
     * @returns retorna a resposta da requisição
     */
    editAccount: async (accountId, formData) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`/account/${accountId}/edit`, formData, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    },

    /**
     * Envia a requisição para alterar a conta
     * @param {Int} accountId 
     * @param {{currentPassword: String, newPassword: String}} formData 
     * @returns retorna a resposta da requisição
     */
    changePassword: async (accountId, formData) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`account/${accountId}/changePassword`, formData, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    },

    /**
     * Envia a requisição para mostrar o extrato da conta
     * @param {Int} accountId 
     * @returns um array de objetos com as transações da conta
     */
    showStatement: async (accountId) => {
        const token = localStorage.getItem('token');

        const response = await Api.get(`/account/${accountId}/statement`, {
            headers: { Authorization: token }
        });

        const statement = await response.data;

        return statement;
    },

    withdraw: async (accountId, value) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`account/${accountId}/withdraw`, value, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    },

    deposit: async (accountId, value) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`account/${accountId}/deposit`, value, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    },

    /**
     * Envia a requisição de transferencia
     * @param {*} accountId 
     * @param {{idReceiver: String, value: String}} formData 
     * @returns a resposta da requisição
     */
    transfer: async (accountId, formData) => {
        const token = localStorage.getItem('token');

        const response = await Api.post(`account/${accountId}/transfer`, value, {
            headers: { Authorization: token }
        });

        const account = await response.data;

        store.dispatch(updateAccount({ account: account }));

        return response;
    }
}

export default AccountService;