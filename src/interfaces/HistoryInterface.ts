export interface IGetHistoryItem {
  id: string;
  userId: string;
  orderList: IOrderItem[];
  date: string;
}

export interface IPostHistoryItem {
  userId: string;
  orderList: IOrderItem[];
  date: string;
}

export interface IOrderItem {
  productId: string;
  name: string;
  count: number;
  price: number;
}

export interface IHistoryContext {
  history: IGetHistoryItem[];
}

export interface IUpdateHistoryContext {
  updateHistory: (arg: IGetHistoryItem[]) => void;
}
