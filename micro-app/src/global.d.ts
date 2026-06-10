// Tyscript related to define all the interface of all the method and variable
// use throughout the application
interface Window {
 __POWERED_BY_QIANKUN__?: boolean;
 __INJECTED_PUBLIC_PATH_BY_QIANKUN__?: string;
 'micro-app'?: {
   bootstrap: () => Promise<void>;
   mount: (props: any) => Promise<void>;
   unmount: () => Promise<void>;
 };
}
