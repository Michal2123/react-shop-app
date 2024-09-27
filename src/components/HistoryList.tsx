import { useContext } from "react";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import Order from "./Order";
import { ThemeContext } from "../context/ThemeContext";

interface Prop {
  paginateList: IGetHistoryItem[];
}

const HistoryList = ({ paginateList }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center mt-4">
      <div className={`card ${isDark ? "dark" : "light"} p-4 w-75`}>
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
