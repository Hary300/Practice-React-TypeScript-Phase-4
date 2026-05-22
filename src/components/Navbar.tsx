import useRole from '../hooks/useRole';

export default function Navbar() {
  const userRole = useRole();
  return (
    <div>
      <h1>Navbar</h1>
      <p>{userRole.name}</p>
      <p>{userRole.role}</p>
    </div>
  );
}
