# 概要
本项目是模仿bootstarp3的栅格系统,bootstarp3的栅格声明精妙,但是在栅格间距方面做的没有bootstarp2好.
bootstarp2在栅格系统上模仿经典的blueprint,但是响应式方面不如bootstarp3灵活.
这个项目取2者的优点,提供仿[blueprint](http://www.blueprintcss.org/)并具备响应式的栅格系统,并兼容ie8(也因为支持了ie8,所以无法使栅格间距不固定,如果希望栅格间距为定值,可以使用calc属性修改源码,但这样就不兼容ie8/9了),注意ie8不支持响应式布局

# 使用方法
全部样式声明模仿bootstarp3,可参考[bootstarp3](http://v3.bootcss.com/css/#grid)的栅格系统的使用方法

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