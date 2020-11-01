import React, {useState} from 'react';
import axios from "axios";


const LoginService = {
    login: (username, password) => {
        return axios
            .post("http://localhost:8080/login", {
                username,
                password,
            })

    }
}

export default LoginService;