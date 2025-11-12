<template>
    <div class="perfil-root d-flex align-items-center justify-content-center py-5">
        <div class="card shadow-sm" style="width: 24rem;">
            <div class="card-body">
                <h5 class="card-title">Perfil del empleado</h5>
                <h6 class="card-subtitle mb-2 text-muted">ID: {{ empleado.idEmpleado }}</h6>

                <ul class="list-group list-group-flush mb-3">
                    <li class="list-group-item"><strong>Apellido:</strong> {{ empleado.apellido }}</li>
                    <li class="list-group-item"><strong>Oficio:</strong> {{ empleado.oficio }}</li>
                    <li class="list-group-item"><strong>Salario:</strong> {{ empleado.salario }} €</li>
                    <li class="list-group-item"><strong>Director (ID):</strong> {{ empleado.director }}</li>
                </ul>

            </div>
        </div>
    </div>
</template>

<script>
import ServiceEmpleados from '@/services/ServiceEmpleados'
    const servicio = new ServiceEmpleados()
    export default{
        name: "PerfilComponent",
        data(){
            return{
                empleado: {}
            }
        },
        mounted(){
            if(!sessionStorage.getItem("token")){
                this.$router.push("/login")
                return
            } 


            servicio.getPerfil().then(response=>{
                this.empleado = response
            })

        }
    }
</script>