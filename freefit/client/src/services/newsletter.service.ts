const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';

export async function subscribeToNewsletter(email: string) {
  const response = await fetch(`${apiBaseUrl}/newsletter`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email })
  });

  if (!response.ok) {
    throw new Error('Newsletter subscription failed.');
  }

  return response.json() as Promise<{ success: boolean }>;
}
