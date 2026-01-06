const BASE_URL = import.meta.env.VITE_API_URL;

export default async function fetchBase(
  endpoint,
  { method = 'GET', body = null, headers = {} } = {}
) {
  const config = {
    method,
    headers: {
      ...(body instanceof FormData
        ? {}
        : { 'Content-Type': 'application/json' }),
      ...headers
    },
    credentials: 'include'
  };

  if (body) {
    config.body = body instanceof FormData ? body : JSON.stringify(body);
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  if (!response.ok) {
    let error;
    try {
      error = await response.json();
    } catch {
      throw new Error(`HTTP ${response.status}`);
    }
    throw new Error(error.message || `HTTP ${response.status}`);
  }

  if (response.status === 204) return null;

  return response.json();
}
