# 綠界(黑貓宅配)物流訂單創建模擬

前後台宅配訂單創建簡易模擬

## 安裝

### 安裝本機服務

```bash
npm install
npm start
```

### 安裝 Chrome 插件

Chrome 使用者請到[這裡](https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi?hl=en)下載

## 使用

1. 打開 http://localhost:8888
2. 前端可以用來模擬產生物流訂單，可選擇傳到`本機服務`或者`綠界的測試主機`
3. 本機服務沒有防呆處理，主要用來驗證資料流能夠 End-to-end 正常運作，不用一直丟到綠界測試主機，離線也可繼續整合開發。

## 文件

詳細欄位請參考[官方物流整合API技術文件](https://www.ecpay.com.tw/Content/files/ecpay_030.pdf)

## 友善提醒

請不要將前端頁面用於 production environment，將 Hash Key 與 IV 暴露在前端是不安全的。

## License

See the [LICENSE](https://github.com/taka-wang/ecpay-tcat-order/blob/master/LICENSE) file for license rights and limitations (MIT).