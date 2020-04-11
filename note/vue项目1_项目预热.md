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
