# 組內訂餐網頁程式

用來統整誰吃了啥，減少溝通成本。

## 安裝
- 你只是要運行我的成果，在 `./flask` 路徑下 `pip install -r requirements.txt`，運行 `main.py` 即可。
- 如果你要開發 `yarn install`  安裝依賴。`yarn build` 完成以後,運行 `./flask/main.py` 時，會執行 `copy.bat` 將最新建構於 `./dist` 的文件copy到flask對應路徑裡並啟動flask。