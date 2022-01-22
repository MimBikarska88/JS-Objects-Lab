function exercise1(name, population, treasury) {
    let city = {
        name: name,
        population: population,
        treasury: treasury
    };
    return city;
}
/*Input : 
'Tortuga',
7000,
15000

Output:
{
name:' &#39;'Tortuga',
population: 7000,
treasury: 15000
}
*/
function exercise2(townsInfo) {
    let cities = [];
    for (let i = 0; i < townsInfo.length; ++i) {
        let cityDetails = townsInfo[i].split(' <-> ');

        let cityFound = cities.find((city) => city.name == cityDetails[0]);
        if (cityFound) {
            cityFound.population += Number(cityDetails[1]);
        } else {
            let city = {
                name: cityDetails[0],
                population: Number(cityDetails[1]),
            }
            cities.push(city);
        }
    }
    cities.forEach(city => {
        console.log(city['name'] + " : " + city['population']);
    });
}
/*input 



exercise2(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);


exercise2(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
])

Output:
Sofia : 1200000
Montana : 20000
New York : 10000000
Washington : 2345000
Las Vegas : 1000000

Istanbul : 101000
Honk Kong : 2100004
Jerusalem : 2352344
Mexico City : 23401925



*/

function cityTaxes(name, population, treasury) {

    let city = {
        name: name,
        population: population,
        treasury: treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += this.population * this.taxRate;
        },
        applyGrowth(percentage) {
            this.population += this.population * percentage / 100;
        },
        applyRecession(percentage) {
            this.treasury -= this.treasury * percentage / 100;
        }
    }
    return city;
}

/*
Input : 

let city = cityTaxes('Tortuga', 7000, 15000);
city.collectTaxes();
console.log(city.treasury);
city.applyGrowth(5);
console.log(city.population);


Output:
85000
7350


*/
function objectFactory(functionLibrary, arrayOrders) {

    let result = [];
    for (let order of arrayOrders) {

        let currentObject = Object.assign({}, order.template);
        for (let part of order.parts) {
            currentObject[part] = functionLibrary[part];
        }
        console.log(currentObject);
        result.push(currentObject);
    }
    return result;
}
console.log(objectFactory({
    print: function() {
        console.log(`${this.name} is printing a page`);
    },
    scan: function() {
        console.log(`${this.name} is scanning a document`);
    },
    play: function(artist, track) {
        console.log(`${this.name} is playing &#39;${track}&#39; by ${artist}`);
    },
}, [{
        template: { name: 'ACME Printer' },
        parts: ['print']
    },
    {
        template: { name: 'Initech Scanner' },
        parts: ['scan']
    },
    {
        template: { name: 'ComTron Copier' },
        parts: ['scan', 'print']
    },
    {
        template: { name: 'BoomBox Stereo' },
        parts: ['play']
    }
]));


function createMuffinWithDefaultProperties(options) {
    let defaults = {
        flavour: 'vanilla',
        topping: 'none',
        sprinkles: 'none',
        filling: 'none'
    };

    options = Object.assign(defaults, options);
    console.log(options);
}
/*

createMuffinWithDefaultProperties({ sprinkles: 'yes' });
createMuffinWithDefaultProperties({ flavour: 'chocolate', topping: 'raspberry glaze', sprinkles: 'yes' });

*/





function createAssemblyLine() {
    let result = {};
    result.hasClima = function(obj) {
        obj['temp'] = 21;
        obj['tempSettings'] = 21;
        obj['adjustTemp'] = function() {
            if (obj.temp < obj.tempSettings) {
                obj.temp++;
            } else if (obj.temp > obj.tempSettings) {
                obj.temp--;
            }
        }
    }
    result.hasAudio = function(obj) {
        obj['currentTrack'] = { name: null, artist: null };
        obj['nowPlaying'] = function() {
            if (obj.currentTrack) {
                console.log(`Now playing ${obj.currentTrack.name} by ${obj.currentTrack.artist}`);
            }
        }
    }
    result.hasParktronic = function(obj) {
        obj['checkDistance'] = function(distance) {
            if (distance < 0.1) {
                console.log("Beep! Beep! Beep!");
            } else if (distance < 0.25) {
                console.log("Beep! Beep");
            } else if (distance < 0.5) {
                console.log("Beep!");
            }
        }
    }
    return result;
}



/*
Input : 


let myCar = {
    name: 'Toyota',
    model: 'Avensis'
}
let assemblyLine = createAssemblyLine();
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
    name: 'Gonna Give You Up',
    artist: 'Rick Astley'
};
myCar.nowPlaying();


Output: 

21
20


Now playing Gonna Give You Up by Rick Astley


*/