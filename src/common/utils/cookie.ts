export const clearCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};

export const getCookie = (key: string): string | undefined => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${key}=`);
  if (parts.length === 2) {
    return parts?.pop()?.split(';')?.shift();
  }
};

export const setCookie = (
  key: string,
  value: string,
  options: {
    days?: number;
    path?: string;
    secure?: boolean;
    sameSite?: 'Strict' | 'Lax' | 'None';
  }
) => {
  const {
    days = 7,
    path = '/',
    secure = false,
    sameSite = 'Strict',
  } = options || {};
  let expires = '';
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = `; expires=${date.toUTCString()}`;
  }
  document.cookie = `${key}=${value}${expires}; path=${path}${
    secure ? '; secure' : ''
  }; SameSite=${sameSite}`;
};
