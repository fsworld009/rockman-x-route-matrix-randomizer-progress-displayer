import { disabledGames, progressMode } from '../utils/parseQueryParams';
import { children, createMemo, type JSX } from 'solid-js';

function ProgressFilter(props: {
  children: number | boolean | Node | JSX.ArrayElement | (string & {}) | null | undefined,
  game: number,
  itemStatus: any,
}) {
  const disabledCsMap = {
    invisible: 'invisible',
    hidden: 'hidden',
    grayout: 'grayscale opacity-50'
  };

  const {game} = props;
  const itemStatus = () => props.itemStatus
  const cssStyle = createMemo(() => {
    let cssStyle;
    // If the game is enabled
    if (itemStatus()[`${game}enabled` as '1enabled'][0][0]) {
      // Hide if progress mode is 'current' and is not the current game.
      cssStyle = progressMode === 'all' || (progressMode === 'current' && itemStatus().title[0][0] === game)
        ? '' : 'hidden';
    } else {
      cssStyle = disabledCsMap[disabledGames as keyof typeof disabledCsMap];
    }
    return cssStyle
  });
  const c = children(() => props.children)

  return (
    <div class={cssStyle()}>
      {c()}
    </div>
  )
}

export default ProgressFilter;
