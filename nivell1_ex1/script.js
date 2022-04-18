//usage: mongo < script.js
//es creara la bdd si no existeix
use optica;
//es crearan les coleccions automaticament
db.proveidors.insertMany([
    {
        //_id: no fa falta afegir _id, mongodb ho fara per nosatres. En aquet cas faig servir valors manuals per poder insertar dades directament en altres colecions relacioandes
        _id: "625d34990cd1c12766ca01e1",
        nom: "proviedor1",
        adreça: {
            carrer: "carrer1",
            num: 1,
            porta: 1,
            ciutat: "BCN",
            cp: 08013,
            pais: "Spain"
        },
        telefon: "1111111",
        CIF: "A1111111"
    },
    {
        _id: "625d34990cd1c12766ca01e2",
        nom: "proviedor2",
        adreça: {
            carrer: "carrer2",
            num: 2,
            porta: 2,
            ciutat: "LLeida",
            cp: 156544,
            pais: "Spain"
        },
        telefon: "2222222",
        NIF: "A222222"
    }
]);
db.empleats.insertMany([
    {
        _id: "625d34990cd1c12766ca01e3",
        nom: "empleat1"
    },
    {
        _id: "625d34990cd1c12766ca01e4",
        nom: "empleat2",
    }
]);
db.ulleres.insertMany([
    {
        _id: "625d34990cd1c12766ca01e5",
        marca: "Rayban",
        graduacio: null,
        tipusMuntura: "pasta",
        colorVidre: "negre",
        preu: 56.78
    },
    {
        _id: "625d34990cd1c12766ca01e6",
        marca: "Armani",
        graduacio: "1.34",
        tipusMuntura: "Metal·lica",
        colorVidre: "negre",
        preu: 56.78
    }
]);
db.clients.insertMany([
    {
        _id: "625d34990cd1c12766ca01e7",
        nom: "client1",
        adreça: {
            carrer: "carrer1",
            num: 1,
            porta: 1,
            ciutat: "BCN",
            cp: 08018,
            pais: "Spain"
        },
        telefon: "655489979",
        fax: null,
        NIF: "48878878I",
        compra: [{
            ulleres_id: ["625d34990cd1c12766ca01e5","625d34990cd1c12766ca01e6"],
            empleat_id: "625d34990cd1c12766ca01e3"
            }
        ]
    },
    {
        _id: "625d34990cd1c12766ca01e8",
        nom: "client2",
        adreça: {
            carrer: "carrer2",
            num: 2,
            porta: 2,
            ciutat: "Girona",
            cp: 258787,
            pais: "Spain"
        },
        telefon: "976598889",
        fax: null,
        NIF: "25545788G",
        compra: [{
            ulleres_id: ["625d34990cd1c12766ca01e6"],
            empleat_id: "625d34990cd1c12766ca01e4"
            }
        ]
    }
]);

