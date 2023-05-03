interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return <main className="h-full w-full px-5">{children}</main>;
};

export default Layout;
