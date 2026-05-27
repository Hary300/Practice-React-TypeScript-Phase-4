export default function Fallback() {
  return (
    <div>
      <h1>Counter error!</h1>
      <button onClick={() => window.location.reload()}>Refresh</button>
    </div>
  );
}
