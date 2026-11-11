import { useState } from "react"
import { Tick02Icon, Search01Icon } from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { Progress } from "@/components/ui/progress"
import { Spinner } from "@/components/ui/spinner"
import { Skeleton } from "@/components/ui/skeleton"
import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty"
import { toast } from "@/components/ui/toast"
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog"
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverTitle,
  PopoverDescription,
} from "@/components/ui/popover"
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuGroup,
  ContextMenuItem,
} from "@/components/ui/context-menu"
import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command"
import { Input } from "@/components/ui/input"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Example, PageTitle, Icon } from "./common"
export function Feedback() {
  return (
    <>
      <PageTitle
        section="COMPONENTES / FEEDBACK"
        title="Feedback"
        description="Dê contexto para cada estado: o que aconteceu, o que está acontecendo e o que a pessoa pode fazer agora."
      />
      <Example
        id="alert"
        title="Alert"
        description="Informação persistente no contexto da tarefa."
      >
        <div className="stack w-full">
          <Alert>
            <Icon icon={Tick02Icon} />
            <AlertTitle>Alterações prontas para revisar.</AlertTitle>
            <AlertDescription>
              Verifique os detalhes antes de publicar a nova versão.
            </AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Não foi possível salvar.</AlertTitle>
            <AlertDescription>
              Verifique os campos destacados e tente novamente.
            </AlertDescription>
          </Alert>
        </div>
      </Example>
      <Example
        id="toast"
        title="Toast"
        description="Confirmação transitória sem interromper a navegação."
      >
        <div className="row">
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                title: "Alterações salvas",
                description: "Confirmação de demonstração.",
                type: "success",
              })
            }
          >
            Exibir sucesso
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({
                title: "Não foi possível salvar",
                description: "Mensagem de erro de demonstração.",
                type: "error",
              })
            }
          >
            Exibir erro
          </Button>
          <Button
            variant="outline"
            onClick={() => {
              let id = ""
              id = toast.add({
                title: "Item arquivado",
                description: "Demonstração local.",
                actionProps: {
                  children: "Desfazer",
                  onClick() {
                    toast.close(id)
                    toast.add({ title: "Ação desfeita" })
                  },
                },
              })
            }}
          >
            Exibir com desfazer
          </Button>
        </div>
      </Example>
      <Example
        id="progress"
        title="Progress"
        description="Progresso determinado, com nome e valor acessíveis."
      >
        <div className="stack w-full max-w-lg">
          <span className="text-sm">Preparando arquivos · 64%</span>
          <Progress value={64} aria-label="Preparando arquivos" />
          <span className="text-sm text-muted-foreground">
            Exemplo estático de progresso.
          </span>
        </div>
      </Example>
      <Example
        id="spinner"
        title="Spinner"
        description="Atividade indeterminada com uma descrição textual."
      >
        <div className="row">
          <Spinner />
          <span className="text-sm">Carregando prévia…</span>
          <Button disabled>
            <Spinner data-icon="inline-start" />
            Salvando alterações
          </Button>
        </div>
      </Example>
      <Example
        id="skeleton"
        title="Skeleton"
        description="Reserva o espaço do conteúdo durante o carregamento."
      >
        <div className="flex w-full max-w-md gap-4">
          <Skeleton className="size-12 rounded-full" />
          <div className="flex flex-1 flex-col gap-3">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-4 w-full" />
            <Skeleton className="h-4 w-1/2" />
          </div>
        </div>
      </Example>
      <Example
        id="empty"
        title="Empty"
        description="Explique a ausência de conteúdo e ofereça uma ação concreta."
      >
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon">
              <Icon icon={Search01Icon} />
            </EmptyMedia>
            <EmptyTitle>Nenhum arquivo por aqui.</EmptyTitle>
            <EmptyDescription>
              Os arquivos do projeto vão aparecer neste espaço.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent>
            <Button
              onClick={() =>
                toast.add({
                  title: "Adicionar arquivo",
                  description: "Ação de demonstração do catálogo.",
                })
              }
            >
              Adicionar primeiro arquivo
            </Button>
          </EmptyContent>
        </Empty>
      </Example>
    </>
  )
}
export function Overlays() {
  const [command, setCommand] = useState("none")
  return (
    <>
      <PageTitle
        section="COMPONENTES / OVERLAYS"
        title="Overlays"
        description="Superfícies com finalidade clara, acionadas por controles reais. Título acessível, foco gerenciado e retorno ao contexto de origem."
      />
      <Example
        id="dialog"
        title="Dialog"
        description="Uma tarefa curta e focada, com confirmação explícita."
      >
        <Dialog>
          <DialogTrigger render={<Button />}>Editar projeto</DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Editar projeto</DialogTitle>
              <DialogDescription>
                Atualize os dados desta demonstração.
              </DialogDescription>
            </DialogHeader>
            <FieldGroup>
              <Field>
                <FieldLabel htmlFor="dialog-name">Nome do projeto</FieldLabel>
                <Input id="dialog-name" defaultValue="Nova presença digital" />
              </Field>
            </FieldGroup>
            <DialogFooter>
              <DialogClose render={<Button variant="outline" />}>
                Cancelar
              </DialogClose>
              <DialogClose
                render={<Button />}
                onClick={() =>
                  toast.add({
                    title: "Demonstração concluída",
                    description: "Nenhum projeto real foi alterado.",
                  })
                }
              >
                Salvar alterações
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </Example>
      <Example
        id="alert-dialog"
        title="AlertDialog"
        description="Uma decisão que precisa de confirmação antes de continuar."
      >
        <AlertDialog>
          <AlertDialogTrigger render={<Button variant="outline" />}>
            Arquivar projeto de exemplo
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Arquivar este projeto?</AlertDialogTitle>
              <AlertDialogDescription>
                Esta é uma demonstração. Nenhum dado real será alterado.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancelar</AlertDialogCancel>
              <AlertDialogAction
                onClick={() =>
                  toast.add({ title: "Projeto de exemplo arquivado" })
                }
              >
                Arquivar projeto
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </Example>
      <Example
        id="sheet"
        title="Sheet"
        description="Conteúdo lateral que complementa a tela atual."
      >
        <Sheet>
          <SheetTrigger render={<Button variant="outline" />}>
            Abrir detalhes
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Detalhes do projeto</SheetTitle>
              <SheetDescription>
                Um contexto adicional sem perder a tela de origem.
              </SheetDescription>
            </SheetHeader>
            <div className="p-6 text-sm">
              Design e desenvolvimento · etapa de revisão.
            </div>
            <SheetFooter>
              <SheetClose render={<Button variant="outline" />}>
                Fechar detalhes
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </Example>
      <Example
        id="drawer"
        title="Drawer"
        description="Painel inferior para tarefas curtas, especialmente em telas de toque."
      >
        <Drawer>
          <DrawerTrigger render={<Button variant="outline" />}>
            Abrir painel inferior
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Próxima etapa</DrawerTitle>
              <DrawerDescription>
                Revise os detalhes antes de continuar.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <DrawerClose render={<Button />}>Entendi</DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Example>
      <Example
        id="popover"
        title="Popover"
        description="Detalhes curtos ligados a um controle."
      >
        <Popover>
          <PopoverTrigger render={<Button variant="outline" />}>
            Ver especificação
          </PopoverTrigger>
          <PopoverContent>
            <PopoverTitle>Controle padrão</PopoverTitle>
            <PopoverDescription>
              44 px de altura, raio de 12 px e foco azul visível.
            </PopoverDescription>
          </PopoverContent>
        </Popover>
      </Example>
      <Example
        id="hover-card"
        title="HoverCard"
        description="Complemento disponível ao passar o ponteiro ou focar o link."
      >
        <HoverCard>
          <HoverCardTrigger
            render={
              <a
                href="#brand"
                className="text-sm underline underline-offset-4"
              />
            }
          >
            Sobre a Untold
          </HoverCardTrigger>
          <HoverCardContent>
            <h3 className="font-semibold">Sites com identidade.</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Design e desenvolvimento para ideias que ganham presença.
            </p>
          </HoverCardContent>
        </HoverCard>
      </Example>
      <Example
        id="tooltip"
        title="Tooltip"
        description="Ajuda curta; o controle continua com nome acessível."
      >
        <Tooltip>
          <TooltipTrigger
            render={
              <Button
                size="icon"
                variant="outline"
                aria-label="Buscar no projeto"
              />
            }
          >
            <Icon icon={Search01Icon} />
          </TooltipTrigger>
          <TooltipContent>Buscar no projeto</TooltipContent>
        </Tooltip>
      </Example>
      <Example
        id="dropdown-menu"
        title="DropdownMenu"
        description="Ações contextuais em grupos nomeados."
      >
        <DropdownMenu>
          <DropdownMenuTrigger render={<Button variant="outline" />}>
            Ações do projeto
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>Projeto de exemplo</DropdownMenuLabel>
              <DropdownMenuItem
                onClick={() => toast.add({ title: "Duplicar · demonstração" })}
              >
                Duplicar
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => toast.add({ title: "Renomear · demonstração" })}
              >
                Renomear
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem disabled>Excluir indisponível</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </Example>
      <Example
        id="context-menu"
        title="ContextMenu"
        description="Menu contextual. Também acionável pela tecla de menu do teclado."
      >
        <ContextMenu>
          <ContextMenuTrigger className="flex min-h-32 w-full items-center justify-center rounded-xl border border-dashed p-6 text-sm text-muted-foreground">
            Clique com o botão direito neste espaço.
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuGroup>
              <ContextMenuItem
                onClick={() => toast.add({ title: "Prévia · demonstração" })}
              >
                Abrir prévia
              </ContextMenuItem>
              <ContextMenuItem
                onClick={() =>
                  toast.add({ title: "Link copiado · demonstração" })
                }
              >
                Copiar referência de exemplo
              </ContextMenuItem>
            </ContextMenuGroup>
          </ContextMenuContent>
        </ContextMenu>
      </Example>
      <Example
        id="command"
        title="Command"
        description="Pesquisa por ações e páginas. A seleção inicial não força rolagem da página."
      >
        <Command
          value={command}
          onValueChange={setCommand}
          className="max-w-lg rounded-xl border"
        >
          <CommandInput placeholder="Buscar no sistema…" />
          <CommandList>
            <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
            <CommandGroup heading="Fundamentos">
              {[
                ["Cores", "colors"],
                ["Tipografia", "typography"],
                ["Espaço e forma", "geometry"],
              ].map(([l, v]) => (
                <CommandItem
                  key={v}
                  value={v}
                  onSelect={() => {
                    location.hash = v
                  }}
                >
                  {l}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </Example>
    </>
  )
}
