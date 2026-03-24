import React, { type ComponentProps } from 'react'
import { Field, IconWrap, Input } from './SearchBox.styles'

const searchIconSrc = '/search.svg'

export type SearchBoxProps = Omit<ComponentProps<typeof Input>, 'type'>

export default function SearchBox({ placeholder = 'Search', className, ...rest }: SearchBoxProps) {
  return (
    <Field className={className}>
      <Input type="search" placeholder={placeholder} {...rest} />
      <IconWrap aria-hidden>
        <img src={searchIconSrc} alt="" />
      </IconWrap>
    </Field>
  )
}
