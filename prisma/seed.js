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

    const createdMovieAndScreenings = await prisma.movie.create({
        data: {
            title: 'Getting All Achievements in 3 hours - Welcome to the game 2 [World Record]',
            runtimeMins: 187,
            Screenings: {
                create: {
                    startsAt: '2020-02-29T19:20:30.451Z'
                }
            }
        }
    })

    console.log('Movie created', createdMovieAndScreenings);

    // Add your code here
    /*const createdContact = await prisma.contact.create({
        data: {
            phone: '+44 65656 656565',
            email: 'havethebestgoats@gmail.com'
        }
    })

    console.log('Contact created', createdContact);

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2020-02-29T19:20:30.451Z'
        }
    })

    console.log("Screening created", createdScreening)*/

    // Don't edit any of the code below this line
    process.exit(0);
}

seed()
    .catch(async (error) => {
        console.error(error);
        await prisma.$disconnect();
        process.exit(1);
    })
