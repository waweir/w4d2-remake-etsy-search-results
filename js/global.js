function createResultCard(item) {
    // create main card div
    var card = document.createElement('div')
    card.classList.add('col-sm-3')
    card.classList.add('panel')

    // create rows. 1 for image, 1 for title, 1 for seller and price
    var row = document.createElement('div')
    row.classList.add('row')
    var row2 = row.cloneNode(true)
    var row3 = row.cloneNode(true)
    card.appendChild(row)
    card.appendChild(row2)
    card.appendChild(row3)

    // create image and map to the object's image value
    var image = document.createElement('img')
    image.src = item.image
    row.appendChild(image)

    // create full width column for title and map to object's title value
    var col = document.createElement('div')
    col.classList.add('col-sm-12')
    col.classList.add('overflow_hidden')
    col.innerHTML = item.title
    row2.appendChild(col)

    // create two 50% width columns and map the first to the object's seller value and the second to the object's price value
    var col2 = document.createElement('div')
    col2.classList.add('col-sm-6')
    var col3 = col2.cloneNode(true)
    col2.classList.add('text-muted')
    col2.classList.add('overflow_hidden')
    col2.innerHTML = item.seller
    col3.innerHTML = ('$' + Number(item.price).toFixed(2))
    col3.classList.add('green')
    col3.classList.add('text-right')
    row3.appendChild(col2)
    row3.appendChild(col3)

    document.querySelector('#searchResults.row').appendChild(card)
}

var results = [
    {
        image: 'http://unsplash.it/600/500?image=100',
        title: 'Vintage Board Game Art Wall Home Decor',
        seller: 'franz66',
        price: 15.00
    },
    {
        image: 'http://unsplash.it/600/500?image=200',
        title: 'PaloAltoOpoly Board Game. Monoply Variant Palo Alto California 100 Year Anniversary',
        seller: 'Second Symphony',
        price: 150.00
    },
    {
        image: 'http://unsplash.it/600/500?image=300',
        title: 'retro chess chess pieces chess set antique chess Vintage Chess Pieces plastic chess Board Games Soviet chess set Plastic Soviet Chessmen',
        seller: 'Cleopatravintage',
        price: 8.48
    },
    {
        image: 'http://unsplash.it/600/500?image=400',
        title: 'Vintage "Game of Life" Board Game. Milton Bradley 1982 - Made In The USA',
        seller: 'vintagetoolbox',
        price: 20.00
    },
    {
        image: 'http://unsplash.it/600/500?image=500',
        title: 'Vintage 1960s Split-Level Aggravation Board Game. 99.9% complete just missing 2 coloured pegs.',
        seller: 'BuyfromGroovy',
        price: 25.49
    },
    {
        image: 'http://unsplash.it/600/500?image=600',
        title: 'Vintage Inspector Gadget Board Game - Rare 1983 Collectable Milton Bradley Game - Collectible Cartoon Games Toys - Complete',
        seller: 'FunkyKoala',
        price: 20.89
    },
    {
        image: 'http://unsplash.it/600/500?image=700',
        title: 'Vtg GO Board Game -- Reiss Games 1974 -- The Ancient Oriental Game -- Go / Go Moku',
        seller: 'VintageByJessie',
        price: 12.00
    },
    {
        image: 'http://unsplash.it/600/500?image=800',
        title: "1955 Candy Land , Milton Bradley Vintage Children's Board Game, Candyland, Kid's First Game, No Reading Necessary",
        seller: 'AHiddenNest',
        price: 54.00
    },
    {
        image: 'http://unsplash.it/600/500?image=900',
        title: "Parcheesi By Selchow & Righter Co. 1959 Complete 'A Backgammon Game Of India' Vintage Board Games",
        seller: 'BigYellowRetro',
        price: 15.00
    },
    {
        image: 'http://unsplash.it/600/500?image=1000',
        title: "Rules of the Mille Bornes 1960, vintage game, rule, 60's game, vintage board game, Edmond Dujardin",
        seller: 'RecreVintage',
        price: 7.90
    },
    {
        image: 'http://unsplash.it/600/500?image=110',
        title: "Vintage Emperor's Challenge Educational Board Game 1986",
        seller: 'WylieOwlVintage',
        price: 12.00
    },
    {
        image: 'http://unsplash.it/600/500?image=120',
        title: '1985 Complete Wheel of Fortune 2nd edition vintage board game, by Pressman.',
        seller: 'StutzyVintageGames',
        price: 9.99
    }
]

// select search button and add event listener
var searchButton = document.querySelector('#search')
searchButton.addEventListener('click', search)

// create search function that runs the forEach loop to create the 12 cards and clears the value of the search input field
function search() {
    results.forEach(function(result) {
        createResultCard(result)
    })
    document.querySelector('#search_input').value = ''
}
