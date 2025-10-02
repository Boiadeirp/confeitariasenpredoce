
 const password = document.getElementById('password')
const confirmaPassword = document.getElementById('confirma-password')

function cadastrarUsuario() {
    const nome = document.getElementById('nome')
    const email = document.getElementById('email')
    

    if (password.value == confirmaPassword.value) {
        //Cadastrar no localStorage

        //verifique se a lista esiste no local storage
        let lista = window.localStorage.getItem('usuario')
        if ( lista == undefined){
            //nao esiste lista
            lista = []

            //adicionar usuario a lista
            let usuario = {
                'nome': nome.value,
                'email': email.value,
                'password': password.value
            }
            lista.push(usuario)
            //salvar no storge
            window.localStorage.setItem('usuario', JSON.stringify(lista))
            alert('usuario cadastrado')
        }else{
            //adicionar novos
            //primeiro buscar a lista
            let listaE = window.localStorage.getItem('usuario')
            listaE = JSON.parse(listaE)

            let usuarioA = {
                'nome':nome.value,
                'email':email.value,
                'password':password.value
            }
            //adicione a lista
            listaE.push(usuarioA)
            //salvar lista no storge
            window.localStorage.setItem('usuario',JSON.stringify (listaE))

            //linpar os dados do formulario
            nome.value = ''
            email.value = ''
            password.value = ''
            confirmaPassword.value = ''
        }
    }else {
        alert('Senha Invalida')
        password.value = ''
        confirmaPassword.value = ''
    }

    

}

function toggleSenha(){
    const exibirSenha = document.getElementById('exibir-senha')
    if (exibirSenha.checked == true){
        password.type = 'text'
        confirmaPassword.type = 'text'
        //mostrar senhas
    }else{

        password.type = 'password'
        confirmaPassword.type = 'password'
        //esconder as senhas
    }

}