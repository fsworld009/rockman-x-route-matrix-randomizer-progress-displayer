## NOTE

以下紀錄為舊版UI連結Progress Tracker需要繞過CORS讀取txt檔的資料
Progress Tracker JS已改為從script tag取得資料因此可以直接本地開啟網頁

## 運作原理/how does it work

一般情況下，由於資訊安全上的原因，網頁無法直接存取本地的檔案，參照：[Reason: CORS request not HTTP - HTTP | MDN](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/CORS/Errors/CORSRequestNotHttp)

會需要修改瀏覽器本身的資訊安全設定，或是自行建立一個本地伺服器，因此本專案的頁面在瀏覽器上直接開啟時會無法使用

但在OBS上的瀏覽器來源使用「本機檔案」選擇時，則不會受到此限制，故可藉此達成讀取檔案顯示進度的功能

然而若是想直接使用`file:///`（例如：`file:///C:/RouteMatriXRandomizer/RouteMatriXRandomizer_progress_displayer.html`）則仍會遇到CORS錯誤，故未採取上方原定的選項設定法

note：舊版的OBS在執行時加上`--allow-file-access-from-files`標籤，較新版的使用`http://absolute/`取代`file:///`（例如：`http://absolute/C:/RouteMatriXRandomizer/RouteMatriXRandomizer_progress_displayer.html`），則或許也能達成？

### 如果我也想在自己玩的時候使用這類相關工具？

你可以調降瀏覽器的安全設定，但鑑於日後因素並不大推薦

稍微繞路一點，但調整上較簡單的方式，你可以

#### 1. 架設本地伺服器

1. 下載[Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)
2. 安裝[Live Server - Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
  a. 按下`Ctrl+Shift+P`
  b. 移除提示命令欄內的`>`後，輸入`ext install ritwickdey.LiveServer`
3. 按下`檔案`>`開啟資料夾`>開啟網頁所在資料夾
4. 點選編輯器下方的「Go Live」

#### 2. 安裝相關擴充功能（未檢驗）

1. 下載[Polyglot-HTML-ZIP-PNG/util/web-extension at main · gildas-lormeau/Polyglot-HTML-ZIP-PNG](https://github.com/gildas-lormeau/Polyglot-HTML-ZIP-PNG/tree/main/util/web-extension)中的擴充功能並安裝

### Other ref

- [obs-browser/README.md at master · obsproject/obs-browser](https://github.com/obsproject/obs-browser/blob/master/README.md#js-bindings)
- [Browser Source | OBS](https://obsproject.com/kb/browser-source)
- [OBS Studio ブラウザソース解説 - すたいるのOBS情報メモブログ](https://style1925.hateblo.jp/entry/obs-browser#%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%ABHTML%E3%81%A7%E3%83%AD%E3%83%BC%E3%82%AB%E3%83%AB%E7%94%BB%E5%83%8F%E3%81%8C%E8%AA%AD%E3%81%BF%E8%BE%BC%E3%82%81%E3%81%AA%E3%81%84)