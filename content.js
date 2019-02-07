var pageList = document.querySelectorAll('.pagination li')
	if (pageList.length) {
		var last = pageList[pageList.length - 1].innerText
			var href = 'https://' + location.host + location.pathname + '?page='
			var i = 2

		function doGet() {
			$.get(href + i, function () {
				i++
			}).done(function (data) {
				var parser = new DOMParser()
					var doc = parser.parseFromString(data, "text/html");
				var list = doc.querySelectorAll('.satellite_rules tbody tr')
					list.forEach(function (e) {
						document.querySelector('.satellite_rules tbody').appendChild(e)
					})

					if (i <= last) {
						doGet()
					}
					$('table td.full').css('white-space', 'normal')
					$('table td.full').css('min-width', '160px')
			})
		}

		doGet()
	}
	$('table td.full').css('white-space', 'normal')
	$('table td.full').css('min-width', '160px')
	$('.pagination').css('visibility', 'hidden')
