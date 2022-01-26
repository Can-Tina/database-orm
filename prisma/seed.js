const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    const createdCustomerAndContact = await prisma.customer.create({
        data: {
            name: 'Alice',
            contact: {
                create:
                {
                    phone: '+44 65656 656565',
                    email: 'havethebestgoats@gmail.com'
                }
            }
        }
    });

    console.log('Customer created', createdCustomerAndContact);

    // Add your code here
    /*const createdContact = await prisma.contact.create({
        data: {
            phone: '+44 65656 656565',
            email: 'havethebestgoats@gmail.com'
        }
    })

    console.log('Contact created', createdContact);*/

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
