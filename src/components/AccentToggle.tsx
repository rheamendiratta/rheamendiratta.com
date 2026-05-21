'use client';

import { useState, useEffect } from 'react';

type Accent = 'neel' | 'kesar' | 'gulabi' | 'haldi';

const ACCENTS: { id: Accent; color: string; label: string }[] = [
  { id: 'neel',   color: '#4A5899', label: 'Indigo'  },
  { id: 'kesar',  color: '#D4952A', label: 'Saffron' },
  { id: 'gulabi', color: '#B5485A', label: 'Rose'    },
  { id: 'haldi',  color: '#7A803C', label: 'Olive'   },
];

function applyAccent(id: Accent) {
  if (id === 'neel') {
    document.documentElement.removeAttribute('data-accent');
  } else {
    document.documentElement.setAttribute('data-accent', id);
  }
}

export function AccentToggle() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const saved = localStorage.getItem('accent') as Accent | null;
    if (saved) {
      const i = ACCENTS.findIndex((a) => a.id === saved);
      if (i !== -1) {
        setIndex(i);
        applyAccent(saved);
      }
    }
  }, []);

  function cycle() {
    const next = (index + 1) % ACCENTS.length;
    setIndex(next);
    applyAccent(ACCENTS[next].id);
    localStorage.setItem('accent', ACCENTS[next].id);
  }

  const current = ACCENTS[index];

  return (
    <button
      className="accent-toggle"
      onClick={cycle}
      aria-label={`Current color: ${current.label}. Click to cycle.`}
      title={current.label}
      style={{ background: current.color }}
    />
  );
}
