const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000/api';

export async function fetchHealth() {
  const response = await fetch(`${apiBaseUrl}/health`, {
    headers: {
      Accept: 'application/json'
    },
    next: {
      revalidate: 60
    }
  });

  if (!response.ok) {
    throw new Error('Unable to reach the Free Fit API.');
  }

  return response.json() as Promise<{ status: 'ok' }>;
}
