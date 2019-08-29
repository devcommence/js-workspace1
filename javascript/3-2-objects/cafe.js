const cafe = {
    title: 'the studio cafe',
    location: 'jayanagar',
    cuisines: ['Cafe', 'Beverages'],
    phoneNumbers: ['13435456'],
    address: {
        body: 'jayanagar',
        geo: {
            lat: 12.2,
            long: 15.3
        }
    },
    info: {
        'Indoor Seating': true,
        'Alcohol': false
    },
    reviews: [
        {
            user: {
                name: 'ABC',
                isExpert: true
            },
            rating: 4.0,
            body: 'nice Place',
            createdAt: new Date()
        }
    ]
}
console.log(cafe.reviews[0].user.name)
console.log(cafe.address.geo.long)
console.log(cafe.reviews[0].rating)
console.log(cafe.info['Indoor Seating'])
console.log(cafe.reviews[0].createdAt)
