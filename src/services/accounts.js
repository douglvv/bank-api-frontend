import Api from "./api";

const AccountService = {
    register: (params) => Api.post('/account/create', params)
}

export default AccountService;