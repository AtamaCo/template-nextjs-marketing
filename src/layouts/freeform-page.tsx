import type { ReactNode } from 'react';

import { forwardRef } from 'react';

interface FreeformPageProps {
  main: ReactNode;
}

export const FreeformPage = forwardRef<HTMLDivElement, FreeformPageProps>(
  ({ main }, ref) => (
    <div ref={ref}>
      <div data-atama-placement="Main">{main}</div>
    </div>
  ),
);

FreeformPage.displayName = 'FreeformPage';
