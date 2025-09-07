"use client";

export default function LoadingPage() {
  return (
    <div className="fixed inset-0 min-h-screen bg-background flex flex-col items-center justify-center  overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-secondary rounded-full animate-pulse delay-500"></div>
      </div>

      {/* Main loading content */}
      <div className="text-center z-10">
        {/* Logo with animations */}
        <div className="mb-8 relative">
          <div className="animate-bounce">
            <img
              src="/logo-main.svg"
              alt="Logo"
              width={120}
              height={120}
              className="mx-auto animate-pulse"
            />
          </div>

          {/* Rotating ring around logo */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-46 border-2 border-primary/20 rounded-full animate-spin flex-shrink-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
