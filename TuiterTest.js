var Tuiter = require('tuiter');
var tu = new Tuiter({
    "consumer_key" : ""
  , "consumer_secret" : "" 
  , "access_token_key" : ""
  , "access_token_secret" : ""
    });

var util = require('util');

process.setMaxListeners(0);
var q = 0;

var segunda = function(){
	tu.filter({track: ['java','ruby']},function(stream2){
				stream2.on('tweet',function(data){
					console.log("TU2 -- "+data.id);
				});

			stream2.on('error',function(data){console.log("error");console.log(data);});
			});

};
tu.filter({track: ['php','python']},function(stream){
	stream.on('tweet',function imprime(data){
		console.log("TU1 -- "+data.id+" -- q:"+q++);
		if (q > 5){
			console.log(util.inspect(stream.listeners('tweet')));
			stream.removeAllListeners();
			console.log(util.inspect(stream.listeners('tweet')));
			console.log(util.inspect(stream));
			stream.destroy();
			segunda();
		}
			});
			
		
	stream.on('error',function(data){console.log("error");console.log(data);});
});

//console.log(tu);
