var dic = [
	{nombre:'BlisS',
	edad:20,
	puesto:'obrero',
	link:'http://images-cdn.moviepilot.com/image/upload/c_scale,h_700,w_467/t_mp_quality/tumblr_m7hxmdpo1m1r4wd1ko2_500-do-superheroes-really-need-capes-png-67654.jpg'},
	{nombre:'Misa',
	edad:29,
	puesto:'Gerente',
	link:'https://cdn1.vox-cdn.com/thumbor/oPBpBYRrfwC2iivwxKWCYbxUnWs=/cdn0.vox-cdn.com/uploads/chorus_asset/file/3671750/UPstand2.0.jpg'},
	{nombre:'Juanito',
	edad:20,
	puesto:'limpieza',
	link:'https://upload.wikimedia.org/wikipedia/en/a/af/Son_Goku_YoungAdult.PNG'},
	{nombre:'Pancho',
	edad:24,
	puesto:'player',
	link:'http://static.comicvine.com/uploads/original/11112/111123463/3354004-the-joker.jpg'},
	{nombre:'luis',
	edad:29,
	puesto:'gerente',
	link:'https://k41.kn3.net/taringa/2/9/7/8/7/4/5/donagus83/75D.jpg?7342'},
	{nombre:'julieta',
	edad:12,
	puesto:'esclava',
	link:'http://www.cinepremiere.com.mx/assets/galleries/58326/original/x-men-apocalypse-poster-archangel.jpg'}];


// $('#titulo').text(dic[3]['nombre']);

for(var i=0;i<6;i++){
	
	$('.papa').append(
		'<div class="card"><div id="img'+i+'" class="img"><div class="cubierta"><h4 id="subtitulo">'+dic[i]['puesto']+'</h4><h2>'+dic[i]['nombre']+'</h2><h6>'+dic[i]['edad']+'</h6></div><!--img--></div><!--cubierta--></div><!--card-->'
		);
	$('#img'+i).css('background-image',"url("+dic[i]['link']+")");



}

// console.log('geo');
// navigator.geolocation.getCurrentPosition(creaLink);

// function creaLink(position){
// 	console.log(position);
// 	var link = 'https://www.google.com.mx/maps/@'
// 	var lat = position['coords']['latitude']
// 	var lon = position['coords']['longitude']

// 	link = link + lat +','+lon;
// 	$('#ellink').attr('href',link).slideToggle();
// }


// navigator.geolocation.getCurrentPosition(creaLink);

navigator.geolocation.getCurrentPosition(respuesta);

function respuesta(posicion){
	console.log(posicion);
	var lat = posicion.coords.latitude;
	var lon = posicion.coords.longitude;
	var link = 'https://www.google.com.mx/maps/@'+lat+','+lon;
	$('#ellink').attr('href',link).slideToggle();
}






























// // var dic = {nombre:'BlisS',edad:29,origen:'Chilangolandia',residencia:'Pachuca'};
// var lista = [{titulo:'bliss',cuerpo:29,fecha:'mes',autor:'bliss'},{nombre:'zyan',edad:28},{nombre:'raul',edad:28},{nombre:'josé',edad:20}]

// var lista = [{llave:'valor',llave2:'valor2',llaven:'valorn'},{llave:'valor',llave2:'valor2',llaven:'valorn'},{},{}]
// // function sustit(){
// // 	document.getElementById('titulo').innerHTML = dic['nombre'];
// // 	document.getElementById('subtitulo').innerHTML = dic['origen'];
// // 	document.getElementById('parrafo').innerHTML = dic['residencia'];
// // 	document.getElementById('boton').innerHTML = dic['edad'];
// // }

// $('#ejecuta').click(function(){

// 	$('#titulo').text(dic['nombre']);
// 	$('#subtitulo').text(dic['origen']);
// 	$('#parrafo').text(dic['residencia']);
// 	$('#boton').text(dic['edad']);

// });

// $('#subtitulo').append('<br>');

// for(var i=0;i<length(lista);i++){
// 	$('#blog').append('<h1>'+lista[i]['nombre']+'</h1>');
// 	$('#blog').append('<p>'+lista[i]['edad']+'</p>');
// }



