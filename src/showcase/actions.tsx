import { useState } from "react"
import {
  ArrowRight01Icon,
  TextBoldIcon,
  TextItalicIcon,
  TextAlignLeftIcon,
  TextAlignCenterIcon,
  TextAlignRightIcon,
  Search01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { ButtonGroup, ButtonGroupSeparator } from "@/components/ui/button-group"
import { Badge } from "@/components/ui/badge"
import { Toggle } from "@/components/ui/toggle"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Kbd, KbdGroup } from "@/components/ui/kbd"
import { Spinner } from "@/components/ui/spinner"
import { toast } from "@/components/ui/toast"
import { StateMatrix, previewState } from "./state-matrix"
import { Example, PageTitle, Spec, Note, Icon } from "./common"
export function Actions() {
  const [loading, setLoading] = useState(false)
  return (
    <>
      <PageTitle
        section="COMPONENTES / ACTIONS"
        title="Ações"
        description="Controles para iniciar uma tarefa, escolher uma opção ou indicar uma categoria. Rótulos claros e uma hierarquia por grupo."
      />
      <Example
        id="button"
        title="Button"
        description="Ação principal, secundária, contornada, discreta, destrutiva ou link."
        code={
          '<Button>Salvar projeto</Button>\n<Button variant="outline">Cancelar</Button>'
        }
        wide
      >
        <div className="stack">
          <StateMatrix
            rows={
              [
                "default",
                "secondary",
                "outline",
                "ghost",
                "destructive",
                "link",
              ] as const
            }
            render={(variant, state) => (
              <Button
                variant={variant}
                {...previewState(state)}
                onClick={() =>
                  toast.add({
                    title: "Ação de demonstração",
                    description: "Este botão pertence ao catálogo.",
                  })
                }
              >
                Salvar projeto
              </Button>
            )}
          />
          <div className="example-subheading">Tamanhos e ícones</div>
          <div className="row">
            <Button size="xs">Compacto</Button>
            <Button size="sm">Pequeno</Button>
            <Button>Padrão</Button>
            <Button size="lg">Destaque</Button>
            <Button>
              <Icon icon={Search01Icon} data-icon="inline-start" />
              Buscar
            </Button>
            <Button>
              Continuar
              <Icon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
            <Button size="icon" variant="outline" aria-label="Buscar">
              <Icon icon={Search01Icon} />
            </Button>
          </div>
          <div className="row">
            <Button disabled>
              <Spinner data-icon="inline-start" />
              Salvando projeto
            </Button>
            <Button
              disabled={loading}
              onClick={() => {
                setLoading(true)
                setTimeout(() => {
                  setLoading(false)
                  toast.add({
                    title: "Demonstração concluída",
                    type: "success",
                  })
                }, 900)
              }}
            >
              {loading && <Spinner data-icon="inline-start" />}
              {loading ? "Processando…" : "Testar carregamento"}
            </Button>
          </div>
        </div>
      </Example>
      <Spec
        rows={[
          [
            "height",
            "44 px · sm 36 · lg 52",
            "Toque de 44 px em interfaces mobile",
          ],
          ["radius", "12 px", "var(--shape-lg)"],
          ["font", "Manrope 600 / 14 px", "Rótulo com verbo e objeto"],
          ["focus", "2 px + offset 3 px", "Visível sem depender do hover"],
        ]}
      />
      <Example
        id="button-group"
        title="ButtonGroup"
        description="Agrupa ações relacionadas sem criar uma seleção manual."
        code={
          '<ButtonGroup>\n  <Button variant="outline">Anterior</Button>\n  <Button variant="outline">Próximo</Button>\n</ButtonGroup>'
        }
      >
        <ButtonGroup>
          <Button
            variant="outline"
            onClick={() => toast.add({ title: "Página anterior" })}
          >
            Anterior
          </Button>
          <ButtonGroupSeparator />
          <Button
            variant="outline"
            onClick={() => toast.add({ title: "Próxima página" })}
          >
            Próximo
          </Button>
        </ButtonGroup>
      </Example>
      <Example
        id="badge"
        title="Badge"
        description="Metadados curtos. Não use como substituto de um botão."
      >
        <div className="row">
          <Badge>Design</Badge>
          <Badge variant="secondary">Desenvolvimento</Badge>
          <Badge variant="outline">Responsivo</Badge>
          <Badge variant="destructive">Revisão necessária</Badge>
          <Badge variant="outline" className="max-w-full whitespace-normal">
            Uma categoria com nome extenso que precisa continuar legível
          </Badge>
        </div>
      </Example>
      <Example
        id="toggle"
        title="Toggle"
        description="Alterna um único estado. O valor pressionado pertence à primitiva."
      >
        <div className="row">
          <Toggle aria-label="Negrito">
            <Icon icon={TextBoldIcon} />
          </Toggle>
          <Toggle variant="outline" aria-label="Itálico">
            <Icon icon={TextItalicIcon} />
          </Toggle>
          <Toggle disabled aria-label="Negrito indisponível">
            <Icon icon={TextBoldIcon} />
          </Toggle>
        </div>
      </Example>
      <Example
        id="toggle-group"
        title="ToggleGroup"
        description="Escolha entre opções relacionadas. Também disponível com seleção múltipla."
      >
        <ToggleGroup
          defaultValue={["left"]}
          variant="outline"
          aria-label="Alinhamento de texto"
        >
          <ToggleGroupItem value="left" aria-label="Alinhar à esquerda">
            <Icon icon={TextAlignLeftIcon} />
          </ToggleGroupItem>
          <ToggleGroupItem value="center" aria-label="Centralizar">
            <Icon icon={TextAlignCenterIcon} />
          </ToggleGroupItem>
          <ToggleGroupItem value="right" aria-label="Alinhar à direita">
            <Icon icon={TextAlignRightIcon} />
          </ToggleGroupItem>
        </ToggleGroup>
      </Example>
      <Example
        id="kbd"
        title="Kbd"
        description="Representa atalhos de teclado sem sugerir uma ação clicável."
      >
        <div className="row">
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
          <span className="text-sm text-muted-foreground">
            Buscar no catálogo
          </span>
          <Kbd>Esc</Kbd>
          <span className="text-sm text-muted-foreground">Fechar overlay</span>
        </div>
      </Example>
      <Note>
        Os estados da matriz são fixados por data-preview. Os demais exemplos
        continuam interativos.
      </Note>
    </>
  )
}
