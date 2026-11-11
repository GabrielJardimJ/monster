# Untold Design System

Design system independente, baseado no manual de identidade visual da Untold. Biblioteca React reutilizável com **63 componentes shadcn/ui**, tokens e catálogo de documentação.

## Abrir o catálogo

```sh
cd /home/dev/untold/design-system
npm ci
npm run dev
```

Acesse **http://127.0.0.1:5175**. A documentação inclui fundamentos, componentes por categoria, exemplos interativos e composições. O tema claro/escuro fica salvo no navegador.

## O que está incluído

- Marca: assinaturas e uso dos vetores oficiais.
- Cores: paleta original, papéis semânticos, contraste medido e Light/Dark.
- Tipografia: Manrope instalada localmente, escala e espécimes.
- Espaço, raios, elevação, movimento, foco e ícones.
- 63 componentes, com exports e tipos TypeScript.
- Matrizes fixas de estados para Button e Input; casos de erro, vazio, carregamento, imagem ausente, texto longo e RTL.
- Código copiável, tokens JSON/CSS para download e exemplos de telas.
- [Contrato de design](DESIGN.md), [inventário de componentes](docs/COMPONENTS.md) e [verificação](docs/VERIFICATION.md).

## Compilar e reutilizar

```sh
npm run build
```

O comando produz `dist/` para a documentação e `dist-library/` para a biblioteca, com JavaScript, tipos e tema. O tema distribuído não inclui os estilos de layout da documentação.

Em outro projeto **React + Tailwind v4**, depois de compilar esta biblioteca:

```sh
npm install /home/dev/untold/design-system
```

```tsx
import "@untold/design-system/theme.css"
import { Button, TooltipProvider, Toaster } from "@untold/design-system"

export function App() {
  return (
    <TooltipProvider>
      <Toaster>
        <Button>Salvar projeto</Button>
      </Toaster>
    </TooltipProvider>
  )
}
```

Configure Tailwind v4 no bundler consumidor. O tema inclui `@source` para detectar as classes da biblioteca. O pacote disponibiliza fontes locais, componentes e `@untold/design-system/tokens.json`.

## Tokens

A origem está em `scripts/create-tokens.mjs`. Para alterar uma decisão, edite a definição e execute:

```sh
npm run tokens
```

Isso atualiza `tokens.json`, o trecho gerado de `src/index.css` e os downloads públicos. Primitivos → papéis semânticos → receitas de componentes. As decisões que vêm do manual e as extensões de interface estão separadas em `DESIGN.md`.

## Figma

O pacote local em [figma/](figma/README.md) cria fundamentos, tokens e o núcleo **Button, Input, Badge e Card** como componentes nativos. Os 63 componentes React estão no catálogo; a exportação Figma cobre as quatro famílias indicadas.

O arquivo remoto existente é https://www.figma.com/design/1QDPx48PqqrAMnvRPe9xdU. O limite de chamadas do plano Starter impediu a criação da biblioteca online nesta sessão. A página foi renomeada, mas as pranchas e os componentes ainda precisam ser importados pelo plugin local.

## Verificação

Build, TypeScript e cobertura 63/63. As 16 páginas foram verificadas no Chromium em 1440 e 390 px, sem overflow horizontal ou erros de JavaScript. Testes de interação cobrem temas, contraste, busca, foco em Dialog, Sheet, Select, Combobox, Switch, carregamento, formulário de composição e menu mobile. Relatórios e capturas em `verification/`.

A pasta anterior `../web` não foi alterada nesta tarefa.
