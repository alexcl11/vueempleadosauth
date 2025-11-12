<template>
    <div class="perfil-root py-5">
        <div class="container">
            <div class="card shadow-sm">
                <div class="card-body">
                    <h5 class="card-title mb-3">Subordinados</h5>

                    <div class="table-responsive">
                        <table class="table table-striped table-hover align-middle mb-0">
                            <thead class="table-dark">
                                <tr>
                                    <th scope="col">ID Empleado</th>
                                    <th scope="col">Apellido</th>
                                    <th scope="col">Oficio</th>
                                    <th scope="col" class="text-end">Salario</th>
                                    <th scope="col" class="text-center">ID Director</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="e in empleados" :key="e">
                                    <td>{{e.idEmpleado}}</td>
                                    <td>{{e.apellido}}</td>
                                    <td>{{e.oficio}}</td>
                                    <td class="text-end">{{e.salario}} €</td>
                                    <td class="text-center text-muted">{{e.director}}</td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
                </div>
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
                empleados:[]
            }
        },
        mounted(){
            if(!sessionStorage.getItem("token")){
                this.$router.push("/login")
                return
            }


            servicio.getSubordinados().then(response=>{
                this.empleados = response
            })

        }
    }
</script>