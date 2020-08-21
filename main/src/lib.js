/**
 * 获取当前菜单 active key
 *
 * @author Witee <github.com/Witee>
 * @date 2020-08-21
 */
export function getPathName() {
  const { pathname } = window.location;

  let key = 'index';

  if (pathname.includes('app1')) key = 'app1';
  if (pathname.includes('app2')) key = 'app2';

  return key;
}
