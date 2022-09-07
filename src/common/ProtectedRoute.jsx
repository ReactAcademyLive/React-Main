import { useAuth } from '../keycloak/AuthProvider';

export default function ProtectedRoute({ children, roles }) {
  const { token, tokenParsed } = useAuth();

  const userHasRequiredRole =
    tokenParsed?.resource_access['august-course']?.roles.includes(roles);

  console.log(tokenParsed?.resource_access['august-course']?.roles);

  if (!token) {
    return <h1>You are not logged on</h1>;
  }

  if (token && !userHasRequiredRole) {
    return <h1>You are not an {roles}</h1>;
  }

  return children;
}
