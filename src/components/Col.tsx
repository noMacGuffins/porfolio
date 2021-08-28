import React from "react"
import Div from "./Div"
import type { DivPropType } from 'src/types/DivPropType'

type ColType = DivPropType | {
  auto?
  children?
  key?
}

const Col = (props: ColType) => {
  const { auto,key, ...others } = props
  if (auto) others['colAuto'] = auto
  return (
    <Div key={key} col {...others}>{props.children}</Div>
  )
}

export default Col