//usage: mongo < script.js
//es creara la bdd si no existeix
use pizzeria;
//es crearan les coleccions automaticament
db.botiga.insertMany([
    {
        //_id: no fa falta afegir _id, mongodb ho fara per nosatres. En aquet cas faig servir valors manuals per poder insertar dades directament en altres colecions relacioandes
        _id: "625d34990cd1c12766ca01e1",
        nom: "Botiga1",
        adreça: {
            carrer: "carrer1",
            num: 1,
            porta: 1,
            ciutat: "BCN",
            cp: 08013,
            pais: "Spain"
        }
    },
    {
        _id: "625d34990cd1c12766ca01e2",
        nom: "Botiga2",
        adreça: {
            carrer: "carrer2",
            num: 2,
            porta: 2,
            ciutat: "LLeida",
            cp: 156544,
            pais: "Spain"
        }
    }
]);
db.empleats.insertMany([
    {
        _id: "625d34990cd1c12766ca01e3",
        nom: "empleat1",
        cognoms: "cognom 1",
        nif: "1111123A",
        telf: "65989988",
        tipusTreballador: "cuiner",
        botiga_id: "625d34990cd1c12766ca01e1"
    },
    {
        _id: "625d34990cd1c12766ca01e4",
        nom: "empleat2",
        cognoms: "cognom 2",
        nif: "1111123B",
        telf: "65922222",
        tipusTreballador: "repartidor",
        botiga_id: "625d34990cd1c12766ca01e1"
    },
    {
        _id: "625d34990cd1c12766ca01e5",
        nom: "empleat3",
        cognoms: "cognom 3",
        nif: "3333333A",
        telf: "33333333",
        tipusTreballador: "cuiner",
        botiga_id: "625d34990cd1c12766ca01e2"
    },
    {
        _id: "625d34990cd1c12766ca01e6",
        nom: "empleat4",
        cognoms: "cognom 4",
        nif: "444444444A",
        telf: "6544444444",
        tipusTreballador: "repartidor",
        botiga_id: "625d34990cd1c12766ca01e2"
    }
]);
db.productes.insertMany([
    {
        _id: "625d34990cd1c12766ca01e7",
        nomProducte: "Pizza 4 estacions",
        preu: 12.55,
        tipusProducte: "Pizza",
        Categoria: "primavera"
    },
    {
        _id: "625d34990cd1c12766ca01e8",
        nomProducte: "Pizza Carbonara",
        preu: 15.26,
        tipusProducte: "Pizza",
        Categoria: "Tardor"
    },
    {
        _id: "625d34990cd1c12766ca01e9",
        nomProducte: "Coca Cola",
        preu: 2.40,
        tipusProducte: "Beguda",
        Categoria: null
    },
    {
        _id: "625d34990cd1c12766ca0110",
        nomProducte: "Cervesa",
        preu: 3.40,
        tipusProducte: "Beguda",
        Categoria: null
    },
    {
        _id: "625d34990cd1c12766ca0111",
        nomProducte: "Hamburgesa amb patates",
        preu: 9.90,
        tipusProducte: "Hamburguesa",
        Categoria: null
    },
    {
        _id: "625d34990cd1c12766ca0112",
        nomProducte: "Hamburguesa completa",
        preu: 8.60,
        tipusProducte: "Hamburguesa",
        Categoria: null
    }
]);
db.clients.insertMany([
    {
        _id: "625d34990cd1c12766ca0113",
        nom: "client1",
        apellido: "apellido1",        
        adreça: {
            carrer: "carrer1",
            num: 1,
            porta: 1,
            ciutat: "BCN",
            cp: 08018,
            pais: "Spain"
        },
        NIF: "1111177A",
        comandes: [{
            comanda_id: "625d34990cd1c12766ca0114",
            botiga_id: "625d34990cd1c12766ca01e1",
            emplat_id: "625d34990cd1c12766ca01e4",
            data: new Date("2022-04-10"),
            tipusComanda: "Domicili",
            productes: [{
                    id_producte: "625d34990cd1c12766ca01e8",
                    quantitat: 1                
                },
                {
                    id_producte: "625d34990cd1c12766ca01e9",
                    quantitat: 2                
                }]
            }
        ]
    },
    {
        _id: "625d34990cd1c12766ca0115",
        nom: "client2",
        apellido: "apellido2",        
        adreça: {
            carrer: "carrer2",
            num: 2,
            porta: 2,
            ciutat: "Girona",
            cp: 65656,
            pais: "Spain"
        },
        NIF: "2222442A",
        comandes: [{
            comanda_id: "625d34990cd1c12766ca0116",
            botiga_id: "625d34990cd1c12766ca01e2",
            emplat_id: "625d34990cd1c12766ca01e5",
            data: new Date("2022-04-15"),
            tipusComanda: "Local",
            productes: [{
                    id_producte: "625d34990cd1c12766ca01e7",
                    quantitat: 1                
                },
                {
                    id_producte: "625d34990cd1c12766ca0112",
                    quantitat: 2                
                },{
                    id_producte: "625d34990cd1c12766ca0110",
                    quantitat: 2                
                },{
                    id_producte: "625d34990cd1c12766ca01e9",
                    quantitat: 1             
                }]
            }
        ]
    }
]);

