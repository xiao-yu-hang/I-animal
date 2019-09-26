var pool=require('../pool');
module.exports =function(sql,params){
  return new Promise(function(resolve,reject){
    pool.query(sql,params,(err,result)=>{
      if(err) throw(err);
      else resolve(result);
    })
  })
}