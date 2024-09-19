import { Button, Card } from "react-bootstrap";
import ProductsFilters from "./ProductFilters";

interface Prop {
  showPopup: boolean;
  updatePopupState: () => void;
}

const ProductFilterPopup = ({ showPopup, updatePopupState }: Prop) => {
  return (
    <>
      {showPopup ? (
        <div className="filter-popup">
          <div
            className="filter-popup-content  mx-auto"
            style={{ width: "400px" }}
          >
            <Card>
              <div className="d-flex justify-content-end m-3">
                <Button className="btn-danger" onClick={updatePopupState}>
                  X
                </Button>
              </div>
              <ProductsFilters className="px-5 pt-3 pb-2" buttonMargin="m-3" />
            </Card>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ProductFilterPopup;
