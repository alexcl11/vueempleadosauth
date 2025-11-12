<template>
    <div class="login-root">
    <div class="bg-layer"></div>

    <div class="login-card" role="main">
        <h2 class="title">Iniciar sesión</h2>

        <form class="login-form" @submit.prevent="getToken()">
            <label for="username">Usuario</label>
            <input id="username" type="text" v-model="username" required />

            <label for="password">Contraseña</label>
            <input id="password" type="password" v-model="password" required />

            <button class="btn-submit" type="submit">Entrar</button>
        </form>

        <p class="help">¿No tienes cuenta? Contacta con el administrador.</p>
    </div>
</div>
</template>

<script>
    import ServiceEmpleados from '@/services/ServiceEmpleados' 
    const servicio = new ServiceEmpleados
    export default{
        name: "LoginComponent",
        data(){
            return{
                username: "",
                password:""
            }
        },
        methods:{
            getToken(){
                let user={
                        username: this.username,
                        password: this.password
                    }   
                servicio.getToken(user).then(response => {
                    sessionStorage.setItem('token',response.data.response)
                    alert(sessionStorage.getItem("token"))
                })
                this.$router.push("/perfil")
            }
            
        }
    }
</script>

<style scoped>
:host {
	display: block;
	min-height: 100vh;
}

.login-root {
	position: relative;
	min-height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	background: linear-gradient(135deg, #2b5876 0%, #4e4376 100%);
	overflow: hidden;
}

.bg-layer {
	position: absolute;
	inset: 0;
	background-image: radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(135deg, rgba(255,255,255,0.02), rgba(0,0,0,0.08));
	background-size: 40px 40px, cover;
	filter: blur(8px);
	transform: scale(1.05);
	z-index: 0;
}

.login-card {
	position: relative;
	z-index: 2;
	width: 360px;
	max-width: calc(100% - 3rem);
	padding: 2rem;
	border-radius: 16px;
	background: rgba(255,255,255,0.06);
	box-shadow: 0 10px 30px rgba(0,0,0,0.4);
	color: #ffffff;
	backdrop-filter: blur(6px);
	-webkit-backdrop-filter: blur(6px);
	border: 1px solid rgba(255,255,255,0.08);
	text-align: center;
}

.title {
	margin: 0 0 1rem 0;
	font-size: 1.4rem;
	letter-spacing: 0.4px;
}

.login-form {
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-top: 0.5rem;
}

.login-form label {
	text-align: left;
	font-size: 0.85rem;
	opacity: 0.95;
}

.login-form input {
	width: 100%;
	padding: 0.7rem 0.9rem;
	border-radius: 10px;
	border: none;
	outline: none;
	background: rgba(255,255,255,0.06);
	color: #fff;
	box-shadow: inset 0 1px 0 rgba(255,255,255,0.02);
}

.login-form input:focus {
	box-shadow: 0 0 0 3px rgba(255,255,255,0.04);
}

.btn-submit {
	margin-top: 0.5rem;
	padding: 0.8rem 1rem;
	border-radius: 10px;
	border: none;
	cursor: pointer;
	font-weight: 600;
	color: #1b1b1b;
	background: linear-gradient(90deg,#ffe259,#ffa751);
	transition: transform .12s ease, box-shadow .12s ease;
}

.btn-submit:hover {
	transform: translateY(-2px);
	box-shadow: 0 8px 20px rgba(255,165,0,0.14);
}

.help {
	margin-top: 1rem;
	font-size: 0.85rem;
	opacity: 0.85;
}

@media (max-width: 420px) {
	.login-card { padding: 1.25rem; border-radius: 12px; }
	.title { font-size: 1.15rem; }
}

</style>