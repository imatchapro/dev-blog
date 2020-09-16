import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FiX } from 'react-icons/fi';

const SESSION_STORAGE_KEY = 'COOKIE_AGREEMENT_MODAL';

const TheModalCookieAgreement: React.FC = () => {
  const [display, setDisplay] = useState<boolean>(true);

  const handleClickCloseButton = () => {
    setDisplay(false);
    sessionStorage.setItem(SESSION_STORAGE_KEY, ' ');
  };

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_STORAGE_KEY)) {
      setDisplay(false);
    }

    return () => {
      setDisplay(true);
      sessionStorage.removeItem(SESSION_STORAGE_KEY);
    };
  }, []);

  return (
    display && (
      <div className="w-full fixed bottom-0 right-0 p-3 z-30 sm:p-4">
        <div className="max-w-screen-md mx-auto rounded bg-gray-900 py-4 px-4 sm:px-6">
          <p className="text-xs text-gray-300 leading-loose sm:text-sm">
            このサイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を使用しています。このGoogleアナリティクスはデータの収集のためにCookieを使用しています。サイトを利用することで、Cookieの使用に同意するものとします。
            <Link href={'/privacy'}>
              <a className="text-blue-500">プライバシーポリシーはこちら</a>
            </Link>
          </p>
          <button
            onClick={handleClickCloseButton}
            className="ml-auto mt-3 flex items-center bg-gray-300 py-1 px-2 rounded text-gray-900 font-semibold text-xs sm:text-sm"
          >
            <FiX className="mr-1" />
            閉じる
          </button>
        </div>
      </div>
    )
  );
};

export default TheModalCookieAgreement;
