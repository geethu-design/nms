export namespace Teamlisting{
    export interface UserDataPayload{
        sortBy:{
            field:string;
            sortOrder:string;
        };
        pagination:{
            page:number;
            size:number;
        };
        filter?:FilterPayload[];
        data:string[];    
        
    }
    export interface FilterPayload{
        field: string;
        value: Array<string | number>;    
    }
    export interface pagination{
        page:number;
        size:number;
    }
    export interface userData{
        firstname:string;
        lastname:string;
        workEmail:string;
        employeeCode:string;
        workMobileNumber:string;
        department:string; 
    }
    export interface teamResponse

    {
        timestamp: string;
        requestId: string;
        status: number,
        message: string;
        data: [
            {
                id: number;
                userId: string;
                firstname: string;
                lastname: string;
                workEmail: string;
                workMobileNumber: string;
                employeeCode: string;
                department: {
                    id: number;
                    departmentName: string;
                    departmentCode: string;
                },
                probationPeriod: number;
                isArchived: boolean;
            },
       ],
        pagination: {
            totalPages: number;
            totalElements: number;
            currentPage: number;
            pageSize: number;
        },
        "warnings": []
    }

}