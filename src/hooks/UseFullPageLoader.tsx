import { useState } from 'react';
import { FullPageLoader } from '../components/FullPageLoader';


export const useFullPageLoader = () => {
  const [loading, setLoading] = useState(true);

  return [
    loading ? <FullPageLoader /> : <div style={{ display: 'none' }} />,
    () => setLoading(true), //Show loader
    () => setLoading(false) //Hide Loader
  ] as const;
};
