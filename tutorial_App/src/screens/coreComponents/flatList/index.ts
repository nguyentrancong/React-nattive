
interface Course {
    id: number;
    title: string;
    desc: string;
    images: string[];

}

const Courses: Course[] = [
    {
        id: 1,
        title: 'React native',
        desc: 'react native',
        images: []
    },
    {
        id: 2,
        title: 'React Navigation',
        desc: 'react Navigation',
        images: []
    },
    {
        id: 3,
        title: 'React redux',
        desc: 'react redux',
        images: []
    },
    {
        id: 4,
        title: 'React native Navigation',
        desc: 'react native Navigation',
        images: []
    }
] 

export {Course, Courses};