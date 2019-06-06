export class Vial {
    batchID: number;
    fridgeID: number;
    vialID: number;
    used: boolean;
    fault: boolean;

    constructor(batchID: number, fridgeID: number,
        vialID: number, used: boolean, fault: boolean) {

        this.batchID = batchID;
        this.fridgeID = fridgeID;
        this.vialID = vialID;
        this.used = used;
        this.fault = fault;   
    }
}