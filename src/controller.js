//Llamando al client soap del sistema de software 2a
const CLIENT = require(`./client2`);


//Controller de la ruta
async function getAllPuntctuation(req, res) {

    //Llamando a la funcion del cliente soap
    let response = await CLIENT.getPuntajes();
    //let llaves = response.keys();
    let ranking = []
    for (k in response) {
        ranking.push(response[k])
    }
    ranking.sort(function (a, b) {
        return b.puntaje - a.puntaje;
    });

    //Retornar resultado
    res.send(ranking);
}
async function working(req, res) {
    //Retornar resultado
    res.send("working");
}

async function fake(req, res) {
    // Get requested count or default to 10
    let c = parseInt(req.params.count);
    if (isNaN(c)) c = 10;
    // Generate data
    let data = [];
    for (let i = 0; i < c; i++) {
        let element = {
            email: `mail${i}@mail.com`,
            name: `Test user ${i}`,
            puntaje: Math.floor((Math.random() * 1000) + 1)
        }
        data.push(element);
    }
    // Sort by score 
    data.sort(function (a, b) {
        return b.puntaje - a.puntaje;
    });
    //Retornar resultado
    res.send(data);
}

module.exports = { working, getAllPuntctuation, fake };
