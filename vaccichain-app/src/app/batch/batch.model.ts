export class Batch {
    batchID: number;
    info: string;
    temp: number;
    vacType: number;
    receiveDate: number;
    expireDate: number;
    fault: boolean;
    updatedAt: number;
    fridgeID: number;

    constructor(batchID: number, info: string, temp: number, 
        vacType: number, receiveDate: number, expireDate: number,
        fault: boolean, updatedAt: number, fridgeID: number) {

        this.batchID = batchID;
        this.info = info;
        this.temp = temp;
        this.vacType = vacType;
        this.receiveDate = receiveDate;
        this.expireDate = expireDate;
        this.fault = fault;
        this.updatedAt = updatedAt;
        this.fridgeID = fridgeID;   
    }
}