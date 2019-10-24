import decode from "jwt-decode";

class AuthService {
    constructor(apiRoot) {
        this.apiRoot = apiRoot || "https://lbs-african-marketplace.herokuapp.com";
        this.fetch = this.fetch.bind(this);
        this.login = this.login.bind(this);
        this.getProfile = this.getProfile.bind(this);
    }

    login(username, password) {
        return this.fetch(`/auth/login`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        }).then(res => {
            this.setToken(res.token);
            return Promise.resolve(res);
        });
    }

    signup(username, password, department) {
        return this.fetch(`/auth/register`, {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
                department
            })
        });
    }

    loggedIn() {
        const token = this.getToken();
        return !!token && !this.isTokenExpired(token);
    }

    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) {
                return true;
            } else return false;
        } catch (err) {
            return false;
        }
    }

    setToken(idToken) {
        localStorage.setItem("id_token", idToken);
    }

    getToken() {
        return localStorage.getItem("id_token");
    }

    logout() {
        localStorage.removeItem("id_token");
    }

    getProfile() {
        return decode(this.getToken());
    }

    fetch(url, options) {
        const headers = {
            Accept: "application/json",
            "Content-Type": "application/json"
        };

        if (this.loggedIn()) {
            headers["Authorization"] = this.getToken();
        }

        return fetch(this.apiRoot + url, {
            headers,
            ...options
        })
            .then(this._checkStatus)
            .then(response => response.json());
    }

    _checkStatus(response) {
        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            var error = new Error(response.statusText);
            error.response = response;
            throw error;
        }
    }
}

const Auth = new AuthService();
export default Auth;
