import { CheckCircledIcon, InfoCircledIcon } from '@radix-ui/react-icons';
import * as Toast from '@radix-ui/react-toast';
import clsx from 'clsx';
import { createContext, useCallback, useContext, useState } from 'react';

const toastTypes = {
  success: {
    Icon: CheckCircledIcon,
    colorClassNames: 'bg-figma-bg-success-tertiary text-figma-text-success border-figma-border-success',
  },
  danger: {
    Icon: InfoCircledIcon,
    colorClassNames: 'bg-figma-bg-danger-tertiary text-figma-text-danger border-figma-border-danger',
  },
};

interface ToastInfo {
  type: keyof typeof toastTypes;
  title: string;
}

type ToastFn = (info: ToastInfo) => void;

const ToastContext = createContext<ToastFn | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (context === null) {
    throw new Error();
  }
  return context;
};

const ToastContent = ({ type, title }: ToastInfo) => {
  const { Icon, colorClassNames } = toastTypes[type];

  return (
    <div className={clsx('flex items-start rounded-md border py-2.5 px-3', colorClassNames)}>
      <Icon className={clsx('mr-1.5 mt-0.5 h-4 w-4')} />
      <Toast.Title className=" whitespace-pre-wrap text-sm font-medium">{title}</Toast.Title>
    </div>
  );
};

export const ToastProvider = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);
  const [toastInfo, setToastInfo] = useState<ToastInfo>();

  const toast = useCallback((info: ToastInfo) => {
    setOpen(true);
    setToastInfo(info);
  }, []);

  return (
    <Toast.Provider duration={1500}>
      <ToastContext.Provider value={toast}>
        {children}
        <Toast.Root
          defaultOpen
          open={open}
          onOpenChange={setOpen}
          className={clsx('data-[state=open]:animate-showToast data-[state=closed]:animate-hideToast')}
        >
          {toastInfo && <ToastContent {...toastInfo} />}
        </Toast.Root>
        <Toast.Viewport
          className={clsx('p-[var(--viewport-padding)] [--viewport-padding:_1.5rem]', 'fixed inset-x-0 top-0 z-50 m-0')}
        />
      </ToastContext.Provider>
    </Toast.Provider>
  );
};
