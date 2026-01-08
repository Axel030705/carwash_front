const BASE_URL = import.meta.env.VITE_API_URL;

export default async function fetchBase(endpoint, { method = 'GET', body = null, headers = {} } = {}) {
  const config = {
    method,
    headers: {
      ...(body instanceof FormData ? {} : { 'Content-Type': 'application/json' }),
      ...headers
    },
    credentials: 'include'
  };

  if (body) config.body = body instanceof FormData ? body : JSON.stringify(body);

  const response = await fetch(`${BASE_URL}${endpoint}`, config);

  try {

    const data = await response.json();
    
    return data;

  } catch {

    return { success: false, message: `HTTP ${response.status}` };

  }
}
