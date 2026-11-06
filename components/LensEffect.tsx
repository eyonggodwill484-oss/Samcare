import type { ReactNode } from 'react';
import { Lens } from '@/components/ui/lens';

type LensEffectProps = {
  children: ReactNode;
  className?: string;
  lensSize?: number;
  zoomFactor?: number;
  ariaLabel?: string;
  decorative?: boolean;
};

export default function LensEffect({
  children,
  className,
  lensSize,
  zoomFactor,
  ariaLabel,
  decorative = false,
}: LensEffectProps) {
  return (
    <Lens
      className={className}
      lensSize={lensSize}
      zoomFactor={zoomFactor}
      ariaLabel={ariaLabel}
      role={decorative ? 'presentation' : 'region'}
      tabIndex={decorative ? -1 : 0}
    >
      {children}
    </Lens>
  );
}
