// 1.

const pro = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("async task is completed");
        resolve({ "name": "mihir", "age": 17 });
    }, 1000);
})
pro.then((info) => {
    console.log(info);
    console.log();
})

// 2.

new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ "status": "resolved" })
        }
        else {
            reject({ "status": "rejected" })
        }
    }, 1000)
}).then((sta) => {
    console.log("than1: " + sta.status);
    return sta
}).then((sta) => {
    console.log("than2: " + sta.status);
    return sta
}).catch((sta) => {
    console.log("catch runed: " + sta.status);
    return sta
}).finally(() => {
    console.log("finally runed\n");
})

// 3.

const async = new Promise((resolve, reject) => {
    setTimeout(() => {
        const error = true
        if (!error) {
            resolve({ "status": "resolved" })
        }
        else {
            reject({ "status": "rejected" })
        }
    }, 1000)
})

const asyn = async () => {
    try {
        const responce = await async
        console.log(responce);
    } catch (error) {
        console.log(error);
    }
}
asyn()