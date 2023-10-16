const { user } = require('@nextui-org/theme');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const category = [
    {"category": "PLÁSTICOS" },
    {"category": "REFRACTARIOS" },
    {"category": "METAL" }
];
const product = [
    {"name": "UNI PLAS BLU FINE", "amount": 4600, "storageTypeId": 1, "categoryId": 1, "dateOfArrival": new Date('2023-07-17').toISOString(), "description": "Plástico azulito" },
    {"name": "UNI PLAS GREEN 85 FINE", "amount": 1075, "storageTypeId": 1, "categoryId": 1, "dateOfArrival": new Date('2023-04-18').toISOString(), "description": "Plástico verdecito" },
    {"name": "UNI RAM VR 611A", "amount": 1350, "storageTypeId": 1, "categoryId": 2, "dateOfArrival": new Date('2022-12-09').toISOString(), "description": "Refractario bonito" },
    {"name": "UNI RAM VR 788A", "amount": 450, "storageTypeId": 1, "categoryId": 2, "dateOfArrival": new Date('2023-12-04').toISOString(), "description": "Refractario bonito 2" },
    {"name": "Ferro tungsteno", "amount": 525, "storageTypeId": 1, "categoryId": 3, "dateOfArrival": new Date('11-11-11').toISOString(), "description": "Polvito mágico" }
]
const storageType = [
    {"Type": "Kg" }
];

const users = [
    {
        "name": "Alberto Sosa",
        "phone": "9831670529",
        "email": "petox.somart@outlook.com",
        "password": "Simpson95",
        "rolId": 1
    },
    {
        "name": "Juan Perez",
        "phone": "1234567890",
        "email": "juan.p@fake.com",
        "password": "juan123",
        "rolId": 2
    }
]

const roles = [
    {
        "rol": "admin"
    },
    {
        "rol": "customer"
    }
]

const status = [
    {
        "status": "Pendiente"
    },
    {
        "status": "Completada"
    },
    {
        "status": "Rechazada"
    }
]


async function seed() {
    for (const iterator of category) {
        await prisma.category.create({
            data: {
                category: iterator.category
            }
        })
    }
    for (const iterator of storageType) {
        await prisma.storageType.create({
            data: {
                Type: iterator.Type
            }
        })
    }
    for (const iterator of product) {
        await prisma.product.create({
            data: {
                name: iterator.name,
                amount: iterator.amount,
                storageTypeId: iterator.storageTypeId,
                categoryId: iterator.categoryId,
                dateOfArrival: iterator.dateOfArrival,
                description: iterator.description
            }
        })
    }
    for (const iterator of roles){
        await prisma.rol.create({
            data:{
                rol: iterator.rol
            }
        })
    }
    for (const iterator of users) {
        await prisma.user.create({
            data:{
                name: iterator.name,
                phone: iterator.phone,
                email: iterator.email,
                password: iterator.password,
                rolId: iterator.rolId
            }
        })
    }
    for (const iterator of status){
        await prisma.status.create({
            data: {
                status: iterator.status
            }
        });
    }
}

seed()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })