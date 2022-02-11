export type DivPropsType = {
  ref?
  tag?: "h1" | "h2" | "h3" | "h4" | "h5" | "p" | "span" | "ul" | "li" | "footer" | "section" | "a" | "img"
  h1Tag?
  h2Tag?
  h3Tag?
  h4Tag?
  h5Tag?
  pTag?
  spanTag?
  ulTag?
  liTag?
  footerTag?,
  sectionTag?,
  aTag?,
  imgTag?,
  hrTag?,
  buttonTag?,
  auto?

  clx?
  cond?
  focus?
  focusWithin?
  group?
  groupHover?
  hover?
  // ==== Sytle ===
  style?
  // style Sizing 
  w?
  minW?
  maxW?
  h?
  minH?
  maxH?
  // style padding
  p?
  pt?
  pb?
  py?
  px?
  // style margin
  m?
  mt?
  mb?
  my?
  mx?
  // style position
  left?
  right?
  top?
  bottom?
  // style font
  fontSize?
  // style gap
  gap?
  gapX?
  gapY?
  // style line height
  lineHeight?
  z?

  // ==== Layout ====
  // breakpoints
  sm?
  smd?
  md?
  mdd?
  lg?
  lgd?
  xl?
  xld?
  // container
  container?
  // box-sizing
  boxBorder?
  boxContent?
  // display
  hidden?
  block?
  inlineBlock?
  inline?
  inlineFlex?
  table?
  tableCaption?
  tableColumn?
  tableColumnGroup?
  tableFooterGroup?
  tableHeaderGroup?
  tableRowGroup?
  tableRow?
  flowRoot?
  grid?
  inlineGrid?
  contents?
  // float
  floatRight?
  floatLeft?
  floatNone?
  // clear 
  clearLeft?
  clearRight?
  clearBoth?
  clearNone?
  // object-fit
  objectContain?
  objectCover?
  objectFill?
  objectNone?
  objectScaleDown?
  // object-position
  objectBottom?
  objectCenter?
  objectLeft?
  objectLeftBottom?
  objectLeftTop?
  objectRight?
  objectRightBottom?
  objectRightTop?
  objectTop?
  // overflow
  overflowAuto?
  overflowHidden?
  overflowVisible?
  overflowScroll?
  overflowXAuto?
  overflowYAuto?
  overflowXHidden?
  overflowYHidden?
  overflowXVisible?
  overflowYVisible?
  overflowXScroll?
  overflowYScroll?
  // overscroll
  overscrollAuto?
  overscrollContain?
  overscrollNone?
  overscrollYAuto?
  overscrollYContain?
  overscrollYNone?
  overscrollXAuto?
  overscrollXContain?
  overscrollXNone?
  // position
  static?
  fixed?
  absolute?
  relative?
  sticky?
  // top, right, bottom, left

  // visibility
  visible?
  invisible?
  // z-index
  z0?
  z10?
  z20?
  z30?
  z40?
  z50?
  zAuto?

  // ==== Grid ====
  // grid-template-columns
  gridCols1?
  gridCols2?
  gridCols3?
  gridCols4?
  gridCols5?
  gridCols6?
  gridCols7?
  gridCols8?
  gridCols9?
  gridCols10?
  gridCols11?
  gridCols12?
  gridColsNone?
  //  grid-column, start/end
  col?
  colAuto?
  colEnd1?
  colEnd2?
  colEnd3?
  colEnd4?
  colEnd5?
  colEnd6?
  colEnd7?
  colEnd8?
  colEnd9?
  colEnd10?
  colEnd11?
  colEnd12?
  colEnd13?
  colEndAuto?
  colSpan1?
  colSpan2?
  colSpan3?
  colSpan4?
  colSpan5?
  colSpan6?
  colSpan7?
  colSpan8?
  colSpan9?
  colSpan10?
  colSpan11?
  colSpan12?
  colSpanFull?
  colStart1?
  colStart2?
  colStart3?
  colStart4?
  colStart5?
  colStart6?
  colStart7?
  colStart8?
  colStart9?
  colStart10?
  colStart11?
  colStart12?
  colStart13?
  colStartAuto?
  // grid-template-rows
  gridRows1?
  gridRows2?
  gridRows3?
  gridRows4?
  gridRows5?
  gridRows6?
  gridRowsNone?
  // grid-row, start/end
  row?
  rowAuto?
  rowSpan1?
  rowSpan2?
  rowSpan3?
  rowSpan4?
  rowSpan5?
  rowSpan6?
  rowSpanFull?
  rowStart1?
  rowStart2?
  rowStart3?
  rowStart4?
  rowStart5?
  rowStart6?
  rowStart7?
  rowStartAuto?
  rowEnd1?
  rowEnd2?
  rowEnd3?
  rowEnd4?
  rowEnd5?
  rowEnd6?
  rowEnd7?
  rowEndAuto?
  //grid-auto-flow
  gridFlowRow?
  gridFlowCol?
  gridFlowRowDense?
  gridFlowColDense?
  //grid-auto-columns
  autoColsAuto?
  autoColsMin?
  autoColsMax?
  autoColsFr?
  //grid-auto-rows
  autoRowsAuto?
  autoRowsMin?
  autoRowsMax?
  autoRowsFr?
  //gap

  // ===== Spacing ======
  // padding
  // margin
  mAuto?
  myAuto?
  mxAuto?
  mrAuto?
  mlAuto?
  // space between

  // ==== Typography ====
  // text design system
  textD1?
  textD2?
  textD3?
  textD4?
  textD5?
  textD6?
  display1?
  diaplay2?
  display3?
  display4?
  display5?
  display6?
  display7?
  textH1?
  textH2?
  textH3?
  textH4?
  textH5?
  textH6?
  textSB?
  textST?
  heading1?
  heading2?
  heading3?
  heading4?
  heading5?
  heading6?
  // text color
  textTransparent?
  textCurrent?
  textBlack?
  textWhite?
  textInfo?
  textDanger?
  textWarning?
  textSuccess?
  textPrimary?
  textSecondary?
  textGray100?
  textGray200?
  textGray300?
  textGray400?
  textGray500?
  textGray600?
  textGray700?
  //text opacity
  textOpacity0?
  textOpacity5?
  textOpacity10?
  textOpacity20?
  textOpacity25?
  textOpacity30?
  textOpacity40?
  textOpacity50?
  textOpacity60?
  textOpacity70?
  textOpacity75?
  textOpacity80?
  //font-family

  //font-size
  textXs?
  textSm?
  textBase?
  textLg?
  textXl?
  // font-smoothing
  antialiased?
  subpixelAntialiased?
  // font-style
  italic?
  notItalic?
  // font-weight
  fontThin?
  fontExtralight?
  fontLight?
  fontNormal?
  fontMedium?
  fontSemibold?
  fontBold?
  fontExtrabold?
  fontBlack?
  // font-variant-numeric
  normalNums?
  oridnal?
  slashedZero?
  liningNums?
  oldstyleNums?
  proportionalNums?
  tabularNums?
  diagonalFractions?
  stackedFractions?
  // letter-spacing
  trackingTighter?
  trackingTight?
  trackingNormal?
  trackingWide?
  trackingWider?
  trackingWidest?
  // line-height
  leadingNone?
  leadingTight?
  leadingSnug?
  leadingNormal?
  leadingRelaxed?
  leadingLoose?
  leading3?
  leading4?
  leading5?
  leading6?
  leading7?
  leading8?
  leading9?
  leading10?
  // list-style-type
  listNone?
  listDisc?
  listDecimal?
  // list-style-position
  listInside?
  listOutside?
  // ::placeholder color
  placeholderTransparent?
  placeholderCurrent?
  placeholderBlack?
  placeholderWhite?
  placeholderPrimary?
  placeholderInfo?
  placeholderDanger?
  placeholderWarning?
  placeholderSuccess?
  placeholderGray100?
  placeholderGray200?
  placeholderGray300?
  placeholderGray400?
  placeholderGray500?
  placeholderGray600?
  placeholderGray700?
  // ::placeholder opacity
  placeholderOpacity0?
  placeholderOpacity5?
  placeholderOpacity10?
  placeholderOpacity20?
  placeholderOpacity25?
  placeholderOpacity30?
  placeholderOpacity40?
  placeholderOpacity50?
  placeholderOpacity60?
  placeholderOpacity70?
  placeholderOpacity75?
  placeholderOpacity80?
  placeholderOpacity90?
  placeholderOpacity95?
  placeholderOpacity100?
  // text-align
  textLeft?
  textCenter?
  textRight?
  textJustify?
  // text-decoration
  underline?
  lineThrough?
  noUnderline?
  // text-transform
  uppercase?
  lowercase?
  capitalize?
  normalCase?
  // text-overflow
  truncate?
  overflowEllipsis?
  overflowClip?
  // vertical-align
  alignBaseline?
  alignTop?
  alignMiddle?
  alignBottom?
  alignTextTop?
  alignTextBottom?
  // white-space
  whitespaceNormal?
  whitespaceNowrap?
  whitespacePre?
  whitespacePreLine?
  whitespacePreWrap?
  // word-break
  breakNormal?
  breakWords?
  breakAll?
  // ==== Borders =====
  //border-radius
  roundedNone?
  roundedSm?
  rounded?
  roundedMd?
  roundedLg?
  roundedXl?
  rounded2xl?
  rounded3xl?
  roundedFull?
  roundedTNone?
  roundedRNone?
  roundedBNone?
  roundedLNone?
  roundedTSm?
  roundedRSm?
  roundedBSm?
  roundedLSm?
  roundedT?
  roundedR?
  roundedB?
  roundedL?
  roundedTMd?
  roundedRMd?
  roundedBMd?
  roundedLMd?
  roundedTLg?
  roundedRLg?
  roundedBLg?
  roundedLLg?
  roundedTXl?
  roundedRXl?
  roundedBXl?
  roundedLXl?
  roundedT2xl?
  roundedR2xl?
  roundedB2xl?
  roundedL2xl?
  roundedT3xl?
  roundedR3xl?
  roundedB3xl?
  roundedL3xl?
  roundedTFull?
  roundedRFull?
  roundedBFull?
  roundedLFull?
  roundedTlNone?
  roundedTrNone?
  roundedBrNone?
  roundedBlNone?
  roundedTlSm?
  roundedTrSm?
  roundedBrSm?
  roundedBlSm?
  roundedTl?
  roundedTr?
  roundedBr?
  roundedBl?
  roundedTlMd?
  roundedTrMd?
  roundedBrMd?
  roundedBlMd?
  roundedTlLg?
  roundedTrLg?
  roundedBrLg?
  roundedBlLg?
  roundedTlXl?
  roundedTrXl?
  roundedBrXl?
  roundedBlXl?
  roundedTl2xl?
  roundedTr2xl?
  roundedBr2xl?
  roundedBl2xl?
  roundedTl3xl?
  roundedTr3xl?
  roundedBr3xl?
  roundedBl3xl?
  roundedTlFull?
  roundedTrFull?
  roundedBrFull?
  roundedBlFull?
  //border-width
  border?
  border0?
  border1?
  border2?
  border3?
  border4?
  border8?
  borderT?
  borderT0?
  borderT1?
  borderT2?
  borderT3?
  borderT4?
  borderT8?
  borderR?
  borderR0?
  borderR1?
  borderR2?
  borderR3?
  borderR4?
  borderR8?
  borderB?
  borderB0?
  borderB1?
  borderB2?
  borderB3?
  borderB4?
  borderB8?
  borderL?
  borderL0?
  borderL1?
  borderL2?
  borderL3?
  borderL4?
  borderL8?
  //border-color
  borderTransparent?
  borderCurrent?
  borderBlack?
  borderWhite?
  borderPrimary?
  borderInfo?
  borderDanger?
  borderWarning?
  borderSuccess?
  borderGray100?
  borderGray200?
  borderGray300?
  borderGray400?
  borderGray500?
  borderGray600?
  borderGray700?
  // border opacity
  borderOpacity0?
  borderOpacity5?
  borderOpacity10?
  borderOpacity25?
  borderOpacity30?
  borderOpacity40?
  borderOpacity50?
  borderOpacity60?
  borderOpacity70?
  borderOpacity75?
  borderOpacity80?
  borderOpacity90?
  borderOpacity95?
  borderOpacity100?
  // border-style
  borderSolid?
  borderDashed?
  borderDotted?
  borderDouble?
  borderNone?
  // divide with
  // divide color
  // divide opacity
  // ring width
  ring0?
  ring1?
  ring2?
  ring4?
  ring8?
  ring?
  ringInset?
  // ring color
  ringTransparent?
  ringCurrent?
  ringBlack?
  ringWhite?
  ringPrimary?
  ringInfo?
  ringDanger?
  ringWarning?
  ringSuccess?
  ringGray100?
  ringGray200?
  ringGray300?
  ringGray400?
  ringGray500?
  ringGray600?
  ringGray700?
  // ring opacity
  ringOpacity0?
  ringOpacity5?
  ringOpacity10?
  ringOpacity20?
  ringOpacity25?
  ringOpacity30?
  ringOpacity40?
  ringOpacity50?
  ringOpacity60?
  ringOpacity70?
  ringOpacity75?
  ringOpacity80?
  ringOpacity90?
  ringOpacity95?
  ringOpacity100?
  // ring offset width
  ringOffset0?
  ringOffset1?
  ringOffset2?
  ringOffset4?
  ringOffset8?
  // ring offset color
  ringOffsetTransparent?
  ringOffsetCurrent?
  ringOffsetBlack?
  ringOffsetWhite?
  ringOffsetPrimary?
  ringOffsetInfo?
  ringOffsetDanger?
  ringOffsetWarning?
  ringOffsetSuccess?
  ringOffsetGray100?
  ringOffsetGray200?
  ringOffsetGray300?
  ringOffsetGray400?
  ringOffsetGray500?
  ringOffsetGray600?
  ringOffsetGray700?

  // ==== Tables ====
  // border-collapse
  borderCollapse?
  borderSeparate?
  // table-layout
  tableAuto?
  tableFixed?

  // ==== Transforms ====
  // scale
  // rotate
  rotate0?
  rotate1?
  rotate2?
  rotate3?
  rotate6?
  rotate12?
  rotate45?
  rotate90?
  rotate180?
  _rotate180?
  _rotate90?
  _rotate45?
  _rotate12?
  _rotate6?
  _rotate3?
  _rotate2?
  _rotate1?
  // translate
  translateX0?
  translateX1over2?
  translateXFull?
  _translateX1over2?
  _translateXFull?
  translateY0?
  translateY1over2?
  translateYFull?
  _translateY1over2?
  _translateYFull?
  // skew
  // transform-origin
  // transfrom
  transform?
  transformGPU?
  transformNone?

  // ==== Miscellaneous ====
  // box-shadow
  shadowSm?
  shadow?
  shadowMd?
  shadowLg?
  shadowXl?
  shadow2xl?
  shadowInner?
  shadowNone?
  // opacity
  opacity0?
  opacity5?
  opacity10?
  opacity20?
  opacity25?
  opacity30?
  opacity40?
  opacity50?
  opacity60?
  opacity70?
  opacity75?
  opacity80?
  opacity90?
  opacity95?
  opacity100?
  // fill 
  fillCurrent?
  // stroke
  strokeCurrent?
  // stroke-width
  stroke0?
  stroke1?
  stroke2?

  // ==== FlexBox ====
  // display
  flex?
  // flex-direction
  flexRow?
  flexRowReverse?
  flexCol?
  flexColReverse?
  // flex-wrap
  flexWrap?
  flexWrapReverse?
  flexNowrap?
  // flex
  flex1?
  flexAuto?
  flexInitial?
  flexNone?
  // flex-grow
  flexGrow?
  flexGrow0?
  // flex-shrink
  flexShrink?
  flexShrink0?
  // order
  orderFirst?
  orderLast?
  orderNone?
  order1?
  order2?
  order3?
  order4?
  order5?
  order6?
  order7?
  order8?
  order9?
  order10?
  order11?
  order12?

  // ==== Box Alignment ====
  // justify-content
  justifyStart?
  justifyEnd?
  justifyCenter?
  justifyBetween?
  justifyAround?
  justifyEvenly?
  // justify-items
  justifyItemsAuto?
  justifyItemsStart?
  justifyItemsEnd?
  justifyItemsCenter?
  justifyItemsStretch?
  // justify-self
  justifySelfAuto?
  justifySelfStart?
  justifySelfEnd?
  justifySelfCenter?
  justifySelfStretch?
  // align-content
  contentStart?
  contentCenter?
  contentEnd?
  contentBetween?
  contentAround?
  contentEvenly?
  // align-items
  itemsStretch?
  itemsStart?
  itemsCenter?
  itemsEnd?
  itemsBaseline?
  // align-self
  selfAuto?
  selfStart?
  selfEnd?
  selfCenter?
  selfStretch?
  // place-content
  placeContentCenter?
  placeContentStart?
  placeContentEnd?
  placeContentBetween?
  placeContentAround?
  placeContentEvenly?
  placeContentStretch?
  // place-items
  placeItemsAuto?
  placeItemsStart?
  placeItemsEnd?
  placeItemsCenter?
  placeItemsStretch?
  // place-self
  placeSelfAuto?
  placeSelfStart?
  placeSelfEnd?
  placeSelfCenter?
  placeSelfStretch?

  // ==== Sizing ====
  // width
  w0?
  wAuto?
  wPx?
  wFull?
  wScreen?
  wMin?
  wMax?
  // min-width
  minW0?
  minWFull?
  minWMin?
  minWMax?
  // max-width
  maxW0?
  maxWNone?
  maxWXs?
  maxWSm?
  maxWMd?
  maxWLg?
  maxWXl?
  maxWFull?
  maxWMin?
  maxWMax?
  maxWPose?
  maxWScreenSm?
  maxWScreenMd?
  maxWScreenLg?
  maxWScreenXl?
  // height
  h0?
  hAuto?
  hPx?
  hFull?
  hScreen?
  // min-height
  minH0?
  minHFull?
  minHScreen?
  // max-height
  maxH0?
  maxHPx?
  maxHFull?
  maxHScreen?

  // ==== Backgrounds ====
  // background-attachment
  bgFixed?
  bgLocal?
  bgScroll?
  // background-clip
  bgClipBorder?
  bgClipPadding?
  bgClipContent?
  bgClipText?
  // background-color
  bgTransparent?
  bgCurrent?
  bgGray100?
  bgGray200?
  bgGray300?
  bgGray400?
  bgGray500?
  bgGray600?
  bgGray700?
  bgPrimary?
  bgSecondary?
  bgInfo?
  bgSuccess?
  bgDanger?
  bgWarning?
  bgBlack?
  bgWhite?
  // background opacity
  bgOpacity0?
  bgOpacity5?
  bgOpacity10?
  bgOpacity20?
  bgOpacity25?
  bgOpacity30?
  bgOpacity40?
  bgOpacity50?
  bgOpacity60?
  bgOpacity70?
  bgOpacity75?
  bgOpacity80?
  bgOpacity90?
  bgOpacity95?
  bgOpacity100?
  // background-position
  bgBottom?
  bgCenter?
  bgLeft?
  bgLeftBottom?
  bgLeftTop?
  bgRight?
  bgRightBottom?
  bgRightTop?
  bgTop?
  // background-repeat
  bgRepeat?
  bgNoRepeat?
  bgRepeatX?
  bgRepeatY?
  bgRepeatRound?
  bgRepeatSpace?
  // background-size
  bgAuto?
  bgCover?
  bgContain?
  // background-image
  bgNone?
  bgGradientToT?
  bgGradientToTr?
  bgGradientToR?
  bgGradientToBr?
  bgGradientToB?
  bgGradientToBl?
  bgGradientToL?
  bgGradientToTl?
  // gradient color

  // ==== Transitions and Animation ====
  // transition-property
  transition?
  transitionNone?
  transitionAll?
  transitionColors?
  transitionOpacity?
  transitionShadow?
  transitionTransform?
  // transition-duration
  // transition-timing-function
  // transition-delay
  // animation
  animateNone?
  animateSpin?
  animatePing?
  animatePulse?
  animateBount?

  // ==== Interactivity ====
  // appearance
  appearanceNone?
  // cursor
  cursorAuto?
  cursorDefault?
  cursorPointer?
  cursorWait?
  cursorText?
  cursorMove?
  cursorNotAllowed?
  // outline
  outlineNone?
  outlineWhite?
  outlineBlack?
  // pointer-events
  pointerEventsNone?
  pointerEventsAuto?
  // resize
  resizeNone?
  resizeY?
  resizeX?
  resize?
  // user-select
  selectNone?
  selectText?
  selectAll?
  selectAuto?
  // accessibility
  srOnly?
  notSrOnly?
  [key: string]: any
}