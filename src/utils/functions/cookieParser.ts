export function cookieParser(key: string): string{
  const cookies = document.cookie.split(';');
  for(let item of cookies) {
    if (item.slice(0, key.length) === key) {
      return item.slice(key.length + 1, item.length)
    }
  }
  return '';
}