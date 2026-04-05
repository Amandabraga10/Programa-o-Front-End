function adicionarTarefa() {
    let input = document.getElementById("tarefaInput");
    let texto = input.value;

    // Validação
    if (texto.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    let lista = document.getElementById("listaTarefas");

    // Criar item da lista
    let li = document.createElement("li");

    let span = document.createElement("span");
    span.textContent = texto;

    // Botão concluir
    let btnConcluir = document.createElement("button");
    btnConcluir.textContent = "Concluir";
    btnConcluir.onclick = function () {
        li.classList.toggle("concluida");
    };

    // Botão remover
    let btnRemover = document.createElement("button");
    btnRemover.textContent = "Remover";
    btnRemover.onclick = function () {
        lista.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(btnConcluir);
    li.appendChild(btnRemover);

    lista.appendChild(li);

    input.value = "";
}