import Header from "./Header/Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      {/* Footer */}
    </>
  );
};

export default Layout;
