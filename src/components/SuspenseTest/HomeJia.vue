<template>
    <div class="box1">
        <header>
            <h1>哈士奇数据可视化-HSQ</h1>
            <div class="showTime"></div>
        </header>

        <section class="mainbox">
            <div class="column">
                <div class="panl1 bar">
                    <h2>柱形图-星球业</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1 bar2">
                    <h2>太阳能量</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1 bar3">
                    <h2>黑洞分布</h2>
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
                <div class="panl1 bar4">
                    <h2>星球资源</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1 bar5">
                    <h2>月球计划</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
                <div class="panl1 bar6">
                    <h2>南天门计划</h2>
                    <div class="chart"></div>
                    <div class="panl1-sooter"></div>
                </div>
            </div>
        </section>
         
    </div>
</template>
 
<script>
import viewJs from '../../assets/js/flexible'
import * as echarts from "../../../echarts/echarts.min.js"; //导入echarts
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
       this.chart1();
       this.chart2();
       this.chart3();
       this.chart4();
       this.chart5();
       this.chart6();
       this.chart8();
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
        //中间大图
        chart8(){
            let myCharts = echarts.init(document.querySelector(".chart1"));
            const colors = ['#FFAE57', '#FF7853', '#EA5151', '#CC3F57', '#9A2555'];
const bgColor = '#2E2733';
const itemStyle = {
  star5: {
    color: colors[0]
  },
  star4: {
    color: colors[1]
  },
  star3: {
    color: colors[2]
  },
  star2: {
    color: colors[3]
  }
};
const data = [
  {
    name: '虚构',
    itemStyle: {
      color: colors[1]
    },
    children: [
      {
        name: '小说',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '疼'
              },
              {
                name: '慈悲'
              },
              {
                name: '楼下的房客'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '虚无的十字架'
              },
              {
                name: '无声告白'
              },
              {
                name: '童年的终结'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '疯癫老人日记'
              }
            ]
          }
        ]
      },
      {
        name: '其他',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '纳博科夫短篇小说全集'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '安魂曲'
              },
              {
                name: '人生拼图版'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '比起爱你，我更需要你'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    name: '非虚构',
    itemStyle: {
      color: colors[2]
    },
    children: [
      {
        name: '设计',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '无界面交互'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '数字绘图的光照与渲染技术'
              },
              {
                name: '日本建筑解剖书'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '奇幻世界艺术\n&RPG地图绘制讲座'
              }
            ]
          }
        ]
      },
      {
        name: '社科',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '痛点'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '卓有成效的管理者'
              },
              {
                name: '进化'
              },
              {
                name: '后物欲时代的来临'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '疯癫与文明'
              }
            ]
          }
        ]
      },
      {
        name: '心理',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '我们时代的神经症人格'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '皮格马利翁效应'
              },
              {
                name: '受伤的人'
              }
            ]
          },
          {
            name: '3☆'
          },
          {
            name: '2☆',
            children: [
              {
                name: '迷恋'
              }
            ]
          }
        ]
      },
      {
        name: '居家',
        children: [
          {
            name: '4☆',
            children: [
              {
                name: '把房子住成家'
              },
              {
                name: '只过必要生活'
              },
              {
                name: '北欧简约风格'
              }
            ]
          }
        ]
      },
      {
        name: '绘本',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '设计诗'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: '假如生活糊弄了你'
              },
              {
                name: '博物学家的神秘动物图鉴'
              }
            ]
          },
          {
            name: '3☆',
            children: [
              {
                name: '方向'
              }
            ]
          }
        ]
      },
      {
        name: '哲学',
        children: [
          {
            name: '4☆',
            children: [
              {
                name: '人生的智慧'
              }
            ]
          }
        ]
      },
      {
        name: '技术',
        children: [
          {
            name: '5☆',
            children: [
              {
                name: '代码整洁之道'
              }
            ]
          },
          {
            name: '4☆',
            children: [
              {
                name: 'Three.js 开发指南'
              }
            ]
          }
        ]
      }
    ]
  }
];
for (let j = 0; j < data.length; ++j) {
  let level1 = data[j].children;
  for (let i = 0; i < level1.length; ++i) {
    let block = level1[i].children;
    let bookScore = [];
    let bookScoreId;
    for (let star = 0; star < block.length; ++star) {
      let style = (function (name) {
        switch (name) {
          case '5☆':
            bookScoreId = 0;
            return itemStyle.star5;
          case '4☆':
            bookScoreId = 1;
            return itemStyle.star4;
          case '3☆':
            bookScoreId = 2;
            return itemStyle.star3;
          case '2☆':
            bookScoreId = 3;
            return itemStyle.star2;
        }
      })(block[star].name);
      block[star].label = {
        color: style.color,
        downplay: {
          opacity: 0.5
        }
      };
      if (block[star].children) {
        style = {
          opacity: 1,
          color: style.color
        };
        block[star].children.forEach(function (book) {
          book.value = 1;
          book.itemStyle = style;
          book.label = {
            color: style.color
          };
          let value = 1;
          if (bookScoreId === 0 || bookScoreId === 3) {
            value = 5;
          }
          if (bookScore[bookScoreId]) {
            bookScore[bookScoreId].value += value;
          } else {
            bookScore[bookScoreId] = {
              color: colors[bookScoreId],
              value: value
            };
          }
        });
      }
    }
    level1[i].itemStyle = {
      color: data[j].itemStyle.color
    };
  }
}
            let option = {
                color: colors,
                series: [
                    {
                    type: 'sunburst',
                    center: ['50%', '48%'],
                    data: data,
                    sort: function (a, b) {
                        if (a.depth === 1) {
                        return b.getValue() - a.getValue();
                        } else {
                        return a.dataIndex - b.dataIndex;
                        }
                    },
                    label: {
                        rotate: 'radial',
                        color: bgColor
                    },
                    itemStyle: {
                        borderColor: bgColor,
                        borderWidth: 2
                    },
                    levels: [
                        {},
                        {
                        r0: 0,
                        r: 40,
                        label: {
                            rotate: 0
                        }
                        },
                        {
                        r0: 40,
                        r: 105
                        },
                        {
                        r0: 115,
                        r: 140,
                        itemStyle: {
                            shadowBlur: 2,
                            shadowColor: colors[2],
                            color: 'transparent'
                        },
                        label: {
                            rotate: 'tangential',
                            fontSize: 10,
                            color: colors[0]
                        }
                        },
                        {
                        r0: 140,
                        r: 145,
                        itemStyle: {
                            shadowBlur: 80,
                            shadowColor: colors[0]
                        },
                        label: {
                            position: 'outside',
                            textShadowBlur: 5,
                            textShadowColor: '#333'
                        },
                        downplay: {
                            label: {
                            opacity: 0.5
                            }
                        }
                        }
                    ]
                    }
                ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        },
        //左边第一个图表
        chart1(){
            let myCharts = echarts.init(document.querySelector(".bar .chart"));
            let option = {
                //color:['red', 'break'],//设置每条线的颜色
                // title: {//标题
                //     text: 'Stacked Line'
                // },
                tooltip: {//鼠标放上去提示
                    trigger: 'axis'
                },
                legend: {//图例组件
                    data: ['Email', 'Union Ads', 'Video Ads', 'Direct']
                },
                grid: {//绘图网格
                    left: '3%',
                    right: '4%',
                    bottom: '1%',
                    containLabel: true//是否显示刻度
                },
                toolbox: {//右上侧工具箱
                    feature: {
                    saveAsImage: {}
                    }
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    //修改刻度标签的相关样式
                    axisLabel: {
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12",
                    },
                    //x轴线是否显示
                    axisLine: {
                        show: false
                    }
                },
                yAxis: {
                    type: 'value',
                    //修改刻度标签的相关样式
                    axisLabel: {
                        color: "rgba(255, 255, 255, 0.6)",
                        fontSize: "12",
                    },
                    //y轴线竖直方向的线条
                    axisLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.1)"
                        }
                    },
                    //y轴横线的样式
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255, 255, 255, 0.1)",
                        }
                    }
                },
                series: [//系列列表
                    {
                    name: 'Email',
                    type: 'line',
                    data: [50, 132, 101, 134, 90, 230, 210]
                    },
                    {
                    name: 'Union Ads',
                    type: 'line',//表示折线图
                    data: [82, 182, 191, 234, 290, 330, 310]
                    },
                    {
                    name: 'Video Ads',
                    type: 'line',
                    data: [155, 232, 201, 154, 190, 330, 399]
                    },
                    {
                    name: 'Direct',
                    type: 'line',
                    data: [232, 332, 301, 334, 390, 330, 320]
                    }
                ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        },
        chart2(){
            let myCharts = echarts.init(document.querySelector(".bar2 .chart"));
            let option = {
                toolbox: {
                    show: true,
                    feature: {
                    mark: { show: true },
                    dataView: { show: true, readOnly: false },
                    restore: { show: true },
                    saveAsImage: { show: true }
                    }
                },
                series: [
                    {
                        name: 'Nightingale Chart',
                        type: 'pie',
                        radius: [10, 100],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        itemStyle: {
                            borderRadius: 5
                        },
                        data: [
                        { value: 40, name: '青铜', label: { textStyle: { color: '#ff0000' } } },
                        { value: 38, name: '白银', label: { textStyle: { color: '#00ff00' } } },
                        { value: 32, name: '铂金', label: { textStyle: { color: '#0000ff' } } },
                        { value: 30, name: '黄金', label: { textStyle: { color: '#ff00ff' } } },
                        { value: 28, name: '钻石', label: { textStyle: { color: '#ffff00' } } },
                        { value: 26, name: '星耀', label: { textStyle: { color: '#00ffff' } } },
                        { value: 22, name: '王者', label: { textStyle: { color: '#888' } } },
                        { value: 18, name: '嘴强巅峰', label: { textStyle: { color: 'rgb(238, 197, 102)' } } }
                        ]
                    }
                ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        },
        chart3(){
            let myCharts = echarts.init(document.querySelector(".bar3 .chart"));
            let base = +new Date(1968, 9, 3);
            let oneDay = 24 * 3600 * 1000;
            let date = [];
            let data = [Math.random() * 300];
            for (let i = 1; i < 20000; i++) {
            var now = new Date((base += oneDay));
            date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
            data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
            }
            let option = {
            tooltip: {
                trigger: 'axis',
                position: function (pt) {
                return [pt[0], '10%'];
                }
            },
            title: {
                left: 'center',
                text: 'Large Area Chart'
            },
            toolbox: {
                feature: {
                dataZoom: {
                    yAxisIndex: 'none'
                },
                restore: {},
                saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: date
            },
            yAxis: {
                type: 'value',
                boundaryGap: [0, '100%']
            },
            dataZoom: [
                {
                type: 'inside',
                start: 0,
                end: 10
                },
                {
                start: 0,
                end: 10
                }
            ],
            series: [
                {
                name: 'Fake Data',
                type: 'line',
                symbol: 'none',
                sampling: 'lttb',
                itemStyle: {
                    color: 'rgb(255, 70, 131)'
                },
                areaStyle: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    {
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    },
                    {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }
                    ])
                },
                data: data
                }
            ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        },
        chart4(){
            let myCharts = echarts.init(document.querySelector(".bar4 .chart"));
            let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"]

            let option = {
                tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                }
                },
                legend: {
                    show:false
                },
                grid: {
                left: '23%',
                right: '4%',
                bottom: '18%',
                },
                xAxis: {
                    show: false
                },
                yAxis: {
                type: 'category',
                data: [ '红宝石', '水晶', 'C12', 'TNT', 'HSQ-C4'],
                axisLine: {
                    show: false
                },
                axisLabel: {
                    color: "#fff"
                },
                axisTick: {
                    show: false,
                }
                },
                series: [
                {
                    name: '条',
                    type: 'bar',
                    data: [23489, 29034, 104970, 131744, 630230],
                    itemStyle: {//设置圆角
                        barBorderRadius: 20,
                        color: function(params){
                            return myColor[params.dataIndex];
                        }
                    },
                    //设置柱子间距
                    barCategoryGap: 20,
                    //设置柱子宽度
                    barWidth: 25,
                    label: {
                        show: true,
                        position: "inside",
                        formatter: "{c}%",
                    },
                },
                {
                    name: '框',
                    type: 'bar',
                    //barCategoryGap: 50,
                    barWidth: 50,
                    data: [19325, 23438, 31000, 121594, 134141, 681807],
                    itemStyle: {
                        color: "none",
                        borderColor: "#00c1de",
                        borderWidth: 2,
                        barBorderRadius: 15,
                    }
                }
                ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            }) 
        },
        chart5(){
            let myCharts = echarts.init(document.querySelector(".bar5 .chart"));
            // Schema:
            // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
            const dataBJ = [
            [55, 9, 56, 0.46, 18, 6, 1],
            [25, 11, 21, 0.65, 34, 9, 2],
            [56, 7, 63, 0.3, 14, 5, 3],
            [33, 7, 29, 0.33, 16, 6, 4],
            [42, 24, 44, 0.76, 40, 16, 5],
            [82, 58, 90, 1.77, 68, 33, 6],
            [74, 49, 77, 1.46, 48, 27, 7],
            [78, 55, 80, 1.29, 59, 29, 8],
            [267, 216, 280, 4.8, 108, 64, 9],
            [185, 127, 216, 2.52, 61, 27, 10],
            [39, 19, 38, 0.57, 31, 15, 11],
            [41, 11, 40, 0.43, 21, 7, 12],
            [64, 38, 74, 1.04, 46, 22, 13],
            [108, 79, 120, 1.7, 75, 41, 14],
            [108, 63, 116, 1.48, 44, 26, 15],
            [33, 6, 29, 0.34, 13, 5, 16],
            [94, 66, 110, 1.54, 62, 31, 17],
            [186, 142, 192, 3.88, 93, 79, 18],
            [57, 31, 54, 0.96, 32, 14, 19],
            [22, 8, 17, 0.48, 23, 10, 20],
            [39, 15, 36, 0.61, 29, 13, 21],
            [94, 69, 114, 2.08, 73, 39, 22],
            [99, 73, 110, 2.43, 76, 48, 23],
            [31, 12, 30, 0.5, 32, 16, 24],
            [42, 27, 43, 1, 53, 22, 25],
            [154, 117, 157, 3.05, 92, 58, 26],
            [234, 185, 230, 4.09, 123, 69, 27],
            [160, 120, 186, 2.77, 91, 50, 28],
            [134, 96, 165, 2.76, 83, 41, 29],
            [52, 24, 60, 1.03, 50, 21, 30],
            [46, 5, 49, 0.28, 10, 6, 31]
            ];
            const dataGZ = [
            [26, 37, 27, 1.163, 27, 13, 1],
            [85, 62, 71, 1.195, 60, 8, 2],
            [78, 38, 74, 1.363, 37, 7, 3],
            [21, 21, 36, 0.634, 40, 9, 4],
            [41, 42, 46, 0.915, 81, 13, 5],
            [56, 52, 69, 1.067, 92, 16, 6],
            [64, 30, 28, 0.924, 51, 2, 7],
            [55, 48, 74, 1.236, 75, 26, 8],
            [76, 85, 113, 1.237, 114, 27, 9],
            [91, 81, 104, 1.041, 56, 40, 10],
            [84, 39, 60, 0.964, 25, 11, 11],
            [64, 51, 101, 0.862, 58, 23, 12],
            [70, 69, 120, 1.198, 65, 36, 13],
            [77, 105, 178, 2.549, 64, 16, 14],
            [109, 68, 87, 0.996, 74, 29, 15],
            [73, 68, 97, 0.905, 51, 34, 16],
            [54, 27, 47, 0.592, 53, 12, 17],
            [51, 61, 97, 0.811, 65, 19, 18],
            [91, 71, 121, 1.374, 43, 18, 19],
            [73, 102, 182, 2.787, 44, 19, 20],
            [73, 50, 76, 0.717, 31, 20, 21],
            [84, 94, 140, 2.238, 68, 18, 22],
            [93, 77, 104, 1.165, 53, 7, 23],
            [99, 130, 227, 3.97, 55, 15, 24],
            [146, 84, 139, 1.094, 40, 17, 25],
            [113, 108, 137, 1.481, 48, 15, 26],
            [81, 48, 62, 1.619, 26, 3, 27],
            [56, 48, 68, 1.336, 37, 9, 28],
            [82, 92, 174, 3.29, 0, 13, 29],
            [106, 116, 188, 3.628, 101, 16, 30],
            [118, 50, 0, 1.383, 76, 11, 31]
            ];
            const dataSH = [
            [91, 45, 125, 0.82, 34, 23, 1],
            [65, 27, 78, 0.86, 45, 29, 2],
            [83, 60, 84, 1.09, 73, 27, 3],
            [109, 81, 121, 1.28, 68, 51, 4],
            [106, 77, 114, 1.07, 55, 51, 5],
            [109, 81, 121, 1.28, 68, 51, 6],
            [106, 77, 114, 1.07, 55, 51, 7],
            [89, 65, 78, 0.86, 51, 26, 8],
            [53, 33, 47, 0.64, 50, 17, 9],
            [80, 55, 80, 1.01, 75, 24, 10],
            [117, 81, 124, 1.03, 45, 24, 11],
            [99, 71, 142, 1.1, 62, 42, 12],
            [95, 69, 130, 1.28, 74, 50, 13],
            [116, 87, 131, 1.47, 84, 40, 14],
            [108, 80, 121, 1.3, 85, 37, 15],
            [134, 83, 167, 1.16, 57, 43, 16],
            [79, 43, 107, 1.05, 59, 37, 17],
            [71, 46, 89, 0.86, 64, 25, 18],
            [97, 71, 113, 1.17, 88, 31, 19],
            [84, 57, 91, 0.85, 55, 31, 20],
            [87, 63, 101, 0.9, 56, 41, 21],
            [104, 77, 119, 1.09, 73, 48, 22],
            [87, 62, 100, 1, 72, 28, 23],
            [168, 128, 172, 1.49, 97, 56, 24],
            [65, 45, 51, 0.74, 39, 17, 25],
            [39, 24, 38, 0.61, 47, 17, 26],
            [39, 24, 39, 0.59, 50, 19, 27],
            [93, 68, 96, 1.05, 79, 29, 28],
            [188, 143, 197, 1.66, 99, 51, 29],
            [174, 131, 174, 1.55, 108, 50, 30],
            [187, 143, 201, 1.39, 89, 53, 31]
            ];
            const lineStyle = {
            width: 1,
            opacity: 0.5
            };
            let option = {
            radar: {
                indicator: [
                { name: 'AQI', max: 300 },
                { name: 'PM2.5', max: 250 },
                { name: 'PM10', max: 300 },
                { name: 'CO', max: 5 },
                { name: 'NO2', max: 200 },
                { name: 'SO2', max: 100 }
                ],
                shape: 'circle',
                splitNumber: 5,
                axisName: {
                color: 'rgb(238, 197, 102)'
                },
                splitLine: {
                lineStyle: {
                    color: [
                    'rgba(238, 197, 102, 0.1)',
                    'rgba(238, 197, 102, 0.2)',
                    'rgba(238, 197, 102, 0.4)',
                    'rgba(238, 197, 102, 0.6)',
                    'rgba(238, 197, 102, 0.8)',
                    'rgba(238, 197, 102, 1)'
                    ].reverse()
                }
                },
                splitArea: {
                show: false
                },
                axisLine: {
                lineStyle: {
                    color: 'rgba(238, 197, 102, 0.5)'
                }
                }
            },
            series: [
                {
                name: 'Beijing',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataBJ,
                symbol: 'none',
                itemStyle: {
                    color: '#F9713C'
                },
                areaStyle: {
                    opacity: 0.1
                }
                },
                {
                name: 'Shanghai',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataSH,
                symbol: 'none',
                itemStyle: {
                    color: '#B3E4A1'
                },
                areaStyle: {
                    opacity: 0.05
                }
                },
                {
                name: 'Guangzhou',
                type: 'radar',
                lineStyle: lineStyle,
                data: dataGZ,
                symbol: 'none',
                itemStyle: {
                    color: 'rgb(238, 197, 102)'
                },
                areaStyle: {
                    opacity: 0.05
                }
                }
            ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        },
        chart6(){
            let myCharts = echarts.init(document.querySelector(".bar6 .chart"));
            // Schema:
            // date,AQIindex,PM2.5,PM10,CO,NO2,SO2
            const dataBJ = [
            [1, 55, 9, 56, 0.46, 18, 6, '良'],
            [2, 25, 11, 21, 0.65, 34, 9, '优'],
            [3, 56, 7, 63, 0.3, 14, 5, '良'],
            [4, 33, 7, 29, 0.33, 16, 6, '优'],
            [5, 42, 24, 44, 0.76, 40, 16, '优'],
            [6, 82, 58, 90, 1.77, 68, 33, '良'],
            [7, 74, 49, 77, 1.46, 48, 27, '良'],
            [8, 78, 55, 80, 1.29, 59, 29, '良'],
            [9, 267, 216, 280, 4.8, 108, 64, '重度污染'],
            [10, 185, 127, 216, 2.52, 61, 27, '中度污染'],
            [11, 39, 19, 38, 0.57, 31, 15, '优'],
            [12, 41, 11, 40, 0.43, 21, 7, '优'],
            [13, 64, 38, 74, 1.04, 46, 22, '良'],
            [14, 108, 79, 120, 1.7, 75, 41, '轻度污染'],
            [15, 108, 63, 116, 1.48, 44, 26, '轻度污染'],
            [16, 33, 6, 29, 0.34, 13, 5, '优'],
            [17, 94, 66, 110, 1.54, 62, 31, '良'],
            [18, 186, 142, 192, 3.88, 93, 79, '中度污染'],
            [19, 57, 31, 54, 0.96, 32, 14, '良'],
            [20, 22, 8, 17, 0.48, 23, 10, '优'],
            [21, 39, 15, 36, 0.61, 29, 13, '优'],
            [22, 94, 69, 114, 2.08, 73, 39, '良'],
            [23, 99, 73, 110, 2.43, 76, 48, '良'],
            [24, 31, 12, 30, 0.5, 32, 16, '优'],
            [25, 42, 27, 43, 1, 53, 22, '优'],
            [26, 154, 117, 157, 3.05, 92, 58, '中度污染'],
            [27, 234, 185, 230, 4.09, 123, 69, '重度污染'],
            [28, 160, 120, 186, 2.77, 91, 50, '中度污染'],
            [29, 134, 96, 165, 2.76, 83, 41, '轻度污染'],
            [30, 52, 24, 60, 1.03, 50, 21, '良'],
            [31, 46, 5, 49, 0.28, 10, 6, '优']
            ];
            var dataGZ = [
            [1, 26, 37, 27, 1.163, 27, 13, '优'],
            [2, 85, 62, 71, 1.195, 60, 8, '良'],
            [3, 78, 38, 74, 1.363, 37, 7, '良'],
            [4, 21, 21, 36, 0.634, 40, 9, '优'],
            [5, 41, 42, 46, 0.915, 81, 13, '优'],
            [6, 56, 52, 69, 1.067, 92, 16, '良'],
            [7, 64, 30, 28, 0.924, 51, 2, '良'],
            [8, 55, 48, 74, 1.236, 75, 26, '良'],
            [9, 76, 85, 113, 1.237, 114, 27, '良'],
            [10, 91, 81, 104, 1.041, 56, 40, '良'],
            [11, 84, 39, 60, 0.964, 25, 11, '良'],
            [12, 64, 51, 101, 0.862, 58, 23, '良'],
            [13, 70, 69, 120, 1.198, 65, 36, '良'],
            [14, 77, 105, 178, 2.549, 64, 16, '良'],
            [15, 109, 68, 87, 0.996, 74, 29, '轻度污染'],
            [16, 73, 68, 97, 0.905, 51, 34, '良'],
            [17, 54, 27, 47, 0.592, 53, 12, '良'],
            [18, 51, 61, 97, 0.811, 65, 19, '良'],
            [19, 91, 71, 121, 1.374, 43, 18, '良'],
            [20, 73, 102, 182, 2.787, 44, 19, '良'],
            [21, 73, 50, 76, 0.717, 31, 20, '良'],
            [22, 84, 94, 140, 2.238, 68, 18, '良'],
            [23, 93, 77, 104, 1.165, 53, 7, '良'],
            [24, 99, 130, 227, 3.97, 55, 15, '良'],
            [25, 146, 84, 139, 1.094, 40, 17, '轻度污染'],
            [26, 113, 108, 137, 1.481, 48, 15, '轻度污染'],
            [27, 81, 48, 62, 1.619, 26, 3, '良'],
            [28, 56, 48, 68, 1.336, 37, 9, '良'],
            [29, 82, 92, 174, 3.29, 0, 13, '良'],
            [30, 106, 116, 188, 3.628, 101, 16, '轻度污染'],
            [31, 118, 50, 0, 1.383, 76, 11, '轻度污染']
            ];
            var dataSH = [
            [1, 91, 45, 125, 0.82, 34, 23, '良'],
            [2, 65, 27, 78, 0.86, 45, 29, '良'],
            [3, 83, 60, 84, 1.09, 73, 27, '良'],
            [4, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
            [5, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
            [6, 109, 81, 121, 1.28, 68, 51, '轻度污染'],
            [7, 106, 77, 114, 1.07, 55, 51, '轻度污染'],
            [8, 89, 65, 78, 0.86, 51, 26, '良'],
            [9, 53, 33, 47, 0.64, 50, 17, '良'],
            [10, 80, 55, 80, 1.01, 75, 24, '良'],
            [11, 117, 81, 124, 1.03, 45, 24, '轻度污染'],
            [12, 99, 71, 142, 1.1, 62, 42, '良'],
            [13, 95, 69, 130, 1.28, 74, 50, '良'],
            [14, 116, 87, 131, 1.47, 84, 40, '轻度污染'],
            [15, 108, 80, 121, 1.3, 85, 37, '轻度污染'],
            [16, 134, 83, 167, 1.16, 57, 43, '轻度污染'],
            [17, 79, 43, 107, 1.05, 59, 37, '良'],
            [18, 71, 46, 89, 0.86, 64, 25, '良'],
            [19, 97, 71, 113, 1.17, 88, 31, '良'],
            [20, 84, 57, 91, 0.85, 55, 31, '良'],
            [21, 87, 63, 101, 0.9, 56, 41, '良'],
            [22, 104, 77, 119, 1.09, 73, 48, '轻度污染'],
            [23, 87, 62, 100, 1, 72, 28, '良'],
            [24, 168, 128, 172, 1.49, 97, 56, '中度污染'],
            [25, 65, 45, 51, 0.74, 39, 17, '良'],
            [26, 39, 24, 38, 0.61, 47, 17, '优'],
            [27, 39, 24, 39, 0.59, 50, 19, '优'],
            [28, 93, 68, 96, 1.05, 79, 29, '良'],
            [29, 188, 143, 197, 1.66, 99, 51, '中度污染'],
            [30, 174, 131, 174, 1.55, 108, 50, '中度污染'],
            [31, 187, 143, 201, 1.39, 89, 53, '中度污染']
            ];
            var schema = [
            { name: 'date', index: 0, text: '日期' },
            { name: 'AQIindex', index: 1, text: 'AQI' },
            { name: 'PM25', index: 2, text: 'PM2.5' },
            { name: 'PM10', index: 3, text: 'PM10' },
            { name: 'CO', index: 4, text: ' CO' },
            { name: 'NO2', index: 5, text: 'NO2' },
            { name: 'SO2', index: 6, text: 'SO2' },
            { name: '等级', index: 7, text: '等级' }
            ];
            var lineStyle = {
            width: 1,
            opacity: 0.5
            };
            let option = {
            tooltip: {
                padding: 10,
                backgroundColor: '#222',
                borderColor: '#777',
                borderWidth: 1
            },
            parallelAxis: [
                {
                dim: 0,
                name: schema[0].text,
                inverse: true,
                max: 31,
                nameLocation: 'start'
                },
                { dim: 1, name: schema[1].text },
                { dim: 2, name: schema[2].text },
                { dim: 3, name: schema[3].text },
                { dim: 4, name: schema[4].text },
                { dim: 5, name: schema[5].text },
                { dim: 6, name: schema[6].text },
                {
                dim: 7,
                name: schema[7].text,
                type: 'category',
                data: ['优', '良', '轻度污染', '中度污染', '重度污染', '严重污染']
                }
            ],
            visualMap: {
                show: true,
                min: 0,
                max: 150,
                dimension: 2,
                inRange: {
                color: ['#d94e5d', '#eac736', '#50a3ba'].reverse()
                // colorAlpha: [0, 1]
                }
            },
            parallel: {
                left: '7%',
                right: '13%',
                bottom: 10,
                top: 50,
                parallelAxisDefault: {
                type: 'value',
                name: 'AQI指数',
                nameLocation: 'end',
                nameGap: 20,
                nameTextStyle: {
                    color: '#fff',
                    fontSize: 12
                },
                axisLine: {
                    show:false
                },
                axisTick: {
                    show:false
                },
                splitLine: {
                    show: false
                },
                axisLabel: {
                    color: 'rgba(30, 255, 0, 0.1)',//标签的颜色
                }
                }
            },
            series: [
                {
                name: 'Beijing',
                type: 'parallel',
                lineStyle: lineStyle,
                data: dataBJ
                },
                {
                name: 'Shanghai',
                type: 'parallel',
                lineStyle: lineStyle,
                data: dataSH
                },
                {
                name: 'Guangzhou',
                type: 'parallel',
                lineStyle: lineStyle,
                data: dataGZ
                }
            ]
            };
            myCharts.setOption(option);
            window.addEventListener("resize", function(){
                myCharts.resize();
            })
        }
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
}
.no {
    background-color: rgba(101, 132, 226, 0.1);
    padding: .1875rem;
}
</style>