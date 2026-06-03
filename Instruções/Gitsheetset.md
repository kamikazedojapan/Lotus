

| 💻 Comando Git | 🕒 Quando usar? | ❓ O que ele faz na prática? | 🎯 Por que fazer isso? |
| --- | --- | --- | --- |
git clone https://github.com/AngelZ5/Glowflow:| Apenas na primeira vez que for começar a mexer no projeto | Copia a pasta inteira do Glowflow da internet para o seu computador. | Para você ter os arquivos do projeto prontos para editar na sua máquina.
| `git checkout main` | Sempre antes de começar uma tarefa nova no dia. | Muda a sua tela para a linha do tempo principal do projeto. | Para garantir que você não vai criar coisas novas baseado em códigos antigos. | 
| `git pull origin main` | Logo após dar o comando `git checkout main`. | Vai até o GitHub e baixa todas as novidades que o seu time fez. | Para o seu computador ficar atualizado em tempo real com o resto do grupo. |
| `git checkout -b <nome>` | Sempre que for iniciar uma tarefa nova do Trello. | Cria uma linha do tempo alternativa (uma ramificação ou *branch*). | Para você programar livremente sem estragar ou apagar o código dos seus colegas. |
| `git add .` | Quando você terminar um pedaço do seu código e quiser salvar. | Junta e prepara todas as suas alterações para o salvamento. | Funciona como selecionar os arquivos que vão entrar no seu "pacote" de salvamento. |
| `git commit -m "mensagem"` | Logo em seguida de usar o comando `git add .`. | Coloca os arquivos e alterações que você fez em um "palco" pra você registrar com uma "foto" e depois mandar essa "foto" pro github | É o botão "Salvar" do jogo. Se algo der errado no futuro, você pode voltar para cá.|
| `git push origin <nome da sua branch>` | Quando a tarefa estiver 100% pronta e testada no seu PC. | Envia a sua linha do tempo alternativa lá para o site do GitHub. | Para que o Scrum Master e o resto do time consigam ver e testar o seu trabalho. |

---