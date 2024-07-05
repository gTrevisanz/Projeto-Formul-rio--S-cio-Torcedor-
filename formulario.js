function Enviar(){

let nomeUsuario = document.getElementById('nome').value
let emailUsuario = document.getElementById('email').value
let senhaUsuario = document.getElementById('senha').value
let dataUsuario = document.getElementById('dtnasc').value

let sexoUsuario = document.querySelector("input[name='sexo']:checked").value

alert('Seu nome é:' + nomeUsuario + '\n'
    +  'Seu email é' + emailUsuario + '\n' 
    +  'Sua senha é' + senhaUsuario + '\n'
    +  'Você nasceu' + dataUsuario + '\n'
    +  'Sua gênero é' + sexoUsuario + '\n')
}