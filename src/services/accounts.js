import Api from "./api";
import { loginSuccess } from '../auth/authSlice';
import store from '../store/store';
import jwtDecode from "jwt-decode";

const AccountService = {
    register: (params) => Api.post('/account/create', params),
    
    login: async (params) => {
        const response = await Api.post('/account/login', params);
        const token = response.data.token;
        const decoded = await jwtDecode(JSON.stringify(token));
        const account = decoded.account;        

        store.dispatch(loginSuccess({account: account, token: token})); // Faz o dispatch da conta e token para a store do redux;
    },
}

export default AccountService;