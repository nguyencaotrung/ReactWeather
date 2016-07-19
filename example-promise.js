// function getTempCallBack (location, callback) {
// 	callback(undefined, 78);
// 	callback('City not found');
// }

// getTempCallBack('London',function (err, temp) {
// 	if (err) {
// 		console.log('error',err);
// 	} else {
// 		console.log('success',temp)
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function(resolve,reject){

// 		setTimeout(function (){
// 			resolve(79);
// 			reject("City not found");
// 		},1000);	
// 	});
// }

// getTempPromise('London').then(function (temp) {
// 	console.log('promise success',temp);
// }, function (err){
// 	console.log('promise error',err);
// });

function addPromise (a, b) {
	return new Promise (function(resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}else{
			reject("A and B need to be a number");
		}
	})
}

addPromise(2,3).then(function(sum){
	console.log('succses',sum);
},function(err){
	console.log('error',err);
})

addPromise('revre',9).then(function(sum){
	console.log('this should not show up');
},function(err){
	console.log('this should appear',err);
})