const BASE_URL = "http://localhost:5000/api/employees";

export const generateEmployees = async () => {
  const res = await fetch(`${BASE_URL}/generate`);
  return res.json();
};

export const saveEmployees = async (data: any) => {
  const res = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const clearEmployees = async () => {
  const res = await fetch(`${BASE_URL}/clear`, {
    method: "DELETE",
  });
  return res.json();
};
