# 部署指南

## GitHub Pages 部署步驟

### 1. 推送代碼到 GitHub

```bash
git push origin main
```

### 2. 啟用 GitHub Pages

1. 前往 GitHub 專案頁面：https://github.com/210190/jsvk
2. 點擊 **Settings**（設定）
3. 在左側選單找到 **Pages**
4. 在 **Source** 區域：
   - Branch: 選擇 `main`
   - Folder: 選擇 `/ (root)`
5. 點擊 **Save**

### 3. 等待部署完成

- 部署通常需要 1-3 分鐘
- 完成後會顯示網址：`https://210190.github.io/jsvk/`

### 4. 驗證部署

訪問網址並測試：
- ✅ 頁面正常載入
- ✅ VTuber 卡片正確顯示
- ✅ 篩選功能運作
- ✅ 搜尋功能運作
- ✅ 點擊卡片導向 YouTube

## 自訂網域（選用）

如果有自己的網域：

1. 在 DNS 設定中新增 CNAME 記錄指向 `210190.github.io`
2. 在 GitHub Pages 設定中輸入自訂網域
3. 啟用 **Enforce HTTPS**

## 更新內容

每次更新後：

```bash
git add .
git commit -m "更新描述"
git push origin main
```

GitHub Pages 會自動重新部署（約 1-3 分鐘）。

## 常見問題

### Q: 頁面顯示 404
A: 確認 index.html 在專案根目錄，並且 GitHub Pages 設定為 `/ (root)`

### Q: JavaScript 無法載入
A: 檢查所有路徑是否使用相對路徑（`./` 開頭）

### Q: 圖片無法顯示
A: 確認圖片 URL 正確，或使用相對路徑

### Q: 更新沒有生效
A: 清除瀏覽器快取（Ctrl+Shift+R 或 Cmd+Shift+R）
