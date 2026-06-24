'use client';

import { useState } from 'react';
import IntroAnimation from './IntroAnimation';

export default function IntroWrapper({ children }: { children: React.ReactNode }) {
  const [introComplete, setIntroComplete] = useState(false);

  if (!introComplete) {
    return <IntroAnimation onComplete={() => setIntroComplete(true)} />;
  }

  return <>{children}</>;
}
