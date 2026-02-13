

// then,catch,finally
    //  fetch("https://jsonplaceholder.typicode.com/users").then((res)=> {
    //      return res.json()
    // })
    // .then((data)=> {
    //     return data
    // }).catch((error)=> {
    //    console.log(error,"error in fetching data");
    // }).finally(()=> {
    //     console.log("promise either fulfilled or rejected");
        
    // })


    const fetchData = async ()=> {
      try {
         const res =  await fetch("https://jsonplaceholder.typicode.com/users") 
        const data = await res.json()
        // console.log(data);
         return data;
      } catch (error) {
        console.log(error,"error in fetching api");
      }
    }

    fetchData()
    

const promise  = new Promise(function(resolve,reject){
     setTimeout(() => {
         let error = false;
         if (error) {
             reject("error in promise")
         }
         resolve({name:"test",email:"test@.com"})
     }, 3000);

})

// promise.then(function(data){
//   console.log(data);
// }).catch((error)=> {
//     console.log(error);
// })
    

   async function consume () {
      try {
        const res = await promise
        console.log(res);
      } catch (error) {
        console.log(error);
      }
   }

   consume()
