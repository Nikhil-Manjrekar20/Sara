export interface AddOn {
  id: string;
  name: string;
  price: number;
  image: string;
}

export interface EventType {
  id: string;
  name: string;
  icon: string;
}

export interface Cake {
  id: string;
  name: string;
  image: string;
  prices: {
    egg: {
      halfKg: number;
      oneKg: number;
    };
    eggless: {
      halfKg: number;
      oneKg: number;
    };
  };
}

export const addOns: AddOn[] = [
  {
    id: '1',
    name: 'Rose',
    price: 99,
    image: 'https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'LED HBD',
    price: 119,
    image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Fog Entry',
    price: 899,
    image: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Fog Entry + Cold Fire (2)',
    price: 1599,
    image: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'Fog Entry + Cold Fire (4)',
    price: 2299,
    image: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '6',
    name: 'Photo Props',
    price: 189,
    image: 'https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    name: 'Bouquet',
    price: 499,
    image: 'https://images.pexels.com/photos/2879824/pexels-photo-2879824.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '8',
    name: 'LED Name Letters',
    price: 299,
    image: 'https://images.pexels.com/photos/1893609/pexels-photo-1893609.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '9',
    name: 'Table Décor',
    price: 349,
    image: 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '10',
    name: 'Candles',
    price: 199,
    image: 'https://images.pexels.com/photos/3171837/pexels-photo-3171837.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '11',
    name: 'Photoshoot (30 mins)',
    price: 600,
    image: 'https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '12',
    name: 'Sash & Crown',
    price: 199,
    image: 'https://images.pexels.com/photos/265722/pexels-photo-265722.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '13',
    name: 'Cold Fire',
    price: 700,
    image: 'https://images.pexels.com/photos/3608263/pexels-photo-3608263.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '14',
    name: 'Candle Faith',
    price: 199,
    image: 'https://images.pexels.com/photos/278583/pexels-photo-278583.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '15',
    name: 'Fog Effect',
    price: 499,
    image: 'https://images.pexels.com/photos/5648103/pexels-photo-5648103.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '16',
    name: 'LOVE',
    price: 99,
    image: 'https://images.pexels.com/photos/850359/pexels-photo-850359.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '17',
    name: 'LED Numbers',
    price: 99,
    image: 'https://images.pexels.com/photos/3419692/pexels-photo-3419692.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const eventTypes: EventType[] = [
  {
    id: '1',
    name: 'Birthday',
    icon: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '2',
    name: 'Anniversary',
    icon: 'https://images.pexels.com/photos/1024960/pexels-photo-1024960.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '3',
    name: 'Romantic Date',
    icon: 'https://images.pexels.com/photos/1024967/pexels-photo-1024967.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '4',
    name: 'Marriage Proposal',
    icon: 'https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '5',
    name: 'Groom to Be',
    icon: 'https://images.pexels.com/photos/2897883/pexels-photo-2897883.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '6',
    name: 'Bride to Be',
    icon: 'https://images.pexels.com/photos/1589216/pexels-photo-1589216.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '7',
    name: 'Baby Shower',
    icon: 'https://images.pexels.com/photos/3593434/pexels-photo-3593434.jpeg?auto=compress&cs=tinysrgb&w=600'
  },
  {
    id: '8',
    name: 'Private Party',
    icon: 'https://images.pexels.com/photos/2608517/pexels-photo-2608517.jpeg?auto=compress&cs=tinysrgb&w=600'
  }
];

export const cakes: Cake[] = [
  {
    id: '1',
    name: 'Vanilla',
    image: 'https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 500,
        oneKg: 950
      },
      eggless: {
        halfKg: 550,
        oneKg: 1100
      }
    }
  },
  {
    id: '2',
    name: 'Strawberry',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 500,
        oneKg: 950
      },
      eggless: {
        halfKg: 550,
        oneKg: 1100
      }
    }
  },
  {
    id: '3',
    name: 'Butterscotch',
    image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 500,
        oneKg: 950
      },
      eggless: {
        halfKg: 550,
        oneKg: 1100
      }
    }
  },
  {
    id: '4',
    name: 'Pineapple',
    image: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 500,
        oneKg: 950
      },
      eggless: {
        halfKg: 550,
        oneKg: 1100
      }
    }
  },
  {
    id: '5',
    name: 'Blueberry',
    image: 'https://images.pexels.com/photos/1639566/pexels-photo-1639566.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 550,
        oneKg: 1000
      },
      eggless: {
        halfKg: 600,
        oneKg: 1200
      }
    }
  },
  {
    id: '6',
    name: 'Pista Malai',
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 550,
        oneKg: 1000
      },
      eggless: {
        halfKg: 600,
        oneKg: 1200
      }
    }
  },
  {
    id: '7',
    name: 'Choco Truffle',
    image: 'https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 600,
        oneKg: 1100
      },
      eggless: {
        halfKg: 650,
        oneKg: 1300
      }
    }
  },
  {
    id: '8',
    name: 'Chocolate Kitkat',
    image: 'https://images.pexels.com/photos/1721934/pexels-photo-1721934.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 600,
        oneKg: 1100
      },
      eggless: {
        halfKg: 650,
        oneKg: 1300
      }
    }
  },
  {
    id: '9',
    name: 'White Forest',
    image: 'https://images.pexels.com/photos/1702373/pexels-photo-1702373.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 600,
        oneKg: 1100
      },
      eggless: {
        halfKg: 650,
        oneKg: 1300
      }
    }
  },
  {
    id: '10',
    name: 'Black Forest',
    image: 'https://images.pexels.com/photos/264892/pexels-photo-264892.jpeg?auto=compress&cs=tinysrgb&w=600',
    prices: {
      egg: {
        halfKg: 600,
        oneKg: 1100
      },
      eggless: {
        halfKg: 650,
        oneKg: 1300
      }
    }
  }
];