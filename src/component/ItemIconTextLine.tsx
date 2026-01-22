import { createSignal, For, createEffect, Show } from 'solid-js';
// import { Motion } from "solid-motionone";
import { TransitionGroup } from "solid-transition-group"

import { item_log_rows } from '../utils/parseQueryParams';
import { imgBasePath } from '../utils/variable'
import Choootype from './Choootype';

function ItemIconTextLine(props: { lines: any[] }) {
  const linesToDisplay = item_log_rows
  const [items, setItems] = createSignal<any[]>([])
  const [displayLines, setDisplayLines] = createSignal<any[]>([])

  function updateDisplayLines(newlines: any[]) {
    const prev = items();
    const prevLen = prev.length;
    const nextLen = newlines.length;

    setItems(newlines)
    if (prevLen === 0 || prevLen > nextLen) {
      setDisplayLines(newlines.slice(-linesToDisplay))
      return;
    }

    if (prevLen < nextLen) {
      const diff = newlines.slice(prevLen)
      setDisplayLines([
        ...displayLines().slice(diff.length - linesToDisplay),
        ...diff
      ])
      return;
    }
  }

  createEffect(() => {
    // console.log(props.lines)
    updateDisplayLines(props.lines)

    // const testLines = [
    //   ["x1_x_hadouken.png", "[1]波動拳"],
    //   ["x2_x_shoryuken.png", "[2]昇龍拳"],
    //   ["sigma.png", "[*]西格瑪鑰匙"],
    //   ["heart.png", "[*]生命提升"],
    //   ["energy.png", "[*]能源提升"],
    //   ["etank.png", "[3]E罐"],
    //   ["x1_bosses_sc.png", "[1]鑰匙: 針刺變色龍"],
    //   ["x1_bosses_fm.png", "[1]鑰匙: 燃燒猛獁"],
    //   ["x2_bosses_oo.png", "[2]鑰匙: 音速鴕鳥"],
    //   ["x2_bosses_ws.png", "[2]鑰匙: 鋼索絲瓜"],
    //   ["x3_weapon_vc.png", "[3]武器: 電氣鯰魚"],
    //   ["x3_bosses_bh.png", "[3]鑰匙: 爆破黃蜂"],
    // ]

    // setTimeout(() => {
    // setDisplayLines(prev => [...prev].reverse())
    // setDisplayLines(prev => [...prev.slice(1), prev[0]])
    // setDisplayLines(prev => [...prev.slice(1), testLines[Math.floor(Math.random() * testLines.length)]])
    // }, 200)
  })
  return (
    <div class="section-border">
      <TransitionGroup moveClass="s-move">
        <Show when={displayLines().length > 0}>
          <For each={displayLines()}>
            {(line) => line[1] != '' && (
              // <Motion.div
              // initial={{ opacity: 0, x: 120, y: 120 }}
              //   animate={{ opacity: 1, x: 0, y: 0 }}
              //   exit={{ opacity: 0, x: -120, y: -120 }}
              //   transition={{
              //     duration: 0.4,
              //     delay: i() * 0.1,
              //     easing: "ease"
              //   }}
              //   style="font-family: 'FusionPixelFont12pxMono';"
              //   class="flex flex-row items-center text-[8vw] tracking-wider text-black [text-shadow:rgb(255,_255,_255)_2px_0px_0px,_rgb(255,_255,_255)_1.75517px_0.958851px_0px,_rgb(255,_255,_255)_1.0806px_1.68294px_0px,_rgb(255,_255,_255)_0.141474px_1.99499px_0px,_rgb(255,_255,_255)_-0.832294px_1.81859px_0px,_rgb(255,_255,_255)_-1.60229px_1.19694px_0px,_rgb(255,_255,_255)_-1.97999px_0.28224px_0px,_rgb(255,_255,_255)_-1.87291px_-0.701566px_0px,_rgb(255,_255,_255)_-1.30729px_-1.51361px_0px,_rgb(255,_255,_255)_-0.421592px_-1.95506px_0px,_rgb(255,_255,_255)_0.567324px_-1.91785px_0px,_rgb(255,_255,_255)_1.41734px_-1.41108px_0px,_rgb(255,_255,_255)_1.92034px_-0.558831px_0px]"
              // >
              //   <span class="shrink-0">
              //     {line[1].split(']')[0]}]
              //   </span>
              //   <img
              //     src={imgBasePath + line[0]}
              //     class="shrink-0 size-[10vw] object-contain rounded-lg" />
              //   <span class="break-keep text-nowrap">
              //     {line[1].split(']')[1]}
              //   </span>
              // </Motion.div>

              <div
                style="font-family: 'FusionPixelFont12pxMono';"
                class="flex flex-row items-center gap-2 transition-all duration-400 text-[8vw] tracking-wider text-white [text-shadow:rgb(0,0,0)_2px_0px_0px,_rgb(0,0,0)_1.75517px_0.958851px_0px,_rgb(0,0,0)_1.0806px_1.68294px_0px,_rgb(0,0,0)_0.141474px_1.99499px_0px,_rgb(0,0,0)_-0.832294px_1.81859px_0px,_rgb(0,0,0)_-1.60229px_1.19694px_0px,_rgb(0,0,0)_-1.97999px_0.28224px_0px,_rgb(0,0,0)_-1.87291px_-0.701566px_0px,_rgb(0,0,0)_-1.30729px_-1.51361px_0px,_rgb(0,0,0)_-0.421592px_-1.95506px_0px,_rgb(0,0,0)_0.567324px_-1.91785px_0px,_rgb(0,0,0)_1.41734px_-1.41108px_0px,_rgb(0,0,0)_1.92034px_-0.558831px_0px]"
              >
                <span class="shrink-0">
                  {line[1].split(']')[0]}]
                </span>
                <img
                  src={imgBasePath + line[0]}
                  class="shrink-0 size-[10vw] object-contain rounded-lg" />
                <Choootype>
                  {line[1].split(']')[1]}
                </Choootype>
              </div>
            )}
          </For>
        </Show>
      </TransitionGroup >
      <Show when={displayLines().length < linesToDisplay}>
        <For each={new Array(linesToDisplay - displayLines().length)}>
          {(_, index) => (
            <div
              style="font-family: 'FusionPixelFont12pxMono';"
              class="flex flex-row items-center gap-2 transition-all duration-400 text-[8vw] tracking-wider text-white [text-shadow:rgb(0,0,0)_2px_0px_0px,_rgb(0,0,0)_1.75517px_0.958851px_0px,_rgb(0,0,0)_1.0806px_1.68294px_0px,_rgb(0,0,0)_0.141474px_1.99499px_0px,_rgb(0,0,0)_-0.832294px_1.81859px_0px,_rgb(0,0,0)_-1.60229px_1.19694px_0px,_rgb(0,0,0)_-1.97999px_0.28224px_0px,_rgb(0,0,0)_-1.87291px_-0.701566px_0px,_rgb(0,0,0)_-1.30729px_-1.51361px_0px,_rgb(0,0,0)_-0.421592px_-1.95506px_0px,_rgb(0,0,0)_0.567324px_-1.91785px_0px,_rgb(0,0,0)_1.41734px_-1.41108px_0px,_rgb(0,0,0)_1.92034px_-0.558831px_0px]"
              >
              <span class="shrink-0">[&gt;]</span>
              { displayLines().length === 0 && index() === 0 && (<>
                <img
                  src={imgBasePath + 'deaths.png'}
                  class="shrink-0 size-[10vw] object-contain rounded-lg" />
                <span class="shrink-0">&nbsp;ITEM LOG</span>
                </>
                )
              }
            </div>
          )}
        </For>
      </Show>
    </div>
  )
}

export default ItemIconTextLine