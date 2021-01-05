export class Transaction {
    id: number;
    title: string;
    description: string;
    //TODO: fkuser
    fromAccount: Account;
    toAccount: Account;
    amount: number;
    executedDate: Date;
    createdDate: Date;
}
