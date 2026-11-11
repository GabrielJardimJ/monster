---
name: Untold Design System
version: 1.0.0
source: ../undold — Identidade visual & Manual de marca
font: Manrope Variable
base: shadcn/ui · Base UI · Maia
---

# Untold Design System

Biblioteca de componentes React e documentação de uso. O manual de identidade visual V1.0 define marca, cores, tipografia e tom. Os componentes vêm do CLI oficial shadcn, com primitivas Base UI e estilo Maia, e recebem os tokens e as receitas Untold.

## Identidade original

Elétrico `#2563FF`: ações e início do gradiente. Violeta `#8B5CF6`: acentos e fim do gradiente. Ink `#10111A`: texto e fundo dark. Cloud `#F7F8FC`: fundo principal. Dobra `#6443CB`: detalhe do símbolo. Texto secundário `#595D70` no claro e `#B4B8C9` no escuro.

Manrope 600 nos títulos (48–72 px), Manrope 400 no corpo (16–18 px), 600 nos controles (14–16 px). Tom direto, próximo, claro e preciso. Sem promessas de vendas, prazos ou resultados sem base.

## Arquitetura de tokens

`scripts/create-tokens.mjs` define o contrato e gera `tokens.json`, o trecho de tokens em `src/index.css` e os downloads CSS/JSON. Os componentes usam papéis semânticos, e os papéis apontam para os primitivos. Receitas em `tokens.json.component` documentam a aplicação por componente.

Exemplo: `brand.electric` → `primary` → fundo de `Button` padrão. Light e Dark mantêm os mesmos nomes semânticos.

## Extensões para interface

O manual não especifica raios, espaçamentos, sombras, hover/press, cores de status ou tipografia de código. São decisões deste sistema:

- Espaçamento em base de 4 px: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Raios: 4, 8, 12, 20, 24, 32, 9999. Controles 12 px, cards 20 px, badges pill.
- Controles principais 44 px; compacto 36 px; destaque 52 px. Compactos precisam de área de toque apropriada em mobile.
- Azul hover `#1D53DF`, pressed `#1746BD`; sem redução de opacidade no hover da ação principal.
- Superfícies claras Cloud/White e escuras Ink/`#191C29`. Texto secundário dark oficial preservado.
- Semânticos success, warning e destructive por tema. Violeta reservado à identidade, gráficos e elementos decorativos.
- Sombras: flat, hairline, soft popover e dialog. Foco de 2 px com offset de 3 px.
- Movimento: 120, 180, 240 ms; easing `cubic-bezier(0.2,0,0,1)`. Movimento reduzido respeitado.
- Manrope distribuída localmente por Fontsource. JetBrains Mono somente em código e tokens.

## Faça

- Use variantes existentes e tokens semânticos.
- Uma ação principal por grupo.
- Labels visíveis, erros junto ao campo, foco visível e nomes para ações por ícone.
- Use SVGs oficiais. Área de proteção x = ¼ da largura do símbolo.
- Respeite os mínimos: horizontal 120 px, vertical 96 px e símbolo 24 px.

## Evite

- Não redesenhar ou redigitar a marca; não girar, esticar ou alterar o gradiente.
- Não usar gradiente em texto pequeno.
- Não escolher cor isoladamente: considere fundo e primeiro plano.
- Não criar estados somente por cor ou controles sem nome acessível.
- Não adicionar promessas comerciais aos exemplos.

## Componentes

63 arquivos em `src/components/ui`, com exports em `src/index.ts`. O catálogo em `src/showcase` tem exemplos interativos, código copiável, estados fixos de Button e Input e casos de erro, vazio, carregamento, imagem ausente, texto longo e RTL. Button, campos, tabs e toggles foram ajustados na fonte para alinhar alturas e raios.

## Responsividade

Sidebar no desktop, navegação em Sheet no mobile. Matrizes, tabelas e código mantêm scroll interno. A documentação usa texto menor que o corpo de produto; os controles e a escala de produto seguem os tokens.

## Known gaps

A identidade não define API de componentes; arquitetura e estados são extensões documentadas aqui. Alguns subcomponentes upstream incluem labels em inglês. A versão Figma complementa o código e não executa os comportamentos React.
