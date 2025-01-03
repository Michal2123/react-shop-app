export interface IGetHistoryItem {
  id: string;
  userId: string;
  orderList: IOrderItem[];
  date: string;
}

export interface IPostHistoryItem {
  orderList: IOrderItem[];
  date: string;
}

export interface IOrderItem {
  productId: number;
  count: number;
}

export interface IHistoryContext {
  history: IGetHistoryItem[];
}

export interface IUpdateHistoryContext {
  updateHistory: (arg: IGetHistoryItem[]) => void;
  getUserHistory: () => void;
}
