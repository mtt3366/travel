本章首先讲解项目环境的基础配置，在此基础上分析工程代码目录结构，延展讲解 Vue中单文件组件及单页面应用路由的概念，最后将带大家整理项目目录，完成 stylus、reset.css 等基础工具及样式的引入，完成项目开发前的准备工作。
![](https://user-gold-cdn.xitu.io/2020/4/8/1715a3ba9ac5adae?w=692&h=681&f=png&s=53986)

##

gitbash 可以执行一些linus的命令

真正在写大型项目的是偶,需要webpack去构建我们的项目

##
**注意,去哪网用的比较旧的vue-cli,现在已经用新的 @vue-cli了**

![](https://user-gold-cdn.xitu.io/2020/4/9/1715f4a08e3e4253?w=1191&h=680&f=png&s=326318)


先在github创建新的空项目,然后拉到本地
然后



![](https://user-gold-cdn.xitu.io/2020/4/9/1715f4beb1d24ff9?w=877&h=464&f=png&s=38702)



![](https://user-gold-cdn.xitu.io/2020/4/9/1715f6a339d788ae?w=1071&h=459&f=png&s=363493)

## 项目文件结构


![](https://user-gold-cdn.xitu.io/2020/4/9/1715f78f3c8f1bde?w=273&h=681&f=png&s=23669)
package.json第三方文件的依赖

package-lock.json是package的一个锁文件他可以确定安装的第三方包的版本,保持团队编程的统一

license是开源协议的说明

index.html为首页的模板文件

.postcssrc.js是postcss的配置项

.gitignore设置不会提交到git仓库中的文件

.eslintrc.js配置了写代码的一些规范,才不会有错误提示

.eslintignore下面的文件下,不会受到eslint的工具的检测

.editorconfig用来设置编辑器的语法,用来统一编辑器自动代码的格式化

![](https://user-gold-cdn.xitu.io/2020/4/9/1715f78a3780e94d?w=418&h=213&f=png&s=16952)

比如两个空格的缩进

.babelrc是对babel的配置,因为vue项目需要通过babel进行语法转换,把.vue等文件编译成浏览器能够执行的代码

static放静态资源,一些静态图片,或者要模拟的json数据

node_modules里面放的是项目依赖的第三方的node包

src目录下方得始终整个项目的源代码

main.js为整个项目的入口文件

App.vue是项目的根组件

router里面放的是项目的路由,都放在index.js文件里

components放的是项目要用的一些小组件

assets里面放的是项目需要用到的一些图片类的资源

config文件夹里放的是配置文件,index.js放的是基本配置,线上环境的配置放置在prod.env.js中

![](https://user-gold-cdn.xitu.io/2020/4/9/1715f8f00f943c1b?w=208&h=109&f=png&s=3496)
build项目放的是文件打包的webpack的一些内容

![](https://user-gold-cdn.xitu.io/2020/4/9/1715f8f1bcfba859?w=198&h=255&f=png&s=7023)

这个目录是vue-cli帮我们配置好的一些webpack的配置的集合,一般来说不需要去做太多修改

基本都在src里面做业务开发

##
![](https://user-gold-cdn.xitu.io/2020/4/11/171672b7601b2953?w=648&h=123&f=png&s=15899)

## Vue项目预热 - 单文件组件与Vue中的路由


![](https://user-gold-cdn.xitu.io/2020/4/11/171673700625f5d7?w=1232&h=680&f=png&s=384639)


![](https://user-gold-cdn.xitu.io/2020/4/11/171673733fa2eb1d?w=827&h=386&f=png&s=47913)


![](https://user-gold-cdn.xitu.io/2020/4/11/17167377d572a295?w=804&h=596&f=png&s=60027)

`components:{App}`,在项目里用了一个局部组件叫做app

`template:'<App/>'`模板组件里渲染出app

会把app这个组件显示在页面上

没有后缀名的话,webpack会帮我们找app.vue,app.js,app.json,一个个找,直到找到为止

### 单文件组件
.vue里面放的是一个vue组件
模板,逻辑,样式写在一起
### 路由
路由就是根据网址URL的不同,返回不同的内容给用户

router-view是当前路由地址所对应的的内容(根目录所对应的的内容)


![](https://user-gold-cdn.xitu.io/2020/4/11/17169515dbd16370?w=764&h=547&f=png&s=274225)

引入了一个router,用了一个router,router就是这个项目的路由配置的内容
![](https://user-gold-cdn.xitu.io/2020/4/11/171695253bffcd44?w=212&h=109&f=png&s=3521)
会自动帮我们引入router文件夹下index.js的内容


![](https://user-gold-cdn.xitu.io/2020/4/11/17169530110ab8bd?w=654&h=379&f=png&s=40532)

这个文件导出的内容就是一组路由的平配置项,意思是当访问根路径的时候,访问的就是helloword,helloword就是首页
![](https://user-gold-cdn.xitu.io/2020/4/11/17169542de8a239b?w=780&h=646&f=png&s=36315)
这里的内容

![](https://user-gold-cdn.xitu.io/2020/4/11/17169546c2603fba?w=495&h=804&f=png&s=70184)

相当于配置了之后，使用路由的那个标签就可以根据不同的地址来展现不同的组件

**当用户访问根路径的时候，我给用户展示的屎helloword组件，然后app.vue里面又写了<router-view>,这里面就是当前路由地址所对应的的内容**

![](https://user-gold-cdn.xitu.io/2020/4/11/171694e3e51204cf?w=698&h=451&f=png&s=150621)


路由的配置就放在router的文件夹下的index.js里面

### 修改项目配置



我们希望首页为自己的首页


![](https://user-gold-cdn.xitu.io/2020/4/11/171695e4d3448c20?w=938&h=543&f=png&s=285998)

![](https://user-gold-cdn.xitu.io/2020/4/11/171695d97a65ef21?w=791&h=627&f=png&s=222163)
@代表src所在的那个目录

再加一个list文件,一样的方法

![](https://user-gold-cdn.xitu.io/2020/4/11/171695f60b320c79?w=886&h=644&f=png&s=383695)
路径换成list的时候,首页app.vue里面的`<router-view>`会变成list

不同的路由显示不同的东西

## 多页面应用和单页面应用

![](https://user-gold-cdn.xitu.io/2020/4/11/1716967bb251428a?w=869&h=398&f=png&s=167458)

多页面应用每一次跳转后端都会返回新的html文件

只经历了一个http请求

vue中用`<router-link>`这样的标签进行路由跳转

![](https://user-gold-cdn.xitu.io/2020/4/11/17169715bc99a7be?w=701&h=439&f=png&s=40599)
这里是单页应用

进入首页就发送了一次请求

![](https://user-gold-cdn.xitu.io/2020/4/11/171696d3fb7eac76?w=1196&h=483&f=png&s=205565)
再点击去列表页,就不会发送请求,只会请求一次,然后点返回,依然不会请求html文件,在第一次请求完毕后就加载了所有内容

![](https://user-gold-cdn.xitu.io/2020/4/11/17169712c21e8e0d?w=684&h=372&f=png&s=18161)
**原理是通过js,来监听url的变化,当url变化,我们就把页面的内容清除掉,渲染成别的内容,吧下一个页面的内容挂载到页面上,这时候,这个路由不是后端来做,而是前端来做了,所以单页应用每次url改变就不会请求html文件了**

![](https://user-gold-cdn.xitu.io/2020/4/11/17169748373f2341?w=894&h=431&f=png&s=155015)

首屏会稍微慢一点,因为他会把的HTML文件请求下来之后,然后把一个包含所有逻辑的js文件请求下来,搜索引擎只认识html里面的你日用,不认识js里面的内容,所以seo比较差,排名效果比较差,vue中可以通过其他技术来解决这些问题,比如服务器端渲染等,这样,单页面应用就是一个完美的前端页面开发的解决方案了

## 移动端网页项目代码初始化
