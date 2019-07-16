# 前言

初学vue的我们用一个星期来校验一下自己这半个月的成果 ♪(^∇^*)

## 项目名称

穷游网demo

## 技术栈

vue2.5+vue-cli+vuex+vue-router+webpack+ES6/7+axios+sass+Vant ui 

## 项目运行

### 注意：由于涉及大量的ES6/7等新属性，node需要6.0以上的版本

```
    git clone https://github.com/liangliangMirror/QYdemo.git

    cd qywdemo

    npm install或yarn

    npm run serve

```

## 关于接口数据

此项目的所有接口数据都来源于配套的后台系统，[后台项目传送地址。](https://www.baidu.com)

如果想体验前后台同时开发，可以下载后台系统。

## 链接

- [穷游网官网 (￣_,￣ )](https://www.qyer.com/)

- [我们的demo (๑•̀ㅂ•́)و✧](http://47.101.143.75:3080)

## 部分截图

### 主页

<img src="https://github.com/gzh51904/qiongyou/blob/dev/src/assets/demoimg/dome1.png" width="365" height="619"/> <img src="https://github.com/gzh51904/qiongyou/blob/dev/src/assets/demoimg/dome3.gif" width="365" height="619"/> 


### 自动定位

<img src="https://github.com/gzh51904/qiongyou/blob/dev/src/assets/demoimg/dome2.png" width="365" height="619"/>


## 项目目标

- [x] 定位功能 -- 完成
- [x] 选择城市 -- 完成
- [x] 搜索地址 -- 完成
- [x] 轮播图 -- 完成
- [x] 主页瀑布流 -- 完成
- [x] 登录、注册 -- 完成
- [x] 城市详情页 -- 完成
- [x] 产品详情页 -- 完成



## 项目职责

- 项目分配
  - 梁唯汉
    - 主页数据的渲染
    - 主页请求axios的瀑布流
    - 主页的轮播图
    - 自动定位
    - 城市的模糊查询/中文英语都ok
    - 搜索记录的localStorage的应用
    - 搜索页的数据处理
    - 项目的分配和管理
  
  - 刘骏
    - 城市页面的数据渲染
    - 景区观光页的数据渲染
    - 景区观光页的下拉加载
    - 景区观光页的下拉菜单/筛选
    - vantUi的熟练应用
    - 产品详情的页面搭建
  
  - 吴广君
    - 登入/注册
    - 锦囊页数据渲染
    - nodeJs的搭配使用
    - 服务器的搭建
    - 注册登入的校验
    - mongdb的简单应用


## 项目布局

```

├─public 		  //公共资源
├─src			  //项目开发文件
│  ├─assets   			     
│  │  ├─demoimg    //项目截图
│  │  └─img		   //项目图片
│  ├─components    //组件
│  │  ├─home	   //首页组件
│  │  └─location   //定位组件
│  ├─js			  //js文件	
│  └─views         //单页面
└─tests
    └─unit


```

## 贡献者们/最棒的我们

<table><tbody><tr>
<td>
   <a href="https://github.com/liangliangMirror" title="liangliangMirror"> <img src="./favicon.ico/adi-constantin-C8Z5DvtWQMw-unsplash.jpg" width="100px" height="60px" /> </a></td>
   <td><a href="https://github.com/tree-file" title="tree-file"> <img src="./favicon.ico/50487470.jpg" width="100px"  height="60px" /></a></td>
  <td> <a href="https://github.com/MaxinFN/" title="MaxinFN"> <img src="./favicon.ico/kirill-sharkovski-kml8ToIqWN0-unsplash1.jpg" width="100px" height="60px" /> </a></td>
<tr></tbody></table> 
