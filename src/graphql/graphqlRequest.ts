type GraphQLResponse<T> = {
  data?: T
  errors?: { message: string }[]
}

export const graphqlRequest = async <T>(query: string, variables = {}): Promise<T> => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API_ENDPOINT!, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  });

  const { data, errors }: GraphQLResponse<T> = await res.json();

  if (errors?.length) {
    throw new Error(errors.map(e => e.message).join(', '))
  }

  if (!data) {
    throw new Error('GraphQL response missing data')
  }

  return data;
}