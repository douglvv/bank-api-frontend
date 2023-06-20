import Api from "./api";

const AccountService = {
    register: (params) => Api.post('/account/create', params),
    login: async (params) => {
        const response = await Api.post('/account/login', params);
        localStorage.setItem('account', JSON.stringify(response.data.account)); // Armazena a conta no local storage
        localStorage.setItem('token', response.data.token); // Armazena o token no local storage
    },
}

export default AccountService;