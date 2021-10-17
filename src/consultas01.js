/*
Todos los documentos con todos sus campos
*/
db.coleccion01.find()
/*
{ "_id" : ObjectId("6156cea7eb37ff0e2dfafb53"), "nombre" : "Pepe", "edad" : 20 }
{ "_id" : ObjectId("6156cea7eb37ff0e2dfafb54"), "nombre" : "Lolo", "edad" : 19 }
...
*/
/*
Todos los documentos con edad igual a 20
*/
db.coleccion01.find({edad: 20})

/*
Todos los documentos de la colección
*/
db.inventory.find( {} )
/*
Los que tienen status con "D"
*/
db.inventory.find( {status: "D"} )

db.inventory.find( {status: {$eq: "D"} })

/**
 * Valor de qty es 20
 */
db.inventory.find({  qty: {$eq: 20 }    })

/*
Los que tengan "123" en el campo code de item
*/
db.inventory.find({ "item.code": {$eq: "123"} })