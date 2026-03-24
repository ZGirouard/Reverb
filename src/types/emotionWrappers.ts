import type { ComponentProps, ElementType } from 'react'

export type OptionalClassNameProps<E extends ElementType> = Omit<
  ComponentProps<E>,
  'className'
> & { className?: string }
