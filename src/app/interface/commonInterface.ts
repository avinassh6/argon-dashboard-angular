export interface EducationType {
    id?: number;
    EducationTypes?: string;
    IsActive?: number;
  }
  
  export interface EducationLevels{
    EduLevelId?: number;
    EduLevelName?: string;
    IsActive?: number;
  }

  export interface Pagination{
    page?: number| string;
    collectionSize?: number| string;
    pageSize?: number| string;
  }

  export interface EducationInfo{
    College?: string;
    CreatedBy?: string;
    EducationLevel?: number | string;
    EducationType?: number | string;
    FromYear?: string;
    IsActive?: number;
    Medium?: string;
    MemberEduId?: any;
    ModifiedBy?: any;
    Program?: string;
    RollNo?: string;
    SubjectOrSpecialization?: string;
    ToYear?: string;
    UploadDocument?: any;
    UserId?: string;
    Id?:string
  }
  