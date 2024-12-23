import { ReactNode, useEffect, useState } from "react";
import { IGetHistoryItem } from "../../interfaces/HistoryInterface";
import { GetOrderHistory } from "../../service/HistoryService";
import {
  HistoryContext,
  UpdateHistoryContext,
} from "../../context/HostoryContext";

interface Prop {
  children: ReactNode;
}

function getInitialHistoryState() {
  const json = localStorage.getItem("history");
  return json !== null ? (JSON.parse(json) as IGetHistoryItem[]) : [];
}

const HistoryProvider = ({ children }: Prop) => {
  const [history, setHistory] = useState<IGetHistoryItem[]>(
    getInitialHistoryState()
  );
  useEffect(() => {
    let didFetch = false;
    if (!history.length && !didFetch) {
      getUserHistory();
    }
    return () => {
      didFetch = true;
    };
  }, []);

  function updateHistory(data: IGetHistoryItem[]) {
    localStorage.setItem("history", JSON.stringify(data));
    setHistory(data);
  }

  function getUserHistory() {
    GetOrderHistory()
      .then((data) => {
        updateHistory(data);
      })
      .catch((error: Error) => console.log(error));
  }

  return (
    <HistoryContext.Provider value={{ history }}>
      <UpdateHistoryContext.Provider value={{ updateHistory, getUserHistory }}>
        {children}
      </UpdateHistoryContext.Provider>
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
