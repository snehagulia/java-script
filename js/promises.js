
// promise create
const promise = new Promise(function(resolve,reject){
          // db calls, api calls, file read etc..
     setTimeout(() => {
      let error = false;
      if (!error) {
         resolve({name:"raghav",email:"raghav@123.com"})
      } else{
         reject("error occured")
      }
     }, 1000);
     })


     

// promise consume

promise
.then(function(data){
  console.log(data);
  return data.name;
})
.then(function(username){
  console.log(username);
  return username.toUpperCase();
})
.catch((error)=> {
  console.log(error);
})
.finally(()=> {
  console.log("promise either resolved or rejected");
})

// handle promise with async await
async function handlePromise() {
    try {
        const response = await promise;
        console.log(response);
    }  catch (error) {
        console.log(error);
    }
}

handlePromise();
