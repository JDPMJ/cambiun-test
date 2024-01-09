import { FC, ReactNode } from 'react';
import "../globals.css";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout: FC<AuthLayoutProps> = ({ children }) => {
  return (
    
      
        <div className='min-h-screen flex items-center justify-center p-4'>
          <div className='bg-slate-200 p-10 rounded-md'>
            {children}
          </div>
        </div>
      
    
  );
};

export default AuthLayout;
