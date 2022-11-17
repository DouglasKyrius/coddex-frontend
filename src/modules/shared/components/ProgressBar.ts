import { useEffect, useMemo, useState } from 'react';
import NProgress from 'nprogress';
import { useMounted } from '../hooks';

const ProgressBar = () => {
  const mounted = useMounted();
  const [visible, setVisible] = useState(false);

  NProgress.configure({
    showSpinner: false,
  });

  useMemo(() => {
    if (!visible) {
      NProgress.start();
      setVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (visible) {
      NProgress.done();
      setVisible(false);
    }
    if (!visible && mounted) {
      setVisible(false);
      NProgress.done();
    }
    return () => {
      NProgress.done();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  return null;
};
export default ProgressBar;
