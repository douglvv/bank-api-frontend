import Api from "./api";

const AccountService = {
    register: (params) => Api.post('/account/create', params),
    login: (params) => Api.post('/account/login', params)
}

export default AccountService;