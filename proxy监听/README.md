
### 仅支持cdn引入

```javascript


// 使用过程

var dbjs = new dbjs()
var data = dbjs.monitor({sex:10}) //创建监听一个对象

// 监听sex 可以发单个字符串 可以发数组
dbjs.get(['sex'],function(res){
    console.log(res);
})
// 或者监听单个
dbjs.get('sex'],function(res){
    console.log(res);
})
// sex改值

data.sex = 10


```