interface Category {
    id: number;
    name: string;
    imageUrl: string;
    totalProduct: number;
    parentId: number | null;
}

interface Response {
    statusCode: number;
    data: any[];
    message: string;
}

