document.getElementById("cadastro").addEventListener("click", 
    function(){

        const email = document.getElementById("email");
        const senha = document.getElementById("senha");
        const nome = document.getElementById("nome");
        const usuario = document.getElementById("usuario");

        const emailValue = email.value;
        const senhaValue = senha.value;
        const nomeValue = nome.value;
        const usuarioValue = usuario.value;

        if(emailValue === ""){
            email.classList.add("erro")
            return
        } else{
            email.classList.remove("erro")
        }
        
        if(senhaValue === ""){
            senha.classList.add("erro")
            return
        }else{
            senha.classList.remove("erro")
        }
        if(nomeValue === ""){
            nome.classList.add("erro")
            return
        }else{
            nome.classList.remove("erro")
        }
        

        if(usuarioValue === ""){
            usuario.classList.add("erro")
            return
        }else{
            usuario.classList.remove("erro")
        }
        
        window.location.href = "pagina.html"
    }
)