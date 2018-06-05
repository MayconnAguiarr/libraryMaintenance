$(function() {
	var resposta = $.ajax({
		url: 'http://localhost:8080/livros',
		method: 'GET',
		dataType: 'jsonp'
	});

	resposta.done(function(livros) {
		
	});

	resposta.fail(function() {
		alert('Erro carregando livros do servidor!');
	});

});