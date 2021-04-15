# LESS Framework

## Índice

1. [Scripts do projeto](#Scripts-do-projeto)
2. [Tecnologias](#Tecnologias)
3. [Arquitetura](#Arquitetura)
4. [Metodologia de gerenciamento de estado](#Metodologia---de---gerenciamento---de---estado)
5. [Convenção e Boas Práticas](#Convenção-e-Boas-Práticas)

## Scripts do projeto

Para executar qualquer um dos scripts abaixo, presumi-se que o Node.js e o NPM estejam préviamente instalados no ambiente em questão. Caso contrário, você pode fazer a instalação do Node.js clicando no link de download abaixo.

- [https://nodejs.org/en/download/](Node.js)

**NOTA:** O gerenciador de dependência NPM já vem instalado por padrão no Node.js. Entretanto, se você preferir trabalhar com o YARN, basta rodar o seguinte comando no terminal após concluir a instalação do Node.js. Para mais detalhes, acesse sua documentação.

    npm i -g yarn

[Documentação de instalação do Yarn](https://classic.yarnpkg.com/en/docs/install#debian-stable)

### Instalação das dependências do projeto

Para fazer a instalação de todas as dependências da aplicação, execute a seguinte linha de comando no terminal.

    npm i

**Nota**: Se após a instalação você receber informações de vulnerabilidades nas dependências instaladas, execute o seguinte comando para corrigir eventuais vulnerabilidades.

    npm audit fix && npm audit fix --force

### Modo desenvolvimento

Os arquivos do código fonte da aplicação estão contidos dentro do diretório `./src`.
Após concluir a instalação de todas as dependências da aplicação, é possível iniciar o projeto em modo de desenvolvimento. execute o seguinte comando:

    npm run dev

Depois de executar o comando acima, abra [http://localhost:3000](http://localhost:3000) para renderizar a aplicação no seu browser preferido.
A página será recarregada sempre que fizer edições no seu código fonte, você também verá quaisquer eventuais erros no código no seu console e no próprio browser.

### Modo produção

Este comando cria os arquivos de produção dentro do diretório ./.next, e inicia um servidor Express gerenciado pelo Next.js para servir a aplicação em questão. Os arquivos de produção são transpilados e minificados para obter uma melhor performance e otimização de trafego de dados ao acessar a aplicação. Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run start

### Construção do projeto

Este comando cria os arquivos de produção para dentro do diretório `./.next`.
Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run build

### Exportar projeto

Este comando cria os arquivos de produção para dentro do diretório `./.out`.
Para construir a aplicação em modo produção, execute o seguinte comando:

    npm run export

### Limpeza do projeto

Este comando faz uma limpeza nos arquivos criados localmente. Alguns arquivos são criados automaticamente pelo próprio Next e/ou Node.js. Se você precisar dar um reset/limpar o projeto, execute o seguinte comando no terminal:

    npm run clean

## Tecnologias

- [x] Git
- [x] TypeScript
- [x] Prettier
- [x] Eslint
- [x] Babel
- [x] Styled Components
- [x] Isomorphic Fetch
- [x] React
- [x] Next
- [x] SWR

## Arquitetura

Este projeto Front End é baseado com tecnologia SPA, composto principalmente com React, Next.js, SWR e Styled Components como base, além de várias outras tecnologias modernas. Contudo, o conceito aqui é ser minimalista e excelência em qualidade, deste modo, menos é mais, **utilize o minimo possível de bibliotecas/frameworks**.
Por padrão, a responsabilidade de renderização é gerenciada pelo próprio Next. Contudo, e conforme a necessidade de consumo de dados externos e etc, é possível alterar a responsábilidade de renderização entre o SSG, SSR ou CSR. Vide documentação do [Next Docs](https://nextjs.org/docs/basic-features/pages).

## Metodologia de gerenciamento de estado

**Context API** do próprio React, é a melhor opção para o nosso caso, pois ele atende completamente a nossa necessidade. Todavia, caso você precise implementar qualquer outro gerenciador de estado, lembre-se de fazer os ajustes necessários.

## Convenção e Boas Práticas

[GitFlow](./GITFLOW.md)

[Commits](./COMMITS.md)

[ISSUE TEMPLATE](./ISSUE_TEMPLATE.md)

## React.js Docs

[React Docs](https://github.com/facebook/create-react-app).

## Next Docs

[Next Docs](https://nextjs.org/docs/getting-started).
