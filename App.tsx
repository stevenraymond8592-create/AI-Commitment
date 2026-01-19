
import React, { useState, useRef, useEffect } from 'react';
import { 
  Target, 
  Sparkles, 
  HeartHandshake, 
  BrainCircuit, 
  ChevronLeft, 
  ChevronRight,
  ArrowUpRight,
  Quote
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
    icon: <BrainCircuit className="w-16 h-16" />
  },
  {
    id: 2,
    title: "Hyper-Personalization for Engagement",
    subtitle: "Connecting math to their unique interests.",
    rationale: "Students in intervention often feel disconnected from the standard curriculum. Connecting math to their interests reduces anxiety and increases buy-in.",
    actionStep: "I will use generative AI to rewrite generic word problems to match the specific interests of my small group students.",
    example: "If a student loves Pokémon or Digimon, I will prompt the AI: \"Rewrite this fraction word problem using a scenario where a trainer is feeding berries to their team,\" turning a worksheet into a quest.",
    revisionPlan: "I will use a simple \"Thumbs Up/Down\" exit ticket asking, \"Did the story help you understand the math, or was it distracting?\" If the stories become too distracting, I will refine the AI prompts to keep the narrative shorter and the math more prominent.",
    color: "from-purple-600 to-pink-500",
    icon: <Sparkles className="w-16 h-16" />
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
    icon: <HeartHandshake className="w-16 h-16" />
  }
];

const App: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isRotating, setIsRotating] = useState(false);

  const rotateTo = (index: number) => {
    if (index < 0 || index >= COMMITMENTS.length) return;
    setIsRotating(true);
    setActiveIndex(index);
    setTimeout(() => setIsRotating(false), 800);
  };

  const current = COMMITMENTS[activeIndex];

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-white selection:text-black font-sans overflow-hidden relative">
      {/* 3D Parallax Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <div className="relative w-full h-full">
          {COMMITMENTS.map((c, i) => (
            <span 
              key={i}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[40vw] font-black tracking-tighter transition-all duration-1000 ease-out leading-none
                ${activeIndex === i ? 'opacity-10 scale-100 blur-none' : 'opacity-0 scale-75 blur-3xl'}
                text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-transparent
              `}
            >
              0{c.id}
            </span>
          ))}
        </div>
      </div>

      {/* Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-8 flex justify-between items-center bg-gradient-to-b from-black/50 to-transparent">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-xl bg-gradient-to-br ${current.color} transition-all duration-700`}>
            <Target className="w-6 h-6 text-white" />
          </div>
          <h1 className="font-display font-bold text-lg tracking-tighter uppercase">Anacaya Vision '25</h1>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:block text-right">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/40">Educator</p>
            <p className="text-sm font-bold">Raymond Z. Anacaya</p>
          </div>
          <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
            <span className="text-xs font-black">RA</span>
          </div>
        </div>
      </nav>

      {/* Side Navigation Arrows (NIKE STYLE) */}
      <div className="fixed inset-y-0 left-0 w-24 z-[60] flex items-center justify-center pointer-events-none">
        <button 
          onClick={() => rotateTo(activeIndex - 1)}
          disabled={activeIndex === 0}
          className={`
            w-16 h-16 rounded-full border border-white/10 flex items-center justify-center pointer-events-auto transition-all duration-500
            ${activeIndex === 0 ? 'opacity-0 scale-50 pointer-events-none' : 'bg-black/20 backdrop-blur-xl hover:bg-white hover:text-black hover:-translate-x-2 active:scale-90'}
          `}
          aria-label="Previous commitment"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
      </div>

      <div className="fixed inset-y-0 right-0 w-24 z-[60] flex items-center justify-center pointer-events-none">
        <button 
          onClick={() => rotateTo(activeIndex + 1)}
          disabled={activeIndex === COMMITMENTS.length - 1}
          className={`
            w-16 h-16 rounded-full border border-white/10 flex items-center justify-center pointer-events-auto transition-all duration-500
            ${activeIndex === COMMITMENTS.length - 1 ? 'opacity-0 scale-50 pointer-events-none' : 'bg-black/20 backdrop-blur-xl hover:bg-white hover:text-black hover:translate-x-2 active:scale-90'}
          `}
          aria-label="Next commitment"
        >
          <ChevronRight className="w-8 h-8" />
        </button>
      </div>

      {/* Main Showcase Container */}
      <main className="relative z-10 h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-24 pt-16">
        
        {/* Left Section: Content Info */}
        <div className="w-full md:w-1/2 mb-12 md:mb-0 space-y-8 animate-in fade-in slide-in-from-left-12 duration-1000">
          <div className="max-w-2xl">
            <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/10 bg-white/5`}>
              Strategic Commitment 0{current.id}
            </div>
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tighter leading-[0.9] overflow-hidden">
              <span className={`block transition-transform duration-700 ${isRotating ? 'translate-y-full' : 'translate-y-0'}`}>
                {current.title.split(' ')[0]}
              </span>
              <span className={`block transition-transform duration-700 delay-75 ${isRotating ? 'translate-y-full' : 'translate-y-0'} text-transparent bg-clip-text bg-gradient-to-r ${current.color}`}>
                {current.title.split(' ').slice(1).join(' ')}
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/60 font-medium italic">
              "{current.subtitle}"
            </p>
          </div>

          <div className="space-y-8 max-w-xl pr-4 max-h-[40vh] md:max-h-none overflow-y-auto no-scrollbar">
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${current.color}`} />
                Rationale
              </h4>
              <p className="text-white/90 leading-relaxed font-medium text-base md:text-lg">{current.rationale}</p>
            </div>
            <div className="space-y-3">
              <h4 className="text-[10px] font-black uppercase text-white/30 tracking-[0.2em] flex items-center gap-2">
                <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${current.color}`} />
                Action Step
              </h4>
              <p className="text-white/90 leading-relaxed font-medium text-base md:text-lg">{current.actionStep}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
             <div className={`w-12 h-1 bg-gradient-to-r ${current.color} rounded-full transition-all duration-700`} />
             <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">Guided by AI Integrity</span>
          </div>
        </div>

        {/* Right Section: 3D "Product" Card */}
        <div className="w-full md:w-1/2 flex items-center justify-center perspective-1000">
          <div className={`
            relative w-full max-w-[440px] aspect-[2/3] md:h-[650px]
            bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[3rem] 
            flex flex-col items-center justify-between p-10 transition-all duration-700 ease-out-expo
            hover:rotate-y-12 hover:rotate-x-6 hover:shadow-2xl hover:shadow-white/5
            ${isRotating ? 'scale-90 rotate-y-90' : 'scale-100 rotate-y-0'}
          `}>
            {/* Glossy Overlay */}
            <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
            
            {/* Floating Icon Orb */}
            <div className={`
              w-24 h-24 md:w-36 md:h-36 rounded-[3rem] flex items-center justify-center text-white shadow-3xl
              bg-gradient-to-br ${current.color} floating-animation mb-8 relative flex-shrink-0
            `}>
              <div className="absolute inset-0 rounded-[3rem] bg-white blur-3xl opacity-20 animate-pulse" />
              <div className="relative z-10 scale-75 md:scale-100">{current.icon}</div>
            </div>

            <div className="w-full space-y-6 relative z-10 flex-1 overflow-y-auto no-scrollbar">
               <div className="p-6 bg-black/40 border border-white/5 rounded-3xl backdrop-blur-md">
                 <div className="flex items-start gap-3 mb-3">
                   <Quote className="w-5 h-5 text-white/20 mt-1" />
                   <h4 className="text-[10px] font-black uppercase text-white/40 tracking-widest pt-1.5">Practical Example</h4>
                 </div>
                 <p className="text-sm md:text-base text-white/80 italic leading-relaxed">"{current.example}"</p>
               </div>
               
               <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                 <h4 className="text-[10px] font-black uppercase text-white/40 tracking-widest mb-3">Reflect & Plan for Revisions</h4>
                 <p className="text-xs md:text-sm text-white/60 leading-relaxed font-medium">{current.revisionPlan}</p>
               </div>
            </div>

            {/* Pagination / Status */}
            <div className="w-full pt-6 flex-shrink-0">
              <div className="flex items-center justify-between border-t border-white/10 pt-6">
                <div className="text-left">
                  <p className="text-[8px] font-black uppercase text-white/30">Commitment Progression</p>
                  <p className="text-[10px] font-bold text-white/60">Stage 0{current.id} of 03</p>
                </div>
                <div className="flex gap-1.5">
                   {COMMITMENTS.map((_, i) => (
                     <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'bg-white scale-125' : 'bg-white/10'}`} />
                   ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navigation Footer (CLEANED UP) */}
      <footer className="fixed bottom-0 left-0 right-0 p-8 md:p-12 z-50 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent pointer-events-none">
        <div className="flex items-center gap-12 w-full justify-between pointer-events-auto">
          <div className="hidden lg:flex items-center gap-2">
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/20 mr-4">Timeline Navigation</span>
            {COMMITMENTS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => rotateTo(i)}
                className={`h-1 transition-all duration-700 rounded-full ${activeIndex === i ? 'w-20 bg-white' : 'w-6 bg-white/20 hover:bg-white/40'}`} 
              />
            ))}
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-white/30 block mb-1">Current Protocol</span>
            <span className="text-xs font-bold flex items-center gap-2 justify-end">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
              INTERVENTION ACTIVE
            </span>
          </div>
        </div>
      </footer>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700;800;900&display=swap');
        
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        
        .perspective-1000 {
          perspective: 2500px;
        }

        .rotate-y-90 { transform: rotateY(90deg) scale(0.8); opacity: 0; }
        .rotate-y-0 { transform: rotateY(0deg); opacity: 1; }
        
        .ease-out-expo {
          transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes float {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .floating-animation {
          animation: float 8s ease-in-out infinite;
        }

        .animate-in {
          animation-fill-mode: forwards;
        }

        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slide-in-from-left-12 {
          from { transform: translateX(-48px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }

        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -webkit-overflow-scrolling: touch; }
        
        /* Modern UI Glass Refraction */
        .shadow-3xl {
          box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.5), 
                      0 30px 60px -30px rgba(0, 0, 0, 0.6), 
                      inset 0 -2px 6px 0 rgba(255, 255, 255, 0.1);
        }
      `}</style>
    </div>
  );
};

export default App;
