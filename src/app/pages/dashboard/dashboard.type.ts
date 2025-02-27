// export interface ApiResponse {
//     timestamp: string;
//     requestId: string;
//     status: number;
//     message: string;
//     data: Data;
//     warnings: any[];
//   }
  
//   export interface Data {
//     id: number;
//     employeeCode: string;
//     userId: string;
//     unitId: string;
//     orgId: string;
//     profileImg: string;
//     profileImgUrl: string;
//     personalDetails: PersonalDetails;
//     corporateDetails: CorporateDetails;
//     isActive: boolean;
//     isArchived: boolean;
//     archiveDate: string | null;
//     archiveType: string | null;
//     archiveReason: string | null;
//   }
  
//   export interface PersonalDetails {
//     firstname: string;
//     lastname: string;
//     dateOfBirth: string;
//     gender: string;
//     personalMobileNumber: string;
//     personalEmail: string;
//     residentialAddress: string;
//     bloodGroup: string;
//     emergencyContact: string;
//     bankAccountNumber: string | null;
//     bankName: string | null;
//     ifscCode: string | null;
//     panNumber: string | null;
//     aadhaarNumber: string | null;
//     esiNumber: string | null;
//     providentFundNumber: string | null;
//     medicalInsuranceNumber: string | null;
//   }
  
//   export interface CorporateDetails {
//     employeeCode: string;
//     workMobileNumber: string;
//     workEmail: string;
//     dateOfFirstJoining: string;
//     joiningDate: string;
//     employmentType: string;
//     designation: Designation;
//     department: Department;
//     officeLocation: string;
//     employmentStatus: string;
//     probationPeriod: number;
//     ctc: number | null;
//     projects: Project[];
//     buddy: string | null;
//     managers: any[];
//     workMode: string;
//     dailyWorkHours: number;
//     shift: string;
//   }
  
//   export interface Designation {
//     id: number;
//     designationName: string;
//   }
  
//   export interface Department {
//     id: number;
//     departmentName: string;
//     departmentCode: string;
//   }
  
//   export interface Project {
//     id: number;
//     projectName: string;
//     projectCode: string;
//   }
  