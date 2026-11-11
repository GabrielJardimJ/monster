import { useState } from "react"
import { Search01Icon } from "@hugeicons/core-free-icons"
import {
  Field,
  FieldLabel,
  FieldGroup,
  FieldDescription,
  FieldError,
  FieldSet,
  FieldLegend,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
} from "@/components/ui/select"
import { NativeSelect, NativeSelectOption } from "@/components/ui/native-select"
import {
  Combobox,
  ComboboxInput,
  ComboboxContent,
  ComboboxList,
  ComboboxItem,
  ComboboxEmpty,
} from "@/components/ui/combobox"
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"
import { Slider } from "@/components/ui/slider"
import { StateMatrix, previewState } from "./state-matrix"
import { Example, PageTitle, Icon, Note } from "./common"
const items = [
  { label: "Landing page", value: "landing" },
  { label: "Site institucional", value: "institutional" },
  { label: "Projeto sob medida", value: "custom" },
]
export function Forms() {
  const [date, setDate] = useState<Date | undefined>(new Date(2026, 10, 11))
  return (
    <>
      <PageTitle
        section="COMPONENTES / FORMS"
        title="Formulários"
        description="Labels visíveis, instruções objetivas e mensagens de erro junto ao campo. A estrutura dos campos também faz parte do sistema."
      />
      <Example
        id="field"
        title="Field"
        description="Estrutura comum para label, controle, descrição e erro."
        code={
          '<FieldGroup>\n  <Field>\n    <FieldLabel htmlFor="name">Nome do projeto</FieldLabel>\n    <Input id="name" />\n    <FieldDescription>Como vamos identificar seu projeto.</FieldDescription>\n  </Field>\n</FieldGroup>'
        }
      >
        <FieldGroup className="max-w-lg">
          <Field>
            <FieldLabel htmlFor="project-name">
              Nome do projeto <span aria-hidden="true">*</span>
            </FieldLabel>
            <Input
              id="project-name"
              placeholder="O próximo capítulo da sua marca"
              required
            />
            <FieldDescription>
              Como vamos identificar seu projeto.
            </FieldDescription>
          </Field>
          <Field data-invalid>
            <FieldLabel htmlFor="error-email">E-mail de contato</FieldLabel>
            <Input
              id="error-email"
              defaultValue="email-incompleto"
              aria-invalid
              aria-describedby="email-error"
            />
            <FieldError id="email-error">
              Informe um e-mail válido, como voce@empresa.com.
            </FieldError>
          </Field>
          <Field data-disabled>
            <FieldLabel htmlFor="disabled-name">Domínio reservado</FieldLabel>
            <Input
              id="disabled-name"
              disabled
              placeholder="Indisponível no momento"
            />
          </Field>
        </FieldGroup>
      </Example>
      <Example
        id="input"
        title="Input"
        description="Matriz dos estados principais. O tamanho padrão acompanha o Button."
        wide
      >
        <StateMatrix
          rows={["input"] as const}
          states={["default", "hover", "focus", "disabled", "invalid"]}
          render={(_, s) => (
            <Input
              aria-label={"E-mail · " + s}
              placeholder="voce@empresa.com"
              aria-invalid={s === "invalid" || undefined}
              {...previewState(s)}
            />
          )}
        />
      </Example>
      <Example
        id="input-group"
        title="InputGroup"
        description="Agrupa ícone, prefixo e ação com o campo apropriado."
      >
        <div className="stack max-w-lg">
          <InputGroup>
            <InputGroupAddon>
              <Icon icon={Search01Icon} />
            </InputGroupAddon>
            <InputGroupInput
              aria-label="Buscar projeto"
              placeholder="Buscar projeto…"
            />
            <InputGroupAddon align="inline-end">
              <InputGroupButton
                onClick={(e) => {
                  const group = e.currentTarget.closest(
                    "[data-slot=input-group]"
                  )
                  group?.querySelector("input")?.focus()
                }}
              >
                Buscar
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <InputGroup>
            <InputGroupAddon>https://</InputGroupAddon>
            <InputGroupInput
              aria-label="Seu domínio"
              placeholder="seunegocio.com.br"
            />
          </InputGroup>
        </div>
      </Example>
      <Example
        id="textarea"
        title="Textarea"
        description="Conteúdo em múltiplas linhas. Use uma descrição quando houver um limite."
      >
        <Field className="max-w-lg">
          <FieldLabel htmlFor="brief-text">Conte sua ideia</FieldLabel>
          <Textarea
            id="brief-text"
            rows={4}
            maxLength={1000}
            placeholder="O que o novo site precisa comunicar?"
          />
          <FieldDescription>Até 1.000 caracteres.</FieldDescription>
        </Field>
      </Example>
      <Example
        id="select"
        title="Select"
        description="Seleção simples com lista curta. Labels mapeados no atributo items."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="project-type">Tipo de projeto</FieldLabel>
          <Select items={items} defaultValue="landing">
            <SelectTrigger id="project-type" className="w-full">
              <SelectValue placeholder="Selecione uma opção" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Projetos</SelectLabel>
                {items.map((i) => (
                  <SelectItem key={i.value} value={i.value}>
                    {i.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </Field>
      </Example>
      <Example
        id="native-select"
        title="NativeSelect"
        description="Seleção nativa quando a simplicidade do navegador é a melhor opção."
      >
        <Field className="max-w-sm">
          <FieldLabel htmlFor="native-type">Etapa do projeto</FieldLabel>
          <NativeSelect id="native-type">
            <NativeSelectOption>Descoberta</NativeSelectOption>
            <NativeSelectOption>Design</NativeSelectOption>
            <NativeSelectOption>Desenvolvimento</NativeSelectOption>
          </NativeSelect>
        </Field>
      </Example>
      <Example
        id="combobox"
        title="Combobox"
        description="Uma lista pesquisável. A ausência de resultados é comunicada explicitamente."
      >
        <Field className="max-w-sm">
          <FieldLabel>Serviço</FieldLabel>
          <Combobox
            items={["Landing page", "Site institucional", "Projeto sob medida"]}
          >
            <ComboboxInput
              placeholder="Buscar serviço…"
              aria-label="Buscar serviço"
            />
            <ComboboxContent>
              <ComboboxEmpty>Nenhum serviço encontrado.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </Field>
      </Example>
      <Example
        id="input-otp"
        title="InputOTP"
        description="Código curto dividido em grupos, com um único fluxo de teclado."
      >
        <Field>
          <FieldLabel htmlFor="code">Código de verificação</FieldLabel>
          <InputOTP id="code" maxLength={6}>
            <InputOTPGroup>
              {[0, 1, 2].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              {[3, 4, 5].map((i) => (
                <InputOTPSlot key={i} index={i} />
              ))}
            </InputOTPGroup>
          </InputOTP>
          <FieldDescription>
            Demonstração de interface; nenhum código foi enviado.
          </FieldDescription>
        </Field>
      </Example>
      <Example
        id="calendar"
        title="Calendar"
        description="Seleção de data independente de agendamento ou envio."
      >
        <div>
          <Calendar
            mode="single"
            selected={date}
            onSelect={setDate}
            defaultMonth={new Date(2026, 10, 1)}
            className="rounded-xl border"
          />
          <Note>
            {date
              ? "Data selecionada: " + date.toLocaleDateString("pt-BR")
              : "Selecione uma data."}
          </Note>
        </div>
      </Example>
      <Example
        id="label"
        title="Label"
        description="Associa o nome ao controle quando a composição não usa Field."
      >
        <div className="stack max-w-sm">
          <Label htmlFor="simple-label">Nome do responsável</Label>
          <Input id="simple-label" placeholder="Como podemos te chamar?" />
        </div>
      </Example>
    </>
  )
}
export function Selection() {
  const [checked, setChecked] = useState(true),
    [volume, setVolume] = useState<number | readonly number[]>(48)
  return (
    <>
      <PageTitle
        section="COMPONENTES / SELECTION"
        title="Seleção"
        description="Use o controle que corresponde à decisão: escolhas independentes, uma entre várias, uma configuração imediata ou um intervalo."
      />
      <Example
        id="checkbox"
        title="Checkbox"
        description="Escolhas independentes. Agrupe opções com FieldSet e FieldLegend."
      >
        <FieldSet>
          <FieldLegend>O que o projeto precisa?</FieldLegend>
          <FieldGroup>
            <Field orientation="horizontal">
              <Checkbox id="cb-design" defaultChecked />
              <FieldLabel htmlFor="cb-design">Design de interface</FieldLabel>
            </Field>
            <Field orientation="horizontal">
              <Checkbox id="cb-dev" />
              <FieldLabel htmlFor="cb-dev">Desenvolvimento</FieldLabel>
            </Field>
            <Field orientation="horizontal" data-disabled>
              <Checkbox id="cb-disabled" disabled />
              <FieldLabel htmlFor="cb-disabled">
                Integração indisponível
              </FieldLabel>
            </Field>
          </FieldGroup>
        </FieldSet>
      </Example>
      <Example
        id="radio-group"
        title="RadioGroup"
        description="Uma única escolha em um conjunto conhecido."
      >
        <FieldSet>
          <FieldLegend>Fase atual</FieldLegend>
          <RadioGroup defaultValue="idea">
            {[
              ["idea", "Tenho uma ideia"],
              ["brand", "Já tenho uma marca"],
              ["website", "Quero refazer meu site"],
            ].map(([v, l]) => (
              <Field orientation="horizontal" key={v}>
                <RadioGroupItem value={v} id={"radio-" + v} />
                <FieldLabel htmlFor={"radio-" + v}>{l}</FieldLabel>
              </Field>
            ))}
          </RadioGroup>
        </FieldSet>
      </Example>
      <Example
        id="switch"
        title="Switch"
        description="Configuração que muda assim que a pessoa interage."
      >
        <FieldGroup className="max-w-md">
          <Field orientation="horizontal">
            <Switch
              id="notifications"
              checked={checked}
              onCheckedChange={setChecked}
            />
            <div>
              <FieldLabel htmlFor="notifications">
                Notificações do projeto
              </FieldLabel>
              <FieldDescription>
                {checked
                  ? "Ativadas nesta demonstração."
                  : "Desativadas nesta demonstração."}
              </FieldDescription>
            </div>
          </Field>
          <Field orientation="horizontal" data-disabled>
            <Switch id="switch-disabled" disabled />
            <FieldLabel htmlFor="switch-disabled">
              Recurso indisponível
            </FieldLabel>
          </Field>
        </FieldGroup>
      </Example>
      <Example
        id="slider"
        title="Slider"
        description="Escolha um valor de um intervalo. Exiba o valor atual."
      >
        <Field className="max-w-lg">
          <FieldLabel htmlFor="slider-amount">
            Intensidade · {Array.isArray(volume) ? volume[0] : volume}%
          </FieldLabel>
          <Slider
            id="slider-amount"
            value={volume}
            onValueChange={setVolume}
            max={100}
            step={1}
            aria-label="Intensidade visual"
          />
        </Field>
      </Example>
      <Note>
        Controles de seleção herdam as cores semânticas e a indicação de foco do
        tema. O estado sempre deve ter um nome acessível.
      </Note>
    </>
  )
}
