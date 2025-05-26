export const productos = [
    // Fuego
    {
        id: 1, nombre: 'Charmander', tipo: 'Fuego', region: 'Kanto', precio: 120, imagen: 'https://play.pokemonshowdown.com/sprites/ani/charmander.gif',
        descripcion: 'Un Pokémon lagarto de tipo fuego. Su cola siempre arde.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Charmeleon', imagen: 'https://play.pokemonshowdown.com/sprites/ani/charmeleon.gif', nivel: 16 },
            { nombre: 'Charizard', imagen: 'https://play.pokemonshowdown.com/sprites/ani/charizard.gif', nivel: 36 }
        ]
    },
    {
        id: 2, nombre: 'Vulpix', tipo: 'Fuego', region: 'Kanto', precio: 110, imagen: 'https://play.pokemonshowdown.com/sprites/ani/vulpix.gif',
        descripcion: 'Un zorro de seis colas con poderes ígneos.', stock: 7, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Ninetales', imagen: 'https://play.pokemonshowdown.com/sprites/ani/ninetales.gif', metodo: 'Piedra Fuego' }
        ]
    },
    {
        id: 3, nombre: 'Growlithe', tipo: 'Fuego', region: 'Kanto', precio: 130, imagen: 'https://play.pokemonshowdown.com/sprites/ani/growlithe.gif',
        descripcion: 'Un cachorro leal y valiente.', stock: 5, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Arcanine', imagen: 'https://play.pokemonshowdown.com/sprites/ani/arcanine.gif', metodo: 'Piedra Fuego' }
        ]
    },
    {
        id: 4, nombre: 'Ponyta', tipo: 'Fuego', region: 'Kanto', precio: 125, imagen: 'https://play.pokemonshowdown.com/sprites/ani/ponyta.gif',
        descripcion: 'Un caballo con crines de fuego.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Rapidash', imagen: 'https://play.pokemonshowdown.com/sprites/ani/rapidash.gif', nivel: 40 }
        ]
    },
    {
        id: 5, nombre: 'Cyndaquil', tipo: 'Fuego', region: 'Johto', precio: 115, imagen: 'https://play.pokemonshowdown.com/sprites/ani/cyndaquil.gif',
        descripcion: 'Un pequeño Pokémon tímido que expulsa fuego por su espalda.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Quilava', imagen: 'https://play.pokemonshowdown.com/sprites/ani/quilava.gif', nivel: 14 },
            { nombre: 'Typhlosion', imagen: 'https://play.pokemonshowdown.com/sprites/ani/typhlosion.gif', nivel: 36 }
        ]
    },
    {
        id: 6, nombre: 'Torchic', tipo: 'Fuego', region: 'Hoenn', precio: 118, imagen: 'https://play.pokemonshowdown.com/sprites/ani/torchic.gif',
        descripcion: 'Un pollito ardiente que escupe fuego.', stock: 9, rareza: 'Común',
        evoluciones: [
            { nombre: 'Combusken', imagen: 'https://play.pokemonshowdown.com/sprites/ani/combusken.gif', nivel: 16 },
            { nombre: 'Blaziken', imagen: 'https://play.pokemonshowdown.com/sprites/ani/blaziken.gif', nivel: 36 }
        ]
    },
    // Agua
    {
        id: 7, nombre: 'Squirtle', tipo: 'Agua', region: 'Kanto', precio: 122, imagen: 'https://play.pokemonshowdown.com/sprites/ani/squirtle.gif',
        descripcion: 'Una tortuga que dispara agua a presión.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Wartortle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/wartortle.gif', nivel: 16 },
            { nombre: 'Blastoise', imagen: 'https://play.pokemonshowdown.com/sprites/ani/blastoise.gif', nivel: 36 }
        ]
    },
    {
        id: 8, nombre: 'Psyduck', tipo: 'Agua', region: 'Kanto', precio: 112, imagen: 'https://play.pokemonshowdown.com/sprites/ani/psyduck.gif',
        descripcion: 'Un pato confundido con poderes psíquicos.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Golduck', imagen: 'https://play.pokemonshowdown.com/sprites/ani/golduck.gif', nivel: 33 }
        ]
    },
    {
        id: 9, nombre: 'Totodile', tipo: 'Agua', region: 'Johto', precio: 135, imagen: 'https://play.pokemonshowdown.com/sprites/ani/totodile.gif',
        descripcion: 'Un pequeño cocodrilo juguetón.', stock: 7, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Croconaw', imagen: 'https://play.pokemonshowdown.com/sprites/ani/croconaw.gif', nivel: 18 },
            { nombre: 'Feraligatr', imagen: 'https://play.pokemonshowdown.com/sprites/ani/feraligatr.gif', nivel: 30 }
        ]
    },
    {
        id: 10, nombre: 'Mudkip', tipo: 'Agua', region: 'Hoenn', precio: 128, imagen: 'https://play.pokemonshowdown.com/sprites/ani/mudkip.gif',
        descripcion: 'Un Pokémon anfibio con gran fuerza.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Marshtomp', imagen: 'https://play.pokemonshowdown.com/sprites/ani/marshtomp.gif', nivel: 16 },
            { nombre: 'Swampert', imagen: 'https://play.pokemonshowdown.com/sprites/ani/swampert.gif', nivel: 36 }
        ]
    },
    {
        id: 11, nombre: 'Piplup', tipo: 'Agua', region: 'Sinnoh', precio: 119, imagen: 'https://play.pokemonshowdown.com/sprites/ani/piplup.gif',
        descripcion: 'Un pingüino orgulloso y valiente.', stock: 9, rareza: 'Común',
        evoluciones: [
            { nombre: 'Prinplup', imagen: 'https://play.pokemonshowdown.com/sprites/ani/prinplup.gif', nivel: 16 },
            { nombre: 'Empoleon', imagen: 'https://play.pokemonshowdown.com/sprites/ani/empoleon.gif', nivel: 36 }
        ]
    },
    {
        id: 12, nombre: 'Froakie', tipo: 'Agua', region: 'Kalos', precio: 121, imagen: 'https://play.pokemonshowdown.com/sprites/ani/froakie.gif',
        descripcion: 'Una rana ágil y escurridiza.', stock: 8, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Frogadier', imagen: 'https://play.pokemonshowdown.com/sprites/ani/frogadier.gif', nivel: 16 },
            { nombre: 'Greninja', imagen: 'https://play.pokemonshowdown.com/sprites/ani/greninja.gif', nivel: 36 }
        ]
    },
    // Planta
    {
        id: 13, nombre: 'Bulbasaur', tipo: 'Planta', region: 'Kanto', precio: 124, imagen: 'https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif',
        descripcion: 'Un Pokémon semilla con una planta en su lomo.', stock: 10, rareza: 'Común',
        evoluciones: [
            { nombre: 'Ivysaur', imagen: 'https://play.pokemonshowdown.com/sprites/ani/ivysaur.gif', nivel: 16 },
            { nombre: 'Venusaur', imagen: 'https://play.pokemonshowdown.com/sprites/ani/venusaur.gif', nivel: 32 }
        ]
    },
    {
        id: 14, nombre: 'Oddish', tipo: 'Planta', region: 'Kanto', precio: 113, imagen: 'https://play.pokemonshowdown.com/sprites/ani/oddish.gif',
        descripcion: 'Una raíz nocturna que adora la luna.', stock: 7, rareza: 'Común',
        evoluciones: [
            { nombre: 'Gloom', imagen: 'https://play.pokemonshowdown.com/sprites/ani/gloom.gif', nivel: 21 },
            { nombre: 'Vileplume', imagen: 'https://play.pokemonshowdown.com/sprites/ani/vileplume.gif', metodo: 'Piedra Hoja' },
            { nombre: 'Bellossom', imagen: 'https://play.pokemonshowdown.com/sprites/ani/bellossom.gif', metodo: 'Piedra Solar' }
        ]
    },
    {
        id: 15, nombre: 'Bellsprout', tipo: 'Planta', region: 'Kanto', precio: 117, imagen: 'https://play.pokemonshowdown.com/sprites/ani/bellsprout.gif',
        descripcion: 'Una planta carnívora flexible.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Weepinbell', imagen: 'https://play.pokemonshowdown.com/sprites/ani/weepinbell.gif', nivel: 21 },
            { nombre: 'Victreebel', imagen: 'https://play.pokemonshowdown.com/sprites/ani/victreebel.gif', metodo: 'Piedra Hoja' }
        ]
    },
    {
        id: 16, nombre: 'Chikorita', tipo: 'Planta', region: 'Johto', precio: 126, imagen: 'https://play.pokemonshowdown.com/sprites/ani/chikorita.gif',
        descripcion: 'Un Pokémon de aroma calmante.', stock: 6, rareza: 'Común',
        evoluciones: [
            { nombre: 'Bayleef', imagen: 'https://play.pokemonshowdown.com/sprites/ani/bayleef.gif', nivel: 16 },
            { nombre: 'Meganium', imagen: 'https://play.pokemonshowdown.com/sprites/ani/meganium.gif', nivel: 32 }
        ]
    },
    {
        id: 17, nombre: 'Treecko', tipo: 'Planta', region: 'Hoenn', precio: 129, imagen: 'https://play.pokemonshowdown.com/sprites/ani/treecko.gif',
        descripcion: 'Un gecko veloz y ágil.', stock: 9, rareza: 'Raro',
        evoluciones: [
            { nombre: 'Grovyle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/grovyle.gif', nivel: 16 },
            { nombre: 'Sceptile', imagen: 'https://play.pokemonshowdown.com/sprites/ani/sceptile.gif', nivel: 36 }
        ]
    },
    {
        id: 18, nombre: 'Turtwig', tipo: 'Planta', region: 'Sinnoh', precio: 123, imagen: 'https://play.pokemonshowdown.com/sprites/ani/turtwig.gif',
        descripcion: 'Una tortuga con una ramita en su cabeza.', stock: 8, rareza: 'Común',
        evoluciones: [
            { nombre: 'Grotle', imagen: 'https://play.pokemonshowdown.com/sprites/ani/grotle.gif', nivel: 18 },
            { nombre: 'Torterra', imagen: 'https://play.pokemonshowdown.com/sprites/ani/torterra.gif', nivel: 32 }
        ]
    }
];

export const categorias = [
    { id: 1, nombre: 'Fuego', color: '#ffb3b3', emoji: '🔥'},
    { id: 2, nombre: 'Agua', color: '#b3d1ff', emoji: '💧'},
    { id: 3, nombre: 'Planta', color: '#43a047', emoji: '🌱'},
];

// Datos mockeados para el 20 y 23 de mayo de 2025 según lo solicitado
export const mockData = [
    // 20 de mayo de 2025: 30 usuarios nuevos, 40 órdenes, ingresos totales 500
    { id: 1, customer: 'NuevoUsuario1', date: '2025-05-20', total: 12.5, status: 'Shipped', isNewUser: true, registrationDate: '2025-05-20' },
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
export const initialWishlist = [
  { id: 1, nombre: 'Bulbasaur', precio: 100,  imagen : 'https://play.pokemonshowdown.com/sprites/ani/bulbasaur.gif' },
  { id: 2, nombre: 'Piplup', precio: 25, imagen: 'https://play.pokemonshowdown.com/sprites/ani/piplup.gif' },
  { id: 3, nombre: 'Growlithe', precio: 15, imagen: 'https://play.pokemonshowdown.com/sprites/ani/growlithe.gif' }
];


export const productosGreeting = [
        {id: 1, src : '/src/assets/eter.png', alt : 'Eter'},
        {id: 2, src : '/src/assets/MT.png', alt : 'MT'},
        {id: 3, src : '/src/assets/master-ball.png', alt: 'MasterBall'}
    ];


export const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        direccion: "Calle Falsa 123, Ciudad",
        telefono: "123456789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 101, fecha: "2024-06-01", total: 150.00, estado: "entregada" },
            { id: 102, fecha: "2024-06-05", total: 200.00, estado: "pendiente" },
            { id: 103, fecha: "2024-06-10", total: 120.00, estado: "en camino" },
            { id: 104, fecha: "2024-06-15", total: 180.00, estado: "cancelada" }
        ]
    },
    {
        id: 2,
        nombre: "María Gómez",
        email: "maria.gomez@email.com",
        direccion: "Avenida Siempre Viva 742, Ciudad",
        telefono: "987654321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 105, fecha: "2024-06-02", total: 90.00, estado: "entregada" },
            { id: 106, fecha: "2024-06-06", total: 210.00, estado: "pendiente" },
            { id: 107, fecha: "2024-06-11", total: 130.00, estado: "en camino" },
            { id: 108, fecha: "2024-06-16", total: 170.00, estado: "cancelada" }
        ]
    },
    {
        id: 3,
        nombre: "Carlos López",
        email: "carlos.lopez@email.com",
        direccion: "Boulevard Central 456, Ciudad",
        telefono: "555123456",
        rol: "admin",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 109, fecha: "2024-06-03", total: 160.00, estado: "entregada" },
            { id: 110, fecha: "2024-06-07", total: 220.00, estado: "pendiente" },
            { id: 111, fecha: "2024-06-12", total: 140.00, estado: "en camino" },
            { id: 112, fecha: "2024-06-17", total: 190.00, estado: "cancelada" } 
        ]
    },
    {
        id: 4,
        nombre: "Ana Torres",
        email: "ana.torres@email.com",
        direccion: "Calle Luna 12, Ciudad",
        telefono: "321654987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 113, fecha: "2024-06-04", total: 170.00, estado: "entregada" },
            { id: 114, fecha: "2024-06-08", total: 230.00, estado: "pendiente" },
            { id: 115, fecha: "2024-06-13", total: 150.00, estado: "en camino" },
            { id: 116, fecha: "2024-06-18", total: 200.00, estado: "cancelada" }
        ]
    },
    {
        id: 5,
        nombre: "Lucía Ramírez",
        email: "lucia.ramirez@email.com",
        direccion: "Calle Sol 45, Ciudad",
        telefono: "654987321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 117, fecha: "2024-06-05", total: 155.00, estado: "entregada" },
            { id: 118, fecha: "2024-06-09", total: 205.00, estado: "pendiente" },
            { id: 119, fecha: "2024-06-14", total: 125.00, estado: "en camino" },
            { id: 120, fecha: "2024-06-19", total: 185.00, estado: "cancelada" }
        ]
    },
    {
        id: 6,
        nombre: "Pedro Castillo",
        email: "pedro.castillo@email.com",
        direccion: "Avenida Mar 33, Ciudad",
        telefono: "789123456",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 121, fecha: "2024-06-06", total: 165.00, estado: "entregada" },
            { id: 122, fecha: "2024-06-10", total: 215.00, estado: "pendiente" },
            { id: 123, fecha: "2024-06-15", total: 135.00, estado: "en camino" },
            { id: 124, fecha: "2024-06-20", total: 195.00, estado: "cancelada" }
        ]
    },
    {
        id: 7,
        nombre: "/Sofía Herrera",
        email: "/sofia.herrera@email.com",
        direccion: "Calle Río 67, Ciudad",
        telefono: "321789654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 125, fecha: "2024-06-07", total: 175.00, estado: "entregada" },
            { id: 126, fecha: "2024-06-11", total: 225.00, estado: "pendiente" },
            { id: 127, fecha: "2024-06-16", total: 145.00, estado: "en camino" },
            { id: 128, fecha: "2024-06-21", total: 205.00, estado: "cancelada" }
        ]
    },
    {
        id: 8,
        nombre: "Miguel Díaz",
        email: "miguel.diaz@email.com",
        direccion: "Avenida Norte 89, Ciudad",
        telefono: "456321789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 129, fecha: "2024-06-08", total: 185.00, estado: "entregada" },
            { id: 130, fecha: "2024-06-12", total: 235.00, estado: "pendiente" },
            { id: 131, fecha: "2024-06-17", total: 155.00, estado: "en camino" },
            { id: 132, fecha: "2024-06-22", total: 215.00, estado: "cancelada" }
        ]
    },
    {
        id: 9,
        nombre: "Valentina Ruiz",
        email: "valentina.ruiz@email.com",
        direccion: "Calle Sur 23, Ciudad",
        telefono: "987321654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 133, fecha: "2024-06-09", total: 195.00, estado: "entregada" },
            { id: 134, fecha: "2024-06-13", total: 245.00, estado: "pendiente" },
            { id: 135, fecha: "2024-06-18", total: 165.00, estado: "en camino" },
            { id: 136, fecha: "2024-06-23", total: 225.00, estado: "cancelada" }
        ]
    },
    {
        id: 10,
        nombre: "Diego Morales",
        email: "diego.morales@email.com",
        direccion: "Boulevard Este 56, Ciudad",
        telefono: "654123987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 137, fecha: "2024-06-10", total: 205.00, estado: "entregada" },
            { id: 138, fecha: "2024-06-14", total: 255.00, estado: "pendiente" },
            { id: 139, fecha: "2024-06-19", total: 175.00, estado: "en camino" },
            { id: 140, fecha: "2024-06-24", total: 235.00, estado: "cancelada" }
        ]
    },
    {
        id: 11,
        nombre: "Camila Vargas",
        email: "camila.vargas@email.com",
        direccion: "Calle Oeste 78, Ciudad",
        telefono: "321456987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 141, fecha: "2024-06-11", total: 215.00, estado: "entregada" },
            { id: 142, fecha: "2024-06-15", total: 265.00, estado: "pendiente" },
            { id: 143, fecha: "2024-06-20", total: 185.00, estado: "en camino" },
            { id: 144, fecha: "2024-06-25", total: 245.00, estado: "cancelada" }
        ]
    },
    {
        id: 12,
        nombre: "Javier Soto",
        email: "javier.soto@email.com",
        direccion: "Avenida Central 90, Ciudad",
        telefono: "789654123",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 145, fecha: "2024-06-12", total: 225.00, estado: "entregada" },
            { id: 146, fecha: "2024-06-16", total: 275.00, estado: "pendiente" },
            { id: 147, fecha: "2024-06-21", total: 195.00, estado: "en camino" },
            { id: 148, fecha: "2024-06-26", total: 255.00, estado: "cancelada" }
        ]
    },
    {
        id: 13,
        nombre: "Paula Méndez",
        email: "paula.mendez@email.com",
        direccion: "Calle Primavera 34, Ciudad",
        telefono: "456987321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 149, fecha: "2024-06-13", total: 235.00, estado: "entregada" },
            { id: 150, fecha: "2024-06-17", total: 285.00, estado: "pendiente" },
            { id: 151, fecha: "2024-06-22", total: 205.00, estado: "en camino" },
            { id: 152, fecha: "2024-06-27", total: 265.00, estado: "cancelada" }
        ]
    },
    {
        id: 14,
        nombre: "Andrés Silva",
        email: "andres.silva@email.com",
        direccion: "Avenida Invierno 56, Ciudad",
        telefono: "987654123",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 153, fecha: "2024-06-14", total: 245.00, estado: "entregada" },
            { id: 154, fecha: "2024-06-18", total: 295.00, estado: "pendiente" },
            { id: 155, fecha: "2024-06-23", total: 215.00, estado: "en camino" },
            { id: 156, fecha: "2024-06-28", total: 275.00, estado: "cancelada" }
        ]
    },
    {
        id: 15,
        nombre: "Elena Castro",
        email: "elena.castro@email.com",
        direccion: "Calle Verano 78, Ciudad",
        telefono: "654789321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 157, fecha: "2024-06-15", total: 255.00, estado: "entregada" },
            { id: 158, fecha: "2024-06-19", total: 305.00, estado: "pendiente" },
            { id: 159, fecha: "2024-06-24", total: 225.00, estado: "en camino" },
            { id: 160, fecha: "2024-06-29", total: 285.00, estado: "cancelada" }
        ]
    },
    {
        id: 16,
        nombre: "Tomás Peña",
        email: "tomas.pena@email.com",
        direccion: "Avenida Otoño 90, Ciudad",
        telefono: "321987654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 161, fecha: "2024-06-16", total: 265.00, estado: "entregada" },
            { id: 162, fecha: "2024-06-20", total: 315.00, estado: "pendiente" },
            { id: 163, fecha: "2024-06-25", total: 235.00, estado: "en camino" },
            { id: 164, fecha: "2024-06-30", total: 295.00, estado: "cancelada" }
        ]
    },
    {
        id: 17,
        nombre: "Gabriela Flores",
        email: "gabriela.flores@email.com",
        direccion: "Calle Flor 12, Ciudad",
        telefono: "789321654",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 165, fecha: "2024-06-17", total: 275.00, estado: "entregada" },
            { id: 166, fecha: "2024-06-21", total: 325.00, estado: "pendiente" },
            { id: 167, fecha: "2024-06-26", total: 245.00, estado: "en camino" },
            { id: 168, fecha: "2024-07-01", total: 305.00, estado: "cancelada" }
        ]
    },
    {
        id: 18,
        nombre: "Ricardo Molina",
        email: "ricardo.molina@email.com",
        direccion: "Avenida Paz 34, Ciudad",
        telefono: "456123789",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 169, fecha: "2024-06-18", total: 285.00, estado: "entregada" },
            { id: 170, fecha: "2024-06-22", total: 335.00, estado: "pendiente" },
            { id: 171, fecha: "2024-06-27", total: 255.00, estado: "en camino" },
            { id: 172, fecha: "2024-07-02", total: 315.00, estado: "cancelada" }
        ]
    },
    {
        id: 19,
        nombre: "Natalia Ríos",
        email: "natalia.rios@email.com",
        direccion: "Calle Lago 56, Ciudad",
        telefono: "987456321",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 173, fecha: "2024-06-19", total: 295.00, estado: "entregada" },
            { id: 174, fecha: "2024-06-23", total: 345.00, estado: "pendiente" },
            { id: 175, fecha: "2024-06-28", total: 265.00, estado: "en camino" },
            { id: 176, fecha: "2024-07-03", total: 325.00, estado: "cancelada" }
        ]
    },
    {
        id: 20,
        nombre: "Esteban Gil",
        email: "esteban.gil@email.com",
        direccion: "Avenida Bosque 78, Ciudad",
        telefono: "654321987",
        rol: "cliente",
        activo: true,
        fotoPerfil: "/src/assets/icon-park-solid--people.png",
        ordenes: [
            { id: 177, fecha: "2024-06-20", total: 305.00, estado: "entregada" },
            { id: 178, fecha: "2024-06-24", total: 355.00, estado: "pendiente" },
            { id: 179, fecha: "2024-06-29", total: 275.00, estado: "en camino" },
            { id: 180, fecha: "2024-07-04", total: 335.00, estado: "cancelada" }
        ]
    }
];