import { Global } from "@/Global";
import axios from "axios";

export default class ServiceEmpleados{
    urlEmpleados = Global.urlEmpleados
    getToken(user){
        let request = "auth/login"
        return new Promise(resolve => {
            axios.post(this.urlEmpleados+request, user).then(response => {
                resolve(response)
            })
        })
    }

    getPerfil(){
        let request = "api/empleados/perfilempleado"
        let header = {'Authorization': "bearer "+sessionStorage.getItem("token")}
        return new Promise(resolve=>{
            axios.get(this.urlEmpleados+request, {headers:header}).then(response=>{
                resolve(response.data)
            })
        })
    }
    getSubordinados(){
        let request = "api/empleados/subordinados"
        let header = {'Authorization': "bearer "+sessionStorage.getItem("token")}
        return new Promise(resolve=>{
            axios.get(this.urlEmpleados+request, {headers:header}).then(response=>{
                resolve(response.data)
            })
        })
    }
}