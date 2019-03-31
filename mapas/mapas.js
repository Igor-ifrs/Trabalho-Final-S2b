// PROCESSA LOCAIS PARA O FORMATO GEOJSON PARA SER USADO COM API DE MAPAS

class GeraMapa {
    static async locais(locais) {
        let GEO = [];
        locais.map((local) => {
            GEO.push({
                "type": "Feature",
                "properties": {
                    "Nome": local.name,
                    "Endereço": local.endereco,
                    "Telefone": local.telefone,
                    "Site": local.url
                },
                "geometry": {
                    "type": "Point",
                    "coordinates": [local.longitude, local.latitude]
                }
            })
        });
        return {
            "type": "FeatureCollection",
            "features": GEO,
        }
    }

    static async evento(evento) {
        let mapaE = {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [evento.Local.longitude, evento.Local.latitude]
            },
            "properties": {
                "name": evento.Nome,
                "img ": evento.linkImg,
                "periodo": `De ${evento.DataInicial} até ${evento.DataFinal}`
            }
        }
        return mapaE
    }

}

module.exports = GeraMapa;