import fs from 'node:fs'
const css=fs.readFileSync('src/index.css','utf8').split('/* Documentation shell')[0]
fs.writeFileSync('dist-library/theme.css',css.replace('@custom-variant dark','@source "./index.js";\n@custom-variant dark'))
console.log('Consumer theme generated without documentation layout styles.')
