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

function validarEGuardarFormulario(event) {
  event.preventDefault();
  const nome = document.getElementById("name").value.trim();
  const cpf = document.getElementById("cpf").value.trim();
  const telefone = document.getElementById("phone").value.trim();
  const cep = document.getElementById("cep").value.trim();
  const rua = document.getElementById("adress").value.trim();
  const numero = document.getElementById("number").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("city").value.trim();
  const estado = document.getElementById("state").value.trim();
  const complemento = document.getElementById("complement").value.trim();

  if (
    !nome ||
    !cpf ||
    !telefone ||
    !cep ||
    !rua ||
    !numero ||
    !bairro ||
    !cidade ||
    !estado ||
    !complemento
  ) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  if (!isValidName(nome)) {
    alert("O nome deve conter apenas letras e espaços.");
    return;
  }

  if (!isValidCpf(cpf)) {
    alert("O CPF deve conter 11 dígitos numéricos.");
    return;
  }

  if (!isValidPhone(telefone)) {
    alert("O telefone deve conter 11 dígitos numéricos.");
    return;
  }

  if (!isValidCep(cep)) {
    alert("O CEP deve conter 8 dígitos numéricos.");
    return;
  }

  if (!isValidState(estado)) {
    alert("O estado deve conter 2 letras maiúsculas.");
    return;
  }
}

const form = document.getElementById("myForm");
form.addEventListener("submit", validarEGuardarFormulario);
