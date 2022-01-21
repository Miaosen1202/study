// 默认方式
uni.request({
    url: 'https://www.example.com/request',
    success: (res) => {
        console.log(res.data);
    },
    fail:(err) => {
        console.error(err)
    }
});

// 使用 Promise then/catch 方式调用
uni.request({
        url: 'https://www.example.com/request'
    })
    .then(res => {
        // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
        console.log(res.data);
    })
    .catch(err => {
        // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
        console.error(err)
    })

// 使用 Await/Await 方式调用
async function request () {
    try{
        var res = await uni.request({
            url: 'https://www.example.com/request'
        });
        // 此处的 res 参数，与使用默认方式调用时 success 回调中的 res 参数一致
        console.log(res);
    } catch (err) {
        // 此处的 err 参数，与使用默认方式调用时 fail 回调中的 err 参数一致
        console.error(err)
    }
}
