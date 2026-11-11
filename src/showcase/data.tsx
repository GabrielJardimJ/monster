import { useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
} from "@/components/ui/card"
import {
  Table,
  TableHeader,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableCaption,
} from "@/components/ui/table"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
import {
  Item,
  ItemContent,
  ItemTitle,
  ItemDescription,
  ItemActions,
  ItemMedia,
} from "@/components/ui/item"
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
} from "@/components/ui/avatar"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ResizablePanelGroup,
  ResizablePanel,
  ResizableHandle,
} from "@/components/ui/resizable"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { toast } from "@/components/ui/toast"
import { Example, PageTitle } from "./common"
const work = [
  { name: "Identidade visual", phase: "Concluído", owner: "Design" },
  { name: "Site institucional", phase: "Em revisão", owner: "Desenvolvimento" },
  {
    name: "Landing page do novo produto com um título longo",
    phase: "Planejamento",
    owner: "Produto",
  },
]
const chart = [
  { stage: "Ideia", items: 4 },
  { stage: "Design", items: 7 },
  { stage: "Construção", items: 5 },
  { stage: "Revisão", items: 3 },
]
export function Data() {
  const [open, setOpen] = useState(false)
  return (
    <>
      <PageTitle
        section="COMPONENTES / CONTENT"
        title="Dados e conteúdo"
        description="Superfícies que organizam informação sem competir com ela. Exemplos fictícios usados apenas para demonstrar os componentes."
      />
      <Example
        id="card"
        title="Card"
        description="Composição completa: cabeçalho, conteúdo e rodapé."
        code={
          "<Card>\n  <CardHeader>\n    <CardTitle>Seu próximo projeto</CardTitle>\n    <CardDescription>Conteúdo e direção em um só lugar.</CardDescription>\n  </CardHeader>\n  <CardContent>Detalhes do projeto</CardContent>\n  <CardFooter><Button>Ver projeto</Button></CardFooter>\n</Card>"
        }
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Seu próximo projeto</CardTitle>
            <CardDescription>
              Conteúdo e direção em um só lugar.
            </CardDescription>
            <CardAction>
              <Badge variant="secondary">Design</Badge>
            </CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Um ponto de partida para organizar a presença digital da sua
              marca.
            </p>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => toast.add({ title: "Projeto de demonstração" })}
            >
              Ver projeto
            </Button>
          </CardFooter>
        </Card>
      </Example>
      <Example
        id="table"
        title="Table"
        description="Conteúdo denso com leitura horizontal preservada em telas pequenas."
        wide
      >
        <Table>
          <TableCaption>Dados de demonstração do catálogo.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>Projeto</TableHead>
              <TableHead>Etapa</TableHead>
              <TableHead>Responsável</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {work.map((w) => (
              <TableRow key={w.name}>
                <TableCell className="max-w-72 whitespace-normal">
                  {w.name}
                </TableCell>
                <TableCell>
                  <Badge variant="outline">{w.phase}</Badge>
                </TableCell>
                <TableCell>{w.owner}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Example>
      <Example
        id="chart"
        title="Chart"
        description="Cores conectadas aos tokens chart. Os números são fictícios."
        wide
      >
        <ChartContainer
          config={{ items: { label: "Itens", color: "var(--chart-1)" } }}
          className="h-64 w-full"
        >
          <BarChart data={chart} accessibilityLayer>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="stage" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="items" fill="var(--color-items)" radius={6} />
          </BarChart>
        </ChartContainer>
      </Example>
      <Example
        id="item"
        title="Item"
        description="Linha de conteúdo com descrição e uma ação contextual."
      >
        <Item variant="outline" className="w-full">
          <ItemMedia>
            <img src="/brand/symbol.svg" width="32" height="32" alt="" />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Manual de identidade da Untold</ItemTitle>
            <ItemDescription>
              Diretrizes, assinaturas e aplicações.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<a href="#brand" />}
            >
              Ver identidade
            </Button>
          </ItemActions>
        </Item>
      </Example>
      <Example
        id="avatar"
        title="Avatar"
        description="Fallback obrigatório para imagens ausentes e grupos com contagem."
      >
        <div className="row">
          <Avatar>
            <AvatarFallback>UJ</AvatarFallback>
          </Avatar>
          <AvatarGroup>
            {["AN", "BR", "CL"].map((n) => (
              <Avatar key={n}>
                <AvatarFallback>{n}</AvatarFallback>
              </Avatar>
            ))}
            <AvatarGroupCount>+4</AvatarGroupCount>
          </AvatarGroup>
          <span className="text-sm text-muted-foreground">
            Iniciais substituem a imagem ausente.
          </span>
        </div>
      </Example>
      <Example
        id="accordion"
        title="Accordion"
        description="Conteúdo complementar, com o título sempre visível."
      >
        <Accordion className="w-full">
          <AccordionItem value="one">
            <AccordionTrigger>Como funciona o processo?</AccordionTrigger>
            <AccordionContent>
              Descoberta, direção visual, construção e revisão.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="two">
            <AccordionTrigger>Como usar o design system?</AccordionTrigger>
            <AccordionContent>
              Comece pelos tokens e componha as interfaces com os componentes da
              biblioteca.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Example>
      <Example
        id="collapsible"
        title="Collapsible"
        description="Expande um grupo de informações do mesmo contexto."
      >
        <Collapsible open={open} onOpenChange={setOpen} className="w-full">
          <CollapsibleTrigger render={<Button variant="outline" />}>
            {open ? "Ocultar detalhes" : "Mostrar detalhes do projeto"}
          </CollapsibleTrigger>
          <CollapsibleContent>
            <p className="panel-copy">
              Última revisão: conteúdo, responsividade e navegação por teclado.
            </p>
          </CollapsibleContent>
        </Collapsible>
      </Example>
      <Example
        id="carousel"
        title="Carousel"
        description="Navegação manual entre conteúdos; sem avanço automático."
      >
        <Carousel className="mx-auto w-full max-w-lg">
          <CarouselContent>
            {["Descoberta", "Design", "Construção"].map((s, i) => (
              <CarouselItem key={s}>
                <Card>
                  <CardHeader>
                    <CardDescription>Etapa 0{i + 1}</CardDescription>
                    <CardTitle>{s}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Uma parte do processo, com espaço para a sua marca.
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Badge variant="outline">Exemplo de conteúdo</Badge>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>
      </Example>
      <Example
        id="scroll-area"
        title="ScrollArea"
        description="Lista limitada ao seu contexto, com rolagem independente."
      >
        <ScrollArea className="h-52 w-full max-w-md rounded-xl border">
          <div className="flex flex-col gap-3 p-5">
            {Array.from({ length: 14 }, (_, i) => (
              <div key={i} className="text-sm">
                Documento {String(i + 1).padStart(2, "0")} · revisão da marca
              </div>
            ))}
          </div>
        </ScrollArea>
      </Example>
      <Example
        id="resizable"
        title="Resizable"
        description="Painéis com alça arrastável para ajustar o espaço."
        wide
      >
        <ResizablePanelGroup
          orientation="horizontal"
          className="min-h-40 rounded-xl border"
        >
          <ResizablePanel defaultSize="40%">
            <div className="p-6 text-sm">Arquivos do projeto</div>
          </ResizablePanel>
          <ResizableHandle withHandle />
          <ResizablePanel defaultSize="60%">
            <div className="p-6 text-sm">Prévia e detalhes</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </Example>
      <Example
        id="aspect-ratio"
        title="AspectRatio"
        description="Reserva espaço para a mídia e evita mudança de layout."
      >
        <div className="w-full max-w-xl">
          <AspectRatio ratio={16 / 9} className="rounded-xl bg-muted">
            <img
              src="/brand/logo-3d.png"
              alt="Render original da logo Untold"
              className="h-full w-full object-contain"
            />
          </AspectRatio>
        </div>
      </Example>
      <Example
        id="separator"
        title="Separator"
        description="Separa grupos de informação sem introduzir uma superfície."
      >
        <div className="stack w-full">
          <span className="text-sm">Design de interface</span>
          <Separator />
          <span className="text-sm">Desenvolvimento</span>
          <div className="flex h-5 items-center gap-4 text-sm">
            <span>Marca</span>
            <Separator orientation="vertical" />
            <span>Interface</span>
            <Separator orientation="vertical" />
            <span>Experiência</span>
          </div>
        </div>
      </Example>
    </>
  )
}
