import { ReactNode } from "react";
import AuthenticationProvider from "./AuthenticationProvider";
import ThemeProvider from "./ThemeProvider";
import ErrorProvider from "./ErrorProvider";
import ProductProvider from "./ProductProvider";
import CartProvider from "./CartProvider";
import HistoryProvider from "./HistoryProvider";

interface Prop {
  children: ReactNode;
}

const MainLayoutProviders = ({ children }: Prop) => {
  return (
    <AuthenticationProvider>
      <ThemeProvider>
        <ErrorProvider>
          <ProductProvider>
            <CartProvider>
              <HistoryProvider>{children}</HistoryProvider>
            </CartProvider>
          </ProductProvider>
        </ErrorProvider>
      </ThemeProvider>
    </AuthenticationProvider>
  );
};

export default MainLayoutProviders;
