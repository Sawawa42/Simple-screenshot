// 拡張機能のアクションボタンがクリックされたとき
chrome.action.onClicked.addListener((tab) => {
	// 現在のタブのスクリーンショットを取得
	chrome.tabs.captureVisibleTab(tab.windowId, { format: 'png' }, (dataUrl) => {
		// エラーチェック
		if (chrome.runtime.lastError) {
		  console.error(chrome.runtime.lastError.message);
		} else {
			// 現在の日付と時刻を取得
			var now = new Date();
			var formattedDate = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + "_" + now.getHours() + now.getMinutes() + now.getSeconds();
			var filename = "Capture-" + formattedDate + ".png";

			// ダウンロード処理
			chrome.downloads.download({
				url: dataUrl,
				filename: filename,
				saveAs: false
			});
		}
	});
});
