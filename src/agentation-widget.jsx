import React from 'react';
import { createRoot } from 'react-dom/client';
import { Agentation } from 'agentation';

function AgentationWidget() {
  return (
    <Agentation
      onSubmit={(output, annotations) => {
        console.log('[Agentation] Annotations submitted:', annotations);
      }}
    />
  );
}

// Mount when DOM is ready
function mount() {
  const el = document.createElement('div');
  el.id = 'agentation-root';
  document.body.appendChild(el);
  createRoot(el).render(<AgentationWidget />);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', mount);
} else {
  mount();
}
