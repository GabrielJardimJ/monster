async function main(){
const TOKENS={
  "name": "Untold Design System",
  "version": "1.0.0",
  "source": "Manual de marca V1.0",
  "primitive": {
    "electric": "#2563FF",
    "electric-hover": "#1D53DF",
    "electric-pressed": "#1746BD",
    "electric-soft": "#EAF0FF",
    "violet": "#8B5CF6",
    "fold": "#6443CB",
    "ink": "#10111A",
    "cloud": "#F7F8FC",
    "white": "#FFFFFF",
    "slate": "#595D70",
    "slate-dark": "#B4B8C9",
    "line": "#DFE2EC",
    "line-strong": "#C6CBD9",
    "mist": "#EEF0F6",
    "night-surface": "#191C29",
    "night-muted": "#222637",
    "night-line": "#363C50",
    "night-accent": "#26365D",
    "danger": "#B4233B",
    "danger-dark": "#FF9AAE",
    "success": "#23663D",
    "success-dark": "#92D8AC",
    "warning": "#825312",
    "warning-dark": "#F2CE88"
  },
  "semantic": {
    "light": {
      "background": "cloud",
      "foreground": "ink",
      "card": "white",
      "card-foreground": "ink",
      "popover": "white",
      "popover-foreground": "ink",
      "primary": "electric",
      "primary-foreground": "white",
      "primary-hover": "electric-hover",
      "primary-pressed": "electric-pressed",
      "secondary": "electric-soft",
      "secondary-foreground": "electric-pressed",
      "muted": "mist",
      "muted-foreground": "slate",
      "accent": "electric-soft",
      "accent-foreground": "ink",
      "destructive": "danger",
      "border": "line",
      "input": "line-strong",
      "ring": "electric",
      "success": "success",
      "warning": "warning",
      "sidebar": "cloud",
      "sidebar-foreground": "ink",
      "sidebar-primary": "electric",
      "sidebar-primary-foreground": "white",
      "sidebar-accent": "electric-soft",
      "sidebar-accent-foreground": "electric-pressed",
      "sidebar-border": "line",
      "sidebar-ring": "electric",
      "chart-1": "electric",
      "chart-2": "violet",
      "chart-3": "fold",
      "chart-4": "slate",
      "chart-5": "slate-dark"
    },
    "dark": {
      "background": "ink",
      "foreground": "cloud",
      "card": "night-surface",
      "card-foreground": "cloud",
      "popover": "night-surface",
      "popover-foreground": "cloud",
      "primary": "electric",
      "primary-foreground": "white",
      "primary-hover": "electric-hover",
      "primary-pressed": "electric-pressed",
      "secondary": "night-accent",
      "secondary-foreground": "cloud",
      "muted": "night-muted",
      "muted-foreground": "slate-dark",
      "accent": "night-accent",
      "accent-foreground": "cloud",
      "destructive": "danger-dark",
      "border": "night-line",
      "input": "night-line",
      "ring": "slate-dark",
      "success": "success-dark",
      "warning": "warning-dark",
      "sidebar": "ink",
      "sidebar-foreground": "cloud",
      "sidebar-primary": "electric",
      "sidebar-primary-foreground": "white",
      "sidebar-accent": "night-accent",
      "sidebar-accent-foreground": "cloud",
      "sidebar-border": "night-line",
      "sidebar-ring": "slate-dark",
      "chart-1": "electric",
      "chart-2": "violet",
      "chart-3": "fold",
      "chart-4": "slate",
      "chart-5": "slate-dark"
    }
  },
  "spacing": [
    4,
    8,
    12,
    16,
    24,
    32,
    48,
    64,
    96
  ],
  "radius": {
    "sm": 4,
    "md": 8,
    "lg": 12,
    "xl": 20,
    "2xl": 24,
    "3xl": 32,
    "4xl": 9999
  },
  "typography": {
    "display": {
      "size": 64,
      "line": 1.1,
      "weight": 600,
      "tracking": -0.05
    },
    "heading": {
      "size": 40,
      "line": 1.15,
      "weight": 600,
      "tracking": -0.035
    },
    "title": {
      "size": 24,
      "line": 1.3,
      "weight": 600,
      "tracking": -0.02
    },
    "body": {
      "size": 16,
      "line": 1.6,
      "weight": 400,
      "tracking": 0
    },
    "label": {
      "size": 14,
      "line": 1.4,
      "weight": 600,
      "tracking": 0
    },
    "caption": {
      "size": 12,
      "line": 1.5,
      "weight": 400,
      "tracking": 0
    },
    "code": {
      "size": 12,
      "line": 1.6,
      "weight": 400,
      "tracking": 0
    }
  },
  "component": {
    "button": {
      "height": 44,
      "radius": "lg",
      "background": "primary",
      "foreground": "primary-foreground",
      "hover": "primary-hover",
      "pressed": "primary-pressed"
    },
    "input": {
      "height": 44,
      "radius": "lg",
      "background": "background",
      "border": "input",
      "focus": "ring"
    },
    "card": {
      "radius": "xl",
      "background": "card",
      "foreground": "card-foreground",
      "border": "border"
    }
  },
  "motion": {
    "fast": 120,
    "normal": 180,
    "slow": 240,
    "easing": "cubic-bezier(0.2,0,0,1)"
  }
}
;
const LOGO="<svg width=\"184\" height=\"82\" viewBox=\"0 0 184 82\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n<path d=\"M9.02002 13.12H22.96V47.355C22.96 54.325 27.675 57.81 35.26 57.81C42.64 57.81 47.56 53.505 47.56 46.535V31.365C47.56 26.035 49.405 22.14 53.3 18.655L63.96 9.02002L72.98 19.27L61.5 29.725V46.945C61.5 61.91 51.25 71.75 35.26 71.75C19.27 71.75 9.02002 62.525 9.02002 47.765V13.12Z\" fill=\"url(#paint0_linear_11_24)\"/>\n<path d=\"M47.5601 31.3651C47.5601 26.6501 49.2001 22.5501 52.4801 19.4751C50.8401 23.1651 53.3001 26.6501 56.9901 29.1101L61.5001 32.1851V41.4101L47.5601 31.3651Z\" fill=\"#6443CB\"/>\n<path d=\"M104.479 52.9495C103.321 52.9495 102.35 52.7635 101.565 52.3915C100.779 52.0195 100.139 51.5338 99.6425 50.9345C99.1568 50.3248 98.7848 49.6635 98.5265 48.9505C98.2682 48.2375 98.0925 47.54 97.9995 46.858C97.9065 46.176 97.86 45.5767 97.86 45.06V35.76H101.146V43.9905C101.146 44.6415 101.198 45.3132 101.301 46.0055C101.415 46.6875 101.621 47.323 101.921 47.912C102.231 48.501 102.66 48.9763 103.208 49.338C103.766 49.6997 104.489 49.8805 105.378 49.8805C105.956 49.8805 106.504 49.7875 107.021 49.6015C107.537 49.4052 107.987 49.0952 108.369 48.6715C108.762 48.2478 109.067 47.6898 109.284 46.9975C109.511 46.3052 109.625 45.463 109.625 44.471L111.64 45.2305C111.64 46.7495 111.355 48.0928 110.787 49.2605C110.219 50.4178 109.402 51.322 108.338 51.973C107.274 52.624 105.987 52.9495 104.479 52.9495ZM110.012 52.5V47.664H109.625V35.76H112.895V52.5H110.012ZM127.286 52.5V44.2695C127.286 43.6185 127.229 42.952 127.116 42.27C127.012 41.5777 126.806 40.937 126.496 40.348C126.196 39.759 125.767 39.2837 125.209 38.922C124.662 38.5603 123.943 38.3795 123.055 38.3795C122.476 38.3795 121.928 38.4777 121.412 38.674C120.895 38.86 120.44 39.1648 120.048 39.5885C119.665 40.0122 119.361 40.5702 119.133 41.2625C118.916 41.9548 118.808 42.797 118.808 43.789L116.793 43.0295C116.793 41.5105 117.077 40.1723 117.645 39.015C118.214 37.8473 119.03 36.938 120.094 36.287C121.159 35.636 122.445 35.3105 123.954 35.3105C125.111 35.3105 126.082 35.4965 126.868 35.8685C127.653 36.2405 128.289 36.7313 128.774 37.341C129.27 37.9403 129.647 38.5965 129.906 39.3095C130.164 40.0225 130.34 40.72 130.433 41.402C130.526 42.084 130.572 42.6833 130.572 43.2V52.5H127.286ZM115.522 52.5V35.76H118.42V40.596H118.808V52.5H115.522ZM142.484 52.5C141.43 52.7067 140.396 52.7945 139.384 52.7635C138.371 52.7325 137.467 52.5362 136.671 52.1745C135.875 51.8128 135.276 51.2445 134.873 50.4695C134.511 49.7772 134.315 49.0745 134.284 48.3615C134.263 47.6382 134.253 46.8218 134.253 45.9125V31.11H137.508V45.7575C137.508 46.4292 137.513 47.013 137.524 47.509C137.544 48.005 137.653 48.4235 137.849 48.7645C138.221 49.4052 138.81 49.772 139.616 49.865C140.432 49.9477 141.388 49.9115 142.484 49.7565V52.5ZM131.045 38.364V35.76H142.484V38.364H131.045ZM150.821 52.965C149.147 52.965 147.695 52.5878 146.465 51.8335C145.235 51.0792 144.285 50.0407 143.613 48.718C142.952 47.385 142.621 45.8505 142.621 44.1145C142.621 42.3682 142.962 40.8337 143.644 39.511C144.326 38.178 145.282 37.1447 146.512 36.411C147.741 35.667 149.178 35.295 150.821 35.295C152.495 35.295 153.946 35.6722 155.176 36.4265C156.406 37.1808 157.356 38.2193 158.028 39.542C158.7 40.8647 159.036 42.3888 159.036 44.1145C159.036 45.8608 158.695 47.4005 158.013 48.7335C157.341 50.0562 156.39 51.0947 155.161 51.849C153.931 52.593 152.484 52.965 150.821 52.965ZM150.821 49.9115C152.422 49.9115 153.616 49.3742 154.401 48.2995C155.197 47.2145 155.595 45.8195 155.595 44.1145C155.595 42.3682 155.192 40.9732 154.386 39.9295C153.59 38.8755 152.402 38.3485 150.821 38.3485C149.736 38.3485 148.842 38.5965 148.139 39.0925C147.436 39.5782 146.915 40.255 146.574 41.123C146.233 41.9807 146.062 42.9778 146.062 44.1145C146.062 45.8712 146.465 47.2765 147.271 48.3305C148.077 49.3845 149.26 49.9115 150.821 49.9115ZM161.047 52.5V29.715H164.286V52.5H161.047ZM173.885 52.965C172.325 52.965 170.976 52.5775 169.84 51.8025C168.713 51.0275 167.84 49.9735 167.22 48.6405C166.611 47.2972 166.306 45.7885 166.306 44.1145C166.306 42.4302 166.616 40.9267 167.236 39.604C167.856 38.271 168.734 37.2222 169.871 36.4575C171.018 35.6825 172.377 35.295 173.947 35.295C175.528 35.295 176.856 35.6825 177.931 36.4575C179.016 37.2222 179.832 38.271 180.38 39.604C180.938 40.937 181.217 42.4405 181.217 44.1145C181.217 45.7885 180.938 47.292 180.38 48.625C179.822 49.958 179 51.0172 177.915 51.8025C176.83 52.5775 175.487 52.965 173.885 52.965ZM174.335 50.0355C175.399 50.0355 176.267 49.7823 176.939 49.276C177.61 48.7697 178.101 48.0722 178.411 47.1835C178.721 46.2948 178.876 45.2718 178.876 44.1145C178.876 42.9572 178.716 41.9342 178.396 41.0455C178.086 40.1568 177.6 39.4645 176.939 38.9685C176.288 38.4725 175.456 38.2245 174.443 38.2245C173.369 38.2245 172.485 38.488 171.793 39.015C171.1 39.542 170.584 40.2498 170.243 41.1385C169.912 42.0272 169.747 43.0192 169.747 44.1145C169.747 45.2202 169.912 46.2225 170.243 47.1215C170.584 48.0102 171.09 48.718 171.762 49.245C172.444 49.772 173.301 50.0355 174.335 50.0355ZM178.876 52.5V40.4565H178.504V30.18H181.759V52.5H178.876Z\" fill=\"#10111A\"/>\n<defs>\n<linearGradient id=\"paint0_linear_11_24\" x1=\"12.505\" y1=\"28.7\" x2=\"67.855\" y2=\"50.635\" gradientUnits=\"userSpaceOnUse\">\n<stop stop-color=\"#2563FF\"/>\n<stop offset=\"1\" stop-color=\"#8B5CF6\"/>\n</linearGradient>\n</defs>\n</svg>\n";
const ids=[];const variables=[];const styleIds=[];
const rgb=h=>({r:parseInt(h.slice(1,3),16)/255,g:parseInt(h.slice(3,5),16)/255,b:parseInt(h.slice(5,7),16)/255});
const col=figma.variables.createVariableCollection('Untold / Primitives');const prim={};
for(const [key,value] of Object.entries(TOKENS.primitive)){const v=figma.variables.createVariable('color/'+key,col,'COLOR');v.scopes=[];v.setValueForMode(col.defaultModeId,{...rgb(value),a:1});v.setVariableCodeSyntax('WEB','var(--brand-'+key+')');prim[key]=v;variables.push({id:v.id,name:v.name});}
const sem=figma.variables.createVariableCollection('Untold / Semantic');sem.renameMode(sem.defaultModeId,'Light');let dark;try{dark=sem.addMode('Dark')}catch{}const darkCollection=dark?sem:figma.variables.createVariableCollection('Untold / Semantic Dark');const semantic={};const semanticDark={};
for(const key of Object.keys(TOKENS.semantic.light)){const v=figma.variables.createVariable(key,sem,'COLOR');v.scopes=key.includes('foreground')?['TEXT_FILL']:['FRAME_FILL','SHAPE_FILL','TEXT_FILL','STROKE_COLOR'];v.setValueForMode(sem.defaultModeId,{type:'VARIABLE_ALIAS',id:prim[TOKENS.semantic.light[key]].id});if(dark){v.setValueForMode(dark,{type:'VARIABLE_ALIAS',id:prim[TOKENS.semantic.dark[key]].id});semanticDark[key]=v;}else{const dv=figma.variables.createVariable(key,darkCollection,'COLOR');dv.scopes=v.scopes;dv.setValueForMode(darkCollection.defaultModeId,{type:'VARIABLE_ALIAS',id:prim[TOKENS.semantic.dark[key]].id});dv.setVariableCodeSyntax('WEB','var(--'+key+')');semanticDark[key]=dv;}v.setVariableCodeSyntax('WEB','var(--'+key+')');semantic[key]=v;variables.push({id:v.id,name:v.name});}
const geo=figma.variables.createVariableCollection('Untold / Geometry');
for(const [key,value] of [...TOKENS.spacing.map(v=>['space/'+v,v]),...Object.entries(TOKENS.radius).map(([k,v])=>['radius/'+k,v])]){const v=figma.variables.createVariable(key,geo,'FLOAT');v.scopes=key.startsWith('space')?['GAP']:['CORNER_RADIUS'];v.setValueForMode(geo.defaultModeId,value);v.setVariableCodeSyntax('WEB','var(--'+key.replace('space/','space-').replace('radius/','shape-')+')');variables.push({id:v.id,name:v.name});}
const fonts={400:'Regular',500:'Medium',600:'SemiBold',700:'Bold'};await Promise.all(Object.values(fonts).map(style=>figma.loadFontAsync({family:'Manrope',style})));
const styles={};for(const [name,t] of Object.entries(TOKENS.typography)){if(name==='code')continue;const s=figma.createTextStyle();s.name='Untold / '+name;s.fontName={family:'Manrope',style:fonts[t.weight]};s.fontSize=t.size;s.lineHeight={unit:'PERCENT',value:t.line*100};s.letterSpacing={unit:'PERCENT',value:t.tracking*100};styles[name]=s;styleIds.push({id:s.id,name:s.name});}
const p=figma.currentPage;p.name='00 · Foundations';
let activeSemantic=semantic;const fill=(n,key)=>n.fills=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#10111A')},'color',activeSemantic[key])];
function text(value,type='body',color='foreground',width=1000){const n=figma.createText();ids.push(n.id);n.fontName=styles[type].fontName;n.characters=value;n.textStyleId=styles[type].id;n.textAutoResize='HEIGHT';n.resize(width,1);fill(n,color);return n;}
function box(name,w,dir='VERTICAL'){const n=figma.createFrame();n.layoutMode=dir;ids.push(n.id);n.name=name;n.resize(w,10);n.primaryAxisSizingMode='AUTO';n.counterAxisSizingMode='FIXED';n.itemSpacing=24;n.fills=[];return n;}
const board=box('Untold / Foundations',1280);board.x=100;board.y=100;board.paddingTop=64;board.paddingBottom=64;board.paddingLeft=64;board.paddingRight=64;board.itemSpacing=48;fill(board,'background');p.appendChild(board);
const title=box('Introduction',1152);board.appendChild(title);title.appendChild(text('UNTOLD / DESIGN SYSTEM','label','muted-foreground'));title.appendChild(text('A identidade, em sistema.','display'));title.appendChild(text('Fundamentos compartilhados entre design e código. Manrope, cores oficiais e extensões de interface documentadas.','body','muted-foreground'));
const logo=figma.createNodeFromSvg(LOGO);ids.push(logo.id);logo.resize(184,82);title.appendChild(logo);
const palette=box('Brand / Primitives',1152,'HORIZONTAL');palette.itemSpacing=24;board.appendChild(palette);
for(const [name,key] of [['Elétrico','electric'],['Violeta','violet'],['Ink','ink'],['Cloud','cloud'],['Dobra','fold']]){const cell=box(name,211);palette.appendChild(cell);const sw=figma.createRectangle();ids.push(sw.id);sw.resize(211,120);sw.cornerRadius=12;sw.fills=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb(TOKENS.primitive[key])},'color',prim[key])];sw.strokes=[{type:'SOLID',color:rgb('#DFE2EC')}];cell.appendChild(sw);cell.appendChild(text(name,'label','foreground',211));cell.appendChild(text(TOKENS.primitive[key],'caption','muted-foreground',211));}
for(const [mode,titleText] of [[sem.defaultModeId,'Light / semantic roles'],[dark,'Dark / semantic roles']]){activeSemantic=mode===sem.defaultModeId?semantic:semanticDark;const scope=box(titleText,1152);if(dark)scope.setExplicitVariableModeForCollection(sem,mode);scope.paddingLeft=24;scope.paddingRight=24;scope.paddingTop=24;scope.paddingBottom=24;scope.cornerRadius=20;fill(scope,'background');board.appendChild(scope);scope.appendChild(text(titleText,'title','foreground',1104));for(const [bg,fg,label] of [['background','foreground','Canvas'],['card','card-foreground','Card'],['primary','primary-foreground','Ação principal'],['secondary','secondary-foreground','Ação secundária'],['muted','muted-foreground','Conteúdo de apoio']]){const row=box(label,1104,'HORIZONTAL');row.paddingTop=16;row.paddingBottom=16;row.paddingLeft=20;row.paddingRight=20;row.cornerRadius=12;fill(row,bg);scope.appendChild(row);row.appendChild(text(label+' · Aa','label',fg,1064));}}
activeSemantic=semantic;const typeSection=box('Typography',1152);board.appendChild(typeSection);typeSection.appendChild(text('Manrope / escala tipográfica','heading'));for(const [name,t] of Object.entries(TOKENS.typography)){if(name==='code')continue;typeSection.appendChild(text(name+' · '+t.size+' px / '+t.weight,'caption','muted-foreground'));typeSection.appendChild(text(name==='display'?'Ideias que ganham presença.':name==='heading'?'Do potencial à presença.':'Uma experiência clara, do primeiro contato à publicação.',name));}
const geometry=box('Space & Shape',1152);board.appendChild(geometry);geometry.appendChild(text('Espaço e forma','heading'));for(const n of TOKENS.spacing){const row=box('Space '+n,1152,'HORIZONTAL');geometry.appendChild(row);row.appendChild(text(n+' px','caption','muted-foreground',100));const r=figma.createRectangle();ids.push(r.id);r.resize(n*3,20);r.cornerRadius=4;fill(r,'primary');row.appendChild(r);}geometry.appendChild(text('Raios: 4 / 8 / 12 / 20 / 24 / 32 / 9999 px. Controles 12 px; cards 20 px.','body','muted-foreground'));geometry.appendChild(text('Manrope e cores: manual original. Raios, espaçamento, status e estados: extensões de interface.','caption','muted-foreground'));
const cp=figma.createPage();cp.name='01 · Components';ids.push(cp.id);
await figma.setCurrentPageAsync(cp);activeSemantic=semantic;
const components=[];
function component(name,width,height){const c=figma.createComponent();c.name=name;c.resize(width,height);c.layoutMode='HORIZONTAL';c.primaryAxisAlignItems='CENTER';c.counterAxisAlignItems='CENTER';c.primaryAxisSizingMode='FIXED';c.counterAxisSizingMode='FIXED';c.cornerRadius=12;c.paddingLeft=20;c.paddingRight=20;c.fills=[];components.push(c);return c;}
function label(c,value,color='foreground'){const t=text(value,'label',color,Math.max(20,c.width-40));t.textAutoResize='WIDTH_AND_HEIGHT';c.appendChild(t);const prop=c.addComponentProperty('Label','TEXT',value);t.componentPropertyReferences={characters:prop};return t;}
const buttonVariants=[];
for(const variant of ['default','secondary','outline','ghost','destructive','link'])for(const state of ['default','hover','focus','active','disabled']){
const c=component('Variant='+variant+', State='+state,180,44);c.description='Untold / shadcn Button · src/components/ui/button.tsx';let bg=variant==='default'?(state==='hover'?'primary-hover':state==='active'?'primary-pressed':'primary'):variant==='secondary'?'secondary':variant==='outline'?'background':null;let fg=variant==='default'?'primary-foreground':variant==='secondary'?'secondary-foreground':variant==='destructive'?'destructive':variant==='link'?'primary':'foreground';
if(bg)fill(c,bg);if((variant==='ghost'||variant==='outline')&&(state==='hover'||state==='active'))fill(c,'muted');if(variant==='destructive'){fill(c,'destructive');c.fills=c.fills.map(p=>({...p,opacity:state==='hover'?.2:.1}));}
if(variant==='outline'){c.strokes=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#DFE2EC')},'color',semantic.border)];c.strokeWeight=1;}if(state==='disabled')c.opacity=.5;
const t=label(c,'Salvar projeto',fg);if(variant==='link')t.textDecoration='UNDERLINE';if(state==='focus'){const ring=figma.createRectangle();c.appendChild(ring);ring.layoutPositioning='ABSOLUTE';ring.x=-3;ring.y=-3;ring.resize(186,50);ring.cornerRadius=15;ring.fills=[];ring.strokes=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#2563FF')},'color',semantic.ring)];ring.strokeWeight=2;}
buttonVariants.push(c);}
const buttons=figma.combineAsVariants(buttonVariants,cp);buttons.name='Untold / Button';buttons.x=100;buttons.y=140;buttons.description='6 variantes × 5 estados. Propriedade Label editável. Altura 44 px, raio 12 px, Manrope 600 / 14 px.';for(let i=0;i<buttonVariants.length;i++){buttonVariants[i].x=30+(i%5)*220;buttonVariants[i].y=40+Math.floor(i/5)*90;}buttons.resize(1140,600);
const heading=text('Button / variantes e estados','heading','foreground',1140);heading.x=100;heading.y=70;cp.appendChild(heading);
const inputs=[];for(const state of ['default','hover','focus','invalid','disabled']){const c=component('State='+state,300,44);c.primaryAxisAlignItems='MIN';c.paddingLeft=16;c.paddingRight=16;fill(c,'background');c.strokes=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#C6CBD9')},'color',semantic[state==='invalid'?'destructive':state==='focus'?'ring':'input'])];c.strokeWeight=state==='focus'?2:1;const placeholder=label(c,'voce@empresa.com','muted-foreground');placeholder.fontName={family:'Manrope',style:'Regular'};if(state==='disabled')c.opacity=.5;c.description='Untold / shadcn Input · altura 44 px · raio 12 px';inputs.push(c);}
const inputSet=figma.combineAsVariants(inputs,cp);inputSet.name='Untold / Input';inputSet.x=100;inputSet.y=840;for(let i=0;i<inputs.length;i++){inputs[i].x=24;inputs[i].y=24+i*76;}inputSet.resize(348,420);
const badges=[];for(const variant of ['default','secondary','outline','destructive']){const c=component('Variant='+variant,124,20);c.cornerRadius=9999;c.paddingLeft=8;c.paddingRight=8;if(variant!=='outline')fill(c,variant==='secondary'?'secondary':variant==='destructive'?'destructive':'primary');else {c.strokes=[{type:'SOLID',color:rgb('#DFE2EC')}];c.strokeWeight=1;}const t=label(c,'Em revisão',variant==='default'||variant==='destructive'?'primary-foreground':variant==='secondary'?'secondary-foreground':'foreground');t.fontSize=12;t.fontName={family:'Manrope',style:'Medium'};if(variant==='destructive'){c.fills=c.fills.map(p=>({...p,opacity:.1}));fill(t,'destructive');}c.description='Untold / shadcn Badge';badges.push(c);}
const badgeSet=figma.combineAsVariants(badges,cp);badgeSet.name='Untold / Badge';badgeSet.x=550;badgeSet.y=840;for(let i=0;i<badges.length;i++){badges[i].x=24;badges[i].y=24+i*60;}badgeSet.resize(204,264);
const card=component('Untold / Card',360,250);card.layoutMode='VERTICAL';card.primaryAxisAlignItems='MIN';card.counterAxisAlignItems='MIN';card.primaryAxisSizingMode='AUTO';card.paddingTop=24;card.paddingBottom=24;card.paddingLeft=24;card.paddingRight=24;card.itemSpacing=24;card.cornerRadius=20;fill(card,'card');card.strokes=[figma.variables.setBoundVariableForPaint({type:'SOLID',color:rgb('#DFE2EC')},'color',semantic.border)];const titleNode=text('Seu próximo projeto','title','card-foreground',312);titleNode.fontSize=16;titleNode.fontName={family:'Manrope',style:'Medium'};card.appendChild(titleNode);const titleProp=card.addComponentProperty('Title','TEXT',titleNode.characters);titleNode.componentPropertyReferences={characters:titleProp};const description=text('Um ponto de partida para organizar a presença digital da sua marca.','body','muted-foreground',312);description.fontSize=14;card.appendChild(description);const descProp=card.addComponentProperty('Description','TEXT',description.characters);description.componentPropertyReferences={characters:descProp};card.appendChild(buttonVariants[0].createInstance());card.x=850;card.y=840;card.description='Untold / Card · título, descrição e ação como instância do Button.';
const review=figma.createFrame();review.name='Review / Component instances';review.resize(1140,330);review.x=100;review.y=1390;review.layoutMode='HORIZONTAL';review.paddingTop=32;review.paddingBottom=32;review.paddingLeft=32;review.paddingRight=32;review.itemSpacing=32;fill(review,'background');cp.appendChild(review);review.appendChild(card.createInstance());const column=box('Control examples',650);review.appendChild(column);column.appendChild(buttonVariants[0].createInstance());column.appendChild(inputs[0].createInstance());column.appendChild(badges[1].createInstance());
figma.viewport.scrollAndZoomIntoView([buttons]);

figma.closePlugin('Untold importada: fundamentos, tokens e núcleo Button / Input / Badge / Card.');
}
main().catch(e=>figma.closePlugin(e.message));
