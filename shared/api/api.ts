interface apiProps extends RequestInit {
  url: string | URL | globalThis.Request;
}

const api = async <T>({ url, ...options }: apiProps): Promise<T> => {
  const response = await fetch((process.env.VITE_API || "") + url, options);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default api;
