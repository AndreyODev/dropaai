# Contrato da API

Este documento estabelece o processo para definir contratos antes da
implementação das funcionalidades. Nenhum endpoint definitivo foi definido
nesta etapa.

## O que definir para cada operação

Antes de implementar uma operação, documente:

- recurso e finalidade;
- método HTTP e caminho;
- parâmetros de rota, query string e cabeçalhos;
- formato e regras do corpo da requisição, quando aplicável;
- formatos de resposta de sucesso;
- códigos de status para sucesso e erros esperados;
- validações e comportamento para entradas inválidas;
- requisitos de autenticação e autorização, quando definidos.

## Modelo de especificação

Use o modelo abaixo como checklist. Os valores entre colchetes devem ser
definidos para uma funcionalidade real; este exemplo não representa um endpoint
existente.

```text
Operação: [nome e finalidade]
Método e caminho: [a definir]
Autenticação: [a definir]
Parâmetros: [a definir ou não aplicável]
Corpo da requisição: [formato a definir ou não aplicável]
Respostas:
  - [código]: [formato e significado]
Erros esperados: [códigos e formato]
```

Os formatos devem ser consistentes e usar JSON quando houver conteúdo
estruturado. O contrato aprovado deve orientar testes, frontend e backend antes
que o endpoint seja construído.
