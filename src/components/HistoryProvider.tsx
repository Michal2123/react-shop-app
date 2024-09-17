import { ReactNode, useContext, useEffect, useState } from "react";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import { AuthContext } from "../context/AuthenticationContext";
import { GetOrderHistory } from "../service/HistoryService";
import {
  HistoryContext,
  UpdateHistoryContext,
} from "../context/HostoryContext";

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
  const { user } = useContext(AuthContext);
  useEffect(() => {
    let didFetch = false;
    if (!history.length && user) {
      GetOrderHistory(user.id)
        .then((data) => {
          if (!didFetch) {
            updateHistory(data);
          }
        })
        .catch((error: Error) => console.log(error));
    }
    return () => {
      didFetch = true;
    };
  }, []);

  function updateHistory(data: IGetHistoryItem[]) {
    localStorage.setItem("history", JSON.stringify(data));
    setHistory(data);
  }

  return (
    <HistoryContext.Provider value={{ history }}>
      <UpdateHistoryContext.Provider value={{ updateHistory }}>
        {children}
      </UpdateHistoryContext.Provider>
    </HistoryContext.Provider>
  );
};

export default HistoryProvider;
