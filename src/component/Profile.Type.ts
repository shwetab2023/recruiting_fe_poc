export interface IProfile {
    id: string;
    name: string;
    experience: string;
    dateOfBirth: string;
    company: string;
}

export const dummyProfileList: IProfile[] = [{
    id: "new123",
    name: "test1",
    experience: "5",
    dateOfBirth: "21-11-2000",
    company: "testCompany"
},];

export enum PageEnum {
    list,
    add,
}