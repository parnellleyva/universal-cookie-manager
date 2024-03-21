import Cookies from 'js-cookie';
import cookie from 'cookie';
import UniversalCookie from 'universal-cookie';

class UniversalCookieManager {
  constructor() {
    this.cookies = new UniversalCookie();
  }

  getCookie(name) {
    return this.cookies.get(name);
  }

  setCookie(name, value, options) {
    if (typeof window === 'undefined') {
      // Server-side, use 'cookie' library
      document.cookie = cookie.serialize(name, value, options);
    } else {
      // Client-side, use 'js-cookie'
      Cookies.set(name, value, options);
    }
  }

  removeCookie(name, options) {
    if (typeof window === 'undefined') {
      // Server-side
      document.cookie = cookie.serialize(name, '', { ...options, maxAge: -1 });
    } else {
      // Client-side
      Cookies.remove(name, options);
    }
  }

  getAllCookies() {
    if (typeof window === 'undefined') {
      // Server-side, not supported
      throw new Error("getAllCookies method is not supported on the server-side.");
    } else {
      // Client-side
      return Cookies.get();
    }
  }

  clearAllCookies() {
    if (typeof window === 'undefined') {
      // Server-side, not supported
      throw new Error("clearAllCookies method is not supported on the server-side.");
    } else {
      // Client-side
      const cookies = Cookies.get();
      Object.keys(cookies).forEach(name => {
        Cookies.remove(name);
      });
    }
  }
}

export default UniversalCookieManager;
