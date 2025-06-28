export interface punchboardStatusData{
    sortBy:{
        field:string;
        sortOrder:string;
    },
    pagination:
    {
        page:number;
        size:number;
    },
    filter:[]
}
