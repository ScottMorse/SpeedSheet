import { BACKEND_ENDPOINT } from '../config'
import ApolloClient from 'apollo-boost'

export default function apolloClient() {
    return new ApolloClient({
      //!change to process env
      uri: BACKEND_ENDPOINT,
    });
}

// export default function createClient({headers}) {
//   return new ApolloClient({
//     //!change to process env
//     uri: BACKEND_ENDPOINT,
//     request: operation => {
//       operation.setContext({
//         fetchOptions: {
//           credentials: 'include',
//         },
//         headers,
//       });
//     },
//   });
// }