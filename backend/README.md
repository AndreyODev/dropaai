# Backend

O backend será uma API HTTP em Node.js e Express. A estrutura separa o ciclo
HTTP, as regras de negócio e a persistência. Nenhum endpoint de produto ou
regra de negócio foi implementado nesta etapa.

## Camadas

- `src/config/`: configurações da aplicação e, futuramente, conexão com o banco.
- `src/routes/`: definição e composição de rotas HTTP.
- `src/controllers/`: tratamento das requisições e construção das respostas.
- `src/services/`: regras de negócio e coordenação das operações.
- `src/repositories/`: acesso e persistência de dados.
- `src/middlewares/`: funcionalidades compartilhadas do ciclo HTTP.
- `src/validators/`: validação de dados de entrada.
- `src/utils/`: funções auxiliares.
- `tests/`: testes automatizados.
- `app.js`: configuração e exportação da aplicação Express.
- `server.js`: inicialização do servidor HTTP.

## Requisitos e instalação

Use Node.js 20.6 ou superior e npm. Instale as dependências a partir desta
pasta:

```sh
npm install
```

O Express é a dependência de execução necessária para configurar a aplicação.
O `node --watch` integrado ao Node.js é usado para desenvolvimento, sem pacote
adicional de monitoramento.

## Variáveis de ambiente

Copie `.env.example` para `.env` e preencha os valores apropriados ao seu
ambiente. Os scripts usam o suporte nativo do Node.js para carregar esse
arquivo. O arquivo `.env` não deve ser versionado.

As variáveis de conexão estão reservadas para uma futura integração com o
PostgreSQL do Supabase. Nenhuma conexão com banco está configurada nesta etapa.
Credenciais devem permanecer somente no ambiente do backend.

## Iniciar

```sh
npm run dev
```

Para iniciar sem o modo de observação:

```sh
npm start
```

O servidor usa a variável `PORT` quando definida e, caso contrário, a porta
`3000`. As rotas da API serão definidas em etapa posterior.
