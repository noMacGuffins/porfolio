// https://nerdcave.com/tailwind-cheat-sheet
// 스타일링은 prop을 우선적으로 사용해주시고 → 없을 경우에만 clx 사용 해주세요

// *************
// -----사용법----
// *************

// clx="class class class"
// px={number}
// py={number}
// h32 w32 px10 py10
// fontSize14 fontSize={14}
// wFull, hFull, wScreen, hScreen
// cond={[ isSthTrue && 'class']}
// md="class" ==> screen md 이상일 때에만 적용(md:class)

import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import type { DivPropsType } from 'src/types/DivPropsType'
import ReactTooltip from 'react-tooltip'
import randomstring from 'randomstring'
import { COLORS } from 'src/modules/constants'

const addToClxs = (clxs, obj, breakpoints?) => {
  if (obj) {
    const list = classNames(obj)
      .split(' ')
      .map((clx) => {
        return breakpoints ? `${breakpoints}:${clx}` : clx
      })
    clxs.push(list.join(' '))
  }
}

const addStyle = (styles, v, obj) => {
  if (_.isNumber(v) || _.isString(v)) styles.push(obj)
}

const addByPrefix = (props, styles, key, prefix, styleObj) => {
  if (!_.startsWith(key, prefix)) return false
  const postStr = key.substring(prefix.length)
  if (_.isEmpty(postStr)) return false
  const n = _.toNumber(postStr)
  if (_.isNaN(n)) return false
  if (props[key]) {
    styles.push(_.isFunction(styleObj) ? styleObj(n) : styleObj)
    return true
  } else {
    return false
  }
}

const pixelOrValue = (v) => {
  if (_.isNumber(v)) return `${v}px`
  if (_.isFunction(v)) return v()
  return v
}

const propsToClx = (props) => {
  const clxs = []
  const styles = []
  const map = {
    // basic
    clx: (v) => addToClxs(clxs, v),
    cond: (v) => addToClxs(clxs, v),
    focus: (v) => addToClxs(clxs, v, 'focus'),
    focusWithin: (v) => addToClxs(clxs, v, 'focus-within'),
    group: () => clxs.push('group'),
    groupHover: (v) => addToClxs(clxs, v, 'group-hover'),
    hover: (v) => addToClxs(clxs, v, 'hover'),
    // ==== Sytle ===
    style: (prop) => {
      if (_.isArray(prop)) styles.push(...prop)
      else {
        styles.push(prop)
      }
    },
    // style Sizing
    w: (v) => addStyle(styles, v, { width: pixelOrValue(v) }),
    minW: (v) => addStyle(styles, v, { minWidth: pixelOrValue(v) }),
    maxW: (v) => addStyle(styles, v, { maxWidth: pixelOrValue(v) }),
    h: (v) => addStyle(styles, v, { height: pixelOrValue(v) }),
    minH: (v) => addStyle(styles, v, { minHeight: pixelOrValue(v) }),
    maxH: (v) => addStyle(styles, v, { maxHeight: pixelOrValue(v) }),
    // style padding
    p: (v) => addStyle(styles, v, { padding: pixelOrValue(v) }),
    pt: (v) => addStyle(styles, v, { paddingTop: pixelOrValue(v) }),
    pb: (v) => addStyle(styles, v, { paddingBottom: pixelOrValue(v) }),
    py: (v) =>
      addStyle(styles, v, {
        paddingTop: pixelOrValue(v),
        paddingBottom: pixelOrValue(v),
      }),
    px: (v) =>
      addStyle(styles, v, {
        paddingLeft: pixelOrValue(v),
        paddingRight: pixelOrValue(v),
      }),
    // style margin
    m: (v) => addStyle(styles, v, { margin: pixelOrValue(v) }),
    mt: (v) => addStyle(styles, v, { marginTop: pixelOrValue(v) }),
    mb: (v) => addStyle(styles, v, { marginBottom: pixelOrValue(v) }),
    my: (v) =>
      addStyle(styles, v, {
        marginTop: pixelOrValue(v),
        marginBottom: pixelOrValue(v),
      }),
    mx: (v) =>
      addStyle(styles, v, {
        marginLeft: pixelOrValue(v),
        marginRight: pixelOrValue(v),
      }),
    // style position
    left: (v) => addStyle(styles, v, { left: pixelOrValue(v) }),
    right: (v) => addStyle(styles, v, { right: pixelOrValue(v) }),
    top: (v) => addStyle(styles, v, { top: pixelOrValue(v) }),
    bottom: (v) => addStyle(styles, v, { bottom: pixelOrValue(v) }),
    // style font
    fontSize: (v) => addStyle(styles, v, { fontSize: pixelOrValue(v) }),
    // style gap
    gap: (v) => addStyle(styles, v, { gap: pixelOrValue(v) }),
    gapX: (v) => addStyle(styles, v, { columnGap: pixelOrValue(v) }),
    gapY: (v) => addStyle(styles, v, { rowGap: pixelOrValue(v) }),
    // line height
    lineHeight: (v) => addStyle(styles, v, { lineHeight: v }),

    // ==== Layout ====
    // breakpoints
    sm: (v) => addToClxs(clxs, v, 'sm'),
    smd: (v) => addToClxs(clxs, v, 'smd'),
    md: (v) => addToClxs(clxs, v, 'md'),
    mdd: (v) => addToClxs(clxs, v, 'mdd'),
    lg: (v) => addToClxs(clxs, v, 'lg'),
    lgd: (v) => addToClxs(clxs, v, 'lgd'),
    xl: (v) => addToClxs(clxs, v, 'xl'),
    xld: (v) => addToClxs(clxs, v, 'xld'),
    // Row(no gutters)
    noGutters: () => clxs.push('no-gutters'),
    // container
    container: () => clxs.push('container'),
    // box-sizing
    boxBorder: () => clxs.push('boxBorder'),
    boxContent: () => clxs.push('boxContent'),
    // display
    hidden: () => clxs.push('hidden'),
    block: () => clxs.push('block'),
    inlineBlock: () => clxs.push('inline-block'),
    inline: () => clxs.push('inline'),
    inlineFlex: () => clxs.push('inline-flex'),
    table: () => clxs.push('table'),
    tableCaption: () => clxs.push('table-caption'),
    tableColumn: () => clxs.push('table-column'),
    tableCell: () => clxs.push('table-cell'),
    tableColumnGroup: () => clxs.push('table-column-group'),
    tableFooterGroup: () => clxs.push('table-footer-group'),
    tableHeaderGroup: () => clxs.push('table-header-group'),
    tableRowGroup: () => clxs.push('table-row-group'),
    tableRow: () => clxs.push('table-row'),
    flowRoot: () => clxs.push('flow-root'),
    grid: () => clxs.push('grid'),
    inlineGrid: () => clxs.push('inline-grid'),
    contents: () => clxs.push('contents'),
    // float
    floatRight: () => clxs.push('float-right'),
    floatLeft: () => clxs.push('float-left'),
    floatNone: () => clxs.push('float-none'),
    // clear
    clearLeft: () => clxs.push('clear-left'),
    clearRight: () => clxs.push('clear-right'),
    clearBoth: () => clxs.push('clear-both'),
    clearNone: () => clxs.push('clear-none'),
    // object-fit
    objectContain: () => clxs.push('object-contain'),
    objectCover: () => clxs.push('object-cover'),
    objectFill: () => clxs.push('object-fill'),
    objectNone: () => clxs.push('object-none'),
    objectScaleDown: () => clxs.push('object-scale-down'),
    // object-position
    objectBottom: () => clxs.push('object-bottom'),
    objectCenter: () => clxs.push('object-center'),
    objectLeft: () => clxs.push('object-left'),
    objectLeftBottom: () => clxs.push('object-left-bottom'),
    objectLeftTop: () => clxs.push('object-left-top'),
    objectRight: () => clxs.push('object-right'),
    objectRightBottom: () => clxs.push('object-right-bottom'),
    objectRightTop: () => clxs.push('object-right-top'),
    objectTop: () => clxs.push('object-top'),
    // overflow
    overflowAuto: () => clxs.push('overflow-auto'),
    overflowHidden: () => clxs.push('overflow-hidden'),
    overflowVisible: () => clxs.push('overflow-visible'),
    overflowScroll: () => clxs.push('overflow-scroll'),
    overflowXAuto: () => clxs.push('overflow-x-auto'),
    overflowYAuto: () => clxs.push('overflow-y-auto'),
    overflowXHidden: () => clxs.push('overflow-x-hidden'),
    overflowYHidden: () => clxs.push('overflow-y-hidden'),
    overflowXVisible: () => clxs.push('overflow-x-visible'),
    overflowYVisible: () => clxs.push('overflow-y-visible'),
    overflowXScroll: () => clxs.push('overflow-x-scroll'),
    overflowYScroll: () => clxs.push('overflow-y-scroll'),
    // overscroll
    overscrollAuto: () => clxs.push('overscroll-auto'),
    overscrollContain: () => clxs.push('overscroll-contain'),
    overscrollNone: () => clxs.push('overscroll-none'),
    overscrollYAuto: () => clxs.push('overscroll-y-auto'),
    overscrollYContain: () => clxs.push('overscroll-y-contain'),
    overscrollYNone: () => clxs.push('overscroll-y-none'),
    overscrollXAuto: () => clxs.push('overscroll-x-auto'),
    overscrollXContain: () => clxs.push('overscroll-x-contain'),
    overscrollXNone: () => clxs.push('overscroll-x-none'),
    // position
    static: () => clxs.push('static'),
    fixed: () => clxs.push('fixed'),
    absolute: () => clxs.push('absolute'),
    relative: () => clxs.push('relative'),
    sticky: () => clxs.push('sticky'),
    // top, right, bottom, left

    // visibility
    visible: () => clxs.push('visible'),
    invisible: () => clxs.push('invisible'),
    // z-index
    z0: () => clxs.push('z-0'),
    z10: () => clxs.push('z-10'),
    z20: () => clxs.push('z-20'),
    z30: () => clxs.push('z-30'),
    z40: () => clxs.push('z-40'),
    z50: () => clxs.push('z-50'),
    zAuto: () => clxs.push('z-auto'),

    // ==== Grid ====
    // grid-template-columns
    gridCols1: () => clxs.push('grid-cols-1'),
    gridCols2: () => clxs.push('grid-cols-2'),
    gridCols3: () => clxs.push('grid-cols-3'),
    gridCols4: () => clxs.push('grid-cols-4'),
    gridCols5: () => clxs.push('grid-cols-5'),
    gridCols6: () => clxs.push('grid-cols-6'),
    gridCols7: () => clxs.push('grid-cols-7'),
    gridCols8: () => clxs.push('grid-cols-8'),
    gridCols9: () => clxs.push('grid-cols-9'),
    gridCols10: () => clxs.push('grid-cols-10'),
    gridCols11: () => clxs.push('grid-cols-11'),
    gridCols12: () => clxs.push('grid-cols-12'),
    gridColsNone: () => clxs.push('grid-cols-none'),
    //  grid-column, start/end
    col: () => clxs.push('col'),
    colAuto: () => clxs.push('col-auto'),
    colEnd1: () => clxs.push('col-end-1'),
    colEnd2: () => clxs.push('col-end-2'),
    colEnd3: () => clxs.push('col-end-3'),
    colEnd4: () => clxs.push('col-end-4'),
    colEnd5: () => clxs.push('col-end-5'),
    colEnd6: () => clxs.push('col-end-6'),
    colEnd7: () => clxs.push('col-end-7'),
    colEnd8: () => clxs.push('col-end-8'),
    colEnd9: () => clxs.push('col-end-9'),
    colEnd10: () => clxs.push('col-end-10'),
    colEnd11: () => clxs.push('col-end-11'),
    colEnd12: () => clxs.push('col-end-12'),
    colEnd13: () => clxs.push('col-end-13'),
    colEndAuto: () => clxs.push('col-end-auto'),
    colSpan1: () => clxs.push('col-span-1'),
    colSpan2: () => clxs.push('col-span-2'),
    colSpan3: () => clxs.push('col-span-3'),
    colSpan4: () => clxs.push('col-span-4'),
    colSpan5: () => clxs.push('col-span-5'),
    colSpan6: () => clxs.push('col-span-6'),
    colSpan7: () => clxs.push('col-span-7'),
    colSpan8: () => clxs.push('col-span-8'),
    colSpan9: () => clxs.push('col-span-9'),
    colSpan10: () => clxs.push('col-span-10'),
    colSpan11: () => clxs.push('col-span-11'),
    colSpan12: () => clxs.push('col-span-12'),
    colSpanFull: () => clxs.push('col-span-full'),
    colStart1: () => clxs.push('col-start-1'),
    colStart2: () => clxs.push('col-start-2'),
    colStart3: () => clxs.push('col-start-3'),
    colStart4: () => clxs.push('col-start-4'),
    colStart5: () => clxs.push('col-start-5'),
    colStart6: () => clxs.push('col-start-6'),
    colStart7: () => clxs.push('col-start-7'),
    colStart8: () => clxs.push('col-start-8'),
    colStart9: () => clxs.push('col-start-9'),
    colStart10: () => clxs.push('col-start-10'),
    colStart11: () => clxs.push('col-start-11'),
    colStart12: () => clxs.push('col-start-12'),
    colStart13: () => clxs.push('col-start-13'),
    colStartAuto: () => clxs.push('col-start-auto'),
    // grid-template-rows
    gridRows1: () => clxs.push('grid-rows-1'),
    gridRows2: () => clxs.push('grid-rows-2'),
    gridRows3: () => clxs.push('grid-rows-3'),
    gridRows4: () => clxs.push('grid-rows-4'),
    gridRows5: () => clxs.push('grid-rows-5'),
    gridRows6: () => clxs.push('grid-rows-6'),
    gridRowsNone: () => clxs.push('grid-rows-none'),
    // grid-row, start/end
    row: () => clxs.push('row'),
    rowAuto: () => clxs.push('row-auto'),
    rowSpan1: () => clxs.push('row-span-1'),
    rowSpan2: () => clxs.push('row-span-2'),
    rowSpan3: () => clxs.push('row-span-3'),
    rowSpan4: () => clxs.push('row-span-4'),
    rowSpan5: () => clxs.push('row-span-5'),
    rowSpan6: () => clxs.push('row-span-6'),
    rowSpanFull: () => clxs.push('row-span-full'),
    rowStart1: () => clxs.push('row-start-1'),
    rowStart2: () => clxs.push('row-start-2'),
    rowStart3: () => clxs.push('row-start-3'),
    rowStart4: () => clxs.push('row-start-4'),
    rowStart5: () => clxs.push('row-start-5'),
    rowStart6: () => clxs.push('row-start-6'),
    rowStart7: () => clxs.push('row-start-7'),
    rowStartAuto: () => clxs.push('row-start-auto'),
    rowEnd1: () => clxs.push('row-end-1'),
    rowEnd2: () => clxs.push('row-end-2'),
    rowEnd3: () => clxs.push('row-end-3'),
    rowEnd4: () => clxs.push('row-end-4'),
    rowEnd5: () => clxs.push('row-end-5'),
    rowEnd6: () => clxs.push('row-end-6'),
    rowEnd7: () => clxs.push('row-end-7'),
    rowEndAuto: () => clxs.push('row-end-auto'),
    //grid-auto-flow
    gridFlowRow: () => clxs.push('grid-flow-row'),
    gridFlowCol: () => clxs.push('grid-flow-col'),
    gridFlowRowDense: () => clxs.push('grid-flow-row-dense'),
    gridFlowColDense: () => clxs.push('grid-flow-col-dense'),
    //grid-auto-columns
    autoColsAuto: () => clxs.push('auto-cols-auto'),
    autoColsMin: () => clxs.push('auto-cols-min'),
    autoColsMax: () => clxs.push('auto-cols-max'),
    autoColsFr: () => clxs.push('auto-cols-fr'),
    //grid-auto-rows
    autoRowsAuto: () => clxs.push('auto-rows-auto'),
    autoRowsMin: () => clxs.push('auto-rows-min'),
    autoRowsMax: () => clxs.push('auto-rows-max'),
    autoRowsFr: () => clxs.push('auto-rows-fr'),
    //gap

    // ===== Spacing ======
    // padding
    // margin
    mAuto: () => clxs.push('m-auto'),
    myAuto: () => clxs.push('my-auto'),
    mxAuto: () => clxs.push('mx-auto'),
    mrAuto: () => clxs.push('mr-auto'),
    mlAuto: () => clxs.push('ml-auto'),
    // space between

    // ==== Typography ====
    // text design system
    textD1: () => clxs.push('text-d1'),
    textD2: () => clxs.push('text-d2'),
    textD3: () => clxs.push('text-d3'),
    textD4: () => clxs.push('text-d4'),
    textD5: () => clxs.push('text-d5'),
    textD6: () => clxs.push('text-d6'),
    display1: () => clxs.push('text-d1'),
    diaplay2: () => clxs.push('text-d2'),
    display3: () => clxs.push('text-d3'),
    display4: () => clxs.push('text-d4'),
    display5: () => clxs.push('text-d5'),
    display6: () => clxs.push('text-d6'),
    display7: () => clxs.push('text-d7'),
    textH1: () => clxs.push('text-h1'),
    textH2: () => clxs.push('text-h2'),
    textH3: () => clxs.push('text-h3'),
    textH4: () => clxs.push('text-h4'),
    textH5: () => clxs.push('text-h5'),
    textH6: () => clxs.push('text-h6'),
    textSB: () => clxs.push('text-sBody'),
    textST: () => clxs.push('text-sTitle'),
    heading1: () => clxs.push('text-h1'),
    heading2: () => clxs.push('text-h2'),
    heading3: () => clxs.push('text-h3'),
    heading4: () => clxs.push('text-h4'),
    heading5: () => clxs.push('text-h5'),
    heading6: () => clxs.push('text-h6'),
    // text color
    textTransparent: () => clxs.push('text-transparent'),
    textCurrent: () => clxs.push('text-current'),
    textBlack: () => clxs.push('text-black'),
    textWhite: () => clxs.push('text-white'),
    textInfo: () => clxs.push('text-info'),
    textDanger: () => clxs.push('text-danger'),
    textWarning: () => clxs.push('text-warning'),
    textSuccess: () => clxs.push('text-success'),
    textPrimary: () => clxs.push('text-primary'),
    textSecondary: () => clxs.push('text-secondary'),
    textSecondary2: () => clxs.push('text-secondary2'),
    textGray100: () => clxs.push('text-gray-100'),
    textGray200: () => clxs.push('text-gray-200'),
    textGray300: () => clxs.push('text-gray-300'),
    textGray400: () => clxs.push('text-gray-400'),
    textGray500: () => clxs.push('text-gray-500'),
    textGray600: () => clxs.push('text-gray-600'),
    textGray700: () => clxs.push('text-gray-700'),
    //text opacity
    textOpacity0: () => clxs.push('text-opacity-0'),
    textOpacity5: () => clxs.push('text-opacity-5'),
    textOpacity10: () => clxs.push('text-opacity-10'),
    textOpacity20: () => clxs.push('text-opacity-20'),
    textOpacity25: () => clxs.push('text-opacity-25'),
    textOpacity30: () => clxs.push('text-opacity-30'),
    textOpacity40: () => clxs.push('text-opacity-40'),
    textOpacity50: () => clxs.push('text-opacity-50'),
    textOpacity60: () => clxs.push('text-opacity-60'),
    textOpacity70: () => clxs.push('text-opacity-70'),
    textOpacity75: () => clxs.push('text-opacity-75'),
    textOpacity80: () => clxs.push('text-opacity-80'),
    //font-family

    //font-size
    textXs: () => clxs.push('text-xs'),
    textSm: () => clxs.push('text-sm'),
    textBase: () => clxs.push('text-base'),
    textLg: () => clxs.push('text-lg'),
    textXl: () => clxs.push('text-xl'),
    // font-smoothing
    antialiased: () => clxs.push('antialiased'),
    subpixelAntialiased: () => clxs.push('subpixel-antialiased'),
    // font-style
    italic: () => clxs.push('italic'),
    notItalic: () => clxs.push('not-italic'),
    // font-weight
    fontThin: () => clxs.push('font-thin'),
    fontExtralight: () => clxs.push('font-extralight'),
    fontLight: () => clxs.push('font-light'),
    fontNormal: () => clxs.push('font-normal'),
    fontMedium: () => clxs.push('font-medium'),
    fontSemibold: () => clxs.push('font-semibold'),
    fontBold: () => clxs.push('font-bold'),
    fontExtrabold: () => clxs.push('font-extrabold'),
    fontBlack: () => clxs.push('font-black'),
    // font-variant-numeric
    normalNums: () => clxs.push('normal-nums'),
    oridnal: () => clxs.push('ordinal'),
    slashedZero: () => clxs.push('slashed-zero'),
    liningNums: () => clxs.push('lining-nums'),
    oldstyleNums: () => clxs.push('oldstyle-nums'),
    proportionalNums: () => clxs.push('proportional-nums'),
    tabularNums: () => clxs.push('tabular-nums'),
    diagonalFractions: () => clxs.push('diagonal-fractions'),
    stackedFractions: () => clxs.push('stack-fractions'),
    // letter-spacing
    trackingTighter: () => clxs.push('tracking-tighter'),
    trackingTight: () => clxs.push('tracking-tight'),
    trackingNormal: () => clxs.push('tracking-normal'),
    trackingWide: () => clxs.push('tracking-wide'),
    trackingWider: () => clxs.push('tracking-wider'),
    trackingWidest: () => clxs.push('tracking-widest'),
    // line-height
    leadingNone: () => clxs.push('leading-none'),
    leadingTight: () => clxs.push('leading-tight'),
    leadingSnug: () => clxs.push('leading-snug'),
    leadingNormal: () => clxs.push('leading-normal'),
    leadingRelaxed: () => clxs.push('leading-relaxed'),
    leadingLoose: () => clxs.push('leading-loose'),
    leading3: () => clxs.push('leading-3'),
    leading4: () => clxs.push('leading-4'),
    leading5: () => clxs.push('leading-5'),
    leading6: () => clxs.push('leading-6'),
    leading7: () => clxs.push('leading-7'),
    leading8: () => clxs.push('leading-8'),
    leading9: () => clxs.push('leading-9'),
    leading10: () => clxs.push('leading-10'),
    // list-style-type
    listNone: () => clxs.push('list-none'),
    listDisc: () => clxs.push('list-disc'),
    listDecimal: () => clxs.push('list-decimal'),
    // list-style-position
    listInside: () => clxs.push('list-inside'),
    listOutside: () => clxs.push('list-outside'),
    // ::placeholder color
    placeholderTransparent: () => clxs.push('placeholder-transparent'),
    placeholderCurrent: () => clxs.push('placeholder-current'),
    placeholderBlack: () => clxs.push('placeholder-black'),
    placeholderWhite: () => clxs.push('placeholder-white'),
    placeholderPrimary: () => clxs.push('placeholder-primary'),
    placeholderInfo: () => clxs.push('placeholder-info'),
    placeholderDanger: () => clxs.push('placeholder-danger'),
    placeholderWarning: () => clxs.push('placeholder-warning'),
    placeholderSuccess: () => clxs.push('placeholder-success'),
    placeholderGray100: () => clxs.push('placeholder-gray-100'),
    placeholderGray200: () => clxs.push('placeholder-gray-200'),
    placeholderGray300: () => clxs.push('placeholder-gray-300'),
    placeholderGray400: () => clxs.push('placeholder-gray-400'),
    placeholderGray500: () => clxs.push('placeholder-gray-500'),
    placeholderGray600: () => clxs.push('placeholder-gray-600'),
    placeholderGray700: () => clxs.push('placeholder-gray-700'),
    // ::placeholder opacity
    placeholderOpacity0: () => clxs.push('placeholder-opacity-0'),
    placeholderOpacity5: () => clxs.push('placeholder-opacity-5'),
    placeholderOpacity10: () => clxs.push('placeholder-opacity-10'),
    placeholderOpacity20: () => clxs.push('placeholder-opacity-20'),
    placeholderOpacity25: () => clxs.push('placeholder-opacity-25'),
    placeholderOpacity30: () => clxs.push('placeholder-opacity-30'),
    placeholderOpacity40: () => clxs.push('placeholder-opacity-40'),
    placeholderOpacity50: () => clxs.push('placeholder-opacity-50'),
    placeholderOpacity60: () => clxs.push('placeholder-opacity-60'),
    placeholderOpacity70: () => clxs.push('placeholder-opacity-70'),
    placeholderOpacity75: () => clxs.push('placeholder-opacity-75'),
    placeholderOpacity80: () => clxs.push('placeholder-opacity-80'),
    placeholderOpacity90: () => clxs.push('placeholder-opacity-90'),
    placeholderOpacity95: () => clxs.push('placeholder-opacity-95'),
    placeholderOpacity100: () => clxs.push('placeholder-opacity-100'),
    // text-align
    textLeft: () => clxs.push('text-left'),
    textCenter: () => clxs.push('text-center'),
    textRight: () => clxs.push('text-right'),
    textJustify: () => clxs.push('text-justify'),
    // text-decoration
    underline: () => clxs.push('underline'),
    lineThrough: () => clxs.push('line-through'),
    noUnderline: () => clxs.push('no-underline'),
    // text-transform
    uppercase: () => clxs.push('uppercase'),
    lowercase: () => clxs.push('lowercase'),
    capitalize: () => clxs.push('capitalize'),
    normalCase: () => clxs.push('normal-case'),
    // text-overflow
    truncate: () => clxs.push('truncate'),
    overflowEllipsis: () => clxs.push('overflow-ellipsis'),
    overflowClip: () => clxs.push('overflow-clip'),
    // vertical-align
    alignBaseline: () => clxs.push('align-baseline'),
    alignTop: () => clxs.push('align-top'),
    alignMiddle: () => clxs.push('align-middle'),
    alignBottom: () => clxs.push('align-bottom'),
    alignTextTop: () => clxs.push('align-text-top'),
    alignTextBottom: () => clxs.push('align-text-bottom'),
    //white-space
    whitespaceNormal: () => clxs.push('whitespace-normal'),
    whitespaceNowrap: () => clxs.push('whitespace-nowrap'),
    whitespacePre: () => clxs.push('whitespace-pre'),
    whitespacePreLine: () => clxs.push('whitespace-pre-line'),
    whitespacePreWrap: () => clxs.push('whitespace-pre-wrap'),
    // word-break
    breakNormal: () => clxs.push('break-normal'),
    breakWords: () => clxs.push('break-words'),
    breakAll: () => clxs.push('break-all'),
    keepAll: () => clxs.push('keep-all'),
    // ==== Borders =====
    //border-radius
    roundedNone: () => clxs.push('rounded-none'),
    roundedSm: () => clxs.push('rounded-sm'),
    rounded: () => clxs.push('rounded'),
    roundedMd: () => clxs.push('rounded-md'),
    roundedLg: () => clxs.push('rounded-lg'),
    roundedXl: () => clxs.push('rounded-xl'),
    rounded2xl: () => clxs.push('rounded-2xl'),
    rounded3xl: () => clxs.push('rounded-3xl'),
    roundedFull: () => clxs.push('rounded-full'),
    roundedTNone: () => clxs.push('rounded-t-none'),
    roundedRNone: () => clxs.push('rounded-r-none'),
    roundedBNone: () => clxs.push('rounded-b-none'),
    roundedLNone: () => clxs.push('rounded-l-none'),
    roundedTSm: () => clxs.push('rounded-t-sm'),
    roundedRSm: () => clxs.push('rounded-r-sm'),
    roundedBSm: () => clxs.push('rounded-b-sm'),
    roundedLSm: () => clxs.push('rounded-l-sm'),
    roundedT: () => clxs.push('rounded-t'),
    roundedR: () => clxs.push('rounded-r'),
    roundedB: () => clxs.push('rounded-b'),
    roundedL: () => clxs.push('rounded-l'),
    roundedTMd: () => clxs.push('rounded-t-md'),
    roundedRMd: () => clxs.push('rounded-r-md'),
    roundedBMd: () => clxs.push('rounded-b-md'),
    roundedLMd: () => clxs.push('rounded-l-md'),
    roundedTLg: () => clxs.push('rounded-t-lg'),
    roundedRLg: () => clxs.push('rounded-r-lg'),
    roundedBLg: () => clxs.push('rounded-b-lg'),
    roundedLLg: () => clxs.push('rounded-l-lg'),
    roundedTXl: () => clxs.push('rounded-t-xl'),
    roundedRXl: () => clxs.push('rounded-r-xl'),
    roundedBXl: () => clxs.push('rounded-b-xl'),
    roundedLXl: () => clxs.push('rounded-l-xl'),
    roundedT2xl: () => clxs.push('rounded-t-2xl'),
    roundedR2xl: () => clxs.push('rounded-r-2xl'),
    roundedB2xl: () => clxs.push('rounded-b-2xl'),
    roundedL2xl: () => clxs.push('rounded-l-2xl'),
    roundedT3xl: () => clxs.push('rounded-t-3xl'),
    roundedR3xl: () => clxs.push('rounded-r-3xl'),
    roundedB3xl: () => clxs.push('rounded-b-3xl'),
    roundedL3xl: () => clxs.push('rounded-l-3xl'),
    roundedTFull: () => clxs.push('rounded-t-full'),
    roundedRFull: () => clxs.push('rounded-r-full'),
    roundedBFull: () => clxs.push('rounded-b-full'),
    roundedLFull: () => clxs.push('rounded-l-full'),
    roundedTlNone: () => clxs.push('rounded-tl-none'),
    roundedTrNone: () => clxs.push('rounded-tr-none'),
    roundedBrNone: () => clxs.push('rounded-br-none'),
    roundedBlNone: () => clxs.push('rounded-bl-none'),
    roundedTlSm: () => clxs.push('rounded-tl-sm'),
    roundedTrSm: () => clxs.push('rounded-tr-sm'),
    roundedBrSm: () => clxs.push('rounded-br-sm'),
    roundedBlSm: () => clxs.push('rounded-bl-sm'),
    roundedTl: () => clxs.push('rounded-tl'),
    roundedTr: () => clxs.push('rounded-tr'),
    roundedBr: () => clxs.push('rounded-br'),
    roundedBl: () => clxs.push('rounded-bl'),
    roundedTlMd: () => clxs.push('rounded-tl-md'),
    roundedTrMd: () => clxs.push('rounded-tr-md'),
    roundedBrMd: () => clxs.push('rounded-br-md'),
    roundedBlMd: () => clxs.push('rounded-bl-md'),
    roundedTlLg: () => clxs.push('rounded-tl-lg'),
    roundedTrLg: () => clxs.push('rounded-tr-lg'),
    roundedBrLg: () => clxs.push('rounded-br-lg'),
    roundedBlLg: () => clxs.push('rounded-bl-lg'),
    roundedTlXl: () => clxs.push('rounded-tl-xl'),
    roundedTrXl: () => clxs.push('rounded-tr-xl'),
    roundedBrXl: () => clxs.push('rounded-br-xl'),
    roundedBlXl: () => clxs.push('rounded-bl-xl'),
    roundedTl2xl: () => clxs.push('rounded-tl-2xl'),
    roundedTr2xl: () => clxs.push('rounded-tr-2xl'),
    roundedBr2xl: () => clxs.push('rounded-br-2xl'),
    roundedBl2xl: () => clxs.push('rounded-bl-2xl'),
    roundedTl3xl: () => clxs.push('rounded-tl-3xl'),
    roundedTr3xl: () => clxs.push('rounded-tr-3xl'),
    roundedBr3xl: () => clxs.push('rounded-br-3xl'),
    roundedBl3xl: () => clxs.push('rounded-bl-3xl'),
    roundedTlFull: () => clxs.push('rounded-tl-full'),
    roundedTrFull: () => clxs.push('rounded-tr-full'),
    roundedBrFull: () => clxs.push('rounded-br-full'),
    roundedBlFull: () => clxs.push('rounded-bl-full'),
    //border-width
    border: () => clxs.push('border'),
    border0: () => clxs.push('border0'),
    border1: () => clxs.push('border-1'),
    border2: () => clxs.push('border-2'),
    border3: () => clxs.push('border-3'),
    border4: () => clxs.push('border-4'),
    border8: () => clxs.push('border-8'),
    borderT: () => clxs.push('border-t'),
    borderT0: () => clxs.push('border-t-0'),
    borderT1: () => clxs.push('border-t-1'),
    borderT2: () => clxs.push('border-t-2'),
    borderT3: () => clxs.push('border-t-3'),
    borderT4: () => clxs.push('border-t-4'),
    borderT8: () => clxs.push('border-t-8'),
    borderR: () => clxs.push('border-r'),
    borderR0: () => clxs.push('border-r-0'),
    borderR1: () => clxs.push('border-r-1'),
    borderR2: () => clxs.push('border-r-2'),
    borderR3: () => clxs.push('border-r-3'),
    borderR4: () => clxs.push('border-r-4'),
    borderR8: () => clxs.push('border-r-8'),
    borderB: () => clxs.push('border-b'),
    borderB0: () => clxs.push('border-b-0'),
    borderB1: () => clxs.push('border-b-1'),
    borderB2: () => clxs.push('border-b-2'),
    borderB3: () => clxs.push('border-b-3'),
    borderB4: () => clxs.push('border-b-4'),
    borderB8: () => clxs.push('border-b-8'),
    borderL: () => clxs.push('border-l'),
    borderL0: () => clxs.push('border-l-0'),
    borderL1: () => clxs.push('border-l-1'),
    borderL2: () => clxs.push('border-l-2'),
    borderL3: () => clxs.push('border-l-3'),
    borderL4: () => clxs.push('border-l-4'),
    borderL8: () => clxs.push('border-l-8'),
    //border-color
    borderTransparent: () => clxs.push('border-transparent'),
    borderCurrent: () => clxs.push('border-current'),
    borderBlack: () => clxs.push('border-black'),
    borderWhite: () => clxs.push('border-white'),
    borderPrimary: () => clxs.push('border-primary'),
    borderInfo: () => clxs.push('border-info'),
    borderDanger: () => clxs.push('border-danger'),
    borderWarning: () => clxs.push('border-warning'),
    borderSuccess: () => clxs.push('border-success'),
    borderSecondary2: () => clxs.push('border-secondary2'),
    borderGray100: () => clxs.push('border-gray-100'),
    borderGray200: () => clxs.push('border-gray-200'),
    borderGray300: () => clxs.push('border-gray-300'),
    borderGray400: () => clxs.push('border-gray-400'),
    borderGray500: () => clxs.push('border-gray-500'),
    borderGray600: () => clxs.push('border-gray-600'),
    borderGray700: () => clxs.push('border-gray-700'),
    // border opacity
    borderOpacity0: () => clxs.push('border-opacity-0'),
    borderOpacity5: () => clxs.push('border-opacity-5'),
    borderOpacity10: () => clxs.push('border-opacity-10'),
    borderOpacity25: () => clxs.push('border-opacity-25'),
    borderOpacity30: () => clxs.push('border-opacity-30'),
    borderOpacity40: () => clxs.push('border-opacity-40'),
    borderOpacity50: () => clxs.push('border-opacity-50'),
    borderOpacity60: () => clxs.push('border-opacity-60'),
    borderOpacity70: () => clxs.push('border-opacity-70'),
    borderOpacity75: () => clxs.push('border-opacity-75'),
    borderOpacity80: () => clxs.push('border-opacity-80'),
    borderOpacity90: () => clxs.push('border-opacity-90'),
    borderOpacity95: () => clxs.push('border-opacity-95'),
    borderOpacity100: () => clxs.push('border-opacity-100'),
    // border-style
    borderSolid: () => clxs.push('border-solid'),
    borderDashed: () => clxs.push('border-dashed'),
    borderDotted: () => clxs.push('border-dotted'),
    borderDouble: () => clxs.push('border-double'),
    borderNone: () => clxs.push('border-none'),
    // divide with
    // divide color
    // divide opacity
    // ring width
    ring0: () => clxs.push('ring-0'),
    ring1: () => clxs.push('ring-1'),
    ring2: () => clxs.push('ring-2'),
    ring4: () => clxs.push('ring-4'),
    ring8: () => clxs.push('ring-8'),
    ring: () => clxs.push('ring'),
    ringInset: () => clxs.push('ring-inset'),
    // ring color
    ringTransparent: () => clxs.push('ring-transparent'),
    ringCurrent: () => clxs.push('ring-current'),
    ringBlack: () => clxs.push('ring-black'),
    ringWhite: () => clxs.push('ring-white'),
    ringPrimary: () => clxs.push('ring-primary'),
    ringInfo: () => clxs.push('ring-info'),
    ringDanger: () => clxs.push('ring-danger'),
    ringWarning: () => clxs.push('ring-warning'),
    ringSuccess: () => clxs.push('ring-success'),
    ringGray100: () => clxs.push('ring-gray-100'),
    ringGray200: () => clxs.push('ring-gray-200'),
    ringGray300: () => clxs.push('ring-gray-300'),
    ringGray400: () => clxs.push('ring-gray-400'),
    ringGray500: () => clxs.push('ring-gray-500'),
    ringGray600: () => clxs.push('ring-gray-600'),
    ringGray700: () => clxs.push('ring-gray-700'),
    // ring opacity
    ringOpacity0: () => clxs.push('ring-opacity-0'),
    ringOpacity5: () => clxs.push('ring-opacity-5'),
    ringOpacity10: () => clxs.push('ring-opacity-10'),
    ringOpacity20: () => clxs.push('ring-opacity-20'),
    ringOpacity25: () => clxs.push('ring-opacity-25'),
    ringOpacity30: () => clxs.push('ring-opacity-30'),
    ringOpacity40: () => clxs.push('ring-opacity-40'),
    ringOpacity50: () => clxs.push('ring-opacity-50'),
    ringOpacity60: () => clxs.push('ring-opacity-60'),
    ringOpacity70: () => clxs.push('ring-opacity-70'),
    ringOpacity75: () => clxs.push('ring-opacity-75'),
    ringOpacity80: () => clxs.push('ring-opacity-80'),
    ringOpacity90: () => clxs.push('ring-opacity-90'),
    ringOpacity95: () => clxs.push('ring-opacity-95'),
    ringOpacity100: () => clxs.push('ring-opacity-100'),
    // ring offset width
    ringOffset0: () => clxs.push('ring-offset-0'),
    ringOffset1: () => clxs.push('ring-offset-1'),
    ringOffset2: () => clxs.push('ring-offset-2'),
    ringOffset4: () => clxs.push('ring-offset-4'),
    ringOffset8: () => clxs.push('ring-offset-8'),
    // ring offset color
    ringOffsetTransparent: () => clxs.push('ring-offset-transparent'),
    ringOffsetCurrent: () => clxs.push('ring-offset-current'),
    ringOffsetBlack: () => clxs.push('ring-offset-black'),
    ringOffsetWhite: () => clxs.push('ring-offset-white'),
    ringOffsetPrimary: () => clxs.push('ring-offset-primary'),
    ringOffsetInfo: () => clxs.push('ring-offset-info'),
    ringOffsetDanger: () => clxs.push('ring-offset-danger'),
    ringOffsetWarning: () => clxs.push('ring-offset-warning'),
    ringOffsetSuccess: () => clxs.push('ring-offset-success'),
    ringOffsetGray100: () => clxs.push('ring-offset-gray-100'),
    ringOffsetGray200: () => clxs.push('ring-offset-gray-200'),
    ringOffsetGray300: () => clxs.push('ring-offset-gray-300'),
    ringOffsetGray400: () => clxs.push('ring-offset-gray-400'),
    ringOffsetGray500: () => clxs.push('ring-offset-gray-500'),
    ringOffsetGray600: () => clxs.push('ring-offset-gray-600'),
    ringOffsetGray700: () => clxs.push('ring-offset-gray-700'),

    // ==== Tables ====
    // border-collapse
    borderCollapse: () => clxs.push('border-collapse'),
    borderSeparate: () => clxs.push('border-separate'),
    // table-layout
    tableAuto: () => clxs.push('table-auto'),
    tableFixed: () => clxs.push('table-fixed'),

    // ==== Transforms ====
    // scale
    // rotate
    rotate0: () => clxs.push('rotate-0'),
    rotate1: () => clxs.push('rotate-1'),
    rotate2: () => clxs.push('rotate-2'),
    rotate3: () => clxs.push('rotate-3'),
    rotate6: () => clxs.push('rotate-6'),
    rotate12: () => clxs.push('rotate-12'),
    rotate45: () => clxs.push('rotate-45'),
    rotate90: () => clxs.push('rotate-90'),
    rotate180: () => clxs.push('rotate-180'),
    _rotate180: () => clxs.push('-rotate-180'),
    _rotate90: () => clxs.push('-rotate-90'),
    _rotate45: () => clxs.push('-rotate-45'),
    _rotate12: () => clxs.push('-rotate-12'),
    _rotate6: () => clxs.push('-rotate-6'),
    _rotate3: () => clxs.push('-rotate-3'),
    _rotate2: () => clxs.push('-rotate-2'),
    _rotate1: () => clxs.push('-rotate-1'),
    // translate
    translateX0: () => clxs.push('translate-x-0'),
    translateX1over2: () => clxs.push('translate-x-1/2'),
    translateXFull: () => clxs.push('translate-x-full'),
    _translateX1over2: () => clxs.push('-translate-x-1/2'),
    _translateXFull: () => clxs.push('-translate-x-full'),
    translateY0: () => clxs.push('translate-y-0'),
    translateY1over2: () => clxs.push('translate-y-1/2'),
    translateYFull: () => clxs.push('translate-y-full'),
    _translateY1over2: () => clxs.push('-translate-y-1/2'),
    _translateYFull: () => clxs.push('-translate-y-full'),
    // skew
    // transform-origin
    // transfrom
    transform: () => clxs.push('transform'),
    transformGPU: () => clxs.push('transform-gpu'),
    transformNone: () => clxs.push('transform-none'),

    // ==== Miscellaneous ====
    // box-shadow
    shadowSm: () => clxs.push('shadow-sm'),
    shadow: () => clxs.push('shadow'),
    shadowMd: () => clxs.push('shadow-md'),
    shadowLg: () => clxs.push('shadow-lg'),
    shadowXl: () => clxs.push('shadow-xl'),
    shadow2xl: () => clxs.push('shadow-2xl'),
    shadowInner: () => clxs.push('shadow-inner'),
    shadowNone: () => clxs.push('shadow-none '),
    // opacity
    opacity0: () => clxs.push('opacity-0'),
    opacity5: () => clxs.push('opacity-5'),
    opacity10: () => clxs.push('opacity-10'),
    opacity20: () => clxs.push('opacity-20'),
    opacity25: () => clxs.push('opacity-25'),
    opacity30: () => clxs.push('opacity-30'),
    opacity40: () => clxs.push('opacity-40'),
    opacity50: () => clxs.push('opacity-50'),
    opacity60: () => clxs.push('opacity-60'),
    opacity70: () => clxs.push('opacity-70'),
    opacity75: () => clxs.push('opacity-75'),
    opacity80: () => clxs.push('opacity-80'),
    opacity90: () => clxs.push('opacity-90'),
    opacity95: () => clxs.push('opacity-95'),
    opacity100: () => clxs.push('opacity-100'),
    // fill
    fillCurrent: () => clxs.push('fill-current'),
    // stroke
    strokeCurrent: () => clxs.push('stroke-current'),
    // stroke-width
    stroke0: () => clxs.push('stroke-0'),
    stroke1: () => clxs.push('stroke-1'),
    stroke2: () => clxs.push('stroke-2'),

    // ==== FlexBox ====
    // display
    flex: () => clxs.push('flex'),
    // flex-direction
    flexRow: () => clxs.push('flex-row'),
    flexRowReverse: () => clxs.push('flex-row-reverse'),
    flexCol: () => clxs.push('flex-col'),
    flexColReverse: () => clxs.push('flex-col-reverse'),
    // flex-wrap
    flexWrap: () => clxs.push('flex-wrap'),
    flexWrapReverse: () => clxs.push('flex-wrap-reverse'),
    flexNowrap: () => clxs.push('flex-nowrap'),
    // flex
    flex1: () => clxs.push('flex-1'),
    flexAuto: () => clxs.push('flex-auto'),
    flexInitial: () => clxs.push('flex-initial'),
    flexNone: () => clxs.push('flex-none'),
    // flex-grow
    flexGrow: () => clxs.push('flex-grow'),
    flexGrow0: () => clxs.push('flex-grow-0'),
    // flex-shrink
    flexShrink: () => clxs.push('flex-shrink'),
    flexShrink0: () => clxs.push('flex-shrink-0'),
    // order
    orderFirst: () => clxs.push('order-first'),
    orderLast: () => clxs.push('order-last'),
    orderNone: () => clxs.push('order-none'),
    order1: () => clxs.push('order-1'),
    order2: () => clxs.push('order-2'),
    order3: () => clxs.push('order-3'),
    order4: () => clxs.push('order-4'),
    order5: () => clxs.push('order-5'),
    order6: () => clxs.push('order-6'),
    order7: () => clxs.push('order-7'),
    order8: () => clxs.push('order-8'),
    order9: () => clxs.push('order-9'),
    order10: () => clxs.push('order-10'),
    order11: () => clxs.push('order-11'),
    order12: () => clxs.push('order-12'),

    // ==== Box Alignment ====
    // justify-content
    justifyStart: () => clxs.push('justify-start'),
    justifyEnd: () => clxs.push('justify-end'),
    justifyCenter: () => clxs.push('justify-center'),
    justifyBetween: () => clxs.push('justify-between'),
    justifyAround: () => clxs.push('justify-around'),
    justifyEvenly: () => clxs.push('justify-evenly'),
    // justify-items
    justifyItemsAuto: () => clxs.push('justify-items-auto'),
    justifyItemsStart: () => clxs.push('justify-items-start'),
    justifyItemsEnd: () => clxs.push('justify-items-end'),
    justifyItemsCenter: () => clxs.push('justify-items-center'),
    justifyItemsStretch: () => clxs.push('justify-items-stretch'),
    // justify-self
    justifySelfAuto: () => clxs.push('justify-self-auto'),
    justifySelfStart: () => clxs.push('justify-self-start'),
    justifySelfEnd: () => clxs.push('justify-self-end'),
    justifySelfCenter: () => clxs.push('justify-self-center'),
    justifySelfStretch: () => clxs.push('justify-self-stretch'),
    // align-content
    contentStart: () => clxs.push('content-start'),
    contentCenter: () => clxs.push('content-center'),
    contentEnd: () => clxs.push('content-end'),
    contentBetween: () => clxs.push('content-between'),
    contentAround: () => clxs.push('content-around'),
    contentEvenly: () => clxs.push('content-evenly'),
    // align-items
    itemsStretch: () => clxs.push('items-stretch'),
    itemsStart: () => clxs.push('items-start'),
    itemsCenter: () => clxs.push('items-center'),
    itemsEnd: () => clxs.push('items-end'),
    itemsBaseline: () => clxs.push('items-baseline'),
    // align-self
    selfAuto: () => clxs.push('self-auto'),
    selfStart: () => clxs.push('self-start'),
    selfEnd: () => clxs.push('self-end'),
    selfCenter: () => clxs.push('self-center'),
    selfStretch: () => clxs.push('self-stretch'),
    // place-content
    placeContentCenter: () => clxs.push('place-content-center'),
    placeContentStart: () => clxs.push('place-content-start'),
    placeContentEnd: () => clxs.push('place-content-end'),
    placeContentBetween: () => clxs.push('place-content-between'),
    placeContentAround: () => clxs.push('place-content-around'),
    placeContentEvenly: () => clxs.push('place-content-evenly'),
    placeContentStretch: () => clxs.push('place-content-stretch'),
    // place-items
    placeItemsAuto: () => clxs.push('place-items-auto'),
    placeItemsStart: () => clxs.push('place-items-start'),
    placeItemsEnd: () => clxs.push('place-items-end'),
    placeItemsCenter: () => clxs.push('place-items-center'),
    placeItemsStretch: () => clxs.push('place-items-stretch'),
    // place-self
    placeSelfAuto: () => clxs.push('place-self-auto'),
    placeSelfStart: () => clxs.push('place-self-start'),
    placeSelfEnd: () => clxs.push('place-self-end'),
    placeSelfCenter: () => clxs.push('place-self-center'),
    placeSelfStretch: () => clxs.push('place-self-stretch'),

    // ==== Sizing ====
    // width
    w0: () => clxs.push('w-0'),
    wAuto: () => clxs.push('w-auto'),
    wPx: () => clxs.push('w-px'),
    wFull: () => clxs.push('w-full'),
    wScreen: () => clxs.push('w-screen'),
    wMin: () => clxs.push('w-min'),
    wMax: () => clxs.push('w-max'),
    // min-width
    minW0: () => clxs.push('min-w-0'),
    minWFull: () => clxs.push('min-w-full'),
    minWMin: () => clxs.push('min-w-min'),
    minWMax: () => clxs.push('min-w-max'),
    // max-width
    maxW0: () => clxs.push('max-w-0'),
    maxWNone: () => clxs.push('max-w-none'),
    maxWXs: () => clxs.push('max-w-xs'),
    maxWSm: () => clxs.push('max-w-sm'),
    maxWMd: () => clxs.push('max-w-md'),
    maxWLg: () => clxs.push('max-w-lg'),
    maxWXl: () => clxs.push('max-w-xl'),
    maxWFull: () => clxs.push('max-w-full'),
    maxWMin: () => clxs.push('max-w-min'),
    maxWMax: () => clxs.push('max-w-max'),
    maxWPose: () => clxs.push('max-w-pose'),
    maxWScreenSm: () => clxs.push('max-w-screen-sm'),
    maxWScreenMd: () => clxs.push('max-w-screen-md'),
    maxWScreenLg: () => clxs.push('max-w-screen-lg'),
    maxWScreenXl: () => clxs.push('max-w-screen-xl'),
    // height
    h0: () => clxs.push('h-0'),
    hAuto: () => clxs.push('h-auto'),
    hPx: () => clxs.push('h-px'),
    hFull: () => clxs.push('h-full'),
    hScreen: () => clxs.push('h-screen'),
    // min-height
    minH0: () => clxs.push('min-h-0'),
    minHFull: () => clxs.push('min-h-full'),
    minHScreen: () => clxs.push('min-h-screen'),
    // max-height
    maxH0: () => clxs.push('max-h-0'),
    maxHPx: () => clxs.push('max-h-px'),
    maxHFull: () => clxs.push('max-h-full'),
    maxHScreen: () => clxs.push('max-h-screen'),

    // ==== Backgrounds ====
    // background-attachment
    bgFixed: () => clxs.push('bg-fixed'),
    bgLocal: () => clxs.push('bg-local'),
    bgScroll: () => clxs.push('bg-scroll'),
    // background-clip
    bgClipBorder: () => clxs.push('bg-clip-border'),
    bgClipPadding: () => clxs.push('bg-clip-padding'),
    bgClipContent: () => clxs.push('bg-clip-Content'),
    bgClipText: () => clxs.push('bg-clip-text'),
    // background-color
    bgTransparent: () => clxs.push('bg-transparent'),
    bgCurrent: () => clxs.push('bg-current'),
    bgGray100: () => clxs.push('bg-gray-100'),
    bgGray200: () => clxs.push('bg-gray-200'),
    bgGray300: () => clxs.push('bg-gray-300'),
    bgGray400: () => clxs.push('bg-gray-400'),
    bgGray500: () => clxs.push('bg-gray-500'),
    bgGray600: () => clxs.push('bg-gray-600'),
    bgGray700: () => clxs.push('bg-gray-700'),
    bgPrimary: () => clxs.push('bg-primary'),
    bgPrimaryLight: () => clxs.push('bg-primary-light'),
    bgSecondary: () => clxs.push('bg-secondary'),
    bgSecondary2: () => clxs.push('bg-secondary2'),
    bgInfo: () => clxs.push('bg-info'),
    bgInfoLight: () => clxs.push('bg-info-light'),
    bgSuccess: () => clxs.push('bg-success'),
    bgSuccessLight: () => clxs.push('bg-success-light'),
    bgDanger: () => clxs.push('bg-danger'),
    bgDangerLight: () => clxs.push('bg-danger-light'),
    bgWarning: () => clxs.push('bg-warning'),
    bgBlack: () => clxs.push('bg-black'),
    bgWhite: () => clxs.push('bg-white'),
    // background opacity
    bgOpacity0: () => clxs.push('bg-opacity-0'),
    bgOpacity5: () => clxs.push('bg-opacity-5'),
    bgOpacity10: () => clxs.push('bg-opacity-10'),
    bgOpacity20: () => clxs.push('bg-opacity-20'),
    bgOpacity25: () => clxs.push('bg-opacity-25'),
    bgOpacity30: () => clxs.push('bg-opacity-30'),
    bgOpacity40: () => clxs.push('bg-opacity-40'),
    bgOpacity50: () => clxs.push('bg-opacity-50'),
    bgOpacity60: () => clxs.push('bg-opacity-60'),
    bgOpacity70: () => clxs.push('bg-opacity-70'),
    bgOpacity75: () => clxs.push('bg-opacity-75'),
    bgOpacity80: () => clxs.push('bg-opacity-80'),
    bgOpacity90: () => clxs.push('bg-opacity-90'),
    bgOpacity95: () => clxs.push('bg-opacity-95'),
    bgOpacity100: () => clxs.push('bg-opacity-100'),
    // background-position
    bgBottom: () => clxs.push('bg-bottom'),
    bgCenter: () => clxs.push('bg-center'),
    bgLeft: () => clxs.push('bg-left'),
    bgLeftBottom: () => clxs.push('bg-left-bottom'),
    bgLeftTop: () => clxs.push('bg-left-top'),
    bgRight: () => clxs.push('bg-right'),
    bgRightBottom: () => clxs.push('bg-right-bottom'),
    bgRightTop: () => clxs.push('bg-right-top'),
    bgTop: () => clxs.push('bg-top'),
    // background-repeat
    bgRepeat: () => clxs.push('bg-repeat'),
    bgNoRepeat: () => clxs.push('bg-no-repeat'),
    bgRepeatX: () => clxs.push('bg-repeat-x'),
    bgRepeatY: () => clxs.push('bg-repeat-y'),
    bgRepeatRound: () => clxs.push('bg-repeat-round'),
    bgRepeatSpace: () => clxs.push('bg-repeat-space'),
    // background-size
    bgAuto: () => clxs.push('bg-auto'),
    bgCover: () => clxs.push('bg-cover'),
    bgContain: () => clxs.push('bg-contain'),
    // background-image
    bgNone: () => clxs.push('bg-none'),
    bgGradientToT: () => clxs.push('bg-gradient-to-t'),
    bgGradientToTr: () => clxs.push('bg-gradient-to-tr'),
    bgGradientToR: () => clxs.push('bg-gradient-to-r'),
    bgGradientToBr: () => clxs.push('bg-gradient-to-br'),
    bgGradientToB: () => clxs.push('bg-gradient-to-b'),
    bgGradientToBl: () => clxs.push('bg-gradient-to-bl'),
    bgGradientToL: () => clxs.push('bg-gradient-to-l'),
    bgGradientToTl: () => clxs.push('bg-gradient-to-tl'),
    // gradient color

    // ==== Transitions and Animation ====
    // transition-property
    transition: () => clxs.push('transition'),
    transitionNone: () => clxs.push('transition-none'),
    transitionAll: () => clxs.push('transition-all'),
    transitionColors: () => clxs.push('transition-colors'),
    transitionOpacity: () => clxs.push('transition-opacity'),
    transitionShadow: () => clxs.push('transition-shadow'),
    transitionTransform: () => clxs.push('transition-transform'),
    // transition-duration
    // transition-timing-function
    // transition-delay
    // animation
    animateNone: () => clxs.push('animate-none'),
    animateSpin: () => clxs.push('animate-spin'),
    animatePing: () => clxs.push('animate-ping'),
    animatePulse: () => clxs.push('animate-pulse'),
    animateBount: () => clxs.push('animate-bounce'),

    // ==== Interactivity ====
    // appearance
    appearanceNone: () => clxs.push('appearance-none'),
    // cursor
    cursorAuto: () => clxs.push('cursor-auto'),
    cursorDefault: () => clxs.push('cursor-default'),
    cursorPointer: () => clxs.push('cursor-pointer'),
    cursorWait: () => clxs.push('cursor-wait'),
    cursorText: () => clxs.push('cursor-text'),
    cursorMove: () => clxs.push('cursor-move'),
    cursorNotAllowed: () => clxs.push('cursor-not-allowed'),
    // outline
    outlineNone: () => clxs.push('outline-none'),
    outlineWhite: () => clxs.push('outline-white'),
    outlineBlack: () => clxs.push('outline-black'),
    // pointer-events
    pointerEventsNone: () => clxs.push('pointerEventsNone'),
    pointerEventsAuto: () => clxs.push('pointerEventsAuto'),
    // resize
    resizeNone: () => clxs.push('resize-none'),
    resizeY: () => clxs.push('resize-y'),
    resizeX: () => clxs.push('resize-x'),
    resize: () => clxs.push('resize'),
    // user-select
    selectNone: () => clxs.push('select-none'),
    selectText: () => clxs.push('select-text'),
    selectAll: () => clxs.push('select-all'),
    selectAuto: () => clxs.push('select-auto'),
    // accessibility
    srOnly: () => clxs.push('sr-only'),
    notSrOnly: () => clxs.push('not-sr-only'),
  }
  const others = {}
  for (const key in props) {
    const prop = props[key]
    const func = map[key]
    if (_.isFunction(func) && prop) {
      func(prop)
      continue
    }
    if (!prop) continue

    if (_.startsWith(key, 'gap')) {
      if (addByPrefix(props, styles, key, 'gap', (n) => ({ gap: n }))) continue
      if (addByPrefix(props, styles, key, 'gapX', (n) => ({ columnGap: n }))) continue
      if (addByPrefix(props, styles, key, 'gapY', (n) => ({ rowGap: n }))) continue
    }
    if (_.startsWith(key, 'm')) {
      if (addByPrefix(props, styles, key, 'm', (n) => ({ margin: n }))) continue
      if (addByPrefix(props, styles, key, 'mt', (n) => ({ marginTop: n }))) continue
      if (addByPrefix(props, styles, key, 'mb', (n) => ({ marginBottom: n }))) continue
      if (addByPrefix(props, styles, key, 'ml', (n) => ({ marginLeft: n }))) continue
      if (addByPrefix(props, styles, key, 'mr', (n) => ({ marginRight: n }))) continue
      if (addByPrefix(props, styles, key, 'mx', (n) => ({ marginLeft: n, marginRight: n }))) continue
      if (addByPrefix(props, styles, key, 'my', (n) => ({ marginTop: n, marginBottom: n }))) continue
      if (addByPrefix(props, styles, key, 'maxW', (n) => ({ maxWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'maxH', (n) => ({ maxHeight: n }))) continue
      if (addByPrefix(props, styles, key, 'minW', (n) => ({ minWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'minH', (n) => ({ minHeight: n }))) continue
    }
    if (_.startsWith(key, 'p')) {
      if (addByPrefix(props, styles, key, 'p', (n) => ({ padding: n }))) continue
      if (addByPrefix(props, styles, key, 'pt', (n) => ({ paddingTop: n }))) continue
      if (addByPrefix(props, styles, key, 'pb', (n) => ({ paddingBottom: n }))) continue
      if (addByPrefix(props, styles, key, 'pl', (n) => ({ paddingLeft: n }))) continue
      if (addByPrefix(props, styles, key, 'pr', (n) => ({ paddingRight: n }))) continue
      if (addByPrefix(props, styles, key, 'px', (n) => ({ paddingLeft: n, paddingRight: n }))) continue
      if (addByPrefix(props, styles, key, 'py', (n) => ({ paddingTop: n, paddingBottom: n }))) continue
    }
    if (addByPrefix(props, styles, key, 'z', (n) => ({ zIndex: n }))) continue
    if (addByPrefix(props, styles, key, 'left', (n) => ({ left: n }))) continue
    if (addByPrefix(props, styles, key, 'right', (n) => ({ right: n }))) continue
    if (addByPrefix(props, styles, key, 'top', (n) => ({ top: n }))) continue
    if (addByPrefix(props, styles, key, 'bottom', (n) => ({ bottom: n }))) continue
    if (addByPrefix(props, styles, key, 'w', (n) => ({ width: n }))) continue
    if (addByPrefix(props, styles, key, 'h', (n) => ({ height: n }))) continue
    if (addByPrefix(props, styles, key, 'fontSize', (n) => ({ fontSize: n }))) continue
    if (_.startsWith(key, 'rounded')) {
      if (addByPrefix(props, styles, key, 'rounded', (n) => ({ borderRadius: n }))) continue
      if (
        addByPrefix(props, styles, key, 'roundedT', (n) => ({
          borderTopLeftRadius: n,
          borderTopRightRadius: n,
        }))
      )
        continue
      if (
        addByPrefix(props, styles, key, 'roundedB', (n) => ({
          borderBottomLeftRadius: n,
          borderBottomRightRadius: n,
        }))
      )
        continue
      if (
        addByPrefix(props, styles, key, 'roundedL', (n) => ({
          borderTopLeftRadius: n,
          borderBottomLeftRadius: n,
        }))
      )
        continue
      if (
        addByPrefix(props, styles, key, 'roundedR', (n) => ({
          borderTopRightRadius: n,
          borderBottomRightRadius: n,
        }))
      )
        continue
      if (addByPrefix(props, styles, key, 'roundedTl', (n) => ({ borderTopLeftRadius: n }))) continue
      if (addByPrefix(props, styles, key, 'roundedTr', (n) => ({ borderTopRightRadius: n }))) continue
      if (addByPrefix(props, styles, key, 'roundedBl', (n) => ({ borderBottomLeftRadius: n }))) continue
      if (addByPrefix(props, styles, key, 'roundedBr', (n) => ({ borderBottomRightRadius: n }))) continue
    }
    if (_.startsWith(key, 'border')) {
      if (addByPrefix(props, styles, key, 'border', (n) => ({ borderWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'borderL', (n) => ({ borderLeftWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'borderR', (n) => ({ borderRightWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'borderT', (n) => ({ borderTopWidth: n }))) continue
      if (addByPrefix(props, styles, key, 'borderB', (n) => ({ borderBottomWidth: n }))) continue
    }
    others[key] = prop
  }
  others['style'] = styles.reduce((acc, styl) => _.merge(acc, styl), {})
  others['className'] = classNames(clxs)
  return others
}

const getActivePropsAndStyle = (props) => {
  if (!props) return [{}, {}]
  const { isActive, children, clxComp, style, ...others } = props
  if (_.has(props, 'isActive')) {
    return isActive ? [others, style] : [{}, {}]
  }
  return [others, style]
}

const mergedPropsFromClxComp = (props) => {
  const { clxComp, ...others } = props
  const mergedProps = { ...others }
  const mergedStyles = _.isArray(others.style) ? others.style : [others.style]
  if (clxComp) {
    const clxComps = _.isArray(clxComp) ? clxComp : [clxComp]
    clxComps.map((comp) => {
      if (comp && comp.props) {
        const [activeProps, activeStyle] = getActivePropsAndStyle(comp.props)
        Object.assign(mergedProps, activeProps)
        mergedStyles.push(...(_.isArray(activeStyle) ? activeStyle : [activeStyle]))
      }
    })
  }
  mergedProps.style = mergedStyles
  return mergedProps
}

const Div: React.ComponentType<DivPropsType> = React.forwardRef((props: DivPropsType, ref: any) => {
  const {
    tag,
    h1Tag,
    h2Tag,
    h3Tag,
    h4Tag,
    h5Tag,
    pTag,
    ulTag,
    olTag,
    liTag,
    spanTag,
    footerTag,
    sectionTag,
    aTag,
    imgTag,
    hrTag,
    buttonTag,
    children,
    ...others
  } = props
  const mergedProps = mergedPropsFromClxComp(others)
  const propsToPass = propsToClx(mergedProps)
  let htmlTag = 'div'
  if (h1Tag) htmlTag = 'h1'
  if (h2Tag) htmlTag = 'h2'
  if (h3Tag) htmlTag = 'h3'
  if (h4Tag) htmlTag = 'h4'
  if (h5Tag) htmlTag = 'h5'
  if (pTag) htmlTag = 'p'
  if (ulTag) htmlTag = 'ul'
  if (olTag) htmlTag = 'ol'
  if (liTag) htmlTag = 'li'
  if (spanTag) htmlTag = 'span'
  if (footerTag) htmlTag = 'footer'
  if (sectionTag) htmlTag = 'section'
  if (aTag) htmlTag = 'a'
  if (imgTag) htmlTag = 'img'
  if (hrTag) htmlTag = 'hr'
  if (buttonTag) htmlTag = 'button'

  if (htmlTag == 'h1')
    return (
      <h1 {...(ref && { ref })} {...propsToPass}>
        {children}
      </h1>
    )
  if (htmlTag == 'h2')
    return (
      <h2 {...(ref && { ref })} {...propsToPass}>
        {children}
      </h2>
    )
  if (htmlTag == 'h3')
    return (
      <h3 {...(ref && { ref })} {...propsToPass}>
        {children}
      </h3>
    )
  if (htmlTag == 'h4')
    return (
      <h4 {...(ref && { ref })} {...propsToPass}>
        {children}
      </h4>
    )
  if (htmlTag == 'h5')
    return (
      <h5 {...(ref && { ref })} {...propsToPass}>
        {children}
      </h5>
    )
  if (htmlTag == 'p')
    return (
      <p {...(ref && { ref })} {...propsToPass}>
        {children}
      </p>
    )
  if (htmlTag == 'ul')
    return (
      <ul {...(ref && { ref })} {...propsToPass}>
        {children}
      </ul>
    )
  if (htmlTag == 'li')
    return (
      <li {...(ref && { ref })} {...propsToPass}>
        {children}
      </li>
    )
  if (htmlTag == 'span')
    return (
      <span {...(ref && { ref })} {...propsToPass}>
        {children}
      </span>
    )
  if (htmlTag == 'section')
    return (
      <section {...(ref && { ref })} {...propsToPass}>
        {children}
      </section>
    )
  if (htmlTag == 'footer')
    return (
      <footer {...(ref && { ref })} {...propsToPass}>
        {children}
      </footer>
    )
  if (htmlTag == 'a')
    return (
      <a {...(ref && { ref })} {...propsToPass}>
        {children}
      </a>
    )
  // @ts-ignore
  if (htmlTag == 'img') return <img {...(ref && { ref })} {...propsToPass} />
  if (htmlTag == 'hr') return <hr {...(ref && { ref })} {...propsToPass} />
  if (htmlTag == 'button')
    return (
      <button {...(ref && { ref })} {...propsToPass}>
        {children}
      </button>
    )
  return (
    <div {...(ref && { ref })} {...propsToPass}>
      {children}
    </div>
  )
})

Div.displayName = 'Div'

const withTip = (Component) => {
  const withTipComp = React.forwardRef((props: DivPropsType, ref: any) => {
    const { dataTip, ...others } = props
    const dataFor = 'tooltip-' + randomstring.generate(8)
    return (
      <>
        <Component
          ref={ref}
          {...others}
          {...(dataTip && { 'data-for': dataFor })}
          {...(dataTip && { 'data-tip': dataTip })}
        />
        {dataTip && (
          <ReactTooltip
            id={dataFor}
            className="react-tooltip px-8 py-7 text-h6"
            effect="solid"
            place="right"
            backgroundColor={COLORS.SECONDARY}
          />
        )}
      </>
    )
  })

  withTipComp.displayName = 'withTip'

  return withTipComp
}

export default withTip(Div)
