export type Fund = {
    id: number;
    name: string;
    description: string;
}

// Fund could feasibly contain other bits of information, or it could just be a reference to a database table containing full details

export type Investment = {
    id: number;
    customerId: number;
    fundId: number;
    fundName: string;
    amount: number;
    dateCreated: Date;
}

// in the future when multiple funds selection is allowed, fundId could be an array of funds
