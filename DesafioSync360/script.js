document.getElementById("update-form").addEventListener("submit", function(event) {
  
  event.preventDefault();

  //definindo as variáveis no local da submissão
  let nome = document.getElementById("nome-input").value;
  let idade = document.getElementById("idade-input").value;
  let localizacao = document.getElementById("localizacao-input").value;
  let bio = document.getElementById("bio-input").value;

  //atualizando somente necessário
  if (nome) {
    document.getElementById("nome").textContent = nome;
  }
  if (idade) {
    //tratativa de excessão
    if (idade == 1) {
      document.getElementById("idade").textContent = idade + " ano";
    } else {
      document.getElementById("idade").textContent = idade + " anos";
    }
  }
  if (localizacao) {
    document.getElementById("localizacao").textContent = localizacao;
  }
  if (bio) {
    document.getElementById("bio").textContent = bio;
  }

});