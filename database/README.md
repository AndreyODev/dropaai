# Banco de dados

O banco planejado é PostgreSQL, hospedado no Supabase. Esta pasta é
independente do código do backend e, neste momento, não contém esquema,
migrations executáveis, seeds ou operações no banco. O esquema ainda será
definido.

## Organização

- `migrations/`: alterações versionadas no esquema PostgreSQL.
- `seeds/`: dados controlados para ambientes de desenvolvimento, quando
  definidos.
- `scripts/`: scripts SQL e tarefas administrativas revisáveis.

## Migrations e Supabase

Cada migration deverá ser versionada em um arquivo SQL com nome ordenável e
descritivo, por exemplo, `YYYYMMDDHHMM_descricao.sql`. As alterações devem ser
revisadas e aplicadas em ordem, com seu estado de execução registrado de forma
consistente para cada ambiente.

Antes de executar uma migration, revise o SQL e confirme o projeto e o ambiente
de destino no Supabase. A execução será feita por uma ferramenta ou fluxo
aprovado para o projeto; nenhum runner ou conexão está configurado aqui.
Migrations devem ser seguras para revisão e não devem conter credenciais.

Seeds devem ser separados de migrations e usados apenas para dados de
desenvolvimento explicitamente definidos. Não execute migrations ou seeds
automaticamente durante a inicialização da API.
