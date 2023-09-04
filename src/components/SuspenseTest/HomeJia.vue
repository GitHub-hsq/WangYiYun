<template>
    <div class="box1">
        <header>
            <h1>哈士奇数据可视化-HSQ</h1>
            <div class="showTime"></div>
        </header>

        <section class="mainbox">
            <div class="column">
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
            </div>
            <div class="column2">
                <div class="no">
                    <div class="no-hd">
                        <ul>
                            <li>9999</li>
                            <li>1000</li>
                        </ul>
                    </div>
                    <div class="no-bd">
                        <ul>
                            <li>星球数量</li>
                            <li>暗能量</li>
                        </ul>
                    </div>
                </div>
                <div class="map">
                    <div class="map1"></div>
                    <div class="map2"></div>
                    <div class="map3"></div>
                    <div class="chart1"></div>
                </div>
            </div>
            <div class="column">
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
            </div>
        </section>
         
    </div>
</template>
 
<script>
import viewJs from '../../assets/js/flexible'
export default{
    name:"HomeJia",
    data(){
        return{
        }
        
    },
    computed:{

    },
    mounted(){
       // this.viewJs();
       this.timeOut();
    },
    methods:{
        timeOut(){
            let t = null;
            t = setTimeout(time, 0);
            function time(){
                clearTimeout(t);
                let dt = new Date();
                let y = dt.getFullYear();
                let mt = dt.getMonth() + 1;
                let day = dt.getDate();
                let h = dt.getHours();
                let m = dt.getMinutes();
                let s = dt.getSeconds();
                document.querySelector(".showTime").innerHTML = '安全运行至：' + y + "年" + mt + "月" + day + "日" + "-" + h + "时" + m + "分" + s + "秒";
                t = setTimeout(time.bind(this), 1000); // 循环执行
            }
        },
    },
}
</script>
 
<style  scoped>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
li {
    list-style: none;
}
.no-hd {
    border: 1px solid rgb(25, 186, 139, 0.17);
}
.no-hd ul{
    display: flex;
}
.no-hd ul li{
    position: relative;
    flex: 1;
    line-height: 1rem;
    font-size: 0.875rem;
    color: rgb(0, 255, 251);
    text-align: center;
}
.no-hd ul li:first-child::after{
    content: "";
    position: absolute;
    top: 25%;
    height: 50%;
    width: 1px;
    right: 0;
    background: rgba(225, 225, 225, 0.2);
}
.no-bd ul{
    display: flex;
}
.no-bd ul li {
    flex: 1;
    text-align: center;
    color: rgba(225, 225, 225, 0.7);
    font-size: 0.25rem;
    height: 0.5rem;
    line-height: 0.5rem;
    padding-top: 0.125rem;
}
.map {
    position: relative;
    height: 10.125rem;
}
.map1{
    width: 6.475rem;
    height: 6.475rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../../assets/images/map.png);
    background-size: 100% 100%;
    opacity: 0.3;
}
.map2{
    width: 8.0375rem;
    height: 8.0375rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../../assets/images/lbx.png);
    background-size: 100% 100%;
    opacity: 0.6;
    animation: rotate1 15s linear infinite;
}
@keyframes rotate1 {
    form {
        transform: translate(-50%, -50%)
        rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%)
        rotate(360deg);
    }
}
.map3{
    width: 7.075rem;
    height: 7.075rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: url(../../assets/images/jt.png);
    background-size: 100% 100%;
    opacity: 0.6;
    animation: rotate2 15s linear infinite;
}
@keyframes rotate2 {
    form {
        transform: translate(-50%, -50%)
        rotate(0deg);
    }
    to {
        transform: translate(-50%, -50%)
        rotate(-360deg);
    }
}
.chart1 {
    position: absolute;
    top: 0;
    left: 0;
    background: url();
    width: 100%;
    height: 10.125rem;
}
.box1 {
    background: url(../../assets/images/bg.jpg)
    no-repeat top center;
    line-height: 1.15;

}

header {
    height: 1.25rem;
    background: url(../../assets/images/head_bg.png) no-repeat;
    background-size: 100% 100%;
    position: relative;
}

header h1 {
    font-size: .475rem;
    color: #fff;
    text-align: center;
    line-height: 1rem;
}

.showTime {
    position: absolute;
    right: 0.375rem;
    top: 0;
    line-height: 0.9375rem;
    color:rgba(225, 225, 225, 0.7);
    font-size: 0.25rem;
}

.mainbox {
    display: flex;
    min-width: 1024px;
    max-width: 1920px;
    margin: 0 auto;
    padding: 0.125rem 0.125rem 0;
}

.column {
    flex: 3;
}

.column2 {
    flex: 5;
    margin:0 .125rem .1875rem;
}

.panl1 {
    position: relative;
    height: 3.875rem;
    padding: 0 0.1875rem 0.5rem;
    border: 1px solid rgba(255, 186, 139, 0.17);
    margin-bottom: 0.1875rem;
    background: url(../../assets/images/line\(1\).png) rgba(225, 225, 225, 0.03);
}

.panl1::before {
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";/*在指定元素前插入的内容*/
}
.panl1::after {
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-top: 2px solid #02a6b5;
    content: "";/*在指定元素后插入的内容*/
}
.panl1-sooter::before{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 10px;
    height: 10px;
    border-left: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: "";/*在指定元素后插入的内容*/
}
.panl1-sooter::after{
    position: absolute;
    bottom: 0;
    right: 0;
    width: 10px;
    height: 10px;
    border-right: 2px solid #02a6b5;
    border-bottom: 2px solid #02a6b5;
    content: "";/*在指定元素后插入的内容*/
}
.panl1 h2 {
    height: 0.6rem;
    color:#fff;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.25rem;
    font-weight: 400;/*取消加粗*/
}
.chart {
    height: 3rem;
    background-color: #02a6b5;
}
.no {
    background-color: rgba(101, 132, 226, 0.1);
    padding: .1875rem;
}
</style>