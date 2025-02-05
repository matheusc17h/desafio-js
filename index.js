//1° passo

const button = document.querySelector('.add-task-btn')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-tasks')



 // 4° passo
let minhaListaDeItens = []


// 3° passo
function adicionarNovaTarefa(){

       minhaListaDeItens.push(input.value)


       mostrarTarefa()
        }


        function mostrarTarefa() {



                let novaLi = ''

                minhaListaDeItens.forEach((tarefa ) => {

                novaLi = novaLi +  ` 
                
                <div id="task-style" >
                <li class="task">
                
                <h2 id="title-end">${tarefa}</h2>

                
                  <div id="flex-section">
                <div id="flex">
                <div>
                <p class="end">${tarefa}</p>
                </div>
                <p class="data">Criado em: 21/08/2024</p>
                <button  type="submit" class="concluir">Concluir</button>
                
                
                </li> 
                </div>
                </div>
              
                
                `

              


                })

                listaCompleta.innerHTML = novaLi
        }


      


       


        




//2° passo
button.addEventListener('click', adicionarNovaTarefa )