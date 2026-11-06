# Dropaai

O Dropaai é uma plataforma dedicada à comunidade de Free Fire, com foco em
recrutamento, formação de equipes e conexão entre jogadores. Este repositório
contém a estrutura inicial do projeto; funcionalidades da aplicação ainda não
foram implementadas.

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
| `frontend/` | Interface estática, estilos, scripts e comunicação HTTP com a API. |
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
4. Consulte os documentos em `docs/` antes de definir contratos, o esquema do
   banco ou configurações de hospedagem.

Não há dependências npm para o frontend nesta etapa. Os comandos de instalação
e execução do backend estão detalhados em [backend/README.md](backend/README.md).

## Estado atual

O projeto está na etapa de estrutura inicial e documentação. Não há
funcionalidades de negócio, endpoints de produto, esquema de banco ou dados
iniciais implementados.
