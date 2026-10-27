export async function wpFetch(query, variables = {}) {
  const r = await fetch(process.env.WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 300 },
    signal: AbortSignal.timeout(15000),
  });
  if (!r.ok) throw new Error(`WPGraphQL HTTP ${r.status}`);
  const j = await r.json();
  if (j.errors) throw new Error(j.errors[0]?.message || "WPGraphQL error");
  return j.data;
}
