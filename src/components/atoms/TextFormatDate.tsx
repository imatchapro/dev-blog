import React from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const TextFormatDate: React.FC<Props> = ({ dateString }) => {
  const date = parseISO(dateString);

  return <time dateTime={dateString}>{format(date, 'yyyy.MM.dd')}</time>;
};

export default TextFormatDate;
