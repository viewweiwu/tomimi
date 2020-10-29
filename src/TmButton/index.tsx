import React from 'react'
import './index.less'
import { TmButtonProps } from './tm-button'

export default function TmButton (props: TmButtonProps) {
  const { type } = props
  return <button className={`tm-button ${type || ''}`}>hello</button>
}
