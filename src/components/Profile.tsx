import useRole from '../hooks/useRole';

export default function Profile() {
  const userRole = useRole();
  return (
    <div>
      <h1>Profile page</h1>
      <p>Name: {userRole.name}</p>
      <p>Role: {userRole.role}</p>
    </div>
  );
}
