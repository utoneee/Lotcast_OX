# Lotcast OX — 是非吉凶

單頁占卜 App，純 HTML + CSS + JS，無框架依賴。

## 檔案結構

```
divination.html     主程式（開啟即可使用）
img/                所有圖片資源
  bg.png            背景圖
  fg.png            前景圖（廟宇前景裝飾）
  statue_a_*.png    是非神君（idle / hover / active）
  statue_b_*.png    吉凶判官（idle / hover / active）
  result_*.png      結果圖（o / x / retry / daji / ji / xiong / daxiong）
README.md
```

## 模式

| 模式 | 說明 | 狀態 |
|------|------|------|
| 是非神君 | 硬幣占卜（是/否/再一次） | ✅ |
| 吉凶判官 | 木籤占卜（大吉/吉/凶/大凶） | ✅ |
| 批次抽籤 | 多籤一次抽 | 🔒 開發中 |

## 尺寸

390 × 844 px（iPhone 14 規格）
