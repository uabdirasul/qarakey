export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-yellow-300 to-green-400">
      <div className="bg-black/20 backdrop-blur-sm p-8 rounded-lg text-white max-w-xl">
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-xl font-medium">KK Keyboards</h2>
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-150"></div>
            <div className="w-3 h-3 rounded-full bg-white animate-pulse delay-300"></div>
          </div>
          <p className="text-sm opacity-80">Júklenip atır...</p>
        </div>
      </div>
    </div>
  );
}
