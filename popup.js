document.addEventListener('DOMContentLoaded', function() {
	const captureButton = document.getElementById('captureButton');
	const downloadLink = document.createElement('a');
  
	captureButton.addEventListener('click', () => {
	  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
		chrome.tabs.captureVisibleTab(tabs[0].windowId, { format: 'png' }, (dataUrl) => {
		  if (chrome.runtime.lastError) {
			console.error(chrome.runtime.lastError.message);
		  } else {
			downloadLink.href = dataUrl;
			downloadLink.download = 'screenshot.png';
			downloadLink.click();
		  }
		});
	  });
	});
  });
  
  