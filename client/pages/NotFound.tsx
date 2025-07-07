import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ArrowLeft, Cpu } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900/5 to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900/5 to-transparent pointer-events-none"></div>

      {/* Grid Pattern */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        {/* Logo */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center">
            <Cpu className="w-7 h-7 text-white" />
          </div>
          <div>
            <div className="font-bold text-2xl">COREWEAVER</div>
            <div className="text-xs text-slate-400">Dark Gemini Alliance</div>
          </div>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          {/* Large 404 */}
          <div className="text-8xl md:text-9xl font-bold bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
            404
          </div>

          {/* Error Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quantum State Not Found
          </h1>

          <p className="text-lg text-slate-300 mb-8 max-w-md mx-auto">
            The page you're looking for has collapsed into a quantum
            superposition. Let's guide you back to reality.
          </p>

          {/* Path Info */}
          <div className="bg-slate-800/30 border border-slate-700/50 rounded-lg p-4 mb-8 backdrop-blur-sm">
            <p className="text-sm text-slate-400 mb-2">Attempted Path:</p>
            <code className="text-cyan-400 font-mono">{location.pathname}</code>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700"
            >
              <a href="/">
                <Home className="w-5 h-5 mr-2" />
                Return to Portal
              </a>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-slate-600 text-slate-300 hover:bg-slate-800"
              onClick={() => window.history.back()}
            >
              <button>
                <ArrowLeft className="w-5 h-5 mr-2" />
                Go Back
              </button>
            </Button>
          </div>

          {/* Additional Links */}
          <div className="pt-8 border-t border-slate-800/50">
            <p className="text-slate-400 text-sm mb-4">
              Explore the Dark Gemini Alliance:
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="#"
                className="text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Vault
              </a>
              <a
                href="#"
                className="text-violet-400 hover:text-violet-300 transition-colors"
              >
                Forge
              </a>
              <a
                href="#"
                className="text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                Lab
              </a>
              <a
                href="#"
                className="text-orange-400 hover:text-orange-300 transition-colors"
              >
                Academy
              </a>
              <a
                href="#"
                className="text-pink-400 hover:text-pink-300 transition-colors"
              >
                Maelstrom
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
