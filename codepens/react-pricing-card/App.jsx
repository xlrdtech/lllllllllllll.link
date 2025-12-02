import React, { useState, useEffect } from 'react';
import { Crown, ShieldCheck, Gem, ChevronRight, Lock, TrendingUp, Sparkles, Layers } from 'lucide-react';

const App = () => {
  const [variationCount, setVariationCount] = useState(25);
  const [isHovering, setIsHovering] = useState(false);
  const pricePerVariation = 10;
  const totalCost = variationCount * pricePerVariation;

  // Calculate percentage for the slider background fill
  const percentage = ((variationCount - 1) / 99) * 100;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-amber-500 selection:text-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* --- CSS UPGRADES: Animations & Custom Controls --- */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0%, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        
        /* Custom Range Slider Styling */
        input[type=range] {
          -webkit-appearance: none; 
          width: 100%; 
          background: transparent; 
        }
        
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 28px;
          width: 28px;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          margin-top: -12px; 
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2), 0 0 20px rgba(245, 158, 11, 0.5);
          border: 2px solid white;
          transition: transform 0.1s ease, box-shadow 0.2s ease;
        }

        input[type=range]::-webkit-slider-thumb:hover {
          transform: scale(1.1);
          box-shadow: 0 0 0 6px rgba(245, 158, 11, 0.3), 0 0 30px rgba(245, 158, 11, 0.7);
        }

        input[type=range]::-webkit-slider-runnable-track {
          width: 100%;
          height: 4px;
          cursor: pointer;
          background: rgba(255,255,255,0.1);
          border-radius: 2px;
        }

        /* Firefox Support */
        input[type=range]::-moz-range-thumb {
          height: 28px;
          width: 28px;
          border: 2px solid white;
          border-radius: 50%;
          background: #f59e0b;
          cursor: pointer;
          box-shadow: 0 0 0 4px rgba(245, 158, 11, 0.2);
        }
        
        .glass-card {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }
      `}</style>

      {/* Background Ambience */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,_rgba(245,158,11,0.15),_transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] mix-blend-overlay"></div>

      <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-12 gap-0 shadow-[0_0_100px_-20px_rgba(0,0,0,0.7)] rounded-3xl overflow-hidden border border-slate-800 relative z-10">
        
        {/* Left Side: The Premium Brand Column */}
        <div className="md:col-span-5 relative bg-gradient-to-br from-amber-600 via-amber-700 to-amber-900 p-10 flex flex-col justify-between overflow-hidden text-white">
          
          {/* Animated Mesh/Grid Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg"></svg>
          </div>

          <div className="absolute inset-0 pointer-events-none z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-amber-400 opacity-10 blur-3xl" style={{ animation: 'pulse-glow 4s infinite alternate' }}></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-amber-500/10 to-transparent"></div>
          </div>

          <div className="relative z-20 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-3 text-amber-100 mb-6">
                <Crown className="w-8 h-8 md:w-10 md:h-10 text-amber-300" strokeWidth={1.5} />
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Pro Features</h2>
              </div>
              <p className="text-amber-100 text-opacity-80 leading-relaxed mb-8">Unlock advanced capabilities and streamline your workflow with our comprehensive suite of professional tools.</p>
            </div>
            
            <ul className="space-y-4 mb-8">
              <li className="flex items-center text-lg">
                <ShieldCheck className="w-6 h-6 text-amber-200 mr-3 flex-shrink-0" />
                <span>Enhanced Security</span>
              </li>
              <li className="flex items-center text-lg">
                <Gem className="w-6 h-6 text-amber-200 mr-3 flex-shrink-0" />
                <span>Premium Support</span>
              </li>
              <li className="flex items-center text-lg">
                <TrendingUp className="w-6 h-6 text-amber-200 mr-3 flex-shrink-0" />
                <span>Advanced Analytics</span>
              </li>
              <li className="flex items-center text-lg">
                <Sparkles className="w-6 h-6 text-amber-200 mr-3 flex-shrink-0" />
                <span>Exclusive Templates</span>
              </li>
              <li className="flex items-center text-lg">
                <Layers className="w-6 h-6 text-amber-200 mr-3 flex-shrink-0" />
                <span>Team Collaboration</span>
              </li>
            </ul>

            <button className="relative flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-amber-900 bg-white hover:bg-gray-100 md:py-4 md:text-lg md:px-8 shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-amber-600">
              Go Pro Now
              <ChevronRight className="ml-2 -mr-1 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Right Side: Pricing and Configuration Column */}
        <div className="md:col-span-7 p-10 flex flex-col justify-between">
          <div className="flex-1">
            <h3 className="text-slate-100 text-3xl md:text-4xl font-bold tracking-tight mb-4">Flexible Scaling</h3>
            <p className="text-slate-400 leading-relaxed mb-8">Customize your plan based on the number of creative variations you need. Adjust the slider to see instant pricing.</p>

            {/* Slider Control */}
            <div className="mb-10 p-6 glass-card rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <span className="text-amber-400 text-2xl font-bold">{variationCount} Variations</span>
                <span className="text-slate-300 text-lg font-medium">@ ${pricePerVariation}/variation</span>
              </div>
              <div className="relative flex items-center">
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={variationCount}
                  onChange={(e) => setVariationCount(parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer range-lg bg-gray-700"
                  style={{
                    background: `linear-gradientto-right, #f59e0b 0%, #f59e0b ${percentage}%, rgba(255,255,255,0.1) ${percentage}%, rgba(255,255,255,0.1) 100%)`
                  }}
                />
              </div>
              <div className="flex justify-between text-slate-500 text-sm mt-2">
                <span>1</span>
                <span>100</span>
              </div>
            </div>

            {/* Total Cost Display */}
            <div className="mb-10 p-6 glass-card rounded-xl flex items-center justify-between">
              <div>
                <p className="text-slate-300 text-lg">Estimated Total</p>
                <p className="text-amber-400 text-5xl font-extrabold">${totalCost}</p>
              </div>
              <div className="text-right">
                <p className="text-slate-400 text-sm">Billed Annually</p>
                <p className="text-slate-500 text-xs">Save up to 20%</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className="mb-8">
              <h4 className="text-slate-200 text-xl font-semibold mb-4">Secure Checkout</h4>
              <div className="flex space-x-4">
                <div className="flex-1 p-4 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <Lock className="w-5 h-5 text-slate-400 mr-2" />
                  <span className="text-slate-300">PayPal</span>
                </div>
                <div className="flex-1 p-4 bg-slate-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-slate-700 transition-colors">
                  <Lock className="w-5 h-5 text-slate-400 mr-2" />
                  <span className="text-slate-300">Credit Card</span>
                </div>
              </div>
            </div>
          </div>

          <p className="text-slate-500 text-sm mt-10 text-center">
            Need more options? <a href="#" className="text-amber-500 hover:underline">Contact Sales</a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default App;