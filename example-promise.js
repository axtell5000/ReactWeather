/**
 * Created by User on 2017/03/06.
 */
//Using callbacks
function getTempCallback(location, callback){
  callback(undefined,78);
  callback('City not found');
}

getTempCallback('Philadelphia', function (err, temp) {

  //both happens which we dont want
  if (err){
    console.log('error',err);
  } else {
    console.log('success', temp);
  }

});

//Using Promises, compared to callbacks only the relevant one will be called. We can only call either resolve or reject, not both
function getTempPromise(location){

  return new Promise(function (resolve, reject) {
    resolve(79);
    reject('City not found');
  });

}

getTempPromise('Philadelphia').then(function (temp) {

  console.log('promise success', temp);

}, function (err) {

  console.log('promise error', err);

});

//Promise challenge

function addPromise (a,b) {

  return new Promise(function (resolve,reject) {

    if(typeof a === 'number' && typeof b === 'number'){

      resolve(a + b);

    } else {

      reject('A and b need to be numbers');

    }

  });

}

addPromise(2, 3).then(function (sum) {

  console.log('Success ', sum);

}, function (err) {
  console.log('error ' , err);
});


addPromise(2, 'Stephen').then(function (sum) {

  console.log('Success ', sum);

}, function (err) {
  console.log('error ' , err);
});
