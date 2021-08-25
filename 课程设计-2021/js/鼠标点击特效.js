/* 鼠标点击特效 */
var a_idx = 0;
jQuery(document).ready(function($) {
	$("body").click(function(e) {
		var a = new Array("（*@ο@*）", "（⊙o⊙）", "★~★", "(*^‧^*)", "（ˇ＾ˇ〉", "~>_<~+", "(≥◇≤)", "（*>.<*）",
			">_<|||", "→_→", "└(^o^)┘", " (*^__^*)");
		var $i = $("<span></tagObj>").text(a[a_idx]);
		a_idx = (a_idx + 1) % a.length;
		var x = e.pageX,
			y = e.pageY;
		$i.css({
			"z-index": 999,
			"top": y - 20,
			"left": x,
			"position": "absolute",
			"font-weight": "bold",
			"color": "#ff6651"
		});
		$("body").append($i);
		$i.animate({
				"top": y - 180,
				"opacity": 0
			},
			1500,
			function() {
				$i.remove();
			});
	});
});

function my_unfold() {
	width_main = $('#main').width();
	height_main = $('#main').height();
	time = 1000;

	function unfoldLeft(width, height, time) {
		$('#main').animate({
			'width': '0%',
			'height': '0%',
			opacity: '0'
		}, 0, 'linear');
		$('#main').animate({
			'width': '+' + width_main,
			'height': '+' + height_main,
			opacity: '1'
		}, time, 'linear');
	}
	unfoldLeft(width_main, height_main, time);
}
