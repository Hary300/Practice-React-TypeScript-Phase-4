import { ErrorBoundary } from 'react-error-boundary';
import BuggyCounter from './components/BuggyCounter';
import Fallback from './components/Fallback';
import UserProfile from './components/UserProfile';
import UserFallback from './components/UserFallback';

function App() {
  return (
    <>
      <ErrorBoundary fallback={<Fallback />}>
        <BuggyCounter />
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={UserFallback}>
        <UserProfile />
      </ErrorBoundary>
    </>
  );
}

export default App;
