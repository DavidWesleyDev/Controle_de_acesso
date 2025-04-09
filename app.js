alert('Bem vindo ao Sistema de Controle de Acessos! ');

let usuario = prompt('Digite seu usuario');
let senha = prompt('Digite sua senha?');

if (usuario == 'admin' && senha == 'admin1234'){
    alert ('login concluído');
}else {
    alert('Senha incorreta! Acesso negado.');
}