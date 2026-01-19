
import React, { useState } from 'react';
import { 
  Target, 
  Sparkles, 
  HeartHandshake, 
  BrainCircuit, 
  ChevronLeft, 
  ChevronRight,
  Quote,
  Activity,
  Zap,
  ClipboardCheck,
  ArrowRight
} from 'lucide-react';
import { Commitment } from './types';

const COMMITMENTS: Commitment[] = [
  {
    id: 1,
    title: "Process Over Product",
    subtitle: "Value the explanation more than the result.",
    rationale: "In intervention, the goal is cognitive growth, not just correct answers. We must value the explanation more than the result.",
    actionStep: "I will use AI tools to generate \"error analysis\" challenges rather than just solving problems.",
    example: "Instead of asking the AI to solve an equation, we will ask it to \"Solve this equation with one mistake,\" and the students' task will be to find and fix that mistake.",
    revisionPlan: "I will compare student performance on \"AI-assisted\" days vs. \"paper-only\" days. If I notice students are finding the errors too easily (or not at all), I will adjust the complexity of the AI prompts to generate subtler or more common misconceptions.",
    color: "from-blue-600 to-indigo-500",
    icon: <BrainCircuit className="w-full h-full" />
  },
  {
    id: 2,
    title: "Hyper-Personalization",
    subtitle: "Connecting math to their unique interests.",
    rationale: "Students in intervention often feel disconnected from the standard curriculum. Connecting math to their interests reduces anxiety and increases buy-in.",
    actionStep: "I will use generative AI to rewrite generic word problems to match the specific interests of my small group students.",
    example: "If a student loves Pokémon or Digimon, I will prompt the AI: \"Rewrite this fraction word problem using a scenario where a trainer is feeding berries to their team,\" turning a worksheet into a quest.",
    revisionPlan: "I will use a simple \"Thumbs Up/Down\" exit ticket asking, \"Did the story help you understand the math, or was it distracting?\" If the stories become too distracting, I will refine the AI prompts to keep the narrative shorter and the math more prominent.",
    color: "from-purple-600 to-pink-500",
    icon: <Sparkles className="w-full h-full" />
  },
  {
    id: 3,
    title: "Non-Judgmental Scaffolding",
    subtitle: "A safe, patient partner for every step.",
    rationale: "Math anxiety paralyzes learning. AI provides a safe, low-stakes environment where students can make mistakes without fear of judgment.",
    actionStep: "I will explicitly introduce AI chatbots as \"practice partners\" that never get tired or frustrated.",
    example: "During independent practice, students can use a chatbot to ask, \"Can you give me a hint for the first step?\" before they raise their hand for teacher help.",
    revisionPlan: "I will track how often students ask for help. If I see students relying on the AI for every step, I will institute a \"Three Before Me (or AI)\" rule, requiring them to attempt the problem on paper first.",
    color: "from-emerald-500 to-teal-400",
    icon: <HeartHandshake className="w-full h-full" />
  }
];

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const rotateTo = (index: number) => {
    // Infinite loop logic: wrap around if out of bounds
    let nextIndex = index;
    if (index < 0) {
      nextIndex = COMMITMENTS.length - 1;
    } else if (index >= COMMITMENTS.length) {
      nextIndex = 0;
    }

    if (nextIndex === activeIndex) return;

    setIsRotating(true);
    setActiveIndex(nextIndex);
    setTimeout(() => setIsRotating(false), 800);
  };

  const current = COMMITMENTS[activeIndex];

  return (
    <div className="h-screen w-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-hidden flex flex-col relative">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className={`absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br ${current.color} opacity-[0.05] blur-[160px] transition-all duration-1000`} />
        <div className={`absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-to-br ${current.color} opacity-[0.03] blur-[160px] transition-all duration-1000`} />
      </div>

      {/* Header */}
      <header className="relative z-50 pt-8 pb-4 px-12 flex justify-center flex-shrink-0">
        <div className="w-full max-w-[1600px] flex justify-between items-center border-b border-white/5 pb-6">
          <div className="flex items-center gap-5">
            <div className={`p-2.5 rounded-xl bg-gradient-to-br ${current.color} shadow-2xl transition-all duration-700`}>
              <Target className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display font-black text-xl uppercase tracking-tighter leading-none mb-1">Guiding Commitments</h1>
              <p className="text-[9px] font-black uppercase tracking-[0.3em] text-white/30">AI in Math Intervention Plan</p>
            </div>
          </div>
          <div className="flex items-center gap-8">
            <div className="text-right">
              <p className="text-[8px] font-black opacity-30 uppercase tracking-widest mb-0.5">Educator</p>
              <p className="text-sm font-bold tracking-tight">Raymond Z. Anacaya</p>
            </div>
            <div className="w-11 h-11 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center font-display font-black text-[10px] tracking-widest">RA</div>
          </div>
        </div>
      </header>

      {/* Main Dashboard - 3 Column Layout */}
      <main className="relative z-10 flex-1 min-h-0 flex items-center justify-center px-12 py-4">
        <div className="w-full max-w-[1600px] grid grid-cols-12 gap-8 items-stretch h-full max-h-[680px]">
          
          {/* Column 1: The Foundations (Rationale & Action) */}
          <div className="col-span-4 flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-left-8 duration-700">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">01. Strategy Intent</span>
              <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            </div>

            <div className="group p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <Activity className="w-4 h-4 text-blue-400" />
                <h4 className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Rationale</h4>
              </div>
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed font-medium">
                {current.rationale}
              </p>
            </div>

            <div className="group p-6 rounded-[2.5rem] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all duration-500 relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-4 h-4 text-yellow-400" />
                <h4 className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Action Step</h4>
              </div>
              <p className="text-sm lg:text-[15px] text-white/80 leading-relaxed font-medium">
                {current.actionStep}
              </p>
            </div>
          </div>

          {/* Column 2: The Core Identity (Focus Point) */}
          <div className="col-span-4 flex items-center justify-center perspective-1000">
            <div className={`
              relative w-full aspect-[4/5] max-h-[500px]
              bg-white/[0.02] backdrop-blur-3xl border border-white/10 rounded-[4rem] 
              flex flex-col items-center justify-center p-12 transition-all duration-1000 ease-out-expo
              ${isRotating ? 'scale-90 opacity-0' : 'scale-100 opacity-100'}
              shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)]
            `}>
              <div className={`
                w-24 h-24 lg:w-32 lg:h-32 rounded-[2.5rem] flex items-center justify-center text-white shadow-3xl p-7
                bg-gradient-to-br ${current.color} floating-animation relative mb-10
              `}>
                <div className="absolute inset-0 rounded-[2.5rem] bg-white blur-3xl opacity-10 animate-pulse" />
                <div className="relative z-10">{current.icon}</div>
              </div>

              <div className="text-center space-y-4">
                <h2 className="font-display text-4xl lg:text-5xl font-black tracking-tighter leading-none text-balance">
                   {current.title}
                </h2>
                <div className="w-12 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto" />
                <p className="text-base lg:text-xl text-white/40 font-medium italic leading-tight px-4">
                  "{current.subtitle}"
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: The Execution (Example & Revision) */}
          <div className="col-span-4 flex flex-col justify-center space-y-6 animate-in fade-in slide-in-from-right-8 duration-700">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-px flex-1 bg-gradient-to-l from-white/10 to-transparent" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20 whitespace-nowrap">02. Practice & Evolution</span>
            </div>
            
            <div className="p-7 bg-black/40 border border-white/5 rounded-[2.5rem] backdrop-blur-xl relative overflow-hidden group">
               <div className="flex items-center gap-3 mb-4">
                 <Quote className="w-4 h-4 text-white/20" />
                 <h4 className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Application Example</h4>
               </div>
               <p className="text-sm lg:text-base text-white/80 italic leading-relaxed font-medium">
                 "{current.example}"
               </p>
            </div>

            <div className="p-7 bg-white/[0.015] border border-white/5 rounded-[2.5rem] relative">
               <div className="flex items-center gap-3 mb-4">
                 <ClipboardCheck className="w-4 h-4 text-emerald-400 opacity-60" />
                 <h4 className="text-[9px] font-black uppercase text-white/30 tracking-[0.2em]">Reflect & Plan for Revisions</h4>
               </div>
               <p className="text-xs lg:text-[13.5px] text-white/50 leading-relaxed font-medium">
                 {current.revisionPlan}
               </p>
            </div>

            <div className="flex items-center gap-3 px-8 text-[9px] font-black uppercase text-white/10 tracking-widest">
              <ArrowRight className="w-3 h-3" /> Raymond Anacaya
            </div>
          </div>
        </div>
      </main>

      {/* Controls */}
      <footer className="relative z-50 py-10 px-12 flex justify-center flex-shrink-0 bg-gradient-to-t from-black/80 to-transparent">
        <div className="w-full max-w-[1600px] flex items-center justify-between">
          <div className="flex items-center gap-5">
            <button 
              onClick={() => rotateTo(activeIndex - 1)}
              className="p-4 rounded-2xl border border-white/5 transition-all duration-300 bg-white/5 hover:bg-white hover:text-black active:scale-95"
              aria-label="Previous commitment"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex gap-2">
              {COMMITMENTS.map((_, i) => (
                <button 
                  key={i} 
                  onClick={() => rotateTo(i)}
                  className={`h-1 transition-all duration-700 rounded-full ${activeIndex === i ? 'w-16 bg-white' : 'w-4 bg-white/10 hover:bg-white/30'}`} 
                  aria-label={`Go to commitment ${i + 1}`}
                />
              ))}
            </div>
            <button 
              onClick={() => rotateTo(activeIndex + 1)}
              className="p-4 rounded-2xl border border-white/5 transition-all duration-300 bg-white/5 hover:bg-white hover:text-black active:scale-95"
              aria-label="Next commitment"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="hidden md:block">
            <p className="text-[9px] font-black uppercase tracking-[0.5em] text-white/10">Math Excellence Framework © 2025</p>
          </div>
        </div>
      </footer>

      <style>{`
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .perspective-1000 { perspective: 2500px; }
        .ease-out-expo { transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1); }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        .floating-animation { animation: float 10s ease-in-out infinite; }

        .animate-in { animation-fill-mode: forwards; }
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slide-in-from-left-8 { from { transform: translateX(-20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
        @keyframes slide-in-from-right-8 { from { transform: translateX(20px); opacity: 0; } to { transform: translateX(0); opacity: 1; } }

        body, html, #root { 
          height: 100vh; 
          width: 100vw;
          overflow: hidden; 
          margin: 0; 
          padding: 0; 
          background: #050505;
        }

        .shadow-3xl {
          box-shadow: 0 40px 80px -20px rgba(0, 0, 0, 0.6), 
                      0 20px 40px -30px rgba(0, 0, 0, 0.7), 
                      inset 0 -1px 4px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default App;
