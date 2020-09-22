import React, { useMemo } from 'react';
import { parseISO, format } from 'date-fns';

type Props = {
  dateString: string;
};

const TextFormatDate: React.FC<Props> = ({ dateString }) => {
  const date = useMemo(() => {
    const parseDate = parseISO(dateString);
    return format(parseDate, 'yyyy.MM.dd');
  }, [dateString]);

  return <time dateTime={dateString}>{date}</time>;
};

export default TextFormatDate;
