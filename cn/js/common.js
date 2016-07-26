	(function (doc, win) {
	var docEl = doc.documentElement,
	clientWidth = null,
	resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
	recalc = function () {
		clientWidth = docEl.clientWidth;
		docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
	};
	recalc();
	if (!doc.addEventListener) return; 
	win.addEventListener(resizeEvt, recalc, false);
})(document, window);
