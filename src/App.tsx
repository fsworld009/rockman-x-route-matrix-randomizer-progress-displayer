import { createSignal, Show, onMount } from 'solid-js'
import { Motion, Presence } from "solid-motionone"

import { initItemStatus } from './utils/variable'
import { progressMode, showAllStats, showItemLog, disableTitles } from './utils/parseQueryParams';
import { getNewItemStatus, getNewItemLogs } from './utils/parseText'

import X1 from "./component/X1"
import X2 from "./component/X2"
import X3 from "./component/X3"
import Miscellaneous from "./component/Miscellaneous"

import ItemIconTextLine from './component/ItemIconTextLine'

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

  const disabledCssMap = {
    invisible: 'invisible',
    hidden: 'hidden',
    grayout: 'grayscale opacity-50'
  };

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
            {
            /**
             * 2026/01/23 fsworld009
             * Tried to generalize the parents of X1, X2, X3 elements into a common component.
             * However, doing so would break text animation in TextAnimated, when
             * progress=current and switching games. It could be some issue with how we handle
             * solid-js and solid-motionone integrations in each component. However, I'm unable to locate
             * the root cause.
             */
            }
            <Show when={progressMode === 'all' || (progressMode === 'current' && itemStatus().miscellaneous.title[0][0] === 1)}>
              <div class={itemStatus().miscellaneous.x1Enabled[0][0] ? "" : disabledCssMap[disableTitles as 'hidden']}>
                <X1 itemStatus={itemStatus().x1}/>
              </div>
            </Show>
            <Show when={progressMode === 'all' || (progressMode === 'current' && itemStatus().miscellaneous.title[0][0] === 2)}>
              <div class={itemStatus().miscellaneous.x2Enabled[0][0] ? "" : disabledCssMap[disableTitles as 'hidden']}>
                <X2 itemStatus={itemStatus().x2}/>
              </div>
            </Show>
            <Show when={progressMode === 'all' || (progressMode === 'current' && itemStatus().miscellaneous.title[0][0] === 3)}>
              <div class={itemStatus().miscellaneous.x3Enabled[0][0] ? "" : disabledCssMap[disableTitles as 'hidden']}>
                <X3 itemStatus={itemStatus().x3}/>
              </div>
            </Show>
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
