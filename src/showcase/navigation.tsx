import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  BreadcrumbPage,
  BreadcrumbEllipsis,
} from "@/components/ui/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarGroup,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar"
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
} from "@/components/ui/sidebar"
import { DirectionProvider } from "@/components/ui/direction"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/toast"
import { Example, PageTitle } from "./common"
export function Navigation() {
  const [page, setPage] = useState(1)
  return (
    <>
      <PageTitle
        section="COMPONENTES / NAVIGATION"
        title="Navegação"
        description="Mostre onde a pessoa está, o que está disponível e como voltar. Estados ativos claros em qualquer tema."
      />
      <Example
        id="tabs"
        title="Tabs"
        description="Alterna entre painéis do mesmo contexto."
      >
        <Tabs defaultValue="design" className="w-full">
          <TabsList>
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="development">Desenvolvimento</TabsTrigger>
            <TabsTrigger value="release">Publicação</TabsTrigger>
          </TabsList>
          <TabsContent value="design">
            <p className="panel-copy">
              Organizamos conteúdo, hierarquia e identidade antes de construir.
            </p>
          </TabsContent>
          <TabsContent value="development">
            <p className="panel-copy">
              Transformamos a direção aprovada em uma interface responsiva.
            </p>
          </TabsContent>
          <TabsContent value="release">
            <p className="panel-copy">
              Revisamos o projeto e preparamos a publicação.
            </p>
          </TabsContent>
        </Tabs>
      </Example>
      <Example
        id="breadcrumb"
        title="Breadcrumb"
        description="Hierarquia com o destino atual em texto, sem link."
      >
        <div className="stack">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#overview">Biblioteca</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbLink href="#navigation">Componentes</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Navegação</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="#overview">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbEllipsis />
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Uma página com título extenso</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </Example>
      <Example
        id="pagination"
        title="Pagination"
        description="Paginação local com indicação da página selecionada."
      >
        <div className="stack">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious
                  href="#pagination"
                  onClick={(e) => {
                    e.preventDefault()
                    setPage(Math.max(1, page - 1))
                  }}
                />
              </PaginationItem>
              {[1, 2, 3].map((n) => (
                <PaginationItem key={n}>
                  <PaginationLink
                    href="#pagination"
                    isActive={page === n}
                    onClick={(e) => {
                      e.preventDefault()
                      setPage(n)
                    }}
                  >
                    {n}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext
                  href="#pagination"
                  onClick={(e) => {
                    e.preventDefault()
                    setPage(Math.min(3, page + 1))
                  }}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
          <p className="text-sm text-muted-foreground">
            Página {page} de 3 · exemplo local
          </p>
        </div>
      </Example>
      <Example
        id="navigation-menu"
        title="NavigationMenu"
        description="Navegação principal com conteúdo complementar. Deixe espaço para o painel."
        wide
      >
        <div className="min-h-56">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Fundamentos</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-64 gap-2 p-3">
                    <NavigationMenuLink href="#colors">
                      Cores e tokens
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#typography">
                      Tipografia
                    </NavigationMenuLink>
                    <NavigationMenuLink href="#geometry">
                      Espaço e forma
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink href="#actions">
                  Componentes
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </Example>
      <Example
        id="menubar"
        title="Menubar"
        description="Ações de um contexto de trabalho, agrupadas por finalidade."
      >
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>Projeto</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem
                  onClick={() =>
                    toast.add({ title: "Novo projeto · demonstração" })
                  }
                >
                  Novo projeto
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    toast.add({ title: "Projeto duplicado · demonstração" })
                  }
                >
                  Duplicar
                </MenubarItem>
              </MenubarGroup>
              <MenubarSeparator />
              <MenubarGroup>
                <MenubarItem disabled>Arquivar</MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Editar</MenubarTrigger>
            <MenubarContent>
              <MenubarGroup>
                <MenubarItem
                  onClick={() =>
                    toast.add({ title: "Alteração desfeita · demonstração" })
                  }
                >
                  Desfazer
                </MenubarItem>
                <MenubarItem
                  onClick={() =>
                    toast.add({ title: "Alteração refeita · demonstração" })
                  }
                >
                  Refazer
                </MenubarItem>
              </MenubarGroup>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </Example>
      <Example
        id="sidebar"
        title="Sidebar"
        description="Exemplo contido na prévia. A sidebar não escapa para o layout da documentação."
        wide
      >
        <div className="sidebar-demo">
          <SidebarProvider className="min-h-0">
            <Sidebar collapsible="none">
              <SidebarHeader>
                <strong>Workspace untold</strong>
              </SidebarHeader>
              <SidebarContent>
                <SidebarGroup>
                  <SidebarGroupLabel>Projeto</SidebarGroupLabel>
                  <SidebarMenu>
                    {["Visão geral", "Arquivos", "Atividade"].map((n, i) => (
                      <SidebarMenuItem key={n}>
                        <SidebarMenuButton
                          isActive={i === 0}
                          onClick={() =>
                            toast.add({
                              title: n,
                              description: "Navegação de demonstração",
                            })
                          }
                        >
                          {n}
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    ))}
                  </SidebarMenu>
                </SidebarGroup>
              </SidebarContent>
              <SidebarFooter>
                <Badge variant="outline">Projeto em design</Badge>
              </SidebarFooter>
            </Sidebar>
            <div className="flex flex-1 flex-col justify-center gap-3 p-8">
              <h3 className="type-title">Seu espaço de trabalho.</h3>
              <p className="text-sm text-muted-foreground">
                A navegação pertence ao contexto da aplicação.
              </p>
            </div>
          </SidebarProvider>
        </div>
      </Example>
      <Example
        id="direction"
        title="DirectionProvider"
        description="A direção é declarada no provider e no contêiner."
      >
        <DirectionProvider direction="rtl">
          <div dir="rtl" className="row w-full">
            <Button>متابعة</Button>
            <Badge variant="outline">RTL</Badge>
            <span className="text-sm text-muted-foreground">
              Interface com direção de leitura à direita.
            </span>
          </div>
        </DirectionProvider>
      </Example>
    </>
  )
}
