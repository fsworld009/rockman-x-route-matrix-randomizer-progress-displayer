import { For } from 'solid-js'
import { imgBasePath, imgSourceObject } from '../utils/variable'

import GridContainer from './GridContainer'
import ItemImage from './ItemImage'
import TextAnimated from './TextAnimated'

import type { MiscellaneousItemStatus } from '../utils/variable'

function Miscellaneous(props: { itemStatus: MiscellaneousItemStatus, }) {
  const imgSource = imgSourceObject.miscellaneous

  const itemStatus = () => props.itemStatus

  return (
    <div class="section-border">
      <GridContainer cols={'9'}>
        {/* <For each={['sigma', 'hp', 'wp', 'd', 'igf'] as const}>{(miscItem) => */}
        <ItemImage source={`${imgBasePath}${imgSource['title']}`} />
        <For each={['d', 'igf', 'sigma', 'hp', 'wp'] as const}>{(miscItem) =>
          <div class="relative">
            <ItemImage source={`${imgBasePath}${imgSource[miscItem]}`} />
            <div class="absolute size-[100%] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] flex justify-center">
              <TextAnimated text={itemStatus()[miscItem][0].toString()} />
            </div>
          </div>
        }</For>

        {/* Game Time */}
      </GridContainer>
    </div>
  )
}

export default Miscellaneous
