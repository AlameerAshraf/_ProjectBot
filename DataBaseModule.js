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
                // Check if the collection is existed in db ! 
                  db.listCollections().toArray((err,collinfo) => {
                      collinfo.forEach(function(element) {
                          console.log(element.name)
                      });
                  })
            }
        }
    })
})
}

// exported.InsertRecord = function(Object){

// }
