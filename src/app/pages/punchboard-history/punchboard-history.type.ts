export interface punchboardPayload{
    sortBy:{
        field: string;
        sortOrder: string;
    },
    data: {
        startDate: string; 
        endDate: string;
    },
    filters: [],
    pagination:{
        page: number; 
        size: number;
    }

}