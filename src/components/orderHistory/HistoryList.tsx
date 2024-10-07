import { useContext } from "react";
import Order from "./Order";
import { ThemeContext } from "../../context/ThemeContext";
import { IGetHistoryItem } from "../../interfaces/HistoryInterface";

interface Prop {
  paginateList: IGetHistoryItem[];
}

const HistoryList = ({ paginateList }: Prop) => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className="d-flex justify-content-center mt-4">
      <div
        className={`card p-4 w-75`}
        data-bs-theme={isDark ? "dark" : "light"}
      >
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
