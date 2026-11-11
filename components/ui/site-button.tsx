import React, {
  type ButtonHTMLAttributes,
  type ComponentProps,
  type CSSProperties,
} from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"

type SiteButtonStyles = {
  borderRadius?: string
  background?: string
  className?: string
}

type NativeSiteButtonProps = SiteButtonStyles &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof SiteButtonStyles | "href"> & {
    href?: never
    ref?: React.Ref<HTMLButtonElement>
  }

type LinkSiteButtonProps = SiteButtonStyles &
  Omit<ComponentProps<typeof Link>, keyof SiteButtonStyles | "href"> & {
    href: ComponentProps<typeof Link>["href"]
  }

export type SiteButtonProps =
  | NativeSiteButtonProps
  | LinkSiteButtonProps

function isLinkButton(
  props: SiteButtonProps
): props is LinkSiteButtonProps {
  return "href" in props && props.href !== undefined
}

function isNativeButton(
  props: SiteButtonProps
): props is NativeSiteButtonProps {
  return !isLinkButton(props)
}

function getButtonStyle(
  borderRadius: string,
  background: string
) {
  return {
    "--radius": borderRadius,
    "--bg": background,
  } as CSSProperties
}

function getButtonClasses(className?: string) {
  return cn(
    "inline-flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap [border-radius:var(--radius)] [background:var(--bg)] text-[#07384d]",
    "transition-colors duration-300 ease-in-out",
    "focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#045184]",
    "disabled:pointer-events-none disabled:opacity-50 motion-reduce:transition-none",
    className
  )
}

export function SiteButton(props: SiteButtonProps) {
  if (isNativeButton(props)) {
    const {
      className,
      children,
      borderRadius = "0.75rem",
      background = "#3dc9b2",
      ref,
      ...buttonProps
    } = props

    return (
      <button
        ref={ref}
        style={getButtonStyle(borderRadius, background)}
        className={getButtonClasses(className)}
        {...buttonProps}
      >
        {children}
      </button>
    )
  }

  const {
    href,
    className,
    children,
    borderRadius = "0.75rem",
    background = "#3dc9b2",
    ...linkProps
  } = props

  return (
    <Link
      href={href}
      style={getButtonStyle(borderRadius, background)}
      className={getButtonClasses(className)}
      {...linkProps}
    >
      {children}
    </Link>
  )
}
