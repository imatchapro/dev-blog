import { useRouter } from 'next/router';

const useAbsoluteUrl = (): string => {
  const { asPath } = useRouter();

  return process.env.NEXT_PUBLIC_SITE_URL + asPath;
};

export default useAbsoluteUrl;
