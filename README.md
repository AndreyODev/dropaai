# Dropaai

O Dropaai é uma plataforma dedicada à comunidade de Free Fire, com foco em
recrutamento, formação de equipes e conexão entre jogadores. O frontend já
contém um protótipo navegável com fluxos demonstrativos; backend e integração
com banco de dados ainda não foram implementados.

## Tecnologias planejadas

- **Frontend:** HTML5, CSS3 e JavaScript puro.
- **Backend:** Node.js e Express.
- **Banco de dados:** PostgreSQL hospedado no Supabase.
- **Hospedagem:** frontend na Vercel e backend no Render.
- **Versionamento e documentação:** Git, GitHub e Markdown.

Não fazem parte desta etapa React, Next.js, TypeScript, ORM ou outros
frameworks.

## Organização do repositório

| Caminho | Responsabilidade |
| --- | --- |
| `frontend/` | Protótipo navegável, estilos, scripts e futura comunicação HTTP com a API. |
| `backend/` | Aplicação Express, organizada em camadas e com testes. |
| `database/` | Migrations, seeds e scripts SQL independentes do backend. |
| `backup/` | Local reservado a futuros scripts de backup e restauração. |
| `docs/` | Arquitetura, contrato de API, princípios do banco e plano de deploy. |

O detalhamento de cada componente está nos READMEs de `frontend/`, `backend/`,
`database/` e `backup/`, além dos documentos em `docs/`.

## Requisitos de ambiente

- Git.
- Node.js 20.6 ou superior e npm.
- Navegador web moderno.
- Para executar a interface por um servidor local: Python 3 (opcional).

Não é necessário ter acesso ao Supabase, Vercel ou Render para trabalhar nesta
etapa.

## Desenvolvimento inicial

1. Clone o repositório e entre na pasta do projeto.
2. Para visualizar a interface, abra `frontend/index.html` diretamente no
   navegador. Opcionalmente, execute `python3 -m http.server 5500` dentro de
   `frontend/` e acesse `http://localhost:5500`.
3. Para preparar o backend, entre em `backend/`, execute `npm install`, copie
   `.env.example` para `.env` e ajuste as variáveis conforme o ambiente. Em
   seguida, use `npm run dev`.
4. No protótipo, explore os filtros de busca, os detalhes de times e treinos e
   os formulários de demonstração. Nenhum dado é enviado a um servidor.
5. Consulte os documentos em `docs/` antes de definir contratos, o esquema do
   banco ou configurações de hospedagem.

Não há dependências npm para o frontend nesta etapa. Os comandos de instalação
e execução do backend estão detalhados em [backend/README.md](backend/README.md).

## Estado atual

O frontend é um protótipo interativo com conteúdo fictício mantido em memória
durante a sessão. Não há cadastro real, API de produto, chat conectado,
chamadas de voz, persistência, esquema de banco ou dados reais implementados.
