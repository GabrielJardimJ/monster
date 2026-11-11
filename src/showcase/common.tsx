import { useState, type ReactNode } from "react"
import { HugeiconsIcon } from "@hugeicons/react"
import {
  Copy01Icon,
  Tick02Icon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block"
import { toast } from "@/components/ui/toast"
import { cn } from "@/lib/utils"

export function Icon({
  icon,
  ...props
}: Omit<React.ComponentProps<typeof HugeiconsIcon>, "icon"> & {
  icon: React.ComponentProps<typeof HugeiconsIcon>["icon"]
}) {
  return <HugeiconsIcon icon={icon} strokeWidth={1.7} {...props} />
}
export { ArrowRight01Icon }
export function Copy({
  value,
  label = "Copiar",
}: {
  value: string
  label?: string
}) {
  const [copied, setCopied] = useState(false)
  return (
    <Button
      variant="ghost"
      size="sm"
      aria-label={label}
      onClick={async () => {
        try {
          await navigator.clipboard.writeText(value)
          setCopied(true)
          setTimeout(() => setCopied(false), 1800)
        } catch {
          toast.add({
            title: "Não foi possível copiar",
            description: "Selecione e copie o código manualmente.",
            type: "error",
          })
        }
      }}
    >
      <Icon icon={copied ? Tick02Icon : Copy01Icon} />
      {copied ? "Copiado" : label}
    </Button>
  )
}
export function PageTitle({
  section,
  title,
  description,
  children,
}: {
  section: string
  title: string
  description: string
  children?: ReactNode
}) {
  return (
    <header className="page-title">
      <div className="page-kicker">
        {section}
        <Badge variant="outline">v1.0</Badge>
      </div>
      <h1>{title}</h1>
      <p>{description}</p>
      {children}
    </header>
  )
}
export function Example({
  id,
  title,
  description,
  code,
  children,
  wide = false,
}: {
  id: string
  title: string
  description: string
  code?: string
  children: ReactNode
  wide?: boolean
}) {
  const [show, setShow] = useState(false)
  return (
    <section id={id} className={cn("example", wide && "example-wide")}>
      <div className="example-title">
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {code && (
          <Button variant="ghost" size="sm" onClick={() => setShow(!show)}>
            {show ? "Prévia" : "Código"}
          </Button>
        )}
      </div>
      {show && code ? (
        <div className="code-preview">
          <Copy value={code} />
          <CodeBlock>
            <CodeBlockContent children={code} />
          </CodeBlock>
        </div>
      ) : (
        <div className="example-stage">{children}</div>
      )}
      {code && (
        <div className="example-foot">
          <code>{id}.tsx</code>
          <Copy value={code} />
        </div>
      )}
    </section>
  )
}
export function Note({ children }: { children: ReactNode }) {
  return <p className="usage-note">{children}</p>
}
export function Spec({ rows }: { rows: string[][] }) {
  return (
    <div className="spec-table">
      <table>
        <thead>
          <tr>
            <th>Propriedade</th>
            <th>Especificação</th>
            <th>Uso</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(([a, b, c]) => (
            <tr key={a}>
              <td>
                <code>{a}</code>
              </td>
              <td>{b}</td>
              <td>{c}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
