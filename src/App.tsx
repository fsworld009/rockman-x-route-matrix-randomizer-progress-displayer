import { createSignal, Show, onMount, createMemo, createEffect } from 'solid-js'
import { Motion, Presence } from "solid-motionone"

import { initItemStatus } from './utils/variable'
import { progressMode, showAllStats, showItemLog } from './utils/parseQueryParams';
import { getNewItemStatus, getNewItemLogs } from './utils/parseText'

import X1 from "./component/X1"
import X2 from "./component/X2"
import X3 from "./component/X3"
import Miscellaneous from "./component/Miscellaneous"

import ItemIconTextLine from './component/ItemIconTextLine'
import ProgressFilter from './component/ProgressFilter';

function App() {
  const [itemStatus, setItemStatus] = createSignal(initItemStatus)
  const [item_logs, setItemLogs] = createSignal<string[][]>([])

  function onProgressUpdate(progress: RMRPTJS.Progress, acquiredItems: RMRPTJS.AcquiredItems, newAcquiredItems: RMRPTJS.AcquiredItems) {
    setItemStatus({ ...getNewItemStatus(initItemStatus, progress) })
    setItemLogs([...getNewItemLogs(acquiredItems.concat(newAcquiredItems))])
    return;
  }
  onMount(() => {
    window.RMRPTJS.configure({
      baseUrl: import.meta.env.VITE_RMRPTJS_BASE_URL,
      callbacks: [onProgressUpdate]
    });
    window.RMRPTJS.start();
  })

  return (
    <>
      {/* <div class="grid-cols-8 grid-cols-9 grid-cols-10 grid-cols-[repeat(9,min(10vw,8vh))] tracking-wider">
        {itemStatus().x1.e[0]}
        </div> */}
      <div>
        <Presence exitBeforeEnter>
            <Motion.div
              initial={{ x: '100%' }}
              animate={{ x: '0%' }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, easing: "ease" }}
              class="✏️MuzaiPixel"
            >
              <ProgressFilter itemStatus={itemStatus().miscellaneous} game={1}>
                <X1 itemStatus={itemStatus().x1}/>
              </ProgressFilter>
              <ProgressFilter itemStatus={itemStatus().miscellaneous} game={2}>
                <X2 itemStatus={itemStatus().x2} />
              </ProgressFilter>
              <ProgressFilter itemStatus={itemStatus().miscellaneous} game={3}>
                <X3 itemStatus={itemStatus().x3} />
              </ProgressFilter>
              <Show when={showAllStats}>
                <Miscellaneous itemStatus={itemStatus().miscellaneous} />
              </Show>
              <Show when={showItemLog}>
                <ItemIconTextLine lines={item_logs()} />
              </Show>
            </Motion.div>
        </Presence >
      </div>
    </>
  )
}

export default App
