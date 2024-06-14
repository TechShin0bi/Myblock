export interface Transaction {
    id: string;
    name: string;
    profilePicture: string;
    transactionType: 'incoming' | 'outgoing';
    amount: number; 
}

export type NotificationPropsType = {
    id: number;
    type: 'success' | 'failed' | 'info' | 'deposit';
    heading: string;
    body: string;
    date: string;
  };
  

 export  interface Transaction {
    id: string;
    name: string;
    profilePicture: string;
    transactionType: 'incoming' | 'outgoing';
    amount: number;
    date: string;
    time: string;
}