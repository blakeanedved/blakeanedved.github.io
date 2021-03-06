$.getJSON('https://api.github.com/users/blakeanedved/repos',function(data){
	data = data.sort(function(a, b){
		return new Date(b.updated_at) - new Date(a.updated_at)
	})
	for (var i = 0; i < data.length && i < 16; i++){
		$('.latest-projects.one').append(`<div class="col s3">
			<div class="card small">
				<div class="card-content">
					<a href="${data[i].html_url}" class="black-text card-title"><b>${data[i].name}</b></a>
					<span class="lang blue white-text">${data[i].language}</span>
					<p class="card-content-custom">${data[i].description}</p>
				</div>
				<a class="source-link" href="${data[i].html_url}">Source</a>
			</div>
		</div>`)
		if (i < 12){
			$('.latest-projects.two').append(`<div class="col s4">
				<div class="card small">
					<div class="card-content">
						<a href="${data[i].html_url}" class="black-text card-title"><b>${data[i].name}</b></a>
						<span class="lang blue white-text">${data[i].language}</span>
						<p class="card-content-custom">${data[i].description}</p>
					</div>
					<a class="source-link" href="${data[i].html_url}">Source</a>
				</div>
			</div>`)
		}
		if (i < 8){
			$('.latest-projects.three').append(`<div class="col s6">
				<div class="card small">
					<div class="card-content">
						<a href="${data[i].html_url}" class="black-text card-title"><b>${data[i].name}</b></a>
						<span class="lang blue white-text">${data[i].language}</span>
						<p class="card-content-custom">${data[i].description}</p>
					</div>
					<a class="source-link" href="${data[i].html_url}">Source</a>
				</div>
			</div>`)
			$('.latest-projects.four').append(`<div class="col s12">
				<div class="card small">
					<div class="card-content">
						<a href="${data[i].html_url}" class="black-text card-title"><b>${data[i].name}</b></a>
						<span class="lang blue white-text">${data[i].language}</span>
						<p class="card-content-custom">${data[i].description}</p>
					</div>
					<a class="source-link" href="${data[i].html_url}">Source</a>
				</div>
			</div>`)
		}
	}
})
$(window).resize(function(){
	if ($(window).width() <= 1300){
		$('.small-recamen').css('margin-left',($(window).width() - $('.small-recamen').width()) / 2)
	}
})