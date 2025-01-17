import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import useAuth from '../../hooks/useAuth';

import { GuestGuardProps } from './GuestGuard.types';

/**
 * 인증이 없는 페이지 접근 시 사용
 */
const GuestGuard = ({ children }: GuestGuardProps) => {
  const { checkUserState } = useAuth();
  const router = useRouter();
  const [showRoute, setShowRoute] = useState(false);

  useEffect(() => {
    if (!router.isReady) {
      return;
    }
    checkUserState()
      .then(() => {
        setShowRoute(false);
        router.replace('/');
      })
      .catch(() => {
        setShowRoute(true);
      });

    if (showRoute) {
      return;
    }
  }, [router, showRoute, checkUserState]);

  return <>{children}</>;
};

export default GuestGuard;
