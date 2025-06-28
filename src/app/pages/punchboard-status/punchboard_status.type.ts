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
export interface  Employee{
    userId: string,
    firstname: string,
    lastname: string,
    profileImg?:string,
    designation: string,
    dept: string,
    punchIn: number,
    punchOut: number,
    shiftTime: string,
    status: string
}
export interface PunchStatusResponse{
    data:Employee[],
    timestamp: string,
    requestId: string,
    status: number,
    message: string,
    pagination?:any,
    warnings?: any[]
}