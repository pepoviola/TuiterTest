var Tuiter = require('tuiter');
var tu = new Tuiter({
    "consumer_key" : "SQlwPAZ4rpUx9p1UeGOMnA"
  , "consumer_secret" : "UGTeFUiyqrbJZMRMM2N8cwxcK56hF4zfs2PzsAyJA" 
  , "access_token_key" : "310060665-O2XfwgXJNOk10CIhhS5oNfxq9WisTsV0ls0Lg5Pc"
  , "access_token_secret" : "fCV7HLuMyw3JsqQFz1PmJHdC3i1GSIO26sQqfQNQ"
    });

process.setMaxListeners(0);
var q = 0;

var segunda = function(){
	tu.filter({track: ['java','ruby']},function(stream2){
				stream2.on('tweet',function(data){
					console.log("TU2 -- "+data.id);
				});
			});

};
tu.filter({track: ['php','python']},function(stream){
	stream.on('tweet',function(data){
		console.log("TU1 -- "+data.id+" -- q:"+q++);
		if (q > 5){
			stream.destroy();
			segunda();
		}
			});
			
		
	stream.on('error',function(data){console.log("error");console.log(data);})
});

//console.log(tu);
