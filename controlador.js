//OBJETOS
let producto1={
    nombre:"ps5",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/Ps5.jpg?alt=media&token=32edadb2-6888-4f3b-b2fe-8c6bdd357fe5"
}

let producto2={
    nombre:"ps4",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/Ps4.jpg?alt=media&token=5c1a3195-a391-4ec1-a008-7e6950d95f86"
}

let producto3={
    nombre:"ps5 control",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/PS5CONTROL.jpg?alt=media&token=e3496867-4e06-4773-9586-db84720bb00c"
}

let producto4={
    nombre:"ps4 control",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/ps4Control.jpg?alt=media&token=1e28191b-656c-41ca-943f-46e4826dbc22"
}

let producto5={
    nombre:"the last of us 2",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/TLOU.jpg?alt=media&token=29fdb5fe-031e-4d82-abef-f8cc6ff02cac"
}

let producto6={
    nombre:"Forbiden West",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/ForbidenWest.jpg?alt=media&token=f1d4a82d-9947-4c11-a08b-c3ca19c6d950"
}

let producto7={
    nombre:"Xbox one x",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/XboxX.jpg?alt=media&token=506aa115-883f-478f-b30d-374731201a08"
}

let producto8={
    nombre:"Series S",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/SeriesS.jpg?alt=media&token=a8d80bf7-3377-44bd-8ba6-64eb9907f365"
}

let producto9={
    nombre:"Series X",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/SeriesX.jpg?alt=media&token=4181a255-f3df-439c-b358-8017fa359d3d"
}

let producto10={
    nombre:"XboxHeadset",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/XboxHeadset.jpg?alt=media&token=f3d40f53-2868-4ab3-99fe-6726a3b3c48b"
}

let producto11={
    nombre:"Ultimate Controller",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/Ultimate%20Controller.jpg?alt=media&token=0616ee30-77a3-4275-abed-efae6ebeb1ae"
}

let producto12={
    nombre:"Horizon5",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/Horizon5.jpg?alt=media&token=47c656ce-c663-4d45-993d-31259c494551"
}

let producto13={
    nombre:"haloInfinito",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/HaloInfinite.jpg?alt=media&token=dd9aaae8-e4c1-41e7-9cdb-ed0874a5171d"
}

let producto14={
    nombre:"Gears",
    precio:500000,
    estado:"Nuevo",
    foto:"https://firebasestorage.googleapis.com/v0/b/tienda-3a0de.appspot.com/o/Gears5.jpg?alt=media&token=632aca1b-ef98-4815-9edc-d1d6fe44744d"
}

let producto15={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto16={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto17={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto18={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto19={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}
let producto20={
    nombre:"producto15",
    precio:500000,
    estado:"Nuevo",
    foto:""
}

//ARREGLO
let productos=Array(
    producto1,
    producto2,
    producto3,
    producto4,
    producto5,
    producto6,
    producto7,
    producto8,
    producto9,
    producto10,
    producto11,
    producto12,
    producto13,
    producto14,
    producto15,
    producto16,
    producto17,
    producto18,
    producto19,
    producto20
)

//RECORRO EL ARREGLO
let contenedor=document.getElementById("contenedor")
productos.forEach(function(producto){
    
    let foto=document.createElement("img")
    foto.classList.add("w-100","img-fluid")
    foto.src=producto.foto
    let columna=document.createElement("div")
    columna.classList.add("col")
    let tarjeta=document.createElement("div")
    tarjeta.classList.add("card")
    tarjeta.appendChild(foto)
    columna.appendChild(tarjeta)
    contenedor.appendChild(columna)











})

