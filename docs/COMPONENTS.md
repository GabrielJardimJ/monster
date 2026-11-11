# Inventário de componentes

63 arquivos gerados pelo CLI shadcn, base Base UI, estilo Maia. Todos importados por demonstrações do catálogo.

## Ações

| Componente     | Fonte                                |
| -------------- | ------------------------------------ |
| `button`       | `src/components/ui/button.tsx`       |
| `button-group` | `src/components/ui/button-group.tsx` |
| `badge`        | `src/components/ui/badge.tsx`        |
| `toggle`       | `src/components/ui/toggle.tsx`       |
| `toggle-group` | `src/components/ui/toggle-group.tsx` |
| `kbd`          | `src/components/ui/kbd.tsx`          |

## Formulários

| Componente      | Fonte                                 |
| --------------- | ------------------------------------- |
| `field`         | `src/components/ui/field.tsx`         |
| `input`         | `src/components/ui/input.tsx`         |
| `input-group`   | `src/components/ui/input-group.tsx`   |
| `textarea`      | `src/components/ui/textarea.tsx`      |
| `label`         | `src/components/ui/label.tsx`         |
| `select`        | `src/components/ui/select.tsx`        |
| `native-select` | `src/components/ui/native-select.tsx` |
| `combobox`      | `src/components/ui/combobox.tsx`      |
| `input-otp`     | `src/components/ui/input-otp.tsx`     |
| `calendar`      | `src/components/ui/calendar.tsx`      |

## Seleção

| Componente    | Fonte                               |
| ------------- | ----------------------------------- |
| `checkbox`    | `src/components/ui/checkbox.tsx`    |
| `radio-group` | `src/components/ui/radio-group.tsx` |
| `switch`      | `src/components/ui/switch.tsx`      |
| `slider`      | `src/components/ui/slider.tsx`      |

## Navegação

| Componente        | Fonte                                   |
| ----------------- | --------------------------------------- |
| `tabs`            | `src/components/ui/tabs.tsx`            |
| `breadcrumb`      | `src/components/ui/breadcrumb.tsx`      |
| `pagination`      | `src/components/ui/pagination.tsx`      |
| `navigation-menu` | `src/components/ui/navigation-menu.tsx` |
| `menubar`         | `src/components/ui/menubar.tsx`         |
| `sidebar`         | `src/components/ui/sidebar.tsx`         |
| `direction`       | `src/components/ui/direction.tsx`       |

## Dados e conteúdo

| Componente     | Fonte                                |
| -------------- | ------------------------------------ |
| `card`         | `src/components/ui/card.tsx`         |
| `table`        | `src/components/ui/table.tsx`        |
| `chart`        | `src/components/ui/chart.tsx`        |
| `item`         | `src/components/ui/item.tsx`         |
| `avatar`       | `src/components/ui/avatar.tsx`       |
| `accordion`    | `src/components/ui/accordion.tsx`    |
| `collapsible`  | `src/components/ui/collapsible.tsx`  |
| `carousel`     | `src/components/ui/carousel.tsx`     |
| `scroll-area`  | `src/components/ui/scroll-area.tsx`  |
| `resizable`    | `src/components/ui/resizable.tsx`    |
| `aspect-ratio` | `src/components/ui/aspect-ratio.tsx` |
| `separator`    | `src/components/ui/separator.tsx`    |

## Feedback

| Componente | Fonte                            |
| ---------- | -------------------------------- |
| `alert`    | `src/components/ui/alert.tsx`    |
| `toast`    | `src/components/ui/toast.tsx`    |
| `progress` | `src/components/ui/progress.tsx` |
| `spinner`  | `src/components/ui/spinner.tsx`  |
| `skeleton` | `src/components/ui/skeleton.tsx` |
| `empty`    | `src/components/ui/empty.tsx`    |

## Overlays

| Componente      | Fonte                                 |
| --------------- | ------------------------------------- |
| `dialog`        | `src/components/ui/dialog.tsx`        |
| `alert-dialog`  | `src/components/ui/alert-dialog.tsx`  |
| `sheet`         | `src/components/ui/sheet.tsx`         |
| `drawer`        | `src/components/ui/drawer.tsx`        |
| `popover`       | `src/components/ui/popover.tsx`       |
| `hover-card`    | `src/components/ui/hover-card.tsx`    |
| `tooltip`       | `src/components/ui/tooltip.tsx`       |
| `dropdown-menu` | `src/components/ui/dropdown-menu.tsx` |
| `context-menu`  | `src/components/ui/context-menu.tsx`  |
| `command`       | `src/components/ui/command.tsx`       |

## Conversação

| Componente         | Fonte                                    |
| ------------------ | ---------------------------------------- |
| `message`          | `src/components/ui/message.tsx`          |
| `bubble`           | `src/components/ui/bubble.tsx`           |
| `message-scroller` | `src/components/ui/message-scroller.tsx` |
| `marker`           | `src/components/ui/marker.tsx`           |
| `attachment`       | `src/components/ui/attachment.tsx`       |
| `trace`            | `src/components/ui/trace.tsx`            |
| `questionnaire`    | `src/components/ui/questionnaire.tsx`    |
| `code-block`       | `src/components/ui/code-block.tsx`       |

## Receitas adaptadas

Button: altura 44 px, raio 12 px, Manrope 600, hover e pressed com cores próprias para manter contraste. Input, InputGroup, Select, NativeSelect, Combobox, Toggle e Tabs acompanham a escala de controles. Textarea compartilha raio. Spinner e ScrollArea receberam correções de tipagem upstream. Os demais componentes herdam o mapeamento dos tokens semânticos.

## Estados e casos de borda

Button: matriz default/hover/focus/active/disabled por variante; carregamento com Spinner. Input: default/hover/focus/disabled/invalid. Formulários incluem obrigatório, erro, desabilitado e texto de ajuda. Badge e Table incluem texto longo. Avatar demonstra fallback. Empty cobre ausência de dados; Skeleton, Spinner e Progress cobrem carregamento. Overlay tem acionadores reais; navegação tem estado ativo e RTL.
