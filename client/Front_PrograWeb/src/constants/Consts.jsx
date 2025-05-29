export const productos = [
    // Fuego
    {
        id: 1, nombre: 'Charmander', categoria: 'Fuego', region: 'Kanto', precio: 120, imagen: 'https://play.pokemonshowdown.com/sprites/ani/charmander.gif',
        descripcion: 'Un Pokémon lagarto de categoria fuego. Su cola siempre arde.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Charmeleon', imagen: 'https://play.pokemonshowdown.com/sprites/ani/charmeleon.gif', nivel: 16 },
            { nombre: 'Charizard', imagen: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 2, nombre: 'Vulpix', categoria: 'Fuego', region: 'Kanto', precio: 110, imagen: 'https://play.pokemonshowdown.com/sprites/ani/vulpix.gif',
        descripcion: 'Un zorro de seis colas con poderes ígneos.', stock: 7, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Ninetales', imagen: 'https://play.pokemonshowdown.com/sprites/ani/ninetales.gif', metodo: 'Piedra Fuego' }
        ], quantity : 1
    },
    {
        id: 3, nombre: 'Growlithe', categoria: 'Fuego', region: 'Kanto', precio: 130, imagen: 'https://play.pokemonshowdown.com/sprites/ani/growlithe.gif',
        descripcion: 'Un cachorro leal y valiente.', stock: 5, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Arcanine', imagen: 'https://play.pokemonshowdown.com/sprites/ani/arcanine.gif', metodo: 'Piedra Fuego' }
        ], quantity : 1
    },
    {
        id: 4, nombre: 'Ponyta', categoria: 'Fuego', region: 'Kanto', precio: 125, imagen: 'https://play.pokemonshowdown.com/sprites/ani/ponyta.gif',
        descripcion: 'Un caballo con crines de fuego.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Rapidash', imagen: 'https://play.pokemonshowdown.com/sprites/ani/rapidash.gif', nivel: 40 }
        ], quantity : 1
    },
    {
        id: 5, nombre: 'Cyndaquil', categoria: 'Fuego', region: 'Johto', precio: 115, imagen: 'https://play.pokemonshowdown.com/sprites/ani/cyndaquil.gif',
        descripcion: 'Un pequeño Pokémon tímido que expulsa fuego por su espalda.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Quilava', imagen: 'https://play.pokemonshowdown.com/sprites/ani/quilava.gif', nivel: 14 },
            { nombre: 'Typhlosion', imagen: 'https://play.pokemonshowdown.com/sprites/ani/typhlosion.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 6, nombre: 'Torchic', categoria: 'Fuego', region: 'Hoenn', precio: 118, imagen: 'https://play.pokemonshowdown.com/sprites/ani/torchic.gif',
        descripcion: 'Un pollito ardiente que escupe fuego.', stock: 9, rareza: 'Común',
        evoluciones: [
            { nombre: 'Combusken', imagen: 'https://play.pokemonshowdown.com/sprites/ani/combusken.gif', nivel: 16 },
            { nombre: 'Blaziken', imagen: 'https://play.pokemonshowdown.com/sprites/ani/blaziken.gif', nivel: 36 }
        ], quantity : 1
    },
    // Agua
    {
        id: 7, nombre: 'Squirtle', categoria: 'Agua', region: 'Kanto', precio: 122, imagen: 'https://play.pokemonshowdown.com/sprites/ani/squirtle.gif',
        descripcion: 'Una tortuga que dispara agua a presión.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Wartortle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/wartortle.gif', nivel: 16 },
            { nombre: 'Blastoise', imagen: 'https://play.pokemonshowdown.com/sprites/ani/blastoise.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 8, nombre: 'Psyduck', categoria: 'Agua', region: 'Kanto', precio: 112, imagen: 'https://play.pokemonshowdown.com/sprites/ani/psyduck.gif',
        descripcion: 'Un pato confundido con poderes psíquicos.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Golduck', imagen: 'https://play.pokemonshowdown.com/sprites/ani/golduck.gif', nivel: 33 }
        ], quantity : 1
    },
    {
        id: 9, nombre: 'Totodile', categoria: 'Agua', region: 'Johto', precio: 135, imagen: 'https://play.pokemonshowdown.com/sprites/ani/totodile.gif',
        descripcion: 'Un pequeño cocodrilo juguetón.', stock: 7, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Croconaw', imagen: 'https://play.pokemonshowdown.com/sprites/ani/croconaw.gif', nivel: 18 },
            { nombre: 'Feraligatr', imagen: 'https://play.pokemonshowdown.com/sprites/ani/feraligatr.gif', nivel: 30 }
        ], quantity : 1
    },
    {
        id: 10, nombre: 'Mudkip', categoria: 'Agua', region: 'Hoenn', precio: 128, imagen: 'https://play.pokemonshowdown.com/sprites/ani/mudkip.gif',
        descripcion: 'Un Pokémon anfibio con gran fuerza.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Marshtomp', imagen: 'https://play.pokemonshowdown.com/sprites/ani/marshtomp.gif', nivel: 16 },
            { nombre: 'Swampert', imagen: 'https://play.pokemonshowdown.com/sprites/ani/swampert.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 11, nombre: 'Piplup', categoria: 'Agua', region: 'Sinnoh', precio: 119, imagen: 'https://play.pokemonshowdown.com/sprites/ani/piplup.gif',
        descripcion: 'Un pingüino orgulloso y valiente.', stock: 9, rareza: 'Común',
        evoluciones: [
            { nombre: 'Prinplup', imagen: 'https://play.pokemonshowdown.com/sprites/ani/prinplup.gif', nivel: 16 },
            { nombre: 'Empoleon', imagen: 'https://play.pokemonshowdown.com/sprites/ani/empoleon.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 12, nombre: 'Froakie', categoria: 'Agua', region: 'Kalos', precio: 121, imagen: 'https://play.pokemonshowdown.com/sprites/ani/froakie.gif',
        descripcion: 'Una rana ágil y escurridiza.', stock: 8, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Frogadier', imagen: 'https://play.pokemonshowdown.com/sprites/ani/frogadier.gif', nivel: 16 },
            { nombre: 'Greninja', imagen: 'https://play.pokemonshowdown.com/sprites/ani/greninja.gif', nivel: 36 }
        ], quantity : 1
    },
    // Planta
    {
        id: 13, nombre: 'Bulbasaur', categoria: 'Planta', region: 'Kanto', precio: 124, imagen: 'https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif',
        descripcion: 'Un Pokémon semilla con una planta en su lomo.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Ivysaur', imagen: 'https://play.pokemonshowdown.com/sprites/ani/ivysaur.gif', nivel: 16 },
            { nombre: 'Venusaur', imagen: 'https://play.pokemonshowdown.com/sprites/ani/venusaur.gif', nivel: 32 }
        ], quantity : 1
    },
    {
        id: 14, nombre: 'Oddish', categoria: 'Planta', region: 'Kanto', precio: 113, imagen: 'https://play.pokemonshowdown.com/sprites/ani/oddish.gif',
        descripcion: 'Una raíz nocturna que adora la luna.', stock: 7, rareza: 'Común',
        evoluciones: [
            { nombre: 'Gloom', imagen: 'https://play.pokemonshowdown.com/sprites/ani/gloom.gif', nivel: 21 },
            { nombre: 'Vileplume', imagen: 'https://play.pokemonshowdown.com/sprites/ani/vileplume.gif', metodo: 'Piedra Hoja' },
            { nombre: 'Bellossom', imagen: 'https://play.pokemonshowdown.com/sprites/ani/bellossom.gif', metodo: 'Piedra Solar' }
        ], quantity : 1
    },
    {
        id: 15, nombre: 'Bellsprout', categoria: 'Planta', region: 'Kanto', precio: 117, imagen: 'https://play.pokemonshowdown.com/sprites/ani/bellsprout.gif',
        descripcion: 'Una planta carnívora flexible.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Weepinbell', imagen: 'https://play.pokemonshowdown.com/sprites/ani/weepinbell.gif', nivel: 21 },
            { nombre: 'Victreebel', imagen: 'https://play.pokemonshowdown.com/sprites/ani/victreebel.gif', metodo: 'Piedra Hoja' }
        ], quantity : 1
    },
    {
        id: 16, nombre: 'Chikorita', categoria: 'Planta', region: 'Johto', precio: 126, imagen: 'https://play.pokemonshowdown.com/sprites/ani/chikorita.gif',
        descripcion: 'Un Pokémon de aroma calmante.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Bayleef', imagen: 'https://play.pokemonshowdown.com/sprites/ani/bayleef.gif', nivel: 16 },
            { nombre: 'Meganium', imagen: 'https://play.pokemonshowdown.com/sprites/ani/meganium.gif', nivel: 32 }
        ], quantity : 1
    },
    {
        id: 17, nombre: 'Treecko', categoria: 'Planta', region: 'Hoenn', precio: 129, imagen: 'https://play.pokemonshowdown.com/sprites/ani/treecko.gif',
        descripcion: 'Un gecko veloz y ágil.', stock: 9, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Grovyle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/grovyle.gif', nivel: 16 },
            { nombre: 'Sceptile', imagen: 'https://play.pokemonshowdown.com/sprites/ani/sceptile.gif', nivel: 36 }
        ], quantity : 1
    },
    {
        id: 18, nombre: 'Turtwig', categoria: 'Planta', region: 'Sinnoh', precio: 123, imagen: 'https://play.pokemonshowdown.com/sprites/ani/turtwig.gif',
        descripcion: 'Una tortuga con una ramita en su cabeza.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Grotle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/grotle.gif', nivel: 18 },
            { nombre: 'Torterra', imagen: 'https://play.pokemonshowdown.com/sprites/ani/torterra.gif', nivel: 32 }
        ]
    },
    {
        id: 19, nombre: 'Chespin', categoria: 'Planta', region: 'Kalos', precio: 120, imagen: 'https://play.pokemonshowdown.com/sprites/ani/chespin.gif',
        descripcion: 'Un Pokémon espinoso y juguetón.', stock: 7, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Quilladin', imagen: 'https://play.pokemonshowdown.com/sprites/ani/quilladin.gif', nivel: 16 },
            { nombre: 'Chesnaught', imagen: 'https://play.pokemonshowdown.com/sprites/ani/chesnaught.gif', nivel: 36 }
        ]
    },
    {
        id: 20, nombre: 'Rowlet', categoria: 'Planta', region: 'Alola', precio: 127, imagen: 'https://play.pokemonshowdown.com/sprites/ani/rowlet.gif',
        descripcion: 'Un búho que puede volar silenciosamente.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Dartrix', imagen: 'https://play.pokemonshowdown.com/sprites/ani/dartrix.gif', nivel: 17 },
            { nombre: 'Decidueye', imagen: 'https://play.pokemonshowdown.com/sprites/ani/decidueye.gif', nivel: 34 }
        ]
    },
    {
        id: 21, nombre: 'Grookey', categoria: 'Planta', region: 'Galar', precio: 131, imagen: 'https://play.pokemonshowdown.com/sprites/ani/grookey.gif',
        descripcion: 'Un Pokémon mono que toca un tambor.', stock: 8, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Thwackey', imagen: 'https://play.pokemonshowdown.com/sprites/ani/thwackey.gif', nivel: 16 },
            { nombre: 'Rillaboom', imagen: 'https://play.pokemonshowdown.com/sprites/ani/rillaboom.gif', nivel: 35 }
        ]
    },
    {
        id: 22, nombre: 'Sprigatito', categoria: 'Planta', region: 'Paldea', precio: 132, imagen: 'https://play.pokemonshowdown.com/sprites/ani/sprigatito.gif',
        descripcion: 'Un Pokémon gato elegante y ágil.', stock: 9, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Floragato', imagen: 'https://play.pokemonshowdown.com/sprites/ani/floragato.gif', nivel: 16 },
            { nombre: 'Meowscarada', imagen: 'https://play.pokemonshowdown.com/sprites/ani/meowscarada.gif', nivel: 35 }
        ]
    },
    {
        id: 23, nombre: 'Fuecoco', categoria: 'Fuego', region: 'Paldea', precio: 134, imagen: 'https://play.pokemonshowdown.com/sprites/ani/fuecoco.gif',
        descripcion: 'Un Pokémon cocodrilo que escupe fuego.', stock: 10, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Crocalor', imagen: 'https://play.pokemonshowdown.com/sprites/ani/crocalor.gif', nivel: 16 },
            { nombre: 'Skeledirge', imagen: 'https://play.pokemonshowdown.com/sprites/ani/skeledirge.gif', nivel: 35 }
        ]
    },
    {
        id: 24, nombre: 'Quaxly', categoria: 'Agua', region: 'Paldea', precio: 136, imagen: 'https://play.pokemonshowdown.com/sprites/ani/quaxly.gif',
        descripcion: 'Un pato elegante con un peinado distintivo.', stock: 8, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Quaxwell', imagen: 'https://play.pokemonshowdown.com/sprites/ani/quaxwell.gif', nivel: 16 },
            { nombre: 'Quaquaval', imagen: 'https://play.pokemonshowdown.com/sprites/ani/quaquaval.gif', nivel: 35 }
        ]
    },
    
];

export const categorias = [
    { id: 1, nombre: 'Fuego', color: '#ffb3b3', emoji: '🔥'},
    { id: 2, nombre: 'Agua', color: '#b3d1ff', emoji: '💧'},
    { id: 3, nombre: 'Planta', color: '#43a047', emoji: '🌱'},
];

export const initialWishlist = [
  { id: 1, nombre: 'Bulbasaur', precio: 100,  imagen : 'https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif', quantity: 1 },
  { id: 2, nombre: 'Piplup', precio: 25, imagen: 'https://play.pokemonshowdown.com/sprites/ani/piplup.gif' , quantity: 1  },
  { id: 3, nombre: 'Growlithe', precio: 15, imagen: 'https://play.pokemonshowdown.com/sprites/ani/growlithe.gif' , quantity: 1  }
];

export const productosGreeting = [
    {id: 1, src : '/src/assets/eter.png', alt : 'Eter'},
    {id: 2, src : '/src/assets/MT.png', alt : 'MT'},
    {id: 3, src : '/src/assets/master-ball.png', alt: 'MasterBall'}
];

// Datos mockeados para el 20 y 23 de mayo de 2025 según lo solicitado
export const mockData = [
    // 20 de mayo de 2025: 30 usuarios nuevos, 40 órdenes, ingresos totales 500
    { id: 1, customer: 'Juan Pérez', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 2, customer: 'NuevoUsuario2', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 3, customer: 'NuevoUsuario3', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 4, customer: 'NuevoUsuario4', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 5, customer: 'NuevoUsuario5', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 6, customer: 'NuevoUsuario6', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 7, customer: 'NuevoUsuario7', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 8, customer: 'NuevoUsuario8', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 9, customer: 'NuevoUsuario9', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 10, customer: 'NuevoUsuario10', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 11, customer: 'NuevoUsuario11', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 12, customer: 'NuevoUsuario12', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 13, customer: 'NuevoUsuario13', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 14, customer: 'NuevoUsuario14', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 15, customer: 'NuevoUsuario15', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 16, customer: 'NuevoUsuario16', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 17, customer: 'NuevoUsuario17', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 18, customer: 'NuevoUsuario18', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 19, customer: 'NuevoUsuario19', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 20, customer: 'NuevoUsuario20', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 21, customer: 'NuevoUsuario21', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 22, customer: 'NuevoUsuario22', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 23, customer: 'NuevoUsuario23', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 24, customer: 'NuevoUsuario24', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 25, customer: 'NuevoUsuario25', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 26, customer: 'NuevoUsuario26', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 27, customer: 'NuevoUsuario27', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 28, customer: 'NuevoUsuario28', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 29, customer: 'NuevoUsuario29', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 30, customer: 'NuevoUsuario30', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: true, registrationDate: '2025-05-20' },
    { id: 31, customer: 'UsuarioAntiguo1', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 32, customer: 'UsuarioAntiguo2', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 33, customer: 'UsuarioAntiguo3', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 34, customer: 'UsuarioAntiguo4', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 35, customer: 'UsuarioAntiguo5', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 36, customer: 'UsuarioAntiguo6', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 37, customer: 'UsuarioAntiguo7', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 38, customer: 'UsuarioAntiguo8', date: '2025-05-20', total: 12.5, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 39, customer: 'UsuarioAntiguo9', date: '2025-05-20', total: 12.5, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 40, customer: 'UsuarioAntiguo10', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    // 23 de mayo de 2025: 20 usuarios nuevos, 35 órdenes, ingresos totales 450
    { id: 41, customer: 'NuevoUsuario31', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 42, customer: 'NuevoUsuario32', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 43, customer: 'NuevoUsuario33', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 44, customer: 'NuevoUsuario34', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 45, customer: 'NuevoUsuario35', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 46, customer: 'NuevoUsuario36', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 47, customer: 'NuevoUsuario37', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 48, customer: 'NuevoUsuario38', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 49, customer: 'NuevoUsuario39', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 50, customer: 'NuevoUsuario40', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 51, customer: 'NuevoUsuario41', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 52, customer: 'NuevoUsuario42', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 53, customer: 'NuevoUsuario43', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 54, customer: 'NuevoUsuario44', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 55, customer: 'NuevoUsuario45', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 56, customer: 'NuevoUsuario46', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 57, customer: 'NuevoUsuario47', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 58, customer: 'NuevoUsuario48', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 59, customer: 'NuevoUsuario49', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 60, customer: 'NuevoUsuario50', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: true, registrationDate: '2025-05-23' },
    { id: 61, customer: 'UsuarioAntiguo11', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 62, customer: 'UsuarioAntiguo12', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 63, customer: 'UsuarioAntiguo13', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 64, customer: 'UsuarioAntiguo14', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 65, customer: 'UsuarioAntiguo15', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 66, customer: 'UsuarioAntiguo16', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 67, customer: 'UsuarioAntiguo17', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 68, customer: 'UsuarioAntiguo18', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 69, customer: 'UsuarioAntiguo19', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 70, customer: 'UsuarioAntiguo20', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 71, customer: 'UsuarioAntiguo21', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 72, customer: 'UsuarioAntiguo22', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 73, customer: 'UsuarioAntiguo23', date: '2025-05-23', total: 12.86, status: 'Shipped', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 74, customer: 'UsuarioAntiguo24', date: '2025-05-23', total: 12.86, status: 'Delivered', isNewUser: false, registrationDate: '2024-01-01' },
    { id: 75, customer: 'UsuarioAntiguo25', date: '2025-05-23', total: 12.86, status: 'Pending', isNewUser: false, registrationDate: '2024-01-01' },
]

export const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        password: "password123",
        direccion: "Calle Falsa 123, Ciudad",
        telefono: "123456789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 2,
        nombre: "María Gómez",
        email: "maria.gomez@email.com",
        password: "password123",
        direccion: "Avenida Siempre Viva 742, Ciudad",
        telefono: "987654321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 3,
        nombre: "Carlos López",
        email: "carlos.lopez@email.com",
        password: "password123",
        direccion: "Boulevard Central 456, Ciudad",
        telefono: "555123456",
        rol: "admin",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 4,
        nombre: "Ana Torres",
        email: "ana.torres@email.com",
        password: "password123",
        direccion: "Calle Luna 12, Ciudad",
        telefono: "321654987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 5,
        nombre: "Lucía Ramírez",
        email: "lucia.ramirez@email.com",
        password: "password123",
        direccion: "Calle Sol 45, Ciudad",
        telefono: "654987321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 6,
        nombre: "Pedro Castillo",
        email: "pedro.castillo@email.com",
        password: "password123",
        direccion: "Avenida Mar 33, Ciudad",
        telefono: "789123456",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 7,
        nombre: "/Sofía Herrera",
        email: "/sofia.herrera@email.com",
        password: "password123",
        direccion: "Calle Río 67, Ciudad",
        telefono: "321789654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 8,
        nombre: "Miguel Díaz",
        email: "miguel.diaz@email.com",
        password: "password123",
        direccion: "Avenida Norte 89, Ciudad",
        telefono: "456321789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 9,
        nombre: "Valentina Ruiz",
        email: "valentina.ruiz@email.com",
        password: "password123",
        direccion: "Calle Sur 23, Ciudad",
        telefono: "987321654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 10,
        nombre: "Diego Morales",
        email: "diego.morales@email.com",
        password: "password123",
        direccion: "Boulevard Este 56, Ciudad",
        telefono: "654123987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 11,
        nombre: "Camila Vargas",
        email: "camila.vargas@email.com",
        password: "password123",
        direccion: "Calle Oeste 78, Ciudad",
        telefono: "321456987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 12,
        nombre: "Javier Soto",
        email: "javier.soto@email.com",
        password: "password123",
        direccion: "Avenida Central 90, Ciudad",
        telefono: "789654123",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 13,
        nombre: "Paula Méndez",
        email: "paula.mendez@email.com",
        password: "password123",
        direccion: "Calle Primavera 34, Ciudad",
        telefono: "456987321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 14,
        nombre: "Andrés Silva",
        email: "andres.silva@email.com",
        password: "password123",
        direccion: "Avenida Invierno 56, Ciudad",
        telefono: "987654123",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 15,
        nombre: "Elena Castro",
        email: "elena.castro@email.com",
        password: "password123",
        direccion: "Calle Verano 78, Ciudad",
        telefono: "654789321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 16,
        nombre: "Tomás Peña",
        email: "tomas.pena@email.com",
        password: "password123",
        direccion: "Avenida Otoño 90, Ciudad",
        telefono: "321987654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 17,
        nombre: "Gabriela Flores",
        email: "gabriela.flores@email.com",
        password: "password123",
        direccion: "Calle Flor 12, Ciudad",
        telefono: "789321654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 18,
        nombre: "Ricardo Molina",
        email: "ricardo.molina@email.com",
        password: "password123",
        direccion: "Avenida Paz 34, Ciudad",
        telefono: "456123789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 19,
        nombre: "Natalia Ríos",
        email: "natalia.rios@email.com",
        password: "password123",
        direccion: "Calle Lago 56, Ciudad",
        telefono: "987456321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    },
    {
        id: 20,
        nombre: "Esteban Gil",
        email: "esteban.gil@email.com",
        password: "password123",
        direccion: "Avenida Bosque 78, Ciudad",
        telefono: "654321987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png"
    }
];
