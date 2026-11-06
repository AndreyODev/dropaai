# Backups

Esta área está reservada a futuros scripts de backup e restauração em
`backup/scripts/`. Nenhum backup foi criado e nenhum serviço externo foi
acessado nesta etapa.

## Segurança

- Dumps reais do banco, arquivos `.env`, tokens e credenciais não devem ser
  versionados no Git.
- Armazene backups somente em destinos protegidos e com acesso restrito.
- Criptografe backups em repouso e durante a transferência, conforme as
  políticas adotadas pelo projeto.
- Documente retenção, permissões e procedimento de restauração antes de
  automatizar operações.
- Teste restaurações em um ambiente não produtivo antes de depender de um
  backup.

## Estratégia futura

Os scripts em `scripts/` deverão distinguir claramente as operações de backup
e restauração, exigir configuração explícita do ambiente e evitar registrar
segredos em logs. A frequência, retenção e o destino dos backups serão definidos
antes da implementação.
