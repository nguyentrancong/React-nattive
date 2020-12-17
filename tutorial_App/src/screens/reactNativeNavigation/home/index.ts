import { QuickAccess, quickAccessList} from './quickAccess/index';
import {Banner, banners} from './banner/index'
enum SectionType {
    Banner = 0,
    QuickAccess,
    SaleOff,
    ComboHot,
    GroupBuy,
    Product,
}

enum DirectionType {
    normal = 0,
    horizontal,
    vertical,
}

interface HomeSection {
    id: number;
    title: string;
    data: any[];
    images: string[];
    sectionType: SectionType;
    direction: DirectionType;
}

const Home: HomeSection[] = [
    //banner
    {
        id: 1,
        title: 'Banner header',
        data: banners,
        images: [],
        sectionType: SectionType.Banner,
        direction: DirectionType.normal
    },
    //quick access
    {
        id: 2,
        title: 'Quick Access',
        data: quickAccessList,
        images: [],
        sectionType: SectionType.QuickAccess,
        direction: DirectionType.normal
    },
    //group buy
    {
        id: 3,
        title: 'Group buy',
        data: [],
        images: [],
        sectionType: SectionType.GroupBuy,
        direction: DirectionType.horizontal
    },

];

export {Banner, HomeSection, Home, SectionType, DirectionType};