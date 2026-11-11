import { Tick02Icon } from "@hugeicons/core-free-icons"
import {
  Message,
  MessageGroup,
  MessageAvatar,
  MessageContent,
  MessageHeader,
  MessageFooter,
} from "@/components/ui/message"
import { Bubble, BubbleContent, BubbleGroup } from "@/components/ui/bubble"
import {
  MessageScrollerProvider,
  MessageScroller,
  MessageScrollerViewport,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerButton,
} from "@/components/ui/message-scroller"
import { Marker, MarkerContent } from "@/components/ui/marker"
import {
  Attachment,
  AttachmentMedia,
  AttachmentContent,
  AttachmentTitle,
  AttachmentDescription,
} from "@/components/ui/attachment"
import {
  Trace,
  TraceLine,
  TraceIcon,
  TraceTitle,
  TraceDescription,
} from "@/components/ui/trace"
import {
  Questionnaire,
  QuestionnaireItem,
  QuestionnaireTitle,
  QuestionnaireDescription,
  QuestionnaireChoices,
  QuestionnaireChoice,
  QuestionnaireChoiceDescription,
  QuestionnaireActions,
  QuestionnaireSubmit,
  QuestionnaireError,
} from "@/components/ui/questionnaire"
import {
  CodeBlock,
  CodeBlockHeader,
  CodeBlockTitle,
  CodeBlockContent,
  CodeBlockCopyButton,
} from "@/components/ui/code-block"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { toast } from "@/components/ui/toast"
import { Example, PageTitle, Icon } from "./common"
function Thread() {
  return (
    <MessageGroup>
      <Message>
        <MessageAvatar>
          <Avatar>
            <AvatarFallback>UT</AvatarFallback>
          </Avatar>
        </MessageAvatar>
        <MessageContent>
          <MessageHeader>Untold</MessageHeader>
          <Bubble variant="muted">
            <BubbleContent>
              Vamos entender o que seu site precisa comunicar.
            </BubbleContent>
          </Bubble>
          <MessageFooter>Agora · demonstração</MessageFooter>
        </MessageContent>
      </Message>
      <Message align="end">
        <MessageContent>
          <Bubble>
            <BubbleContent>
              Quero apresentar a minha marca de um jeito próprio.
            </BubbleContent>
          </Bubble>
          <MessageFooter>Enviado · demonstração</MessageFooter>
        </MessageContent>
      </Message>
    </MessageGroup>
  )
}
export function Conversation() {
  return (
    <>
      <PageTitle
        section="COMPONENTES / CONVERSATION"
        title="Conversação"
        description="Primitivas para mensagens, anexos e acompanhamento de atividade. Conteúdo de exemplo com o tom próximo da Untold."
      />
      <Example
        id="message"
        title="Message"
        description="Avatar, conteúdo, cabeçalho e rodapé dentro da mesma mensagem."
      >
        <div className="w-full max-w-2xl">
          <Thread />
        </div>
      </Example>
      <Example
        id="bubble"
        title="Bubble"
        description="Superfícies para a mensagem, sem recriar a estrutura do chat."
      >
        <BubbleGroup>
          <Bubble>
            <BubbleContent>Uma ação com a cor principal.</BubbleContent>
          </Bubble>
          <Bubble variant="secondary">
            <BubbleContent>
              Conteúdo de apoio com a cor secundária.
            </BubbleContent>
          </Bubble>
          <Bubble variant="muted">
            <BubbleContent>
              Mensagem neutra, sem competir com a ação.
            </BubbleContent>
          </Bubble>
        </BubbleGroup>
      </Example>
      <Example
        id="message-scroller"
        title="MessageScroller"
        description="Rolagem e retorno à mensagem mais recente pertencem à primitiva."
      >
        <div className="h-80 w-full rounded-xl border">
          <MessageScrollerProvider>
            <MessageScroller>
              <MessageScrollerViewport>
                <MessageScrollerContent className="p-5">
                  {Array.from({ length: 8 }, (_, i) => (
                    <MessageScrollerItem key={i}>
                      <Message>
                        <MessageContent>
                          <Bubble variant="muted">
                            <BubbleContent>
                              Detalhe {i + 1} do projeto · conteúdo de
                              demonstração.
                            </BubbleContent>
                          </Bubble>
                        </MessageContent>
                      </Message>
                    </MessageScrollerItem>
                  ))}
                </MessageScrollerContent>
              </MessageScrollerViewport>
              <MessageScrollerButton />
            </MessageScroller>
          </MessageScrollerProvider>
        </div>
      </Example>
      <Example
        id="marker"
        title="Marker"
        description="Separa momentos e eventos sem parecer uma mensagem de uma pessoa."
      >
        <Marker>
          <MarkerContent>Hoje · início da revisão</MarkerContent>
        </Marker>
      </Example>
      <Example
        id="attachment"
        title="Attachment"
        description="Estados distintos para arquivo pronto e erro, com descrição textual."
      >
        <div className="row">
          <Attachment>
            <AttachmentMedia>
              <img src="/brand/symbol.svg" alt="" width="24" height="24" />
            </AttachmentMedia>
            <AttachmentContent>
              <AttachmentTitle>identidade-untold.svg</AttachmentTitle>
              <AttachmentDescription>
                SVG · pronto para revisar
              </AttachmentDescription>
            </AttachmentContent>
          </Attachment>
          <Attachment state="error">
            <AttachmentContent>
              <AttachmentTitle>arquivo-incompleto.pdf</AttachmentTitle>
              <AttachmentDescription>
                Falha no envio · tente novamente
              </AttachmentDescription>
            </AttachmentContent>
          </Attachment>
        </div>
      </Example>
      <Example
        id="trace"
        title="Trace"
        description="Atividade do sistema, com status e contexto legíveis."
      >
        <Trace>
          <TraceLine>
            <TraceIcon>
              <Icon icon={Tick02Icon} />
            </TraceIcon>
            <TraceTitle>Identidade carregada</TraceTitle>
            <TraceDescription>Concluído</TraceDescription>
          </TraceLine>
          <TraceLine status="pending">
            <TraceTitle>Aguardando revisão</TraceTitle>
            <TraceDescription>Próxima etapa</TraceDescription>
          </TraceLine>
        </Trace>
      </Example>
      <Example
        id="questionnaire"
        title="Questionnaire"
        description="Escolha estruturada com validação antes de confirmar."
      >
        <Questionnaire
          className="w-full max-w-lg"
          defaultItem="project"
          items={[
            {
              name: "project",
              required: true,
              choices: [{ value: "new" }, { value: "redesign" }],
            },
          ]}
          onSubmit={() =>
            toast.add({
              title: "Escolha registrada na demonstração",
              description: "Nenhum dado foi enviado.",
            })
          }
        >
          <QuestionnaireItem name="project" required>
            <QuestionnaireTitle>Qual é o próximo capítulo?</QuestionnaireTitle>
            <QuestionnaireDescription>
              Escolha o ponto de partida do projeto.
            </QuestionnaireDescription>
            <QuestionnaireChoices>
              <QuestionnaireChoice value="new">
                Um site novo
                <QuestionnaireChoiceDescription>
                  Uma presença digital desde o início.
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
              <QuestionnaireChoice value="redesign">
                Refazer meu site
                <QuestionnaireChoiceDescription>
                  Uma nova direção para o que já existe.
                </QuestionnaireChoiceDescription>
              </QuestionnaireChoice>
            </QuestionnaireChoices>
            <QuestionnaireError />
          </QuestionnaireItem>
          <QuestionnaireActions>
            <QuestionnaireSubmit>Confirmar escolha</QuestionnaireSubmit>
          </QuestionnaireActions>
        </Questionnaire>
      </Example>
      <Example
        id="code-block"
        title="CodeBlock"
        description="Código legível, com identificação do arquivo e ação de copiar."
      >
        <CodeBlock className="w-full">
          <CodeBlockHeader>
            <CodeBlockTitle>button.tsx</CodeBlockTitle>
            <CodeBlockCopyButton
              value={'<Button variant="default">Salvar projeto</Button>'}
            />
          </CodeBlockHeader>
          <CodeBlockContent
            children={
              'import { Button } from "@untold/design-system"\n\n<Button variant="default">Salvar projeto</Button>'
            }
          />
        </CodeBlock>
      </Example>
    </>
  )
}
