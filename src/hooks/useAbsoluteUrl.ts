import { useRouter } from 'next/router';
import { domain_name } from '../lib/constants';

const useAbsoluteUrl = (): string => {
  const { asPath } = useRouter();

  return `https://${domain_name + asPath}`;
};

export default useAbsoluteUrl;
