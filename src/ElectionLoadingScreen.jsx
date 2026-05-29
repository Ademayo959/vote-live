const ElectionLoadingScreen = () => {
    return (
        <div className="min-h-screen bg-gray-950 flex flex-col items-center justify-center gap-8">

            {/* Ballot box icon pulsing */}
            <div className="relative flex items-center justify-center">
                <div className="absolute w-24 h-24 rounded-full bg-blue-500/10 animate-ping" />
                <div className="absolute w-16 h-16 rounded-full bg-blue-500/20 animate-pulse" />
                <svg
                    className="relative w-12 h-12 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-3-3v6M4 7h16M6 7V5a2 2 0 012-2h8a2 2 0 012 2v2M6 7l1 13h10l1-13" />
                </svg>
            </div>

            {/* Text */}
            <div className="flex flex-col items-center gap-2">
                <p className="text-white font-semibold text-lg tracking-wide">Setting up your ballot</p>
                <p className="text-gray-500 text-sm">Loading election data...</p>
            </div>

            {/* Animated dots bar */}
            <div className="flex gap-2">
                {[0, 1, 2, 3].map((i) => (
                    <div
                        key={i}
                        className="w-2 h-2 rounded-full bg-blue-500"
                        style={{ animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite` }}
                    />
                ))}
            </div>

            <style>{`
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.4; }
          40% { transform: scale(1); opacity: 1; }
        }
      `}</style>
        </div>
    );
}

export default ElectionLoadingScreen;