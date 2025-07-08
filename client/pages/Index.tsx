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
  Mail,
  Linkedin,
  MessageCircle,
  Book,
  FileText,
  Users,
  Globe,
  Calendar,
  MapPin,
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
                asChild
              >
                <a href="#join">
                  Join Alpha
                  <ChevronRight className="w-4 h-4 ml-1" />
                </a>
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
                onClick={() => setIsMenuOpen(false)}
              >
                Stack
              </a>
              <a
                href="#use-cases"
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Use Cases
              </a>
              <a
                href="#ecosystem"
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ecosystem
              </a>
              <a
                href="#roadmap"
                className="block text-slate-300 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
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
                  asChild
                >
                  <a href="#join">Join Alpha</a>
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

        {/* System Architecture Section */}
        <section id="stack" className="py-24 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                System Architecture
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                How COREWEAVER Works
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto mb-12">
                A distributed AI coordination layer that connects autonomous
                agents, subnet validators, and security systems across
                blockchain networks.
              </p>
            </div>

            {/* Architecture Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">AI Agents</h3>
                <p className="text-slate-400 text-sm">
                  Autonomous intelligence gathering and analysis
                </p>
              </div>

              <div className="flex items-center justify-center lg:block">
                <ChevronRight className="w-6 h-6 text-slate-500 rotate-90 lg:rotate-0" />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Waves className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">Gemini Subnet</h3>
                <p className="text-slate-400 text-sm">
                  Decentralized validation and scoring network
                </p>
              </div>

              <div className="flex items-center justify-center lg:block">
                <ChevronRight className="w-6 h-6 text-slate-500 rotate-90 lg:rotate-0" />
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white mb-2">
                  Sentinel Layer
                </h3>
                <p className="text-slate-400 text-sm">
                  Threat detection and security coordination
                </p>
              </div>
            </div>

            {/* Tech Components */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Cpu className="w-5 h-5 mr-2 text-cyan-400" />
                    AgentOS
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Runtime environment for autonomous AI agents with built-in
                    security, communication protocols, and blockchain
                    integration.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">
                        PyTorch Integration
                      </span>
                      <span className="text-emerald-400">Active</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Secure Messaging</span>
                      <span className="text-emerald-400">Active</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Blockchain APIs</span>
                      <span className="text-emerald-400">Active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Brain className="w-5 h-5 mr-2 text-violet-400" />
                    Threat Intelligence
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Real-time analysis of darknet sources, transaction patterns,
                    and security vulnerabilities across blockchain networks.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">
                        DarkGemini Crawlers
                      </span>
                      <span className="text-emerald-400">Online</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">
                        Pattern Recognition
                      </span>
                      <span className="text-emerald-400">Learning</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Alert System</span>
                      <span className="text-yellow-400">Beta</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50">
                <CardHeader>
                  <CardTitle className="text-white flex items-center">
                    <Waves className="w-5 h-5 mr-2 text-emerald-400" />
                    Subnet Bridge
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-4">
                    Decentralized coordination layer connecting Bittensor subnet
                    validators with AI agents and external blockchain networks.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">
                        Bittensor Integration
                      </span>
                      <span className="text-yellow-400">Development</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Consensus Protocol</span>
                      <span className="text-yellow-400">Testing</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-400">Cross-chain APIs</span>
                      <span className="text-slate-400">Planned</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section id="use-cases" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                Real-World Applications
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Use Cases in Action
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                See how COREWEAVER's AI agents are protecting blockchain
                networks and empowering decentralized communities today.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* DarkGemini Use Case */}
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    🔍 Threat Intelligence
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    DarkGemini Network
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-6">
                    Autonomous agents crawl darknet sources to identify key
                    leaks, phishing schemes, and emerging threats targeting
                    blockchain users.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        24/7 darknet monitoring
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Private key leak detection
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Real-time threat alerts
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Gemini Subnet Use Case */}
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                    <Waves className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    📈 Subnet Validation
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Gemini Subnet
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-6">
                    Score AI signals using your own validator node, earn
                    credibility and stake rewards while contributing to network
                    security.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Decentralized validation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Stake-based rewards
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Bittensor integration
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Maelstrom Use Case */}
              <Card className="bg-slate-800/30 border-slate-700/50 hover:bg-slate-800/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">
                    🧠 AI UX for DAOs
                  </CardTitle>
                  <CardDescription className="text-slate-400">
                    Project Maelstrom
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-300 text-sm mb-6">
                    Build AI agents that model governance proposals, simulate
                    voting outcomes, and flag potential risks for DAO
                    communities.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Proposal simulation
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Risk assessment
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <span className="text-xs text-slate-400">
                        Voting predictions
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Proof Points */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">
                  150+
                </div>
                <div className="text-slate-400 text-sm">Threats Detected</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-violet-400 mb-2">
                  25
                </div>
                <div className="text-slate-400 text-sm">Active Validators</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-emerald-400 mb-2">
                  99.9%
                </div>
                <div className="text-slate-400 text-sm">Uptime</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-400 mb-2">
                  5ms
                </div>
                <div className="text-slate-400 text-sm">Response Time</div>
              </div>
            </div>
          </div>
        </section>

        {/* Sub-Brands Ecosystem */}
        <section id="ecosystem" className="py-24 bg-slate-900/50">
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

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <Badge
                variant="secondary"
                className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
              >
                Development Roadmap
              </Badge>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Building the Future
              </h2>
              <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                Our development milestones and commitments for delivering
                autonomous AI security systems to blockchain networks.
              </p>
            </div>

            <div className="space-y-12">
              {/* 2024 Foundation */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-4 h-4 bg-emerald-400 rounded-full mr-4"></div>
                  <Badge
                    variant="secondary"
                    className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30"
                  >
                    2024 - COMPLETE
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Core Infrastructure
                      </h3>
                      <p className="text-slate-400 text-sm">
                        AgentOS foundation, DarkGemini crawlers, and system
                        architecture
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Research & Development
                      </h3>
                      <p className="text-slate-400 text-sm">
                        AI threat intelligence models and blockchain security
                        analysis
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Initial Deployments
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Alpha testing of threat detection and monitoring systems
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q1 2025 */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-4 h-4 bg-yellow-400 rounded-full mr-4"></div>
                  <Badge
                    variant="secondary"
                    className="bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
                  >
                    Q1 2025 - IN PROGRESS
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Subnet Integration
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Bittensor subnet validator nodes and decentralized
                        scoring system
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Threat Intel Beta
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Real-time alert system and pattern recognition
                        deployment
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Developer Platform
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Public APIs, documentation, and agent development tools
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q2-Q3 2025 */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-4 h-4 bg-cyan-400 rounded-full mr-4"></div>
                  <Badge
                    variant="secondary"
                    className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30"
                  >
                    Q2-Q3 2025 - UPCOMING
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Maelstrom Launch
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Full DAO governance AI, simulation platform, and UX
                        tools
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Cross-chain Expansion
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Support for Ethereum, Solana, and major blockchain
                        networks
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Enterprise Solutions
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Institutional-grade security tools and compliance
                        features
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Q4 2025 & Beyond */}
              <div className="relative">
                <div className="flex items-center mb-8">
                  <div className="w-4 h-4 bg-violet-400 rounded-full mr-4"></div>
                  <Badge
                    variant="secondary"
                    className="bg-violet-500/20 text-violet-300 border-violet-500/30"
                  >
                    Q4 2025 & BEYOND
                  </Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ml-8">
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Global Network
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Worldwide deployment of autonomous AI security agents
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Community Ecosystem
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Open-source marketplace and developer contribution
                        platform
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="bg-slate-800/30 border-slate-700/50">
                    <CardContent className="p-6">
                      <h3 className="font-semibold text-white mb-2">
                        Next-Gen AI
                      </h3>
                      <p className="text-slate-400 text-sm">
                        Advanced autonomous systems and quantum-resistant
                        security
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Join Section */}
        <section id="join" className="py-24 bg-slate-900/50">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <Badge
              variant="secondary"
              className="mb-6 bg-slate-800/50 text-slate-300 border-slate-700"
            >
              Early Access
            </Badge>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Join Subnet Alpha
            </h2>
            <p className="text-slate-300 text-lg mb-12 max-w-2xl mx-auto">
              Get early access to COREWEAVER's AI coordination layer. Run
              validator nodes, contribute threat intelligence, and help secure
              blockchain networks.
            </p>

            {/* Waitlist Form */}
            <Card className="bg-slate-800/30 border-slate-700/50 p-8 mb-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-300 mb-2">
                      Role/Interest
                    </label>
                    <select className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white focus:ring-2 focus:ring-cyan-400 focus:border-transparent">
                      <option>Validator Node Operator</option>
                      <option>AI/ML Developer</option>
                      <option>Security Researcher</option>
                      <option>DAO Contributor</option>
                      <option>General Interest</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-300 mb-2">
                    Technical Background (Optional)
                  </label>
                  <textarea
                    className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
                    rows={3}
                    placeholder="Tell us about your experience with blockchain, AI, or security..."
                  />
                </div>
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700"
                >
                  Join Alpha Waitlist
                  <ChevronRight className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>

            {/* Alternative Actions */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="bg-slate-800/30 border-slate-700/50 p-6 hover:bg-slate-800/50 transition-colors">
                <Github className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  Contribute Code
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Help build the open-source AI coordination layer
                </p>
                <Button variant="ghost" size="sm" className="w-full">
                  View GitHub
                </Button>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50 p-6 hover:bg-slate-800/50 transition-colors">
                <GraduationCap className="w-8 h-8 text-violet-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">
                  Learn & Research
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  Access documentation, guides, and research papers
                </p>
                <Button variant="ghost" size="sm" className="w-full">
                  Visit Academy
                </Button>
              </Card>

              <Card className="bg-slate-800/30 border-slate-700/50 p-6 hover:bg-slate-800/50 transition-colors">
                <Mail className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">Stay Updated</h3>
                <p className="text-slate-400 text-sm mb-4">
                  Get the latest updates on development progress
                </p>
                <Button variant="ghost" size="sm" className="w-full">
                  Newsletter
                </Button>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-24 border-t border-slate-800/50 bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-violet-600 rounded-xl flex items-center justify-center">
                  <Cpu className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-2xl">COREWEAVER</div>
                  <div className="text-sm text-slate-400">
                    Dark Gemini Alliance
                  </div>
                </div>
              </div>
              <p className="text-slate-300 mb-6 max-w-md leading-relaxed">
                Building autonomous AI systems that protect blockchain networks
                through threat intelligence, privacy analysis, and collaborative
                security research.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 text-slate-400">
                  <Globe className="w-4 h-4" />
                  <span className="text-sm">coreweaver.xyz</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-4 h-4" />
                  <span className="text-sm">contact@coreweaver.xyz</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">Distributed • Global Network</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800/50 p-2"
                  asChild
                >
                  <a href="#" aria-label="GitHub">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800/50 p-2"
                  asChild
                >
                  <a href="#" aria-label="Twitter">
                    <Twitter className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800/50 p-2"
                  asChild
                >
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-slate-400 hover:text-white hover:bg-slate-800/50 p-2"
                  asChild
                >
                  <a href="#" aria-label="Discord">
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Dark Gemini Alliance */}
            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Shield className="w-4 h-4 mr-2 text-cyan-400" />
                Alliance
              </h3>
              <div className="space-y-3">
                {subBrands.map((brand, index) => (
                  <a
                    key={index}
                    href={`https://${brand.url}`}
                    className="block text-slate-400 hover:text-cyan-400 transition-colors text-sm group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="flex items-center">
                      {brand.name}
                      <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Platform */}
            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Brain className="w-4 h-4 mr-2 text-violet-400" />
                Platform
              </h3>
              <div className="space-y-3">
                <a
                  href="#stack"
                  className="block text-slate-400 hover:text-violet-400 transition-colors text-sm"
                >
                  System Architecture
                </a>
                <a
                  href="#use-cases"
                  className="block text-slate-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Use Cases
                </a>
                <a
                  href="#roadmap"
                  className="block text-slate-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Roadmap
                </a>
                <a
                  href="#join"
                  className="block text-slate-400 hover:text-violet-400 transition-colors text-sm"
                >
                  Join Alpha
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-violet-400 transition-colors text-sm"
                >
                  API Status
                </a>
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="font-semibold text-white mb-4 flex items-center">
                <Book className="w-4 h-4 mr-2 text-emerald-400" />
                Resources
              </h3>
              <div className="space-y-3">
                <a
                  href="#"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <FileText className="w-3 h-3 mr-2" />
                  Documentation
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <Users className="w-3 h-3 mr-2" />
                  Developer Guide
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <Github className="w-3 h-3 mr-2" />
                  Open Source
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <MessageCircle className="w-3 h-3 mr-2" />
                  Community
                </a>
                <a
                  href="#"
                  className="block text-slate-400 hover:text-emerald-400 transition-colors text-sm flex items-center"
                >
                  <Calendar className="w-3 h-3 mr-2" />
                  Events
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-slate-800/50 pt-8 pb-8">
            <div className="bg-gradient-to-r from-slate-800/30 to-slate-700/30 rounded-2xl p-8 border border-slate-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Stay Connected
                  </h3>
                  <p className="text-slate-300">
                    Get the latest updates on AI security research, Bittensor
                    integration, and Dark Gemini Alliance developments.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-sm"
                  />
                  <Button className="bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-600 hover:to-violet-700 px-6">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-slate-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <p className="text-slate-400 text-sm">
                  © 2025 COREWEAVER.xyz - Dark Gemini Alliance. All rights
                  reserved.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Terms of Service
                  </a>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    Security
                  </a>
                </div>
              </div>
              <div className="text-right">
                <p className="text-slate-500 text-xs italic">
                  Protege, Fabrica, Evolvi
                </p>
                <p className="text-slate-500 text-xs italic">
                  Proteggi, Crea, Evolvi
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>

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
