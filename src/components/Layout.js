import FooterWeb from "./FooterWeb";
import NarbarMenu from "./NabarMenu";

const Layout = ({ children }) => {
  return (
    <>
      <NarbarMenu />
      <main>{children}</main>
      <FooterWeb />
    </>
  );
};
export default Layout;
