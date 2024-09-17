import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import Order from "./Order";

interface Prop {
  paginateList: IGetHistoryItem[];
}

const HistoryList = ({ paginateList }: Prop) => {
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className="card p-4 w-75">
        {paginateList.map((item, index) => (
          <Order
            key={item.id}
            order={item}
            isLast={index !== paginateList.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HistoryList;
