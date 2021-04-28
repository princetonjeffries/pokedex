let charJSON = {
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 62,
    "height": 6,
    "id": 4,
    "is_default": true,
    "name": "charmander",
    "order": 5,
    "stats": [
      {
        "base_stat": 39,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 52,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 43,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 60,
        "effort": 0,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 50,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 65,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 85
};
let charzJSON = {
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 240,
    "height": 17,
    "id": 6,
    "is_default": true,
    "name": "charizard",
    "order": 7,
    "stats": [
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 84,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 78,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 109,
        "effort": 3,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 85,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 100,
        "effort": 0,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      },
      {
        "slot": 2,
        "type": {
          "name": "flying"
        }
      }
    ],
    "weight": 905
};  
let charmJSON = {
    "abilities": [
      {
        "name": "blaze"
      },
      {
        "name": "solar-power"
      }
    ],
    "base_experience": 142,
    "height": 11,
    "id": 5,
    "is_default": true,
    "name": "charmeleon",
    "order": 6,
    "stats": [
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "hp"
        }
      },
      {
        "base_stat": 64,
        "effort": 0,
        "stat": {
          "name": "attack"
        }
      },
      {
        "base_stat": 58,
        "effort": 0,
        "stat": {
          "name": "defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "special-attack"
        }
      },
      {
        "base_stat": 65,
        "effort": 0,
        "stat": {
          "name": "special-defense"
        }
      },
      {
        "base_stat": 80,
        "effort": 1,
        "stat": {
          "name": "speed"
        }
      }
    ],
    "types": [
      {
        "slot": 1,
        "type": {
          "name": "fire"
        }
      }
    ],
    "weight": 190
};
var charmander = JSON.stringify(charJSON);
let charmanderOBJ = JSON.parse(charmander);
var charizard = JSON.stringify(charzJSON);
let charizardOBJ = JSON.parse(charizard);
var charmeleon = JSON.stringify(charmJSON);
let charmeleonOBJ = JSON.parse(charmeleon);
let current;
function init() {
    var page = location.pathname.substring(location.pathname.lastIndexOf("/") + 1);;
    console.log(page);
    switch(page){
      case('charmander.html'):
        current = charmanderOBJ;
        break;
      case('charizard.html'):
        current = charizardOBJ;
        break;
      case('charmeleon.html'):
        current = charmeleonOBJ;
        break;
    }
}
window.onload = init();
console.log(current);
document.getElementById('name').innerHTML = current.name;
document.getElementById('abilitiesname1').innerHTML =current.abilities[0].name;
document.getElementById('abilitiesname2').innerHTML =current.abilities[1].name;
document.getElementById('base_experience').innerHTML = 'Base experience: ' + current.base_experience;
document.getElementById('height').innerHTML = 'Height: ' + current.height;
document.getElementById('id').innerHTML = 'Id: ' + current.id;
document.getElementById('is_default').innerHTML = 'Default: ' + current.is_default;
document.getElementById('order').innerHTML = 'Order: ' + current.order;
document.getElementById('statName1').innerHTML = 'Stat Name: ' + current.stats[0].stat.name;
document.getElementById('base_stat1').innerHTML = 'Base Stat: ' + current.stats[0].base_stat;
document.getElementById('effort1').innerHTML = 'Effort: ' + current.stats[0].effort;
document.getElementById('statName2').innerHTML = 'Stat Name: ' + current.stats[1].stat.name;
document.getElementById('base_stat2').innerHTML = 'Base Stat: ' + current.stats[1].base_stat;
document.getElementById('effort2').innerHTML = 'Effort: ' + current.stats[1].effort;
document.getElementById('statName3').innerHTML = 'Stat Name: ' + current.stats[2].stat.name;
document.getElementById('base_stat3').innerHTML = 'Base Stat: ' + current.stats[2].base_stat;
document.getElementById('effort3').innerHTML = 'Effort: ' + current.stats[2].effort;
document.getElementById('statName4').innerHTML = 'Stat Name: ' + current.stats[3].stat.name;
document.getElementById('base_stat4').innerHTML = 'Base Stat: ' + current.stats[3].base_stat;
document.getElementById('effort4').innerHTML = 'Effort: ' + current.stats[3].effort;
document.getElementById('statName5').innerHTML = 'Stat Name: ' + current.stats[4].stat.name;
document.getElementById('base_stat5').innerHTML = 'Base Stat: ' + current.stats[4].base_stat;
document.getElementById('effort5').innerHTML = 'Effort: ' + current.stats[4].effort;
document.getElementById('statName6').innerHTML = 'Stat Name: ' + current.stats[5].stat.name;
document.getElementById('base_stat6').innerHTML = 'Base Stat: ' + current.stats[5].base_stat;
document.getElementById('effort6').innerHTML = 'Effort: ' + current.stats[5].effort;
document.getElementById('slot').innerHTML = 'Slot: ' + current.types[0].slot;
document.getElementById('type').innerHTML = 'Type: ' + current.types[0].type.name;
document.getElementById('weight').innerHTML = 'Weight: ' + current.weight;
//charmander
