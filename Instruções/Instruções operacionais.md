# 📑 Guia de Desenvolvimento - Glowflow ✨

Olá, devs! Este sistema é um MVP (Produto Mínimo Viável) de agendamento para uma clínica de estética. É um software que permite gerenciar os horários para os clientes da clínica.

Caso você não saiba como usar o Git, consulte o arquivo `Gitsheetset.md` e tire suas dúvidas com o Scrum Master, se necessário.

## 📋 Instruções para o Desenvolvimento

* **1° Reviews:** Após realizarem qualquer alteração em seu código e fazerem o `git push` conforme descrito no `Gitsheetset.md`, solicitem uma revisão (review) no grupo do projeto. 📢
* **2° Feedback:** Estejam prontos para receber feedbacks de alinhamento sobre o que pode ser alterado, deletado, criado ou melhorado. Acredito que isso faça parte da evolução do nosso CRUD. 🔄
* **3° Apenas o necessário sempre:** Não tentem adicionar funcionalidades que fujam do padrão das tarefas (tasks). Lembrem-se sempre de que este é um projeto simples com um único objetivo definido para simularmos as metodologias ágeis. 🛡️
* **4° Relatório:** Tudo o que ocorrer após a definição do *Sprint Backlog* será registrado em um relatório imparcial, identificando quem operou e todas as nossas realizações. 📊
* **5° Comprometimento (*Commitment*):** todos temos nossas dificuldades, porém estamos aqui para aprender juntos. Tudo o que precisamos é disciplina, pois um único atraso pode afetar o cronograma de todos. 🤝

---

## 🛠️ Guia Rápido de Comandos Git

| 💻 Comando Git | 🕒 Quando usar? | ❓ O que ele faz na prática? | 🎯 Por que fazer isso? |
| :--- | :--- | :--- | :--- |
| `git clone https://github.com/AngelZ5/Glowflow` | Apenas na primeira vez que for começar a mexer no projeto ou se estiver em um computador novo. | Copia a pasta inteira do Glowflow da internet para o seu computador. 📂 | Para você ter os arquivos do projeto prontos para editar na sua máquina. |
| `git checkout main` | Sempre antes de começar uma tarefa nova no dia. | Muda a sua tela para a linha do tempo principal do projeto. | Para garantir que você não vai criar coisas novas baseado em códigos antigos. |
| `git pull origin main` | Logo após dar o comando `git checkout main` (ou ao trocar para uma máquina que já tem o projeto). | Vai até o GitHub e baixa todas as novidades que o seu time fez. 📥 | Para o seu computador ficar atualizado em tempo real com o resto do grupo. |
| `git checkout -b feature-nome-da-tarefa` | Sempre que for iniciar uma tarefa nova do Trello. | Cria uma linha do tempo alternativa (uma ramificação ou *branch*). | Para você programar livremente sem estragar ou apagar o código dos seus colegas. |
| `git add .` | Quando você terminar um pedaço do seu código e quiser salvar. | Junta e prepara todas as suas alterações para o salvamento. | Funciona como selecionar os arquivos que vão entrar no seu "pacote" de salvamento. |
| `git commit -m "mensagem"` | Logo em seguida de usar o comando `git add .`. | Coloca as alterações em um "palco" para registrar com uma "foto" antes de mandar para o GitHub. 📸 | É o botão "Salvar" do jogo. Se algo der errado no futuro, você pode voltar para cá. |
| `git push origin feature-nome-da-tarefa` | Quando a tarefa estiver 100% pronta e testada no seu PC. | Envia a sua linha do tempo alternativa lá para o site do GitHub. 🚀 | Para salvar seu trabalho na internet e permitir a abertura do Pull Request (PR) no site. |