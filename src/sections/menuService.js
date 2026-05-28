export const getMenu = async () => {
  const res = await fetch("/api/menu", {
    cache: "no-store"
  });

  if (!res.ok) {
    throw new Error("Failed to fetch menu");
  }

  const data = await res.json();
  return data;
};