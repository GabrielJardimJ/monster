# Verificação

## Aprovado

- Build da documentação Vite e biblioteca ESM com declarações TypeScript.
- Consumo do Button a partir da biblioteca compilada via renderização React no servidor.
- Aplicação consumidora independente compilada; no navegador, Button com 44 px, raio 12 px, fundo #2563FF, texto branco e Manrope 600.
- Cobertura de demonstração: **63/63 arquivos de componentes**.
- 16 rotas × 2 larguras (1440 e 390 px): título visível, scroll inicial zero, Manrope carregada, sem overflow horizontal e sem erros de console/JavaScript.
- 8 pares semânticos de contraste, nos temas claro e escuro: todos ≥ 4,5:1.
- Tema escuro altera os tokens e persiste.
- Busca filtra pelo nome de componente.
- Dialog recebe foco, fecha com Escape e devolve o foco ao acionador.
- Sheet abre e fecha por teclado.
- Select exibe o label escolhido.
- Combobox comunica ausência de resultados.
- Switch altera valor e descrição.
- Button mostra carregamento e retorna ao estado disponível.
- Receita de formulário valida e confirma apenas a demonstração local.
- Sheet mobile fecha após navegação.

## Evidências

`verification/browser-qa.json`, `verification/interactions.json`, `overview-desktop.png`, `overview-mobile.png` e `colors-dark.png`.

## Limites

A execução do plugin Figma não foi verificada dentro do aplicativo: o plano Starter atingiu a cota de chamadas. O arquivo local passou na verificação de sintaxe. A exportação contém fundamentos e quatro famílias, não todos os 63 componentes React.

Os testes cobrem comportamentos representativos; não substituem a revisão de acessibilidade de cada composição futura. Amostras compactas devem receber área de toque apropriada quando usadas em interfaces mobile.
