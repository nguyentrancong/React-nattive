interface QuickAccess {
    id: number;
    name: string;
    image: string;
}

const quickAccessList: QuickAccess[] = [
    {
        id: 1,
        name: 'Cherry',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
    {
        id: 2,
        name: 'Kiwi',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
    {
        id: 3,
        name: 'Dâu tây',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
    {
        id: 4,
        name: 'Lê',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
    {
        id: 5,
        name: 'Táo',
        image: 'http://tutofox.com/foodapp//banner/banner-1.jpg',
    },
]

export {QuickAccess, quickAccessList};