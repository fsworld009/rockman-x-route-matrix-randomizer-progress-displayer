import { Motion, Presence } from 'solid-motionone';
import { disableTitles, progressMode } from '../utils/parseQueryParams';
import { children, Show, type JSX } from 'solid-js';

function ProgressFilter(props: {
  children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined,
  game: number,
  itemStatus: any,
}) {
  const disabledCssMap = {
    invisible: 'invisible',
    hidden: 'hidden',
    grayout: 'grayscale opacity-50'
  };

  const itemStatus = () => props.itemStatus
  const c = children(() => props.children)

  return (

    <div>
      <Show when={progressMode === 'all' || (progressMode === 'current' && itemStatus().title[0][0] === props.game)}>
        <Motion.div
          initial={{ x: '100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 0.3, easing: "ease" }}
          class="✏️MuzaiPixel"
        >
          <div class={itemStatus()[`x${props.game}Enabled` as 'x1Enabled'][0][0] ? "" : disabledCssMap[disableTitles as 'hidden']}>
            {c()}
          </div>
        </Motion.div>
      </Show>
      </div>
  )
}

export default ProgressFilter;
