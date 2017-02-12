# 概要
本项目是模仿bootstrap3的栅格系统,bootstrap3的栅格声明精妙,但是使用起来比bootstrap2好复杂.
bootstrap2在栅格系统上模仿经典的blueprint,但是响应式方面不如bootstrap3灵活.
这个项目取2者的优点,提供仿[blueprint](http://www.blueprintcss.org/)并具备响应式的栅格系统,并兼容ie8/9(也因为支持了ie8/9,所以无法使栅格间距不固定,如果希望栅格间距为定值,可以使用calc属性修改源码,但这样就不兼容ie8/9了),注意ie8/9不支持响应式布局

# 使用方法
全部样式声明模仿bootstrap3,可参考[bootstrap3](http://v3.bootcss.com/css/#grid)的栅格系统的使用方法.项目共有两种栅格,一个是定栅格间距的布局,这种布局不兼容ie8/9,但是在栅格嵌套使用的时候看起来更整齐。另一种是百分比栅格间距的布局,这种布局没有第一种整齐,但是兼容ie8/9

# 初始化项目
构建项目,运行命令为
```
npm install
```

# build项目
生成dist目录。
```
npm run build
```
或者执行grunt
```
grunt
```