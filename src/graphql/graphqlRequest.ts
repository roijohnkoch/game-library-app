export const graphqlRequest = async (query: string, variables = {}) => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors } = await res.json();

  if (errors) {
    console.error(errors);
    throw new Error('GraphQL error: ' + JSON.stringify(errors));
  }

  return data;
}