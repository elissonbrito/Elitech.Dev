import { Icon } from '../ui/Icon';
import { isBranch } from '../../utils/tree';
import './FileTree.css';

const EXTENSION_TONES = {
  tsx: 'var(--accent-2)',
  ts: 'var(--accent-2)',
  py: 'var(--warn)',
  conf: 'var(--ok)',
  html: 'var(--accent)',
  json: 'var(--warn)',
};

const toneFor = (name) => EXTENSION_TONES[name.split('.').pop()] ?? 'var(--fg-faint)';

/**
 * Nó RECURSIVO do explorer: pastas renderizam seus filhos com
 * <TreeNode /> e profundidade + 1; arquivos são selecionáveis.
 */
function TreeNode({ node, depth, expanded, onToggle, selectedId, onSelect }) {
  const indent = { paddingLeft: `${8 + depth * 14}px` };

  if (!isBranch(node)) {
    const selected = node.id === selectedId;
    return (
      <li role="none">
        <button
          type="button"
          role="treeitem"
          aria-selected={selected}
          className={`tree-row tree-row--file ${selected ? 'is-selected' : ''}`}
          style={indent}
          onClick={() => onSelect(node)}
        >
          <span className="tree-row__icon" style={{ color: toneFor(node.name) }}>
            <Icon name="file" size={14} />
          </span>
          {node.name}
        </button>
      </li>
    );
  }

  const open = expanded.has(node.id);
  return (
    <li role="none">
      <button
        type="button"
        role="treeitem"
        aria-expanded={open}
        className="tree-row tree-row--folder"
        style={indent}
        onClick={() => onToggle(node.id)}
      >
        <span className={`tree-row__caret ${open ? 'is-open' : ''}`}>
          <Icon name="chevron" size={12} strokeWidth={2.2} />
        </span>
        <span className="tree-row__icon tree-row__icon--folder">
          <Icon name="folder" size={14} />
        </span>
        {node.name}
      </button>

      {open && (
        <ul role="group" className="tree-group">
          {node.children.map((child) => (
            <TreeNode
              key={child.id}
              node={child}
              depth={depth + 1}
              expanded={expanded}
              onToggle={onToggle}
              selectedId={selectedId}
              onSelect={onSelect}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

export function FileTree({ root, ...props }) {
  return (
    <ul role="tree" aria-label="Estrutura da EliTech" className="tree">
      <TreeNode node={root} depth={0} {...props} />
    </ul>
  );
}
