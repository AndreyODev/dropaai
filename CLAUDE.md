# Dropaai — notas para o Claude

Plataforma para a comunidade de Free Fire (recrutamento, times, treinos). Leia o `README.md` e `docs/` antes de mexer.

## Estado
- `frontend/`: protótipo navegável em HTML/CSS/JS puro (`index.html`, `src/styles/app.css`, `src/scripts/main.js`). Dados fictícios em memória; nenhuma requisição de rede.
- `backend/`, `database/`, `backup/`: apenas estrutura inicial e documentação.

## Stack e deploy (planejado)
Express + PostgreSQL no Supabase; frontend na Vercel e backend no Render. Sem React, Next.js, TypeScript ou ORM nesta etapa.

## Regras
- **O repositório é público.** Nunca commitar `.env`, chaves, senhas, URLs de banco, dados pessoais ou material privado. Use `.env.example` com valores de exemplo.
- Dados de demonstração devem ser claramente fictícios (apelidos inventados, sem pessoas reais).
- Cada pasta (`frontend/`, `backend/`, `database/`) é instalada e executada sozinha; nada de código na raiz.
- Mudanças vão por branch + PR; não fazer push direto na `main`.

## Executar
- Frontend: em `frontend/`, `python3 -m http.server 5500` e abrir `http://localhost:5500`.
- Backend: em `backend/`, `npm install`, copiar `.env.example` para `.env`, `npm run dev`.
