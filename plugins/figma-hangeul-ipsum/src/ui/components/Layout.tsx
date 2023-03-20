import { GitHubLogoIcon } from '@radix-ui/react-icons';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <header className="p-5">
        <h1 className="text-xl font-bold">한글입숨</h1>
      </header>
      <main className="flex-1 px-5">{children}</main>
      <footer className="bg-figma-bg-secondary border-figma-border flex justify-end border-t p-5">
        <a
          href="https://github.com/sangrimlee/figma-plugins"
          target="_blank"
          className="text-figma-text-secondary hover:text-figma-text-secondary-hover hover:bg-figma-bg-secondary flex items-center font-medium transition-colors"
        >
          <GitHubLogoIcon className="mr-1.5 h-5 w-5" />
          <span>Github</span>
        </a>
      </footer>
    </>
  );
};

export default Layout;
