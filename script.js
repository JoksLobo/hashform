// const myForm = document.getElementById("myForm");

// myForm.addEventListener("submit", function (event) {
//   event.preventDefault();
//   alert("Formulario enviado com sucesso!");
// });

// função para verificar se o nome contèm apenas letras e espaços
function isValidName(string) {
  for (let i = 0; i < string.length; i++) {
    let char = string[i];

    if (
      !(
        (char >= "A" && char <= "Z") ||
        (char >= "a" && char <= "z") ||
        char === " "
      )
    ) {
      return false;
    }
  }
  return true;
}

// função para validar o cpf (11 digitos apenas)
function isValidCpf(cpf) {
  return cpf.length === 11 && !isNaN(cpf);
}

function isValidPhone(phone) {
  return phone.length === 11 && !isNaN(phone);
}

function isValidCep(cep) {
  return cep.length === 8 && !isNaN(cep);
}

function isValidState(state) {
  return (
    state.length === 2 &&
    state[0] >= "A" &&
    state[0] <= "Z" &&
    state[1] >= "A" &&
    state[1] <= "Z"
  );
}

console.log(isValidState("SP"));
