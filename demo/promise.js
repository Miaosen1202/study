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

// Promise
uni.request({
        url: 'https://www.example.com/request'
    })
    .then(data => {
        // data为一个数组
        // 数组第一项为错误信息 即为 fail 回调
        // 第二项为返回数据
        var [err, res]  = data;
        console.log(res.data);
    })

// Await
async function request () {
    var [err, res] = await uni.request({
        url: 'https://www.example.com/request'
    });
    console.log(res.data);
}