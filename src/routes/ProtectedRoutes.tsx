import { ReactNode } from 'react';

import { Navigate } from 'react-router-dom';
import { selectCurrentToken } from '@/redux/features/auth/authSlice';
import { useAppSelector } from '@/redux/hooks';

type TProtectedRoute = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: TProtectedRoute) => {
  const token = useAppSelector(selectCurrentToken);
  if (!token) {
    return <Navigate to="/login" replace={true} />;
  }

  return children;
};

export default ProtectedRoute;