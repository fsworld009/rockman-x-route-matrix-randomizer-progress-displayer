import { addressMapping, translationMapping, imgSourceObject } from '../utils/variable'

// all progress logs


// TODO: optimize
function populateInitItemStatus(
  valueMap: { [x: string]: any; },
  addressMapping: { [x: string]: any; },
  targetObject: { [x: string]: any; }
) {
  for (const game in addressMapping) {
    const items = addressMapping[game];
    for (const itemKey in items) {
      const item = items[itemKey];

      for (let i = 0; i < item.length; i++) {
        const itemIDs = item[i];
        const values = itemIDs.map((id: string) => {
          if (Array.isArray(id)) {
            return id.reduce((sum, key) => sum + (+valueMap[key] || 0), 0)
          } else {
            const raw = valueMap[id];
            return parseInt(raw, 10)
          }
        });

        // console.log(itemKey, itemIDs, values)
        targetObject[game][itemKey][i] = values;
      }
    }
  }
}

export function getNewItemStatus(initItemStatus: any, progress: RMRPTJS.Progress) {
  const itemStatus = initItemStatus
  populateInitItemStatus(progress, addressMapping, itemStatus)

  return itemStatus
}

// per line logs

// function populateItemLogs(
//   lines: { [x: string]: any; },
//   addressMapping: { [x: string]: any; },
//   translationMapping: { [x: string]: any; },
// ) {
//   const result: string[] = []

//   lines.forEach((line: any) => {
//     for (const game in addressMapping) {
//       const category = addressMapping[game];
//       for (const categoryKey in category) {
//         const categoryArr = category[categoryKey]

//         categoryArr.forEach((categoryItemArr: any, i: number) => {
//           categoryItemArr.forEach((item: any, j: number) => {
//             if (Array.isArray(item)) {
//               // console.log(item[j])
//               // console.log(translationMapping[game][categoryKey][i][j][0])
//               if (line == item[j] && translationMapping[game][categoryKey]) {
//                 const text = translationMapping[game][categoryKey][i][j][0]
//                 result.push(text)
//               }
//             }
//             else {
//               // console.log(item)
//               // console.log(translationMapping[game][categoryKey][i][j])
//               if (line == item && translationMapping[game][categoryKey]) {
//                 const text = translationMapping[game][categoryKey][i][j]
//                 result.push(text)
//               }
//             }
//           })
//         })

//       }
//     }
//   })

//   return result
// }

function buildTranslationMap(addressMapping: { [key: string]: any }, translationMapping: { [key: string]: any }) {
  const flatMap = new Map();

  for (const game in addressMapping) {
    const categories = addressMapping[game];
    const transCats = translationMapping[game] ?? {};

    for (const category in categories) {
      const items = categories[category];
      const transItems = transCats[category] ?? [];

      items.forEach((entry: string | string[], i: number) => {
        if (Array.isArray(entry)) {
          // 多層嵌套處理
          entry.forEach((nested, j) => {
            if (Array.isArray(nested)) {
              nested.forEach((key, k) => {
                const trans = transItems?.[i]?.[j]?.[k] ?? transItems?.[i]?.[j]?.[k] ?? '';
                // console.log(key, trans)
                if (trans != '') flatMap.set(key, trans);
              });
            }
            else {
              const trans = transItems?.[i]?.[j] ?? nested;
              if (nested) flatMap.set(nested, trans);
            }
          });
        } else if (typeof entry === 'string') {
          const trans = transItems?.[i] ?? entry;
          flatMap.set(entry, trans);
        }
      });
    }
  }

  // console.log(flatMap)

  return flatMap;
}

function buildImageMap(addressMapping: { [key: string]: any }, imgSourceObject: { [key: string]: any }) {
  const flatMap = new Map();

  for (const game in addressMapping) {
    const categories = addressMapping[game];
    const imgCats = imgSourceObject[game] ?? {};

    for (const category in categories) {
      const items = categories[category];
      const imgItems = imgCats[category === 'armor' ? 'armor_log' : category] ?? [];

      items.forEach((entry: string | string[], i: number) => {
        if (Array.isArray(entry)) {
          // 多層嵌套處理
          entry.forEach((nested, _j) => {
            if (Array.isArray(nested)) {
              nested.forEach((key, _k) => {
                // console.log(key, i, _j, _k, imgItems)
                if (Array.isArray(imgItems)) flatMap.set(key, imgItems[i])
                if (imgItems != '' && !Array.isArray(imgItems)) flatMap.set(key, imgItems);
              });
            }
            else {
              // console.log(nested, i, _j, imgItems)
              if (nested) flatMap.set(nested, imgItems[i]);
            }
          });
        } else if (typeof entry === 'string') {
          const img = imgItems?.[i] ?? entry;
          // console.log(img)
          flatMap.set(entry, img);
        }
      });
    }
  }

  // console.log(flatMap)

  return flatMap;
}

export function getNewItemLogs(newItems: RMRPTJS.AcquiredItems) {
  // console.log(text)
  // const lines = text.split('\n')
  //   .filter(line => line)
  //   .filter(line => line.trim() !== 'nil')
  // .map(t => t.split('='))

  // console.log(lines)
  // const result: string[] = populateItemLogs(lines, addressMapping, translationMapping)
  // console.log(result)
  // const result: string[] = []
  const flatMap = buildTranslationMap(addressMapping, translationMapping);

  const imgMap = buildImageMap(addressMapping, imgSourceObject)
  // console.log(imgMap)

  return newItems.map((key) => {
    return flatMap.get(key) ? [imgMap.get(key), flatMap.get(key)] : ['', '']
    // return flatMap.get(key) ? flatMap.get(key) ?? `[未翻譯] ${key}` : ''
  });
}
