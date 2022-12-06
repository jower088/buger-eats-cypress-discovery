var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()

var data = {
    name: `${firstName} ${lastName}`,
         cpf: cpf.generate(),
         email: faker.internet.email(firstName),
         whatsapp: '11999995566',
         address:{
             postalcode:'06293110',
             street:'Rua Sebastião Picão',
             number:'10',
             details:'apto12',
             district:'Ayrosa',
             city_state:'Osasco/SP'
         },
         delivery_method:'Moto',
         cnh:'CNH.jpg'
}

return data

}

}