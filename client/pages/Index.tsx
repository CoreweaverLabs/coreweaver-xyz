import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SubBrandCard } from "@/components/SubBrandCard";
import {
  ChevronRight,
  Zap,
  Shield,
  Cpu,
  GraduationCap,
  Waves,
  Github,
  ExternalLink,
  Lock,
  Hammer,
  FlaskConical,
  Brain,
  Menu,
  X,
  ArrowUp,
  Twitter,
  Linkedin,
  Mail,
} from "lucide-react";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const subBrands = [
    {
      name: "Vault",
      tagline: "Secure private key management",
      description:
        "Revolutionary multisig and KeyGuard solutions for enterprise-grade Blockchain security.",
      icon: <Lock className="w-8 h-8" />,
      url: "vault.darkgemini.com",
      color: "from-emerald-500 to-green-600",
      features: [
        "Multisig Wallets",
        "KeyGuard Encryption",
        "Hardware Integration",
      ],
    },
    {
      name: "Forge",
      tagline: "Development hub for wallet libraries",
      description:
        "Advanced wallet libraries, coin selection algorithms, and mining protocol innovations.",
      icon: <Hammer className="w-8 h-8" />,
      url: "forge.darkgemini.com",
      color: "from-orange-500 to-red-600",
      features: ["Wallet Libraries", "Mining Protocols", "Stratum V2"],
    },
    {
      name: "Lab",
      tagline: "Research & development center",
      description:
        "Cutting-edge research in P2P networking, Layer 2 solutions, and security testing.",
      icon: <FlaskConical className="w-8 h-8" />,
      url: "lab.darkgemini.com",
      color: "from-blue-500 to-cyan-600",
      features: ["P2P Networking", "Layer 2 Solutions", "FuzzShield Testing"],
    },
    {
      name: "Academy",
      tagline: "Education & community support",
      description:
        "Comprehensive learning resources for Blockchain privacy protocols and wallet development.",
      icon: <GraduationCap className="w-8 h-8" />,
      url: "academy.darkgemini.com",
      color: "from-purple-500 to-violet-600",
      features: ["Privacy Protocols", "Developer Guides", "Community Forums"],
    },
    {
      name: "Maelstrom",
      tagline: "AI-driven privacy & threat detection",
      description:
        "Advanced AI systems for transaction privacy analysis and threat intelligence.",
      icon: <Brain className="w-8 h-8" />,
      url: "maelstrom.darkgemini.com",
      color: "from-pink-500 to-rose-600",
      features: [
        "Privacy Analysis",
        "Threat Detection",
        "Synthetic Data Generation",
      ],
    },
  ];

  const techStack = [
    { name: "Quantum Computing", description: "Post-quantum cryptography" },
    { name: "AI/ML Systems", description: "Decentralized intelligence" },
    { name: "Blockchain Core", description: "Blockchain interaction" },
    { name: "PyTorch", description: "Diffusion models" },
    { name: "Builder.io", description: "Visual development" },
    { name: "CoreWeave", description: "GPU acceleration" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/20 via-slate-900/5 to-transparent pointer-events-none"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-cyan-900/10 via-slate-900/5 to-transparent pointer-events-none"></div>

      {/* Grid Pattern Overlay */}
      <div className="fixed inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none"></div>

      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center">
                <Cpu className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-xl">COREWEAVER</div>
                <div className="text-xs text-slate-400">
                  Dark Gemini Alliance
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#stack"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Stack
              </a>
              <a
                href="#use-cases"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Use Cases
              </a>
              <a
                href="#ecosystem"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Ecosystem
              </a>
              <a
                href="#roadmap"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Roadmap
              </a>
            </nav>

            {/* Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700"
              >
                Get Started
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-800"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-slate-800/50 bg-slate-950/95 backdrop-blur-xl">
            <div className="px-6 py-4 space-y-3">
              <a
                href="#stack"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Stack
              </a>
              <a
                href="#use-cases"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Use Cases
              </a>
              <a
                href="#ecosystem"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Ecosystem
              </a>
              <a
                href="#roadmap"
                className="block text-slate-300 hover:text-white transition-colors"
              >
                Roadmap
              </a>
              <div className="pt-3 border-t border-slate-800/50">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  className="w-full mt-2 bg-gradient-to-r from-cyan-500 to-violet-600"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="pt-16">
        <section className="relative py-24 lg:py-32 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center">
              {/* Badge */}
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                <Zap className="w-4 h-4 mr-2" />
                AI-Driven Blockchain Security Platform
              </Badge>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-b from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Autonomous Systems
                <br />
                <span className="bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 bg-clip-text text-transparent">
                  for Blockchain Security
                </span>
              </h1>

              {/* Subheadline */}
              <h2 className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto font-medium">
                A secure AI coordination layer for crypto, privacy, and
                distributed systems
              </h2>

              {/* Description */}
              <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-4xl mx-auto leading-relaxed">
                COREWEAVER builds autonomous AI agents that protect blockchain
                networks through threat intelligence, privacy analysis, and
                collaborative security research.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 text-lg px-8 py-6"
                  asChild
                >
                  <a href="#stack">
                    View System Architecture
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800 text-lg px-8 py-6"
                  asChild
                >
                  <a href="#join">
                    Join Subnet Alpha
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400">
                    5
                  </div>
                  <div className="text-slate-400 text-sm">Sub-Brands</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-violet-400">
                    50+
                  </div>
                  <div className="text-slate-400 text-sm">Contributors</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-emerald-400">
                    100%
                  </div>
                  <div className="text-slate-400 text-sm">Open Source</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-pink-400">
                    ∞
                  </div>
                  <div className="text-slate-400 text-sm">Possibilities</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section id="about" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge
                  variant="secondary"
                  className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
                >
                  Our Mission
                </Badge>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                  Protect, Create, Evolve
                </h2>
                <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                  COREWEAVER.xyz serves as the central portal for the Dark
                  Gemini Alliance (Alliantia Geminus Obscurus), revolutionizing
                  Blockchain development through innovative open-source tools
                  and collaborative research.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center mt-1">
                      <Shield className="w-3 h-3 text-emerald-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Privacy & Security
                      </div>
                      <div className="text-slate-400 text-sm">
                        Advanced encryption and privacy protocols
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-500/20 rounded-full flex items-center justify-center mt-1">
                      <Cpu className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Quantum Innovation
                      </div>
                      <div className="text-slate-400 text-sm">
                        Post-quantum cryptography and AI systems
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-violet-500/20 rounded-full flex items-center justify-center mt-1">
                      <Waves className="w-3 h-3 text-violet-400" />
                    </div>
                    <div>
                      <div className="font-semibold text-white">
                        Distributed Networks
                      </div>
                      <div className="text-slate-400 text-sm">
                        Autonomous systems and collaborative research
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gradient-to-br from-cyan-500/10 to-violet-600/10 border border-slate-700/50 p-8 backdrop-blur-sm">
                  <div className="grid grid-cols-3 gap-4 h-full">
                    {techStack.map((tech, index) => (
                      <Card
                        key={index}
                        className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-xs font-medium text-white mb-1">
                            {tech.name}
                          </div>
                          <div className="text-xs text-slate-400">
                            {tech.description}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Brands Ecosystem */}
        <section id="ecosystem" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                Dark Gemini Alliance
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Ecosystem Overview
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Five specialized sub-brands working in harmony to advance
                Blockchain innovation, privacy, and security through
                collaborative research and development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {subBrands.map((brand, index) => (
                <SubBrandCard key={index} {...brand} />
              ))}
            </div>
          </div>
        </section>

        {/* Research Areas */}
        <section id="research" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                Research & Development
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Blockchain R&D Challenges
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Addressing critical challenges in Blockchain development through
                innovative research and cutting-edge technology solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "Private Key Management",
                  desc: "Multisig & KeyGuard security",
                  icon: <Lock className="w-6 h-6" />,
                },
                {
                  title: "Coin Selection",
                  desc: "Privacy-focused algorithms",
                  icon: <Cpu className="w-6 h-6" />,
                },
                {
                  title: "P2P Networking",
                  desc: "BIP 324 & encrypted communication",
                  icon: <Waves className="w-6 h-6" />,
                },
                {
                  title: "Layer 2 Solutions",
                  desc: "Beyond Lightning innovations",
                  icon: <Zap className="w-6 h-6" />,
                },
                {
                  title: "Mining Robustness",
                  desc: "Stratum V2 & decentralization",
                  icon: <Hammer className="w-6 h-6" />,
                },
                {
                  title: "Privacy Protocols",
                  desc: "SNICKER, PayJoin, CoinJoin",
                  icon: <Shield className="w-6 h-6" />,
                },
                {
                  title: "Fuzz Testing",
                  desc: "FuzzShield security auditing",
                  icon: <FlaskConical className="w-6 h-6" />,
                },
                {
                  title: "AI-Driven Analysis",
                  desc: "Threat detection & synthetic data",
                  icon: <Brain className="w-6 h-6" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all group"
                >
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-violet-600/20 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h3 className="font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Community & Footer */}
        <section id="community" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Join the Alliance
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-8">
                Contribute to the future of Blockchain through open-source
                development, research collaboration, and community-driven
                innovation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700"
                >
                  <Github className="w-5 h-5 mr-2" />
                  Contribute on GitHub
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-slate-600 text-slate-300 hover:bg-slate-800"
                >
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Visit Academy
                </Button>
              </div>
            </div>

            {/* Footer */}
            <footer className="border-t border-slate-800/50 pt-16">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                <div className="md:col-span-2">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-lg flex items-center justify-center">
                      <Cpu className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-xl">COREWEAVER</div>
                      <div className="text-xs text-slate-400">
                        Dark Gemini Alliance
                      </div>
                    </div>
                  </div>
                  <p className="text-slate-400 mb-6 max-w-md">
                    Establishing universal standards for quantum algorithm
                    design, powering autonomous systems for Blockchain
                    innovation.
                  </p>
                  <div className="flex space-x-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-slate-400 hover:text-white"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-4">Sub-Brands</h3>
                  <div className="space-y-3">
                    {subBrands.slice(0, 3).map((brand, index) => (
                      <a
                        key={index}
                        href={`#${brand.name.toLowerCase()}`}
                        className="block text-slate-400 hover:text-white transition-colors"
                      >
                        {brand.name}
                      </a>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-4">Resources</h3>
                  <div className="space-y-3">
                    <a
                      href="#"
                      className="block text-slate-400 hover:text-white transition-colors"
                    >
                      Documentation
                    </a>
                    <a
                      href="#"
                      className="block text-slate-400 hover:text-white transition-colors"
                    >
                      API Reference
                    </a>
                    <a
                      href="#"
                      className="block text-slate-400 hover:text-white transition-colors"
                    >
                      Developer Guide
                    </a>
                    <a
                      href="#"
                      className="block text-slate-400 hover:text-white transition-colors"
                    >
                      Community Forums
                    </a>
                  </div>
                </div>
              </div>
              <div className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-slate-400 text-sm">
                  © 2024 COREWEAVER.xyz - Dark Gemini Alliance. All rights
                  reserved.
                </p>
                <p className="text-slate-500 text-xs mt-2 md:mt-0">
                  Protege, Fabrica, Evolvi | Proteggi, Crea, Evolvi
                </p>
              </div>
            </footer>
          </div>
        </section>
      </main>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-cyan-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <ArrowUp className="w-5 h-5 text-white" />
        </button>
      )}
    </div>
  );
}
