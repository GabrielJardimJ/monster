# Untold · Biblioteca para Figma

O plugin local cria **fundamentos**, variáveis primitivas e semânticas, temas Light/Dark, escala de espaço, estilos Manrope e componentes nativos de quatro famílias:

| Família | Conteúdo                                                     |
| ------- | ------------------------------------------------------------ |
| Button  | 6 variantes × 5 estados, Label editável                      |
| Input   | default, hover, focus, invalid e disabled                    |
| Badge   | default, secondary, outline e destructive                    |
| Card    | Title e Description editáveis; ação como instância de Button |

O catálogo React contém 63 componentes. A exportação Figma é o núcleo visual indicado acima; não representa paridade completa.

## Importar

1. Instale a fonte **Manrope** e habilite o acesso a fontes locais no Figma.
2. No Figma desktop, crie um plugin local em **Plugins → Development → New plugin**.
3. Substitua o `code.js` gerado pelo arquivo `code.js` desta pasta. Também é possível importar `manifest.json` diretamente se sua versão do Figma aceitar um manifest local sem ID.
4. Execute o plugin em um arquivo Design.

Cada execução cria novas coleções e uma página de componentes. Execute uma vez para evitar duplicatas. Se o plano não oferecer dois modos de variáveis, o plugin cria uma coleção Dark separada.

O arquivo `create-foundations.js` é a versão destinada ao MCP. `code.js` é o plugin local completo. O arquivo online existente é https://www.figma.com/design/1QDPx48PqqrAMnvRPe9xdU; a cota Starter impediu o preenchimento remoto. Não há biblioteca publicada automaticamente.

O plugin usa texto editável, SVGs oficiais, variáveis e instâncias. A execução dentro do Figma ainda precisa de revisão; somente a sintaxe foi verificada neste ambiente.
