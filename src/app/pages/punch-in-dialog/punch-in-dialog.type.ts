export interface projectListPayload{
sortBy:{
    field:string;
    sortOrder:string;
};
pagination:{
    page:number;
    size:number;
};
data:{
    isArchived:boolean;
    isAssignee:boolean;
    isDeleted:boolean;
    keyword:string;
    userId:string;
};
filter:filterPayload[]

}
export interface filterPayload{      //doubt//
    field: string;
    value: string;  
}
export interface taskListPayload{
    sortBy : 
    {
      field: string; 
      sortOrder: string;
    } ; 
    pagination :  
    {
      page: number;
      size: number;
    };


    data: {
        // isArchived :boolean;
        isDeleted: boolean;
        keyword:string;
        projectId: string;
        // userId:string;
      };
      filter : filterPayload[];
}

export interface punchInPayload{
  data: 
{
  empId: string;
  description: string;
  ignoreTask: boolean;
  isOnBreak: boolean;
  projectId: string;
  punchInDateTime: number;
  punchLocation: string;
  shiftDate: string; 
  taskId:string;
}
}

