# Arquitetura

O Dropaai será organizado como uma aplicação web com frontend estático, API
HTTP independente e banco PostgreSQL. O frontend será hospedado na Vercel, a
API no Render e o banco no Supabase.

## Fluxo esperado

```text
Frontend → API Express → Services → Repositories → PostgreSQL
```

1. O frontend apresenta a interface e envia requisições HTTP à API.
2. As rotas Express encaminham cada requisição ao controller correspondente.
3. Controllers tratam entrada e resposta HTTP, delegando operações aos
   services.
4. Services coordenam regras de negócio, sem depender de detalhes de transporte
   ou persistência.
5. Repositories encapsulam o acesso e a persistência de dados no PostgreSQL.

## Responsabilidades

- **Frontend (`frontend/`):** páginas, componentes visuais, estilos, interações
  e serviços de comunicação HTTP.
- **Rotas e controllers (`backend/src/routes/`, `backend/src/controllers/`):**
  composição dos endpoints e tradução entre HTTP e operações da aplicação.
- **Services (`backend/src/services/`):** regras de negócio e coordenação.
- **Repositories (`backend/src/repositories/`):** persistência e consultas.
- **Configuração e suporte (`backend/src/config/`, `middlewares/`,
  `validators/`, `utils/`):** configuração, preocupações compartilhadas,
  validação e utilitários.
- **Banco (`database/`):** histórico de alterações SQL e recursos
  administrativos, separado do backend.

O estado atual contém apenas a estrutura inicial. Endpoints, regras de negócio
e esquema de banco ainda não foram definidos.
