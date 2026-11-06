import Link from 'next/link';
import type { ComponentProps, ButtonHTMLAttributes, ReactNode } from 'react';
import LensEffect from '@/components/LensEffect';
import { ShimmerButton } from '@/components/ui/shimmer-button';

type ButtonVariant = 'primary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

type SharedProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  lensEffect?: boolean;
};

type LinkButtonProps = SharedProps &
  Omit<ComponentProps<typeof Link>, keyof SharedProps | 'href'> & {
    href: ComponentProps<typeof Link>['href'];
  };

type NativeButtonProps = SharedProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps | 'href'> & {
    href?: never;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'border border-[#3dc9b2] hover:border-[#58d8c3] hover:bg-[#58d8c3]',
  outline:
    'border border-[#3dc9b2] text-[#045184] hover:bg-[#eafaf7]',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'min-h-10 rounded-lg px-4 py-2 text-sm',
  md: 'min-h-12 rounded-lg px-5 py-3 text-sm',
  lg: 'min-h-14 rounded-lg px-7 py-3.5 text-base',
};

function getButtonClasses(
  variant: ButtonVariant,
  size: ButtonSize,
  className = '',
) {
  return [
    'inline-flex items-center justify-center gap-2 font-semibold transition-colors',
    variantClasses[variant],
    sizeClasses[size],
    className,
  ]
    .filter(Boolean)
    .join(' ');
}

export default function Button(props: ButtonProps) {
  if ('href' in props && props.href !== undefined) {
    const {
      href,
      variant = 'primary',
      size = 'md',
      className,
      children,
      lensEffect = false,
      ...linkProps
    } = props;

    return (
      <ShimmerButton
        href={href}
        background={variant === 'outline' ? '#ffffff' : '#3dc9b2'}
        className={getButtonClasses(variant, size, className)}
        data-site-button
        {...linkProps}
      >
        {lensEffect ? (
          <LensEffect
            decorative
            lensSize={42}
            zoomFactor={1.3}
            className="relative inline-flex items-center gap-2 overflow-hidden rounded-md"
          >
            {children}
          </LensEffect>
        ) : (
          children
        )}
      </ShimmerButton>
    );
  }

  const {
    variant = 'primary',
    size = 'md',
    className,
    children,
    lensEffect = false,
    ...buttonProps
  } = props;

  return (
    <ShimmerButton
      background={variant === 'outline' ? '#ffffff' : '#3dc9b2'}
      className={getButtonClasses(variant, size, className)}
      data-site-button
      {...buttonProps}
    >
      {lensEffect ? (
        <LensEffect
          decorative
          lensSize={42}
          zoomFactor={1.3}
          className="relative inline-flex items-center gap-2 overflow-hidden rounded-md"
        >
          {children}
        </LensEffect>
      ) : (
        children
      )}
    </ShimmerButton>
  );
}
