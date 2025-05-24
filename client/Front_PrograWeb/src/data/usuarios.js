export const usuarios = [
    {
        id: 1,
        nombre: "Juan Pérez",
        email: "juan.perez@email.com",
        direccion: "Calle Falsa 123, Ciudad",
        telefono: "123456789",
        rol: "cliente",
        activo: true,
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
        ordenes: [
            { id: 121, fecha: "2024-06-06", total: 165.00, estado: "entregada" },
            { id: 122, fecha: "2024-06-10", total: 215.00, estado: "pendiente" },
            { id: 123, fecha: "2024-06-15", total: 135.00, estado: "en camino" },
            { id: 124, fecha: "2024-06-20", total: 195.00, estado: "cancelada" }
        ]
    },
    {
        id: 7,
        nombre: "Sofía Herrera",
        email: "sofia.herrera@email.com",
        direccion: "Calle Río 67, Ciudad",
        telefono: "321789654",
        rol: "cliente",
        activo: true,
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
        ordenes: [
            { id: 177, fecha: "2024-06-20", total: 305.00, estado: "entregada" },
            { id: 178, fecha: "2024-06-24", total: 355.00, estado: "pendiente" },
            { id: 179, fecha: "2024-06-29", total: 275.00, estado: "en camino" },
            { id: 180, fecha: "2024-07-04", total: 335.00, estado: "cancelada" }
        ]
    }
];
