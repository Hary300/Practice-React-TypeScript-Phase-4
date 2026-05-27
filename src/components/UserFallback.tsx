import type { FallbackProps } from 'react-error-boundary';

export default function UserFallback({
  error,
  resetErrorBoundary,
}: FallbackProps) {
  const message = error instanceof Error ? error.message : 'Unknown Error';
  return (
    <div>
      <h1>Failed to load user profile</h1>
      <p>{message}</p>
      <button onClick={resetErrorBoundary}>Refresh</button>
    </div>
  );
}
