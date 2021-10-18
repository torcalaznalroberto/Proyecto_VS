/* Todas las viviendas y sus caracteristicas */
db.viviendas.find()

/*
{ "_id" : ObjectId("616c6942dbb1be139948b279"), "tipo" : "piso", "situacion" : "Centro", "planta" : "0", "metroscuadrados" : "58", "precio" : "500000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27a"), "tipo" : "casa", "situacion" : "Afueras", "planta" : "-", "metroscuadrados" : "190", "precio" : "470000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27b"), "tipo" : "piso", "situacion" : "Centro", "planta" : "4", "metroscuadrados" : "80", "precio" : "500000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27c"), "tipo" : "piso", "situacion" : "Centro", "planta" : "7", "metroscuadrados" : "120", "precio" : "700000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27d"), "tipo" : "oficina", "situacion" : "Centro", "planta" : "4", "metroscuadrados" : "97", "precio" : "180000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27e"), "tipo" : "piso", "situacion" : "Periferia", "planta" : "2", "metroscuadrados" : "105", "precio" : "145000" }
{ "_id" : ObjectId("616c6942dbb1be139948b27f"), "tipo" : "piso", "situacion" : "Centro", "planta" : "2", "metroscuadrados" : "45", "precio" : "98000" }
{ "_id" : ObjectId("616c6942dbb1be139948b280"), "tipo" : "piso", "situacion" : "Periferia", "planta" : "3", "metroscuadrados" : "130", "precio" : "130000" }
*/


/* Viviendas del tipo oficina */
db.viviendas.find({tipo:"oficina"})

db.viviendas.find({tipo:{$eq:"oficina"}})

/*
{ "_id" : ObjectId("616c6e75dbb1be139948b285"), "tipo" : "oficina", "situacion" : "Centro", "planta" : 4, "metroscuadrados" : 97, "precio" : 180000 }
{ "_id" : ObjectId("616c6e75dbb1be139948b286"), "tipo" : "oficina", "situacion" : "Periferia", "planta" : 2, "metroscuadrados" : 105, "precio" : 145000 }
*/


/* Esten en la planta 2 */
db.viviendas.find({planta:{$eq:2}})

/*
{ "_id" : ObjectId("616c6e75dbb1be139948b286"), "tipo" : "oficina", "situacion" : "Periferia", "planta" : 2, "metroscuadrados" : 105, "precio" : 145000 }
{ "_id" : ObjectId("616c6e75dbb1be139948b287"), "tipo" : "piso", "situacion" : "Centro", "planta" : 2, "metroscuadrados" : 45, "precio" : 98000 }
*/


/* Muestra todas las viviendas de dos tipos */
db.viviendas.find({situacion:{$in:["centro","periferia"]}})
db.viviendas.find({$or:[{tipo:"piso"},{planta:"-"}]})

/* 
{ "_id" : ObjectId("616c72a7dbb1be139948b289"), "tipo" : "piso", "situacion" : "centro", "planta" : 0, "metroscuadrados" : 58, "precio" : 500000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28b"), "tipo" : "piso", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 80, "precio" : 500000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28c"), "tipo" : "piso", "situacion" : "centro", "planta" : 7, "metroscuadrados" : 120, "precio" : 700000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28d"), "tipo" : "oficina", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 97, "precio" : 180000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28e"), "tipo" : "oficina", "situacion" : "periferia", "planta" : 2, "metroscuadrados" : 105, "precio" : 145000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28f"), "tipo" : "piso", "situacion" : "centro", "planta" : 2, "metroscuadrados" : 45, "precio" : 98000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b290"), "tipo" : "piso", "situacion" : "periferia", "planta" : 3, "metroscuadrados" : 130, "precio" : 130000 }
*/


/* Eliminar tipos de vivienda de la busqueda */
db.viviendas.find({tipo:{$nin:["piso","oficina"]}})

/*
{ "_id" : ObjectId("616c72a7dbb1be139948b28a"), "tipo" : "casa", "situacion" : "afueras", "planta" : "-", "metroscuadrados" : 190, "precio" : 470000 }
*/

/* Viviendas por encima de "x" planta */
db.viviendas.find({planta:{$gt:4}})

/*
{ "_id" : ObjectId("616c72a7dbb1be139948b28c"), "tipo" : "piso", "situacion" : "centro", "planta" : 7, "metroscuadrados" : 120, "precio" : 700000 }
*/


/* Viviendas por encima de "x" planta o igual a "x" */
db.viviendas.find({planta:{$gte:4}})

/*
{ "_id" : ObjectId("616c72a7dbb1be139948b28b"), "tipo" : "piso", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 80, "precio" : 500000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28c"), "tipo" : "piso", "situacion" : "centro", "planta" : 7, "metroscuadrados" : 120, "precio" : 700000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28d"), "tipo" : "oficina", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 97, "precio" : 180000 }
*/


/* Mostrar viviendas por debajo de un precio */
db.viviendas.find({precio:{$lt:200000}})

/*
{ "_id" : ObjectId("616c72a7dbb1be139948b28d"), "tipo" : "oficina", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 97, "precio" : 180000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28e"), "tipo" : "oficina", "situacion" : "periferia", "planta" : 2, "metroscuadrados" : 105, "precio" : 145000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28f"), "tipo" : "piso", "situacion" : "centro", "planta" : 2, "metroscuadrados" : 45, "precio" : 98000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b290"), "tipo" : "piso", "situacion" : "periferia", "planta" : 3, "metroscuadrados" : 130, "precio" : 130000 }
*/


/* Mostrar las viviendas con "x" metros cuadrados o menos */
db.viviendas.find({metroscuadrados:{$lte:120}})

/*
{ "_id" : ObjectId("616c72a7dbb1be139948b289"), "tipo" : "piso", "situacion" : "centro", "planta" : 0, "metroscuadrados" : 58, "precio" : 500000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28b"), "tipo" : "piso", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 80, "precio" : 500000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28c"), "tipo" : "piso", "situacion" : "centro", "planta" : 7, "metroscuadrados" : 120, "precio" : 700000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28d"), "tipo" : "oficina", "situacion" : "centro", "planta" : 4, "metroscuadrados" : 97, "precio" : 180000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28e"), "tipo" : "oficina", "situacion" : "periferia", "planta" : 2, "metroscuadrados" : 105, "precio" : 145000 }
{ "_id" : ObjectId("616c72a7dbb1be139948b28f"), "tipo" : "piso", "situacion" : "centro", "planta" : 2, "metroscuadrados" : 45, "precio" : 98000 }
*/


