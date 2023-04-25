interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="content-area flex h-12 items-center">
        <h1 className="font-bold">한글맞춤</h1>
      </header>
      <main className="flex min-h-[calc(100vh-3rem)] flex-col">{children}</main>
    </>
  );
};
