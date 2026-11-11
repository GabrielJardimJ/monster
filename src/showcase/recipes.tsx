import { useState } from "react"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  FieldGroup,
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/toast"
import { Example, PageTitle, Note } from "./common"
export function Recipes() {
  const [notify, setNotify] = useState(true)
  return (
    <>
      <PageTitle
        section="PADRÕES / COMPOSITIONS"
        title="Peças que trabalham juntas."
        description="Exemplos de interfaces compostas com os componentes e tokens da biblioteca. Use como ponto de partida para aplicações da Untold."
      />
      <Example
        id="project-settings"
        title="Configurações do projeto"
        description="Formulário com hierarquia, configurações e confirmação local."
        wide
      >
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Seu projeto</CardTitle>
            <CardDescription>
              Informações que mantêm a equipe na mesma direção.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form
              id="recipe-form"
              onSubmit={(e) => {
                e.preventDefault()
                toast.add({
                  title: "Configurações validadas",
                  description: "Demonstração local. Nenhum dado foi enviado.",
                  type: "success",
                })
              }}
            >
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="recipe-project">
                    Nome do projeto
                  </FieldLabel>
                  <Input
                    id="recipe-project"
                    name="project"
                    defaultValue="Novo site da marca"
                    required
                  />
                </Field>
                <Field>
                  <FieldLabel htmlFor="recipe-email">
                    E-mail de contato
                  </FieldLabel>
                  <Input
                    id="recipe-email"
                    type="email"
                    defaultValue="email@untold.com.br"
                    required
                  />
                  <FieldDescription>
                    Usado apenas neste exemplo.
                  </FieldDescription>
                </Field>
                <Separator />
                <Field orientation="horizontal">
                  <Switch
                    id="recipe-notifications"
                    checked={notify}
                    onCheckedChange={setNotify}
                  />
                  <div>
                    <FieldLabel htmlFor="recipe-notifications">
                      Acompanhar atualizações
                    </FieldLabel>
                    <FieldDescription>
                      Altere para testar o estado do controle.
                    </FieldDescription>
                  </div>
                </Field>
              </FieldGroup>
            </form>
          </CardContent>
          <CardFooter className="gap-3">
            <Button type="submit" form="recipe-form">
              Salvar configurações
            </Button>
            <Button
              variant="outline"
              onClick={() => {
                document.querySelector<HTMLFormElement>("#recipe-form")?.reset()
                setNotify(true)
              }}
            >
              Restaurar
            </Button>
          </CardFooter>
        </Card>
      </Example>
      <Example
        id="project-overview"
        title="Resumo de projeto"
        description="Informações agrupadas, estado explícito e uma ação principal."
      >
        <Card className="w-full max-w-lg">
          <CardHeader>
            <div className="row">
              <Avatar>
                <AvatarFallback>UT</AvatarFallback>
              </Avatar>
              <Badge variant="secondary">Em design</Badge>
            </div>
            <CardTitle>Presença digital da marca</CardTitle>
            <CardDescription>Um projeto com direção própria.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="stack">
              <div className="flex justify-between gap-6 text-sm">
                <span className="text-muted-foreground">Etapa atual</span>
                <span>Interface</span>
              </div>
              <Separator />
              <div className="flex justify-between gap-6 text-sm">
                <span className="text-muted-foreground">Próximo passo</span>
                <span>Revisão de conteúdo</span>
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              onClick={() => toast.add({ title: "Revisão de exemplo aberta" })}
            >
              Revisar projeto
            </Button>
          </CardFooter>
        </Card>
      </Example>
      <section className="dark dark-recipe">
        <span className="eyebrow">RECEITA / TEMA ESCURO</span>
        <h2>
          Os mesmos componentes.
          <br />
          Outro contexto.
        </h2>
        <p>
          Os valores mudam pelo papel semântico. A composição e a API continuam
          iguais.
        </p>
        <div className="row">
          <Button
            onClick={() =>
              toast.add({ title: "Ação principal no tema escuro" })
            }
          >
            Ação principal
          </Button>
          <Button
            variant="outline"
            onClick={() =>
              toast.add({ title: "Ação secundária no tema escuro" })
            }
          >
            Ação secundária
          </Button>
          <Badge variant="secondary">Em revisão</Badge>
        </div>
        <Alert>
          <AlertTitle>Um sistema compartilhado.</AlertTitle>
          <AlertDescription>
            O tema escuro deriva das superfícies Ink e dos textos claros do
            manual.
          </AlertDescription>
        </Alert>
      </section>
      <Note>
        Os exemplos são fictícios. Nenhuma ação do catálogo modifica projetos
        reais ou envia informações.
      </Note>
    </>
  )
}
