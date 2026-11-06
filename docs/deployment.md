# Plano de hospedagem

O plano de hospedagem do Dropaai é:

- **Frontend:** Vercel.
- **Backend/API:** Render.
- **PostgreSQL:** Supabase.

Este documento descreve o destino planejado. Nenhum deploy ou configuração
específica de produção foi realizado.

## Configuração por ambiente

URLs e variáveis de configuração deverão ser definidas separadamente para cada
ambiente (por exemplo, desenvolvimento, teste e produção), usando as
configurações seguras de cada provedor. Arquivos `.env` locais não devem ser
versionados.

O frontend chamará a API do backend por HTTP usando uma URL base configurada
para o ambiente. O frontend não deve receber credenciais de conexão ao banco.
Somente o backend terá acesso às credenciais necessárias para se conectar ao
PostgreSQL no Supabase; elas deverão ser armazenadas como variáveis protegidas
no ambiente do backend.

Os domínios, URLs, política de CORS, variáveis finais e procedimentos de
publicação serão definidos antes do primeiro deploy.
