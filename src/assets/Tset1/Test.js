let data = {
    //请求参数
}
let formdata = new FormData();
for (let key in data) {//相当于将数据封装成对象
    formdata.append(key, data[key]);
}

this.$axios.post('/goods.json', formdata).then(res => {
    //这是请求完成后执行的
    //res接收返回的信息
    console.log(res.data);
}, err => {//输出错误
    console.log(err);
})
//////////////////////////////////////

this.$axios.put('/url', {
    id: 1
}).then(res => {
    console.log(res.data);
})
///////////////
this.$axios.patch('/url', {
    id: 1
}).then(res => {
    console.log(res.data);
})
////////////
this.$axios.delete('/url', {
    params: {
        id: 1
    }
}).then(res => {
    console.log(res.data);
})
/////////////////
//固定delete类型
this.$axios.delete('/url', {
    data: {
        id: 1
    }
}).then(res => {
    console.log(res.data);
})
3
//方法二
$axios({
    method: 'delete',//请求类型
    url: '/url',//请求地址
    params: { id: 1 }, //以明文方式提交参数
    data: { id: 1 } //以封装对象方式提交参数
}).then(res => {//res接收返回值并执行逻辑
    console.log(res.data);
})
////////
this.$axios.all([//all可以发送并发请求
	this.$axios.get('/goods.json'),
	this.$axios.get('/classify.json')
]).then(//spread可以统一处理返回值
    //两个返回参数分别对应发送请求的顺序
	this.$axios.spread((goodsRes,classifyRes)=>{
		console.log(goodsRes.data);
		console.log(classifyRes.data);
	})
)
/**/
/** */
//创建对象实例
let instance = axios.create({
    baseURL: 'https://xxxxx.com', // 设置基本的 URL
    timeout: 5000, // 设置请求超时时间（单位：毫秒）
    headers: {'Authorization': 'Bearer TOKEN'} // 设置请求头部信息
});  
/** */
//配置全局的超时时长
this.$axios.defaults.timeout = 2000; 
//配置全局的基本URL
this.$axios.defaults.baseURL = 'http://localhost:8080';
/** */
//通过create创建实例
let instance1 = this.$axios.create();
//配置它的请求超时时长是3000
instance.defaults.timeout = 3000;
/** */
this.$axios.get('/goods.json',{
    timeout: 3000
}).then()
/** */
//create创建实例
let instance = $axios.create();
//配置拦截器
instance.interceptors.request.use(config=>{
    return config;//发起请求前处理
},err=>{
    // 请求错误处理
    return Promise.reject(err);
})
/** */
this.$axios.interceptors.response.use(res=>{
    //请求成功对响应数据做处理
    return res //该返回对象会传到请求方法的响应对象中
    //例如:let obj=this.$axios.interceptors.r....
},err=>{
    // 响应错误处理
    return Promise.reject(err);
})
/** */
//一个 Promise 对象有三种状态：
//Pending（进行中）：初始状态，表示异步操作正在进行中，尚未完成。
//Fulfilled（已成功）：操作已经成功完成，并返回了结果。在这种状态下，Promise 对象触发了 resolve 回调函数。
//Rejected（已失败）：操作未能成功完成，发生了错误或异常。在这种状态下，Promise 对象触发了 reject 回调函数。
/** */

let instance = this.$axios.interceptors.request.use(config=>{
    config.headers = {
        token: ''
    }
    return config
})
//取消拦截
this.$axios.interceptors.request.eject(instance);

/** */
this.$axios.get('/url').then(res={
    //未出错处理
}).catch(err=>{//可以捕获错误
    //请求拦截器和响应拦截器抛出错误时，返回的err对象会传给当前函数的err对象

    console.log(err);
})
//** */
let source = this.$axios.CancelToken.source();
this.$axios.get('/goods.json',{
				cancelToken: source.token//指定要使用的取消令牌
			}).then(res=>{//出错时它不会执行
				console.log(res)
			}).catch(err=>{//接收cancel发送的错误信息
				//取消请求后会执行该方法
				console.log(err)
			})
/*调用 cancel 方法后，会触发响应拦截器中的 catch，
并传递一个包含取消信息的 error 对象。*/
source.cancel('取消后的信息');
/** */
this.$axios({
    method: 'get',//请求方式
//baseURL(http://localhost:8080)url(/goods.json)?params(id=1)
    url: '/goods.json',//会接在baseURL后面
    params: {//将参数拼接在URL上
        id:1
    }
}).then(res=>{//请求成功后执行的
    console.log(res.data);
},err=>{//请求失败
    console.log(err);
})
/** */
this.$axios.get('/goods.json',{
    params: {
        id:1
    }
}).then(res=>{
        console.log(res.data);
}).catch(err=>{
        console.log(err);
})
/** */
this.$axios({
	method: 'post',
	url: '/url',
	data: {//封装在请求体当中
		id:1
	}
}).then(res=>{
	console.log(res.data);
},err=>{
	console.log(err);
})
/** */
this.$axios.post('/url',{
    id:1
}).then(res=>{
    console.log(res.data);
},err=>{
    console.log(err);
})
/** */

    this.$axios({
        method: 'post',
        url: '/url',
        data: {//封装在请求体当中
            id:1
        }
    }).then(res=>{
        console.log(res.data);
    },err=>{
        console.log(err);
    })
/**
 */
console.log(typeof 123);
console.log(typeof "Hello,World!");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

let a = 123;
//null和undefined这两个值没有toString()方法
let s = a.toString();//不会影响到原变量

let s1 = String(a);//  

a = a + "xxx";//字符串拼接

let a1 = "abc";
a1 = Number(a1);
a1 = parseFloat(a1);
a1 = parseInt(a1);


