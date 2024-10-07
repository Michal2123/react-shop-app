import { ReactNode } from "react";
import AuthenticationProvider from "./AuthenticationProvider";
import ErrorProvider from "./ErrorProvider";
import HistoryProvider from "./HistoryProvider";
import ThemeProvider from "./ThemeProvider";
import ProductProvider from "./ProductProvider";
import CartProvider from "./CartProvider";

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
