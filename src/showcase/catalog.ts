export const groups = [
  {
    label: "Comece aqui",
    items: [
      {
        id: "overview",
        title: "Visão geral",
        description: "Princípios e estrutura do sistema",
      },
      {
        id: "brand",
        title: "Identidade",
        description: "Símbolo, assinaturas e uso da marca",
      },
      {
        id: "getting-started",
        title: "Instalação",
        description: "Como usar o sistema no React",
      },
    ],
  },
  {
    label: "Fundamentos",
    items: [
      {
        id: "colors",
        title: "Cores",
        description: "Tokens, papéis e contraste",
      },
      {
        id: "typography",
        title: "Tipografia",
        description: "Manrope e escala editorial",
      },
      {
        id: "geometry",
        title: "Espaço e forma",
        description: "Espaçamento, raios, elevação e movimento",
      },
    ],
  },
  {
    label: "Componentes",
    items: [
      {
        id: "actions",
        title: "Ações",
        description: "Button, ButtonGroup, Badge, Toggle, ToggleGroup, Kbd",
      },
      {
        id: "forms",
        title: "Formulários",
        description:
          "Field, Input, InputGroup, Textarea, Select, NativeSelect, Combobox, InputOTP, Calendar, Label",
      },
      {
        id: "selection",
        title: "Seleção",
        description: "Checkbox, RadioGroup, Switch, Slider",
      },
      {
        id: "navigation",
        title: "Navegação",
        description:
          "Tabs, Breadcrumb, Pagination, NavigationMenu, Menubar, Sidebar, Direction",
      },
      {
        id: "data",
        title: "Dados e conteúdo",
        description:
          "Card, Table, Chart, Item, Avatar, Accordion, Collapsible, Carousel, ScrollArea, Resizable, AspectRatio, Separator",
      },
      {
        id: "feedback",
        title: "Feedback",
        description: "Alert, Toast, Progress, Spinner, Skeleton, Empty",
      },
      {
        id: "overlays",
        title: "Overlays",
        description:
          "Dialog, AlertDialog, Sheet, Drawer, Popover, HoverCard, Tooltip, DropdownMenu, ContextMenu, Command",
      },
      {
        id: "conversation",
        title: "Conversação",
        description:
          "Message, Bubble, MessageScroller, Marker, Attachment, Trace, Questionnaire, CodeBlock",
      },
    ],
  },
  {
    label: "Padrões",
    items: [
      {
        id: "recipes",
        title: "Composições",
        description: "Exemplos de telas usando o sistema",
      },
      {
        id: "guidelines",
        title: "Boas práticas",
        description: "Acessibilidade, voz e uso consistente",
      },
    ],
  },
]
export const pages = groups.flatMap((g) =>
  g.items.map((i) => ({ ...i, group: g.label }))
)
