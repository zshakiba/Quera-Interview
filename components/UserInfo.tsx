import React, { ReactNode } from "react";
interface UserInfoProps {
  name: string;
  date: string;
  className: string;
  icon: ReactNode;
  content: string;
}

const ContentSection: React.FC<{ content: string }> = ({ content }) => (
  <div className="px-3 text-gray-800 font-normal text-xs mt-3 leading-5">
    {content}
  </div>
);
const UserInfo: React.FC<UserInfoProps> = ({
  name,
  date,
  className,
  icon,
  content,
}) => (
  <div>
    <div className={`flex items-center gap-x-4 ${className}`}>
      {icon}
      <h4 className="text-base text-slate-900 font-normal text-sm">{name}</h4>
      <h4 className="text-gray-500 font-normal text-sm">{date}</h4>
    </div>
    <ContentSection content={content} />
  </div>
);
export default UserInfo;
