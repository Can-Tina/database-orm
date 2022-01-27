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

    const createdMovie = await prisma.movie.create({
        data: {
            title: 'Getting All Achievements in 3 hours - Welcome to the game 2 [World Record]',
            runtimeMins: 187,
        }
    })

    console.log('Movie created', createdMovie);

    const createdScreen = await prisma.screen.create({
        data: {
            number: 1
        }
    })

    console.log('Screen created', createdScreen);

    const createdScreening = await prisma.screening.create({
        data: {
            startsAt: '2020-02-29T19:20:30.451Z',
            movie: {
                connect: {
                    id: createdMovie.id
                }
            },
            screen: {
                connect: {
                    id: createdScreen.id
                }
            }
        }
    })

    console.log("Screening created", createdScreening)

    const createdTicket = await prisma.ticket.create({
        data: {
            screening: {
                connect: {
                    id: createdScreening.id
                }
            },
            customer: {
                connect: {
                    id: createdCustomerAndContact.id
                }
            }
        }
    })

    console.log("Ticket created", createdTicket)

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
