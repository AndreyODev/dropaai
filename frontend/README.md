# Frontend

O frontend usa HTML5, CSS3 e JavaScript puro, sem frameworks. Ele apresenta um
protótipo navegável para a comunidade: painel inicial, busca simulada de squad,
times e recrutamento, treinos, pedidos para completar equipe, mensagens e
perfil demonstrativo. Os dados e as interações são locais à sessão do navegador;
não há cadastro, API, persistência, chat em tempo real ou chamada de voz.

## Organização

- `public/assets/images/`: reservado para imagens da interface.
- `public/assets/icons/`: favicon e ícones estáticos.
- `public/assets/fonts/`: fontes locais, quando necessárias.
- `src/pages/`: páginas completas.
- `src/components/`: componentes visuais reutilizáveis.
- `src/styles/app.css`: estilos da interface responsiva.
- `src/scripts/`: interações da interface.
- `src/scripts/main.js`: navegação, telas e dados de demonstração.
- `src/services/`: comunicação HTTP com o backend.
- `src/utils/`: funções auxiliares reutilizáveis.
- `index.html`: documento inicial servido como entrada da interface.

## Executar localmente

Não há dependências npm para o frontend. A partir de `frontend/`, inicie um
servidor estático com Python 3:

```sh
python3 -m http.server 5500
```

Depois, acesse `http://localhost:5500`. A navegação pode ser experimentada sem
backend. Por exemplo:

- Em **Quero jogar**, altere os filtros e envie a busca para ver o resultado
  demonstrativo de compatibilidade.
- Em **Times**, abra uma equipe e explore as oportunidades de recrutamento.
- Em **Treinos**, veja os 12 slots, confirme presença ou simule uma vaga.
- Em **Preciso de complete**, crie um pedido local de exemplo.
- Em **Mensagens**, alterne conversas e envie mensagens que só aparecem nesta
  sessão.

Os formulários de time e treino também criam exemplos em memória, sem publicar
dados. Recarregar a página restaura os dados de demonstração.

## Comunicação com o backend

Os módulos em `src/services/` ficam reservados para futuras requisições HTTP à
API Express. Nenhum endpoint ou URL de API é usado nesta versão. A interface
exibe avisos de demonstração para não confundir os dados de exemplo com
jogadores, partidas, convites ou conversas reais. A integração futura deverá
seguir `../docs/api-contract.md`; credenciais de banco nunca serão incluídas no
frontend.
