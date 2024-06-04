export const timeAgo = (timestamp: Date): string => {
  const now = new Date();
  const secondsPast = Math.floor((now.getTime() - timestamp.getTime()) / 1000);
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

  if (secondsPast < 60) return rtf.format(-secondsPast, 'second');
  const minutesPast = Math.floor(secondsPast / 60);
  if (minutesPast < 60) return rtf.format(-minutesPast, 'minute');
  const hoursPast = Math.floor(minutesPast / 60);
  if (hoursPast < 24) return rtf.format(-hoursPast, 'hour');
  const daysPast = Math.floor(hoursPast / 24);
  if (daysPast < 30) return rtf.format(-daysPast, 'day');
  const monthsPast = Math.floor(daysPast / 30);
  if (monthsPast < 12) return rtf.format(-monthsPast, 'month');
  const yearsPast = Math.floor(monthsPast / 12);
  return rtf.format(-yearsPast, 'year');
};
