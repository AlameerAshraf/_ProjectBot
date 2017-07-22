var mongodb = require('mongodb');

var exported = module.exports = {} ; 



var client = mongodb.MongoClient; 
exported.ConnectToDataBase = function(){
    var ret  = 2 ; 
    
    var dbaccessurl = "mongodb://127.0.0.1:27017/Movyasi" ;

    return new Promise((resolve,reject) =>{
        client.connect(dbaccessurl , function(err, db){
        if(err){
            reject(0);
        }
        else{
            resolve(1);
            // Function To insert Record - record is aparamter , collection is a paramter .. 
            exported.InsertRecord = function(Collection , Object){
                return new Promise((resolve , reject) => {
                    // Check if the collection is existed in db ! 
                  db.listCollections().toArray((err,collinfo) => {
                      collinfo.forEach(function(element) {
                          if(Collection == element.name){
                              var ObjColl = db.collection(Collection);
                              ObjColl.insertOne(Object , (err,res)=>{
                                  if(!err){
                                       resolve(1);
                                  }
                                  else{
                                      reject(0);
                                  }
                              })
                          }else{
                              console.log("Collection to insert is not a valid collection in Db"); 
                          }
                      });
                  })
                });
            }
        }
    })
})
}


