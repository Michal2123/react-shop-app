import { useContext, useState } from "react";
import { HistoryContext } from "../context/HostoryContext";
import Paging from "./Paging";
import { IGetHistoryItem } from "../interfaces/HistoryInterface";
import { calcItemsPerPage } from "../utlis/Calculations";
import { HistoryListPage } from "../enum/HistoryListEnum";
import HistoryList from "./HistoryList";

const OrderHistory = () => {
  const { history } = useContext(HistoryContext);
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(history.length / HistoryListPage.ITEMSPERPAGE);

  const paginateList: IGetHistoryItem[] = calcItemsPerPage(
    history,
    page,
    HistoryListPage.ITEMSPERPAGE
  );

  if (paginateList.length) {
    return (
      <>
        <HistoryList paginateList={paginateList} />
        {pageCount > 1 ? (
          <div className="my-2">
            <Paging
              page={page}
              maxVisiblePages={3}
              maxPageCount={pageCount}
              setPage={setPage}
            />
          </div>
        ) : null}
      </>
    );
  }
  return (
    <div className="d-flex justify-content-center mt-5">
      <h5>There were no order yet.</h5>
    </div>
  );
};

export default OrderHistory;
