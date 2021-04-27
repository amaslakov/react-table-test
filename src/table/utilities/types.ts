import { createData } from '../../create-data';

export type PersonDataArray = ReturnType<typeof createData>;
export type PersonData = PersonDataArray[number];
export type PersonDataKey = keyof PersonData;