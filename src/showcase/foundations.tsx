import { useState } from "react"
import {
  ArrowRight01Icon,
  Tick02Icon,
  Copy01Icon,
  Search01Icon,
  Settings01Icon,
} from "@hugeicons/core-free-icons"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"
import { CodeBlock, CodeBlockContent } from "@/components/ui/code-block"
import { ColorPair } from "./color-pair"
import { Icon, PageTitle, Example, Spec, Copy, Note } from "./common"
import tokens from "../../tokens.json"

const brandColors = [
  ["Elétrico", "electric", "Ações e foco"],
  ["Violeta", "violet", "Acento da marca"],
  ["Ink", "ink", "Texto / dark"],
  ["Cloud", "cloud", "Canvas"],
  ["Dobra", "fold", "Detalhe do símbolo"],
  ["Slate", "slate", "Texto secundário"],
] as const
const startCode = `import '@untold/design-system/theme.css'\nimport { Button, TooltipProvider, Toaster } from '@untold/design-system'\n\nexport function App() {\n  return (\n    <TooltipProvider>\n      <Toaster>\n        <Button>Salvar projeto</Button>\n      </Toaster>\n    </TooltipProvider>\n  )\n}`
function Swatch({
  name,
  color,
  role,
}: {
  name: string
  color: string
  role: string
}) {
  const [copied, setCopied] = useState(false)
  return (
    <button
      className="swatch"
      aria-label={`Copiar ${name} ${color}`}
      onClick={async () => {
        await navigator.clipboard.writeText(color)
        setCopied(true)
        setTimeout(() => setCopied(false), 1600)
      }}
    >
      <span className="swatch-color" style={{ background: color }}>
        <Icon icon={copied ? Tick02Icon : Copy01Icon} />
      </span>
      <strong>{name}</strong>
      <code>{color}</code>
      <small>{role}</small>
    </button>
  )
}
export function Foundations({ page }: { page: string }) {
  if (page === "overview")
    return (
      <>
        <PageTitle
          section="INTRODUÇÃO"
          title="Untold Design System"
          description="A identidade da marca, traduzida em decisões, tokens e componentes para construir interfaces consistentes."
        >
          <div className="intro-actions">
            <Button nativeButton={false} render={<a href="#actions" />}>
              Explorar componentes
              <Icon icon={ArrowRight01Icon} data-icon="inline-end" />
            </Button>
            <Button
              variant="outline"
              nativeButton={false}
              render={<a href="#getting-started" />}
            >
              Começar a usar
            </Button>
          </div>
        </PageTitle>
        <section className="overview-brand">
          <div>
            <Badge variant="outline">Sites com identidade.</Badge>
            <h2>
              Uma linguagem.
              <br />
              Da marca à interface.
            </h2>
            <p>
              Clara na leitura, próxima na interação e precisa nos detalhes.
            </p>
            <div className="overview-principles">
              <span>Fluida</span>
              <span>Inventiva</span>
              <span>Clara</span>
              <span>Próxima</span>
              <span>Precisa</span>
            </div>
          </div>
          <div className="brand-3d">
            <img
              src="/brand/logo-3d.png"
              alt="Render 3D original do símbolo da Untold"
              width="360"
              height="360"
            />
          </div>
        </section>
        <div className="section-label">
          <h2>Fundamentos da identidade</h2>
          <a href="#colors">
            Ver tokens <Icon icon={ArrowRight01Icon} />
          </a>
        </div>
        <div className="swatch-grid">
          {brandColors.slice(0, 4).map(([n, k, r]) => (
            <Swatch key={k} name={n} color={tokens.primitive[k]} role={r} />
          ))}
        </div>
        <div className="overview-links">
          {[
            ["01", "Fundamentos", "Cores, Manrope e ritmo visual.", "colors"],
            [
              "02",
              "Componentes",
              "63 componentes com a linguagem Untold.",
              "actions",
            ],
            [
              "03",
              "Composições",
              "Padrões prontos para conectar as peças.",
              "recipes",
            ],
          ].map(([n, title, desc, id]) => (
            <a href={"#" + id} key={id}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{desc}</p>
              <Icon icon={ArrowRight01Icon} />
            </a>
          ))}
        </div>
        <section className="architecture">
          <div>
            <span className="eyebrow">ESTRUTURA DO SISTEMA</span>
            <h2>Decisões que se conectam.</h2>
            <p>
              A marca define os valores. Os papéis explicam quando usá-los. Os
              componentes aplicam a decisão na interface.
            </p>
          </div>
          <div className="token-flow">
            <div>
              <code>Primitivo</code>
              <strong>brand.electric</strong>
              <span>#2563FF</span>
            </div>
            <span>→</span>
            <div>
              <code>Semântico</code>
              <strong>primary</strong>
              <span>Ação principal</span>
            </div>
            <span>→</span>
            <div>
              <code>Componente</code>
              <strong>Button</strong>
              <span>variant="default"</span>
            </div>
          </div>
        </section>
        <Note>
          Fonte: manual de identidade visual V1.0. Raios, espaçamentos, cores de
          status e estados interativos são extensões de interface, documentadas
          neste sistema.
        </Note>
      </>
    )
  if (page === "brand")
    return (
      <>
        <PageTitle
          section="IDENTIDADE"
          title="A marca, preservada."
          description="O símbolo em fita representa uma história que ganha forma. As assinaturas usam os vetores oficiais, sem redesenho."
        />
        <Example
          id="logo"
          title="Assinaturas oficiais"
          description="Fundo claro e fundo Ink. A geometria permanece a mesma."
        >
          <div className="brand-lockups">
            <div>
              <img
                src="/brand/logo-horizontal.svg"
                alt="Assinatura horizontal clara"
                width="230"
                height="103"
              />
            </div>
            <div className="dark">
              <img
                src="/brand/logo-horizontal-dark.svg"
                alt="Assinatura horizontal escura"
                width="230"
                height="103"
              />
            </div>
          </div>
        </Example>
        <Spec
          rows={[
            [
              "Proteção",
              "x = ¼ da largura visível do símbolo",
              "Manter x livre ao redor da assinatura",
            ],
            ["Horizontal", "120 px / 30 mm", "Tamanho mínimo recomendado"],
            ["Vertical", "96 px / 25 mm", "Tamanho mínimo recomendado"],
            [
              "Símbolo",
              "24 px",
              "Em 16 px usar versão monocromática simplificada",
            ],
          ]}
        />
        <Example
          id="brand-rules"
          title="Uso consistente"
          description="O manual é a fonte de verdade para proporções, cores e aplicação."
        >
          <div className="do-dont-grid">
            <div>
              <Badge>Faça</Badge>
              <img
                src="/brand/symbol.svg"
                width="80"
                height="80"
                alt="Símbolo oficial com proporções preservadas"
              />
              <p>Preserve a silhueta, o gradiente e a área de proteção.</p>
            </div>
            <div>
              <Badge variant="destructive">Evite</Badge>
              <strong className="bad-wordmark">UNTOLD</strong>
              <p>
                Não redigite a assinatura, reorganize letras, gire ou estique o
                símbolo.
              </p>
            </div>
          </div>
        </Example>
        <Alert>
          <AlertTitle>Sobre a assinatura horizontal clara</AlertTitle>
          <AlertDescription>
            O arquivo recebido tinha letras brancas. A cópia para fundo claro
            usa Ink, conforme o manual, mantendo os contornos originais.
          </AlertDescription>
        </Alert>
      </>
    )
  if (page === "getting-started")
    return (
      <>
        <PageTitle
          section="GUIA DE USO"
          title="Começar a usar"
          description="Biblioteca React com componentes shadcn/ui, primitivas Base UI e tema Untold. O catálogo é a documentação da biblioteca."
        />
        <Example
          id="installation"
          title="Usar em outro projeto"
          description="Instale a biblioteca local e conecte o Tailwind v4 ao seu bundler."
        >
          <div className="code-stack">
            <CodeBlock>
              <CodeBlockContent children="npm install /caminho/para/untold/design-system" />
            </CodeBlock>
            <CodeBlock>
              <CodeBlockContent children={startCode} />
            </CodeBlock>
            <Copy value={startCode} />
          </div>
        </Example>
        <Example
          id="token-contract"
          title="Contrato dos tokens"
          description="Use o papel semântico; deixe as decisões de cor no tema."
        >
          <div className="code-stack">
            <CodeBlock>
              <CodeBlockContent
                children={
                  '// React + Tailwind\n<div className="bg-background text-foreground">\n  <Button variant="default">Salvar projeto</Button>\n</div>\n\n/* CSS */\n.custom-surface {\n  background: var(--card);\n  color: var(--card-foreground);\n}'
                }
              />
            </CodeBlock>
            <div className="row">
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href="/downloads/untold-tokens.json" download />}
              >
                Baixar tokens JSON
              </Button>
              <Button
                variant="outline"
                nativeButton={false}
                render={<a href="/downloads/untold-tokens.css" download />}
              >
                Baixar tokens CSS
              </Button>
            </div>
          </div>
        </Example>
        <Spec
          rows={[
            [
              "src/components/ui",
              "Código-fonte dos 63 componentes",
              "Importações diretas ou barrel src/index.ts",
            ],
            [
              "tokens.json",
              "Primitivos, semânticos e receitas",
              "Exportado pelo gerador",
            ],
            [
              "src/index.css",
              "Tema, fontes e utilitários",
              "Importar uma vez na aplicação",
            ],
            [
              "docs/COMPONENTS.md",
              "Inventário e estados",
              "Contrato da biblioteca",
            ],
          ]}
        />
      </>
    )
  if (page === "colors")
    return (
      <>
        <PageTitle
          section="FUNDAMENTOS / COLOR"
          title="Energia com direção."
          description="A paleta original preservada, com papéis semânticos para interfaces claras e escuras. O gradiente pertence ao símbolo e aos elementos gráficos."
        />
        <div className="swatch-grid six">
          {brandColors.map(([n, k, r]) => (
            <Swatch key={k} name={n} color={tokens.primitive[k]} role={r} />
          ))}
        </div>
        <div className="section-label">
          <h2>Cor é uma relação.</h2>
          <Badge variant="outline">WCAG · contraste ao vivo</Badge>
        </div>
        <div className="color-pairs">
          {[
            ["Canvas", "background", "foreground"],
            ["Superfície", "card", "card-foreground"],
            ["Overlay", "popover", "popover-foreground"],
            ["Ação principal", "primary", "primary-foreground"],
            ["Ação secundária", "secondary", "secondary-foreground"],
            ["Conteúdo de apoio", "muted", "muted-foreground"],
            ["Interação", "accent", "accent-foreground"],
            ["Erro", "background", "destructive"],
          ].map(([n, b, f]) => (
            <ColorPair key={n} name={n} background={b} foreground={f} />
          ))}
        </div>
        <Spec
          rows={[
            [
              "primary / primary-foreground",
              "Elétrico / Branco",
              "Botões e ações principais",
            ],
            [
              "muted-foreground",
              "Slate / Slate dark",
              "Texto secundário, nunca texto desabilitado",
            ],
            [
              "border / input / ring",
              "Linha / linha forte / Elétrico",
              "Estrutura, campos e foco",
            ],
            [
              "success / warning / destructive",
              "Semânticos derivados",
              "Estados com texto ou ícone adicional",
            ],
          ]}
        />
        <div className="row">
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="/downloads/untold-tokens.json" download />}
          >
            Exportar JSON
          </Button>
          <Button
            variant="outline"
            nativeButton={false}
            render={<a href="/downloads/untold-tokens.css" download />}
          >
            Exportar CSS
          </Button>
        </div>
      </>
    )
  if (page === "typography")
    return (
      <>
        <PageTitle
          section="FUNDAMENTOS / TYPE"
          title="Clareza em cada letra."
          description="Manrope em toda a interface. A fonte é distribuída localmente, para uma experiência consistente sem depender do Google Fonts."
        />
        <div className="font-specimen">
          <div>
            <span className="eyebrow">MANROPE VARIABLE</span>
            <strong>Aa</strong>
            <p>
              Aa Bb Cc Dd Ee Ff Gg
              <br />
              0123456789 & @ →
            </p>
          </div>
          <div>
            <p className="type-body">
              Uma estrutura geométrica com a suavidade da fita. A tipografia
              organiza a informação e aproxima a marca das pessoas.
            </p>
            <div className="font-weights">
              {[400, 500, 600, 700].map((w) => (
                <span key={w} style={{ fontWeight: w }}>
                  Aa <small>{w}</small>
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="type-ladder">
          {Object.entries(tokens.typography).map(([name, t]) => (
            <div key={name}>
              <div>
                <code>type-{name}</code>
                <small>
                  {t.size} px · {t.weight} · {t.line * 100}%
                </small>
              </div>
              <p className={"type-" + name}>
                {name === "code"
                  ? 'const identity = "untold"'
                  : name === "display"
                    ? "Ideias que ganham presença."
                    : name === "heading"
                      ? "Do potencial à presença."
                      : name === "title"
                        ? "Cada detalhe tem direção."
                        : name === "label"
                          ? "Vamos construir juntos"
                          : name === "caption"
                            ? "Design e desenvolvimento com identidade."
                            : "Uma experiência clara, do primeiro contato à publicação."}
              </p>
            </div>
          ))}
        </div>
        <Note>
          O manual define títulos de 48–72 px, corpo de 16–18 px e controles de
          14–16 px. A escala adiciona tamanhos menores para documentação e
          interfaces densas. JetBrains Mono é uma extensão exclusiva para código
          e tokens.
        </Note>
      </>
    )
  if (page === "geometry")
    return (
      <>
        <PageTitle
          section="FUNDAMENTOS / GEOMETRY"
          title="Espaço para respirar."
          description="Uma base de 4 px organiza o ritmo. Formas suaves acompanham a fita sem competir com o conteúdo."
        />
        <Example
          id="spacing"
          title="Escala de espaço"
          description="4 px dentro de detalhes; 16–24 px entre elementos; 48–96 px entre seções."
        >
          <div className="spacing-ladder">
            {tokens.spacing.map((v) => (
              <div key={v}>
                <code>space-{v}</code>
                <span style={{ width: v * 3 }} />
                <small>{v} px</small>
              </div>
            ))}
          </div>
        </Example>
        <Example
          id="radius"
          title="Raio"
          description="A geometria é uma extensão da identidade para interfaces."
        >
          <div className="radius-ladder">
            {Object.entries(tokens.radius).map(([k, v]) => (
              <div key={k}>
                <span style={{ borderRadius: v }} />
                <code>{k}</code>
                <small>{v} px</small>
              </div>
            ))}
          </div>
        </Example>
        <Example
          id="elevation"
          title="Elevação"
          description="Linhas sustentam o conteúdo; sombras ajudam a distinguir elementos flutuantes."
        >
          <div className="elevation-ladder">
            {["Flat", "Card", "Popover", "Dialog"].map((s, i) => (
              <div
                key={s}
                style={{
                  boxShadow: [
                    "none",
                    "var(--shadow-sm)",
                    "var(--shadow-md)",
                    "var(--shadow-lg)",
                  ][i],
                }}
              >
                <strong>{s}</strong>
                <code>{["0", "shadow-sm", "shadow-md", "shadow-lg"][i]}</code>
              </div>
            ))}
          </div>
        </Example>
        <Example
          id="motion"
          title="Movimento e ícones"
          description="Transições curtas, sem rotação ou efeitos decorativos. Movimento reduzido respeitado."
        >
          <div className="row">
            <Icon icon={Search01Icon} className="size-4" />
            <Icon icon={Settings01Icon} className="size-5" />
            <Icon icon={Tick02Icon} className="size-6" />
            <span className="text-sm text-muted-foreground">
              Hugeicons · 16 / 20 / 24 px
            </span>
          </div>
        </Example>
        <Spec
          rows={[
            ["motion-fast", "120 ms", "Feedback de controles"],
            ["motion-normal", "180 ms", "Mudança de cor e estado"],
            ["motion-slow", "240 ms", "Abertura de superfícies"],
            ["easing", "cubic-bezier(0.2,0,0,1)", "Desaceleração suave"],
          ]}
        />
      </>
    )
  return (
    <>
      <PageTitle
        section="PADRÕES / GUIDELINES"
        title="A mesma direção, sempre."
        description="Regras práticas para preservar a identidade e manter as interfaces claras, acessíveis e próximas."
      />
      <div className="do-dont-grid">
        <div>
          <Badge>Faça</Badge>
          <h2>Uma ação principal por grupo.</h2>
          <div className="row">
            <Button>Salvar projeto</Button>
            <Button variant="outline">Cancelar</Button>
          </div>
          <p>A hierarquia mostra o próximo passo.</p>
        </div>
        <div>
          <Badge variant="destructive">Evite</Badge>
          <h2>Ações com o mesmo peso.</h2>
          <div className="row">
            <Button>Salvar projeto</Button>
            <Button>Cancelar</Button>
          </div>
          <p>Duas ações principais competem pela atenção.</p>
        </div>
      </div>
      <Spec
        rows={[
          [
            "Contraste",
            "4,5:1 para texto comum",
            "Não usar cor como único sinal",
          ],
          [
            "Teclado",
            "Foco visível e ordem natural",
            "Overlays mantêm foco e fecham com Escape",
          ],
          [
            "Labels",
            "Visíveis e associados ao campo",
            "Placeholder não substitui label",
          ],
          [
            "Erros",
            "Texto específico junto ao campo",
            "Explicar como corrigir",
          ],
          [
            "Movimento",
            "Respeitar prefers-reduced-motion",
            "Evitar movimento contínuo sem controle",
          ],
          [
            "Voz",
            "Direta, próxima e segura",
            "Evitar jargões e promessas sem base",
          ],
        ]}
      />
      <div className="do-dont-grid">
        <div>
          <Badge>Faça</Badge>
          <h3>“Conte sua ideia.”</h3>
          <p>Um convite curto, claro e próximo.</p>
        </div>
        <div>
          <Badge variant="destructive">Evite</Badge>
          <h3>“Resultados garantidos.”</h3>
          <p>Não prometa vendas, prazo ou desempenho sem evidência.</p>
        </div>
      </div>
    </>
  )
}
