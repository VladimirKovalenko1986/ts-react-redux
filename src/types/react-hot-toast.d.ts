declare module "react-hot-toast" {
  import { ComponentType, ReactNode, CSSProperties } from "react";

  type ToastType = "success" | "error" | "loading" | "blank" | "custom";

  interface ToastOptions {
    id?: string;
    duration?: number;
    icon?: ReactNode;
    ariaProps?: {
      role: "status" | "alert";
      "aria-live": "assertive" | "polite";
    };
    style?: CSSProperties;
    className?: string;
  }

  interface ToasterProps {
    position?:
      | "top-left"
      | "top-center"
      | "top-right"
      | "bottom-left"
      | "bottom-center"
      | "bottom-right";
    reverseOrder?: boolean;
    gutter?: number;
    toastOptions?: Partial<ToastOptions>;
  }

  interface Toast {
    id: string;
    type: ToastType;
    message: ReactNode;
    icon?: ReactNode;
    duration?: number;
    ariaProps: {
      role: "status" | "alert";
      "aria-live": "assertive" | "polite";
    };
    visible: boolean;
    style?: CSSProperties;
    className?: string;
  }

  export const toast: {
    (message: ReactNode, options?: ToastOptions): string;
    success(message: ReactNode, options?: ToastOptions): string;
    error(message: ReactNode, options?: ToastOptions): string;
    loading(message: ReactNode, options?: ToastOptions): string;
    custom(message: ReactNode, options?: ToastOptions): string;
    dismiss(toastId?: string): void;
    remove(toastId?: string): void;
    promise<T>(
      promise: Promise<T>,
      messages: {
        loading: ReactNode;
        success: ReactNode | ((data: T) => ReactNode);
        error: ReactNode | ((error: unknown) => ReactNode);
      },
      options?: {
        loading?: ToastOptions;
        success?: ToastOptions;
        error?: ToastOptions;
      }
    ): Promise<T>;
  };

  export const Toaster: ComponentType<ToasterProps>;
}
