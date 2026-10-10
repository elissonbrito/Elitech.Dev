/**
 * Utilitários recursivos para estruturas em árvore
 * (navegação e explorer de arquivos usam o mesmo formato: { children? }).
 */

export const isBranch = (node) => Array.isArray(node.children) && node.children.length > 0;

/** Conta as folhas (arquivos) de uma árvore. */
export function countLeaves(node) {
  if (!isBranch(node)) return 1;
  return node.children.reduce((total, child) => total + countLeaves(child), 0);
}

/** Primeira folha encontrada em profundidade — usada como arquivo aberto inicial. */
export function findFirstLeaf(node) {
  if (!isBranch(node)) return node;
  return findFirstLeaf(node.children[0]);
}

/**
 * Caminho da raiz até o nó com `id`, ou null se não existir.
 * Ex.: ['elitech', 'projetos', 'r-bombas', 'index.html']
 */
export function findPath(node, id, trail = []) {
  const here = [...trail, node];
  if (node.id === id) return here;
  if (!isBranch(node)) return null;
  for (const child of node.children) {
    const found = findPath(child, id, here);
    if (found) return found;
  }
  return null;
}

/** Conjunto de ids de todas as pastas — para começar com a árvore expandida. */
export function collectBranchIds(node, acc = new Set()) {
  if (!isBranch(node)) return acc;
  acc.add(node.id);
  node.children.forEach((child) => collectBranchIds(child, acc));
  return acc;
}

/** Verifica se algum descendente satisfaz o predicado (ex.: item ativo no menu). */
export function someDescendant(node, predicate) {
  if (predicate(node)) return true;
  return isBranch(node) && node.children.some((child) => someDescendant(child, predicate));
}
