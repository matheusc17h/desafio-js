//1° passo

const button = document.querySelector('.add-task-btn')
const input = document.querySelector('.input-task')
const inputEtiqueta = document.querySelector(".input-task2");


const listaCompleta = document.querySelector('.list-tasks')



 // 4° passo
let minhaListaDeItens = []


// 3° passo

function adicionarNovaTarefa() {
        const valorTarefa = input.value;
        const valorEtiqueta = inputEtiqueta.value;
        
        
        if (valorTarefa === '') return; // evita adicionar tarefas vazias
        
        minhaListaDeItens.push({
            tarefa: valorTarefa,
            etiqueta: valorEtiqueta,
            concluida: false
        });
        
        input.value = ''; // limpa o input após adicionar
        inputEtiqueta.value = ''; // limpa o input da etiqueta
        
        mostrarTarefa();
        }

        function mostrarImagem() {

            document.getElementById("concluir").style.display="none";
            document.getElementById("imagem").style.display="block";
            mostrarTarefa();
        }
        
        

       


        function mostrarTarefa() {
                let novaLi = '';
                minhaListaDeItens.forEach((item, posicao) => {
                    novaLi += `
                        <div id="task-style">
                            <li class="task">
                                <h2 id="title-end">${item.tarefa}</h2>
                                <div id="flex-section">
                                    <div id="flex">
                                        <div>
                                            <p class="end">${item.etiqueta}</p>
                                        </div>
                                        <p class="data">Criado em: 21/08/2024</p>
                                        <!-- Botão de concluir ou imagem substituindo o botão -->
                            <button class="concluir" onclick="itemConcluido(${posicao})" style="display:
                             ${item.concluida ? 'none' : 'inline-block'};">
                                Concluir
                            </button>
                            
                            <!-- A imagem vai substituir o botão quando a tarefa for concluída -->
                            <img src="img/feito.png" alt="Tarefa concluída" style="display: ${item.concluida ?
                                 'inline-block' : 'none'}; width: 30px; height: 30px; margin-top: 2px
                                 padding-left:0px;">
                                        
                                    </div>
                                </div>
                            </li>
                        </div>
                    `;
                });
            
                listaCompleta.innerHTML = novaLi;
            }





           
        

      


       

        function itemConcluido (posicao) {

              minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida;


              

                mostrarTarefa();
               
                
                
        }
        




//2° passo
button.addEventListener('click', adicionarNovaTarefa )
document.getElementById("concluir").addEventListener("click", mostrarImagem);


