'use client'

import React, { Suspense, useMemo } from 'react';
import { useRouter } from 'next/navigation';

const GameDetailsRouter = () => {
  const router = useRouter();
  const { gameName } = router.query;
  const GameDetailsPage = useMemo(() => React.lazy(() => import(`../app/gamedetails/${gameName}`)), [gameName]);

  return (
    <div className="pt-32 w-screen h-screen overflow-y-scroll no-scrollbar bg-black">
      <Suspense fallback={<div>Loading...</div>}>
        {gameName && <GameDetailsPage />}
      </Suspense>
    </div>
  );
};

export default GameDetailsRouter;