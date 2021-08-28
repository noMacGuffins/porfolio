import React from "react"
import Div from "./Div"
import type { DivPropType } from 'src/types/DivPropType'

type RowType = DivPropType | {
    auto?
    children?
    key?
  }

const Row = (props: DivPropType) => {
    const { auto,key, ...others } = props
  if (auto) others['rowAuto'] = auto
  return (
    <Div key={key} row {...others}>{props.children}</Div>
  )
}

export default Row