import React from 'react';
import { FiCode, FiMail, FiPenTool } from 'react-icons/fi';
import ContentNavItemHeading from '../atoms/ContentNavItemHeading';
import ContentNavItemText from '../atoms/ContentNavItemText';
import ContentNavItemLink from '../atoms/ContentNavItemLink';

const TheContentsNavigation: React.FC = () => {
  return (
    <nav className="mt-12">
      <ul className="grid grid-cols-1 gap-12 sm:grid-cols-3 sm:gap-8">
        <li>
          <ContentNavItemHeading href={'/blog'} text="Blog" icon={<FiPenTool />} />
          <ContentNavItemText>
            WEBの開発について（主にフロントエンド側）のブログを書いています。
            <br />
            自身の勉強や記録として記事を書いている場合がほとんどなので、間違いや不適切な表現があれば、ご連絡いただけると幸いです。
          </ContentNavItemText>
          <ContentNavItemLink href={'/blog'} text="記事の一覧を見る" />
        </li>
        <li>
          <ContentNavItemHeading href={'/works'} text="Works" icon={<FiCode />} />
          <ContentNavItemText>
            個人で制作したアプリケーションやライブラリ、関わったプロダクトなどの実績を一覧で閲覧できるようにする予定です。
            <br />
            現在公開方法を考え中なので、追々追加していきます。
          </ContentNavItemText>
          <ContentNavItemLink href={'/works'} text="実績の一覧を見る" />
        </li>
        <li>
          <ContentNavItemHeading href={'/contact'} text="Contact" icon={<FiMail />} />
          <ContentNavItemText>
            ブログの記事についての意見や質問、お仕事の依頼などのお問い合わせはこちらからお願いします。
            <br />
            お急ぎの場合は、
            <a
              className="text-blue-700 font-medium hover:text-blue-400 transition-navigation"
              href="https://twitter.com/takayu_dev"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            のDMも開放しているので、お気軽にメッセージを送ってください。
          </ContentNavItemText>
          <ContentNavItemLink href={'/contact'} text="お問い合わせをする" />
        </li>
      </ul>
    </nav>
  );
};

export default TheContentsNavigation;
