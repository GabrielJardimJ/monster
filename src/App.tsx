import { useEffect, useState, lazy, Suspense } from "react"
import {
  Search01Icon,
  Sun03Icon,
  Moon02Icon,
  Menu01Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Icon } from "./showcase/common"
import { groups, pages } from "./showcase/catalog"
import { Button } from "@/components/ui/button"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Kbd } from "@/components/ui/kbd"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { Foundations } from "./showcase/foundations"
const Actions = lazy(() =>
  import("./showcase/actions").then((m) => ({ default: m.Actions }))
)
const Forms = lazy(() =>
  import("./showcase/forms").then((m) => ({ default: m.Forms }))
)
const Selection = lazy(() =>
  import("./showcase/forms").then((m) => ({ default: m.Selection }))
)
const Navigation = lazy(() =>
  import("./showcase/navigation").then((m) => ({ default: m.Navigation }))
)
const Data = lazy(() =>
  import("./showcase/data").then((m) => ({ default: m.Data }))
)
const Feedback = lazy(() =>
  import("./showcase/overlays").then((m) => ({ default: m.Feedback }))
)
const Overlays = lazy(() =>
  import("./showcase/overlays").then((m) => ({ default: m.Overlays }))
)
const Conversation = lazy(() =>
  import("./showcase/conversation").then((m) => ({ default: m.Conversation }))
)
const Recipes = lazy(() =>
  import("./showcase/recipes").then((m) => ({ default: m.Recipes }))
)
import { cn } from "@/lib/utils"

function readPage() {
  const key = location.hash.slice(1).split("/")[0]
  return pages.some((p) => p.id === key) ? key : "overview"
}
export default function App() {
  const [page, setPage] = useState(readPage),
    [search, setSearch] = useState(""),
    [menu, setMenu] = useState(false)
  const [dark, setDark] = useState(
    () => localStorage.getItem("untold-ds-theme") === "dark"
  )
  useEffect(() => {
    const fn = () => {
      setPage(readPage())
      window.scrollTo({ top: 0 })
      setMenu(false)
    }
    addEventListener("hashchange", fn)
    return () => removeEventListener("hashchange", fn)
  }, [])
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark)
    localStorage.setItem("untold-ds-theme", dark ? "dark" : "light")
  }, [dark])
  useEffect(() => {
    const listener = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        document.querySelector<HTMLInputElement>("#catalog-search")?.focus()
      }
    }
    addEventListener("keydown", listener)
    return () => removeEventListener("keydown", listener)
  }, [])
  const current = pages.find((p) => p.id === page)!
  const nav = (
    <>
      <a
        className="docs-brand"
        href="#overview"
        aria-label="Untold Design System"
      >
        <img
          src={
            dark
              ? "/brand/logo-horizontal-dark.svg"
              : "/brand/logo-horizontal.svg"
          }
          width="132"
          height="59"
          alt="untold"
        />
        <span>Design System</span>
      </a>
      <nav aria-label="Documentação">
        {groups.map((g) => {
          const items = g.items.filter((i) =>
            (i.title + " " + i.description)
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          return items.length ? (
            <div className="nav-group" key={g.label}>
              <span>{g.label}</span>
              {items.map((i) => (
                <a
                  href={"#" + i.id}
                  key={i.id}
                  className={cn("nav-item", page === i.id && "active")}
                  aria-current={page === i.id ? "page" : undefined}
                >
                  <span>{i.title}</span>
                  {page === i.id && <span className="nav-dot" />}
                </a>
              ))}
            </div>
          ) : null
        })}
        {search &&
          !pages.some((i) =>
            (i.title + " " + i.description)
              .toLowerCase()
              .includes(search.toLowerCase())
          ) && <p className="nav-empty">Nenhum resultado para “{search}”.</p>}
      </nav>
      <div className="sidebar-bottom">
        <span className="status-dot" />
        Biblioteca v1.0<Badge variant="outline">63 componentes</Badge>
      </div>
    </>
  )
  const content =
    page === "actions" ? (
      <Actions />
    ) : page === "forms" ? (
      <Forms />
    ) : page === "selection" ? (
      <Selection />
    ) : page === "navigation" ? (
      <Navigation />
    ) : page === "data" ? (
      <Data />
    ) : page === "feedback" ? (
      <Feedback />
    ) : page === "overlays" ? (
      <Overlays />
    ) : page === "conversation" ? (
      <Conversation />
    ) : page === "recipes" ? (
      <Recipes />
    ) : (
      <Foundations page={page} />
    )
  return (
    <div className="docs-shell">
      <a className="skip-link" href="#main-content">
        Pular para o conteúdo
      </a>
      <aside className="docs-sidebar">{nav}</aside>
      <div className="docs-body">
        <header className="docs-topbar">
          <div className="topbar-location">
            <Button
              className="mobile-menu"
              variant="ghost"
              size="icon"
              aria-label="Abrir navegação"
              onClick={() => setMenu(true)}
            >
              <Icon icon={Menu01Icon} />
            </Button>
            <span>{current.group}</span>
            <span>/</span>
            <strong>{current.title}</strong>
          </div>
          <div className="topbar-actions">
            <InputGroup className="catalog-search">
              <InputGroupAddon>
                <Icon icon={Search01Icon} />
              </InputGroupAddon>
              <InputGroupInput
                id="catalog-search"
                aria-label="Buscar no catálogo"
                placeholder="Buscar no sistema…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘ K</Kbd>
              </InputGroupAddon>
            </InputGroup>
            <Button
              variant="ghost"
              size="icon"
              aria-label={dark ? "Ativar tema claro" : "Ativar tema escuro"}
              onClick={() => setDark(!dark)}
            >
              <Icon icon={dark ? Sun03Icon : Moon02Icon} />
            </Button>
            <Button
              variant="outline"
              size="sm"
              nativeButton={false}
              render={<a href="/downloads/untold-tokens.json" download />}
            >
              Tokens
              <Icon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
          </div>
        </header>
        <main id="main-content" className="docs-main" key={page}>
          <Suspense
            fallback={
              <div className="text-sm text-muted-foreground" role="status">
                Carregando componentes…
              </div>
            }
          >
            {content}
          </Suspense>
        </main>
        <footer className="docs-footer">
          <span>untold / Design System</span>
          <span>Manrope · React · shadcn/ui</span>
          <a href="#guidelines">Diretrizes de uso ↗</a>
        </footer>
      </div>
      <Sheet open={menu} onOpenChange={setMenu}>
        <SheetContent side="left" className="mobile-sidebar">
          <SheetHeader>
            <SheetTitle className="sr-only">
              Navegação do design system
            </SheetTitle>
          </SheetHeader>
          {nav}
        </SheetContent>
      </Sheet>
    </div>
  )
}
