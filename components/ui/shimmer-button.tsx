import React, {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type CSSProperties,
  type ReactNode,
} from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

type ShimmerStyles = {
  shimmerColor?: string
  shimmerSize?: string
  borderRadius?: string
  shimmerDuration?: string
  background?: string
  className?: string
}

type NativeShimmerButtonProps = ShimmerStyles &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ShimmerStyles | "href"> & {
    href?: never
    ref?: React.Ref<HTMLButtonElement>
  }

type LinkShimmerButtonProps = ShimmerStyles &
  Omit<ComponentProps<typeof Link>, keyof ShimmerStyles | "href"> & {
    href: ComponentProps<typeof Link>["href"]
  }

export type ShimmerButtonProps =
  | NativeShimmerButtonProps
  | LinkShimmerButtonProps

function isLinkButton(
  props: ShimmerButtonProps
): props is LinkShimmerButtonProps {
  return "href" in props && props.href !== undefined
}

function isNativeButton(
  props: ShimmerButtonProps
): props is NativeShimmerButtonProps {
  return !isLinkButton(props)
}

function getShimmerStyle(
  shimmerColor: string,
  shimmerSize: string,
  shimmerDuration: string,
  borderRadius: string,
  background: string
) {
  return {
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as CSSProperties
}

function getShimmerClasses(className?: string) {
  return cn(
    "group relative z-0 inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap [border-radius:var(--radius)] [background:var(--bg)] text-[#07384d]",
    "transform-gpu transition-[transform,box-shadow,background-color] duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(4,81,132,0.22)] active:translate-y-px active:shadow-sm",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#045184]",
    "disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
    className
  )
}

function ShimmerEffects() {
  return (
    <>
      <span
        aria-hidden="true"
        className="@container-[size] absolute inset-0 -z-10 overflow-hidden blur-[2px]"
      >
        <span className="animate-shimmer-slide absolute inset-0 aspect-square h-full [mask:none] motion-reduce:animate-none group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] group-active:[animation-play-state:paused]">
          <span className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] motion-reduce:animate-none group-hover:[animation-play-state:paused] group-focus-visible:[animation-play-state:paused] group-active:[animation-play-state:paused]" />
        </span>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[inherit] shadow-[inset_0_-8px_10px_#ffffff1f] transition-shadow duration-300 group-hover:shadow-[inset_0_-6px_10px_#ffffff3f] group-active:shadow-[inset_0_-10px_10px_#ffffff3f]"
      />
    </>
  )
}

function ShimmerContents({ children }: { children: ReactNode }) {
  return (
    <>
      <span className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      <ShimmerEffects />
    </>
  )
}

export function ShimmerButton(props: ShimmerButtonProps) {
  if (isNativeButton(props)) {
    const {
      className,
      children,
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "0.75rem",
      background = "#3dc9b2",
      ref,
      ...buttonProps
    } = props

    return (
      <button
        ref={ref}
        style={getShimmerStyle(
          shimmerColor,
          shimmerSize,
          shimmerDuration,
          borderRadius,
          background
        )}
        className={getShimmerClasses(className)}
        {...buttonProps}
      >
        <ShimmerContents>{children}</ShimmerContents>
      </button>
    )
  }

  const {
    href,
    className,
    children,
    shimmerColor = "#ffffff",
    shimmerSize = "0.05em",
    shimmerDuration = "3s",
    borderRadius = "0.75rem",
    background = "#3dc9b2",
    ...linkProps
  } = props

  return (
    <Link
      href={href}
      style={getShimmerStyle(
        shimmerColor,
        shimmerSize,
        shimmerDuration,
        borderRadius,
        background
      )}
      className={getShimmerClasses(className)}
      {...linkProps}
    >
      <ShimmerContents>{children}</ShimmerContents>
    </Link>
  )
}
