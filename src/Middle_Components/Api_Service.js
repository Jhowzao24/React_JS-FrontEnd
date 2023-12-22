import { Component } from "react";

export default class BackEndService extends Component{
    static InsertR(body){
        return fetch('http://127.0.0.1:8000/Urls/Register_Datas/', {
            'method': 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body:JSON.stringify(body)
        }).then(resp => resp.json())
    }
}