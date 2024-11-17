import './styles.css';

export default function App() {
  return (
    <div className="App">
      <div className="relative h-screen">
        <div className="absolute bottom-10 right-5 max-w-lg text-left">
          <h1 className="text-6xl text-blue-700 sm:text-9xl">Join the Pride</h1>
          <p className="mt-8 text-xl font-medium text-gray-950 sm:text-2xl">
            Join us in celebrating love, diversity, and equality at this year&#39;s Pride event
          </p>
        </div>
      </div>
      <div className="h-screen">
        <h1>React + TypeScript + TailwindCSS</h1>
      </div>
    </div>
  );
}
