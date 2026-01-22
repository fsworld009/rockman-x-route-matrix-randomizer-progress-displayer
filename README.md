# Route MatriX Randomizer progress displayer

![screenshot](/screenshot.jpg)

![screenshot](/screenshot_20260122.png)

用於圖像化[Route MatriX Randomizer progress tracker JS](https://github.com/fsworld009/Route-MatriX-Randomizer_progress_tracker_js/)輸出的進度表網頁

## 事前準備/prerequisites

- [Route MatriX Randomizer progress tracker JS](https://github.com/fsworld009/Route-MatriX-Randomizer_progress_tracker_js/)
  - `progress_tracker_js/`

## 安裝方式/how to install

1. 從Releases下載`RouteMatriXRandomizer_progress_displayer.zip`
2. 解壓縮到任意位置
3. 下載Route_MatriX_Randomizer_progress_tracker_js
4. 解壓縮`progress_tracker_js`至步驟2指定的資料夾

解壓縮後的目錄結構應如下：

```plain
RouteMatriXRandomizer_progress_displayer (從「Release」解壓縮)
├── progress_tracker_js/ (下載 「Route_MatriX_Randomizer_progress_tracker_js」解壓縮)
    ├── RMR_progress_tracker.lua
    ├── RMR_progress_tracker.js
    ├── RMR_progress_tracker_id_maps.js
├── progress_tracker_assets/ (從「Release」解壓縮)
└── index.html (從「Release」解壓縮)
```

5. BizHawk載入`boot.lua`
6. BizHawk載入`progress_tracker_js/RMR_progress_tracker.lua`
7. 遊戲進到選關畫面，如設定正確，網頁會開始顯示目前遊戲進度與新道具紀錄

## 使用方式/how to use

1. 在OBS的瀏覽器來源中勾選「本機檔案」，選擇`index.html`
2. 尺寸（瀏覽器來源屬性內的寬度和高度）可依需求自行設定，圖示和文字大小會隨尺寸響應變化
3. 如果有出現下方被截斷的情況，請依使用的版位增加高度或縮減寬度

如沒有實況錄影需求, 可直接開啟網頁

## 選項/options

在網址末端可用`?選項1=值&選項2=值&選項3=值`的方式進行調整 例如`index.html?progress=current&item_log=false`

- `progress`

遊戲進度的顯示方式 預設值：`all`

| 值 | 顯示內容 |
|-----|---------|
|  all  | 全遊戲進度 |
|  current  | 只顯示目前遊戲進度 |
|  off  | 不顯示 |

頁面開啟後，可滑鼠點擊畫面手動切換模式

- `all_stats`

是否顯示全遊戲共同數據（死亡數，總愛心，總西格瑪鑰匙數等） 可為`true`(顯示)或`false`(不顯示) 預設值：`true`

- `item_log`

是否顯示道具取得紀錄  可為`true`(顯示)或`false`(不顯示) 預設值：`true` 預設值：`true`

- `item_log_rows`

顯示多少筆道具取得紀錄 預設值: `5`

**註**: OBS上使用

需在複製「本機檔案」欄位上的網址後，取消勾選瀏覽器來源設定裡的「本機檔案」，將網址改為`file:///`+`複製網址`
需要手動切換時，請對瀏覽器來源右鍵→點選「互動」→點擊視窗畫面
如果字體的窄體顯示效果不正確時，於互動中再次點擊畫面進行切換即可

## CSS

如需要修改邊框樣式請在OBS修改CSS `.section-border`
[原始碼參考](src/index.css#47)

## library

- SolidJS
- TailwindCSS
- [vite-plugin-singlefile - npm](https://www.npmjs.com/package/vite-plugin-singlefile)
- solid-motionone
- solid-transition-group
- emfont
- MuzaiPixel
- FusionPixelFont12pxMono
- [webで自動に長体をかける｜Solution - ソリューション｜株式会社イージェーワークス](https://www.ejworks.com/solution/detail.html?article_id=150)

## TODO

- [x] 切換設定
  - [x] 從網址params取得
  - [x] 全畫面點擊
- [ ] 設定
  - [x] 顯示所有遊戲內容
  - [x] 只顯示當前遊戲內容
  - [x] 顯示最後取得記錄
  - [ ] 單行式顯示
- [ ] 動畫效果
  - [x] Motion
  - [ ] 微調
- [ ] ~~recalculate aspect ratio~~
- [ ] long click>slide to switch?
- [ ] wheel to add/reduce display text line
- ~~[ ] check source by crc to avoid redundant parse~~

## note

- 共通
  - 標題
  - 關卡
    - 8x1/4x2
    - 未/已解鎖/已通關/變化
  - 特殊武器
    - 8x1/4x2
    - 覆蓋於關卡上？
  - 西格瑪鑰匙
    - 文字
  - 愛心/武器/E罐
    - 文字
  - 裝甲/波升劍
  - X炮強化項目
- X2
  - 傑洛屍體
  - VAVA/VFF/MBB
    - [VAVA_Flag, VAVA_Stage]
- X3
  - 騎乘裝甲
- 其他
  - 死亡/IFG/時間/SEED
- log
  - get diff from object?
