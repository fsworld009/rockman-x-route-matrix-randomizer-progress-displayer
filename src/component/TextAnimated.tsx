import { createSignal, For, onMount, createEffect } from 'solid-js';
import { Motion, Presence } from 'solid-motionone';
// import Text from './Text';
import Choootype from './Choootype';

function TextAnimated(props: { text: string }) {
  const [items, setItems] = createSignal<{ key: string }[]>([]);

  onMount(() => {
    setItems([{ key: props.text }])
  })

  createEffect(() => {
    const prev = items()[0]?.key;

    if (JSON.stringify(props.text) != JSON.stringify(prev)) {
      setItems([{ key: props.text }, ...items()].slice(0, 2));
    }
  });

  return (
    <div class="overflow-y-clip size-[100%]">
      <Presence exitBeforeEnter>
        <For each={items()}>
          {(item) => (
            <Motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              exit={{ y: '100%', opacity: 0 }}
              transition={{ duration: 0.3, easing: 'ease' }}
              class="text-[8vw] text-center text-white [text-shadow:rgb(0,0,0)_2px_0px_0px,_rgb(0,0,0)_1.75517px_0.958851px_0px,_rgb(0,0,0)_1.0806px_1.68294px_0px,_rgb(0,0,0)_0.141474px_1.99499px_0px,_rgb(0,0,0)_-0.832294px_1.81859px_0px,_rgb(0,0,0)_-1.60229px_1.19694px_0px,_rgb(0,0,0)_-1.97999px_0.28224px_0px,_rgb(0,0,0)_-1.87291px_-0.701566px_0px,_rgb(0,0,0)_-1.30729px_-1.51361px_0px,_rgb(0,0,0)_-0.421592px_-1.95506px_0px,_rgb(0,0,0)_0.567324px_-1.91785px_0px,_rgb(0,0,0)_1.41734px_-1.41108px_0px,_rgb(0,0,0)_1.92034px_-0.558831px_0px]"
            >
              <Choootype>
                {item.key}
              </Choootype>
            </Motion.div>
          )}
        </For>
      </Presence>
    </div>
  );
}

export default TextAnimated;
