import { Button } from "react-bootstrap";

interface Prop {
  page: number;
  maxVisiblePages: number;
  maxPageCount: number;
  setPage: (page: number) => void;
}

const Paging = ({ page, maxVisiblePages, maxPageCount, setPage }: Prop) => {
  let startPageListIndex = 1;
  if (maxVisiblePages < maxPageCount) {
    startPageListIndex = page;
    if (maxPageCount - 2 && page + 2 > maxPageCount) {
      startPageListIndex = maxPageCount - 2;
    } else if (page - 1 <= 1) {
      startPageListIndex = 1;
    } else {
      startPageListIndex = page - 1;
    }
  }

  function handleClickPage(page: number) {
    window.scrollTo(0, 0);
    setPage(page);
  }

  return (
    <div className="d-flex justify-content-center">
      {Array.from(
        {
          length:
            maxVisiblePages > maxPageCount ? maxPageCount : maxVisiblePages,
        },
        (_, k) => (
          <Button
            className={`${
              page !== k + startPageListIndex ? `btn-secondary` : `btn-primary`
            } mx-2 my-2`}
            style={{ display: "inline-block" }}
            key={k + startPageListIndex}
            onClick={() => handleClickPage(k + startPageListIndex)}
          >
            {k + startPageListIndex}
          </Button>
        )
      )}
    </div>
  );
};

export default Paging;
