/**
 * Realce de sintaxe mínimo para os trechos do editor do hero.
 * Divide uma linha em tokens { type, text } sem depender de bibliotecas.
 */
const TOKEN_PATTERN =
  /(\/\/.*$|#.*$|<!--.*-->|"(?:[^"\\]|\\.)*"|\b(?:const|export|default|function|return|await|import|from|true|false)\b|\b\d+\b)/g;

function classify(text) {
  if (text.startsWith('//') || text.startsWith('#') || text.startsWith('<!--')) return 'comment';
  if (text.startsWith('"')) return 'string';
  if (/^\d+$/.test(text)) return 'number';
  return 'keyword';
}

export function tokenizeLine(line) {
  const tokens = [];
  let cursor = 0;
  for (const match of line.matchAll(TOKEN_PATTERN)) {
    if (match.index > cursor) tokens.push({ type: 'plain', text: line.slice(cursor, match.index) });
    tokens.push({ type: classify(match[0]), text: match[0] });
    cursor = match.index + match[0].length;
  }
  if (cursor < line.length) tokens.push({ type: 'plain', text: line.slice(cursor) });
  return tokens;
}
