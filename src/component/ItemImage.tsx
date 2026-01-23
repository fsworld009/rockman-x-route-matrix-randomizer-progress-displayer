import { Show } from 'solid-js'
import { Motion, Presence } from "solid-motionone"
import { imgBasePath } from '../utils/variable';

function ItemImage(props: {
  source: string,
  itemStatus?: any,
}) {
  const { source } = props
  const itemStatus = () => props.itemStatus
  // const unlocked = itemStatus() ? itemStatus()[0] : true
  // const beaten = itemStatus() ? itemStatus()[1] : false
  // const changed = itemStatus() ? itemStatus()[2] : false
  // const chip = itemStatus() ? itemStatus()[3] : false

  return (
    <div class="p-[5%] relative overflow-hidden">
      <div
        class="aspect-square"
      // classList={{
      // 'border-[.5vw] border-solid [border-image-slice:1] [border-image-source:conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]': getValue('changed', props.changed)
      // }}
      >
        <img
          src={`${source}`}
          class="relative w-[100%] h-[100%] object-contain align-middle rounded-xl transition duration-600 ease"
          classList={{
            'grayscale': (itemStatus() ? !(itemStatus()[0] || isNaN(itemStatus()[0])) : false) || (itemStatus() ? itemStatus()[1] : false),
          }}
        />
      </div>

      {/* <div
        style={{ 'background-image': `url(${source})` }}
        class={`bg-cover w-[100%] h-[100%] aspect-square relative`}
        classList={{
          'blur-[.5vw]': !getValue('unlocked', props.unlocked),
          'backdrop-grayscale': getValue('beaten', props.beaten),
          'border-[.5vw] border-solid [border-image-slice:1] [border-image-source:conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]': getValue('changed', props.changed)
        }}
      ></div> */}

      {/* unlocked */}
      <Presence exitBeforeEnter>
        <Show
          when={(itemStatus() ? !(itemStatus()[0] || isNaN(itemStatus()[0])) : false)}
          fallback={<></>}
        >
          <Motion
            animate={{ opacity: [0, 1], rotate: [120, 0], scale: [10, 1] }}
            exit={{ opacity: [1, 0], rotate: [0, 120], scale: [1, 10] }}
            transition={{
              duration: 0.6,
              easing: "ease-in-out"
            }}
            class="size-[75%] absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="url(#grad)"
              stroke="black"
              class="size-[100%]"
            >
              <defs>
                <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stop-color="red" />
                  <stop offset="95%" stop-color="gold" />
                </linearGradient>
                <filter id="drop-shad">
                  <feOffset in="SourceAlpha" dx="1" dy="1" />
                  <feBlend in="SourceGraphic" in2="offOut" />
                </filter>
              </defs>
              {/* <foreignObject x="0" y="0" width="100" height="100" clip-path="evenodd">
            <div
              class="size-[100%] bg-[conic-gradient(_#fd004c,_#fe9000,_#fff020,_#3edf4b,_#3363ff,_#b102b7,_#fd004c_)]"
            />
          </foreignObject> */}
              <path
                fill-rule="evenodd"
                d="M8 1a3.5 3.5 0 0 0-3.5 3.5V7A1.5 1.5 0 0 0 3 8.5v5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 11.5 7V4.5A3.5 3.5 0 0 0 8 1Zm2 6V4.5a2 2 0 1 0-4 0V7h4Z"
                clip-rule="evenodd" />
            </svg>
          </Motion>
        </Show>
      </Presence>

      <div class="h-[33%] absolute top-[4%] right-[6%] flex">
        {/* changed */}
        <Presence exitBeforeEnter>
          <Show
            when={itemStatus() ? itemStatus()[2] : false}
            fallback={<></>}
          >
            <Motion
              animate={{ opacity: [0, 1], rotate: [180, 0], scale: [10, 1] }}
              exit={{ opacity: [1, 0], rotate: [0, 180], scale: [1, 10] }}
              transition={{
                duration: 0.6,
                easing: "ease-in-out"
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                // fill="url(#grad)"
                fill="white"
                stroke="cyan"
                class="size-[100%]"
                filter="url(#drop-shad)"
              >
                <path fill-rule="evenodd"
                  d="M12 5.25c1.213 0 2.415.046 3.605.135a3.256 3.256 0 0 1 3.01 3.01c.044.583.077 1.17.1 1.759L17.03 8.47a.75.75 0 1 0-1.06 1.06l3 3a.75.75 0 0 0 1.06 0l3-3a.75.75 0 0 0-1.06-1.06l-1.752 1.751c-.023-.65-.06-1.296-.108-1.939a4.756 4.756 0 0 0-4.392-4.392 49.422 49.422 0 0 0-7.436 0A4.756 4.756 0 0 0 3.89 8.282c-.017.224-.033.447-.046.672a.75.75 0 1 0 1.497.092c.013-.217.028-.434.044-.651a3.256 3.256 0 0 1 3.01-3.01c1.19-.09 2.392-.135 3.605-.135Zm-6.97 6.22a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.752-1.751c.023.65.06 1.296.108 1.939a4.756 4.756 0 0 0 4.392 4.392 49.413 49.413 0 0 0 7.436 0 4.756 4.756 0 0 0 4.392-4.392c.017-.223.032-.447.046-.672a.75.75 0 0 0-1.497-.092c-.013.217-.028.434-.044.651a3.256 3.256 0 0 1-3.01 3.01 47.953 47.953 0 0 1-7.21 0 3.256 3.256 0 0 1-3.01-3.01 47.759 47.759 0 0 1-.1-1.759L6.97 15.53a.75.75 0 0 0 1.06-1.06l-3-3Z"
                  clip-rule="evenodd" />
              </svg>
            </Motion>
          </Show>
        </Presence>

        {/* chip */}
        {/* <Show
          when={chip}
          fallback={<></>}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="url(#grad)"
            stroke="gold"
            class="size-[100%]"
            filter="url(#drop-shad)"
          >
            <path d="M16.5 7.5h-9v9h9v-9Z" />
            <path fill-rule="evenodd"
              d="M8.25 2.25A.75.75 0 0 1 9 3v.75h2.25V3a.75.75 0 0 1 1.5 0v.75H15V3a.75.75 0 0 1 1.5 0v.75h.75a3 3 0 0 1 3 3v.75H21A.75.75 0 0 1 21 9h-.75v2.25H21a.75.75 0 0 1 0 1.5h-.75V15H21a.75.75 0 0 1 0 1.5h-.75v.75a3 3 0 0 1-3 3h-.75V21a.75.75 0 0 1-1.5 0v-.75h-2.25V21a.75.75 0 0 1-1.5 0v-.75H9V21a.75.75 0 0 1-1.5 0v-.75h-.75a3 3 0 0 1-3-3v-.75H3A.75.75 0 0 1 3 15h.75v-2.25H3a.75.75 0 0 1 0-1.5h.75V9H3a.75.75 0 0 1 0-1.5h.75v-.75a3 3 0 0 1 3-3h.75V3a.75.75 0 0 1 .75-.75ZM6 6.75A.75.75 0 0 1 6.75 6h10.5a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75H6.75a.75.75 0 0 1-.75-.75V6.75Z"
              clip-rule="evenodd" />
          </svg>
        </Show> */}
      </div>
      
      {/* KO image */}
      <Show
        when={itemStatus() ? itemStatus()[3] : false}
        fallback={<></>}
      >
        <div class="absolute top-0 left-0 w-[100%] h-[100%]">
          <Motion
            animate={{ opacity: [0, 1], rotate: [180, 0], scale: [10, 1] }}
            exit={{ opacity: [1, 0], rotate: [0, 180], scale: [1, 10] }}
            transition={{
              duration: 0.6,
              easing: "ease-in-out"
            }}
            class="size-[100%]"
          >
            <div class="flex  items-end justify-center h-[100%]">
                <img src={`${imgBasePath}beaten.png`} class="size-[65%]"></img>
            </div>
          </Motion>
        </div>
      </Show>

    </div >
  )
}

export default ItemImage
