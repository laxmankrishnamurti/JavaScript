const myPromise = new Promise((resolve, reject) => {
   
    setTimeout(() => {
        let isloggedIn = false;

        if(isloggedIn){
            resolve(alert('Promise Successfull'));
        }else{
            reject('ERROR : Something went wrong');
        }
    }, 1000);
   
})

async function consumePromise(){
    try{
        const response = await myPromise;
        console.log(response);
    }catch(error) {
        console.log(error);
    }
}

consumePromise();