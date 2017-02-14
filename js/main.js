$(document).ready ( function(){

	//alert("Ready!");
	$('#do-search').on('click',function(){
		var movieTitle = $('#movie-title').val()

		var sURL =  "https://api.themoviedb.org/3/search/movie?query="+movieTitle+"&api_key=7d921fab8e3150f25b4b6226e72434c4&append_to_response=cast";
		//var sURL="https://api.themoviedb.org/3/search/movie?query=Inception&api_key=7d921fab8e3150f25b4b6226e72434c4&language=en-US&page=1&include_adult=false";

		var container = $('.container')
		//var movies;
		$.ajax({
			method:'GET',
			url:sURL,
			datatType:'json',
			success: function(result){
				var movies=result.results;
				console.log(movies);
				container.append('<br>');

				
					$(document).on("click", ".open-MyModal ", function () {
					     var id = $(this).data('id');
					     $(".modal-body").html(movies[id].overview );
					     $(".modal-title").html(movies[id].title );
					});
				
//				 	console.log(movies[i].overview	)


for(var i = 0; i <= (movies.length)-1; i++){
container.append('<div class="card" style="float:left; width:"30%;margin-right:1%;margin-bottom:0.5em;">'+'<img src="'+'http://image.tmdb.org/t/p/w500'+movies[i].poster_path+'"'+
'alt="No pic" height="320" width="250" >'+'<div class="contains">'+'<h4><b>'+ movies[i].title+'</b></h4>'+ 
    '<p>Ratings: '+movies[i].vote_average+'/10</p>'+ '<button type="button" style="width:8em;height:2em;font-size:15px;" data-id='+i+' class="open-MyModal btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Overview</button>'
+'<div id="myModal" class="modal fade" role="dialog">'
 +' <div class="modal-dialog">'
  +  '<div class="modal-content">'
   +  ' <div class="modal-header">'
    +    '<button type="button" class="close" data-dismiss="modal">&times;</button>'
     +   '<h4 class="modal-title">Modal Header</h4>'
      +'</div>'
      +'<div class="modal-body">'+
         
      +'</div>'
      +'<div class="modal-footer">'
       + '<button type="button" class="btn btn-default" data-dismiss="modal">Close</button>'
      +'</div>'
    +'</div>'

  +'</div>'
+'</div>'+
  '</div>'+
'</div>');
		
 } // for loop ends
 }, // success ends /<a href="javascript:$('#modal .modal-body').load('remote.html',function(e){$('#modal').modal('show');});">Click me</a>
			error:function(error){
				console.log("something wrong!",error);
			}
		})// ajax end.
	})// on click ends
})//End of document.ready

/*
'<div class="card" style="float:left; width:"30%;margin-right:1%;margin-bottom:0.5em;">'+'<img src="'+movies[i].Poster+'"'+
'alt="No pic" height="320" width="290" >'+'<div class="contains">'+'<h4><b>'+ movies[i].Title+'</b></h4>'+ 
    '<p>'+movies[i].Type+'</p>'+ 
  '</div>'+
'</div>'*/


/*'<div class="movie">'
					+
					'<div class="movie-image">'
					+	
						'<a href="#">'+'<span class="play">'+'<span class="name">'+    +'</span></span>'+ '<img src="'+'"'+' alt="movie" /></a>'+
					'</div>'+
						
					'<div class="rating">'
						+'<p>RATING</p>'
						+'<div class="stars">'
						+	'<div class="stars-in">'
								
						+	'</div>'
						+'</div>'
						+'<span class="comments">12</span>'
					+'</div>'
				+'</div>'*/



		/*		'<div class="card" style="float:left; width:"30%;margin-right:1%;margin-bottom:0.5em;">'+'<img src="'+'http://image.tmdb.org/t/p/w500'+movies[i].poster_path+'"'+
'alt="No pic" height="320" width="290" >'+'<div class="contains">'+'<h4><b>'+ movies[i].title+'</b></h4>'+ 
    '<p>'+movies[i].Type+'</p>'+ 
  '</div>'+
'</div>'*/