let send = function (path, data) {
	fetch(`http://localhost:3000/${path}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	}).then(function(res) {
		if (res.ok) {
			return res.json();
		}
		else {
			console.log(res.status);
		}
	})
	.then(function(json){
		console.log(json);
	})
	.catch(function(e) {
		console.error(e);
	});
};
