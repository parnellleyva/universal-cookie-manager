# universal-cookie-manager

A library for managing cookies in both server-side and client-side environments.

## Installation

You can install the library via npm:

```bash
npm install universal-cookie-manager
```

## Usage

```javascript
import UniversalCookieManager from 'universal-cookie-manager';

// Create a new instance of UniversalCookieManager
const cookieManager = new UniversalCookieManager();

// Set a cookie
cookieManager.setCookie('cookieName', 'cookieValue', { expires: 7 });

// Get a cookie
const cookieValue = cookieManager.getCookie('cookieName');

// Remove a cookie
cookieManager.removeCookie('cookieName');

// Get all cookies (only available on the client-side)
const allCookies = cookieManager.getAllCookies();

// Clear all cookies (only available on the client-side)
cookieManager.clearAllCookies();
```

## API

### `setCookie(name, value, options)`

Sets a cookie with the given name, value, and options.

- `name` (string): The name of the cookie.
- `value` (string): The value of the cookie.
- `options` (object): Additional options for the cookie (e.g., `expires`, `path`, `domain`, `secure`, `httpOnly`).

### `getCookie(name)`

Gets the value of the cookie with the given name.

- `name` (string): The name of the cookie.

Returns the value of the cookie, or `undefined` if the cookie does not exist.

### `removeCookie(name, options)`

Removes the cookie with the given name.

- `name` (string): The name of the cookie.
- `options` (object): Additional options for the cookie (e.g., `path`, `domain`).

### `getAllCookies()`

Gets all cookies currently set on the client-side.

Returns an object containing all cookies, where the keys are the cookie names and the values are the cookie values.

### `clearAllCookies()`

Clears all cookies currently set on the client-side.
