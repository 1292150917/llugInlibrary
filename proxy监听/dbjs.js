
function dbjs(params) {
    this.getlist = {}
    this.setList = [] //判断第一次的监听
}
dbjs.prototype.get = function(s,callback){
    if(this.verdictType(s)  === '[object Array]'){
        s.map(v =>{
            this.operation(v,callback)
        })
    }else{
        this.operation(v,callback)
    }
}
dbjs.prototype.operation = function(s,callback){
    this.getlist[s] = callback
        // 判断是否之前有改过值
        this.setList.map((v,i) =>{
            if(v.property === s){
                callback(v)
                this.setList.splice(i,1)
            }
        })
}
dbjs.prototype.verdictType = function(s){
    return Object.prototype.toString.call(s)
}
dbjs.prototype.circulationServer = function(target, property, value){
    this.setList.push({target, property, value})
    this.getlist[property] && this.getlist[property]({target, property, value})
}
dbjs.prototype.monitor = function(params){
    return new Proxy(params, this.server)
}
dbjs.prototype.server = {
    get:function(){
        
    },
    set:function(target, property, value){
        dbjs.circulationServer(target, property, value)
        return value
    }
}