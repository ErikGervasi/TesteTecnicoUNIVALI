# Projeto de Cadastro de Itens - UNIVALI

Olá, eu sou Erik Gervasi e este é o código que desenvolvi como parte de um teste técnico para a UNIVALI - Universidade do Vale do Itajaí. Este projeto consiste em uma aplicação web para cadastro de itens, onde os usuários podem inserir informações sobre produtos, como nome, quantidade, unidade de medida, preço e outras características.

## Funcionalidades

### Cadastro de Itens

- Os usuários podem inserir os seguintes dados sobre um item:
  - Nome do item
  - Unidade de medida (KG, UN, LT)
  - Quantidade
  - Preço
  - Se o produto é perecível ou não
  - Data de validade (se aplicável)
  - Data de fabricação

### Validação de Dados

- Há validações de dados em tempo real, como:
  - O tamanho máximo do nome do item é 50 caracteres
  - O campo de preço é formatado automaticamente para exibir em formato monetário brasileiro (R$)

### Armazenamento Local

- Os dados dos itens são armazenados localmente no navegador do usuário usando o `localStorage`.
- Os dados são persistidos entre sessões do navegador.

### Edição e Exclusão de Itens

- Os usuários podem editar e excluir itens previamente cadastrados.
- Para editar um item, basta clicar no ícone de lápis ao lado do item na lista.

### Visualização de Itens

- Os itens cadastrados são exibidos em uma tabela na página de listagem.
- A tabela mostra o nome do item, quantidade, unidade de medida, preço, se é perecível, data de validade e data de fabricação.

### Menu de Navegação

- Há um menu de navegação lateral que permite aos usuários acessarem facilmente as páginas de cadastro e listagem de itens.

## Tecnologias Utilizadas

- HTML5
- CSS3
- JavaScript (incluindo jQuery)
- Bibliotecas externas:
  - [Inputmask](https://github.com/RobinHerbots/Inputmask) para formatação de entrada de texto
  - [Bootstrap Icons](https://icons.getbootstrap.com/) para ícones
  - [Toastr.js](https://github.com/CodeSeven/toastr) para notificações
- Fonte Google Fonts utilizada: Poppins

## Instruções de Uso

1. Baixe todos os arquivos deste repositório.
2. Abra o arquivo `index.html` em um navegador da web.
3. Você será direcionado para a página de cadastro de itens.
4. Preencha o formulário com os dados do item e clique em "Salvar".
5. Você pode acessar a página de listagem de itens clicando no link no menu lateral.
6. Na página de listagem, você pode editar ou excluir itens existentes, ou adicionar novos itens clicando em "CADASTRO" no menu.

Você também pode testar o projeto online no seguinte link hospedado pelo GitHub Pages: [Projeto de Cadastro de Itens - UNIVALI](https://erikgervasi.github.io/TesteTecnicoUNIVALI/)

Espero que este README ajude você a entender e utilizar o projeto! Se tiver alguma dúvida ou sugestão de melhoria, não hesite em entrar em contato.

**Erik Gervasi**
