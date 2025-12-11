function login() {
    const user = document.getElementById("usuario").value.trim();
    const pass = document.getElementById("senha").value.trim();
    const msg = document.getElementById("msg");

    if (user === "" || pass === "") {
        msg.innerHTML = "Preencha todos os campos!";
        msg.style.color = "yellow";
        return;
    }

    // LOGIN SIMPLES (pode trocar por o que quiser)
    if (user === "admin" && pass === "123") {
        msg.innerHTML = "Login realizado com sucesso!";
        msg.style.color = "lime";
    } else {
        msg.innerHTML = "Usuário ou senha incorretos!";
        msg.style.color = "red";
    }
}
