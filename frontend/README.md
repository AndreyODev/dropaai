# Frontend

O frontend será desenvolvido com HTML5, CSS3 e JavaScript puro, sem frameworks.
Esta etapa contém apenas uma página HTML mínima e a estrutura para organizar
futuros recursos; não há funcionalidades de interface implementadas.

## Organização

- `public/assets/images/`: imagens da interface.
- `public/assets/icons/`: ícones estáticos.
- `public/assets/fonts/`: fontes locais, quando necessárias.
- `src/pages/`: páginas completas.
- `src/components/`: componentes visuais reutilizáveis.
- `src/styles/`: folhas de estilo CSS.
- `src/scripts/`: interações da interface.
- `src/services/`: comunicação HTTP com o backend.
- `src/utils/`: funções auxiliares reutilizáveis.
- `index.html`: documento inicial servido como entrada da interface.

## Executar localmente

Não há dependências npm para o frontend neste momento. Abra `index.html`
diretamente em um navegador ou, a partir de `frontend/`, inicie um servidor
estático com Python 3:

```sh
python3 -m http.server 5500
```

Depois, acesse `http://localhost:5500`. O comando pode ser adaptado ao ambiente
local; nenhum servidor de desenvolvimento adicional foi incluído no projeto.

## Comunicação com o backend

Quando a integração for implementada, os módulos em `src/services/` farão
requisições HTTP à API Express. A URL base da API deverá ser configurada por
ambiente de hospedagem, sem credenciais de banco ou outros segredos no
frontend. Os contratos serão definidos em `../docs/api-contract.md` antes da
implementação de cada funcionalidade.
