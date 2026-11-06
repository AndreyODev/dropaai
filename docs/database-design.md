# Projeto do banco de dados

O banco planejado é PostgreSQL no Supabase. **O esquema ainda será definido**:
nesta etapa não são criadas tabelas, entidades, relacionamentos ou migrations
de esquema.

## Princípios

- Versionar mudanças do esquema em migrations SQL revisáveis e ordenadas.
- Manter seeds de desenvolvimento separados das migrations de esquema.
- Não incluir credenciais, dados reais ou segredos nos arquivos versionados.
- Manter scripts administrativos em `database/scripts/` e revisar antes de
  executá-los.
- Aplicar mudanças de forma controlada por ambiente; a inicialização da API
  não deve executar migrations automaticamente.

## Separação de responsabilidades

Repositories do backend serão responsáveis pelo acesso e persistência de dados.
Services coordenarão as regras de negócio e não deverão depender diretamente
de detalhes SQL. A definição do esquema e dos contratos de persistência deverá
ser documentada antes de implementar cada funcionalidade.

Consulte [../database/README.md](../database/README.md) para a organização e o
processo planejado para migrations e seeds.
