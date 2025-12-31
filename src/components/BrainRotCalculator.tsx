import { useState, useMemo } from 'react';

// Define the logic tiers
const LEVELS = [
  {
    max: 1,
    score: 12,
    label: "Safe... for now.",
    color: "text-brand-green",
    bg: "bg-brand-green",
    border: "border-brand-green",
    emoji: "😇",
    prescription: "You are the chosen one. Keep it up.",
    sideEffect: "None. You actually touch grass."
  },
  {
    max: 3,
    score: 45,
    label: "Mild Brain Fog.",
    color: "text-yellow-500",
    bg: "bg-yellow-500",
    border: "border-yellow-500",
    emoji: "😶‍🌫️",
    prescription: "15 mins of LingoDrip/day to reverse damage.",
    sideEffect: "Occasional zoning out during conversations."
  },
  {
    max: 6,
    score: 78,
    label: "High Risk Factor.",
    color: "text-orange-500",
    bg: "bg-orange-500",
    border: "border-orange-500",
    emoji: "🥴",
    prescription: "IMMEDIATE INTERVENTION REQUIRED.",
    sideEffect: "Short attention span, urge to scroll while walking."
  },
  {
    max: 10,
    score: 99,
    label: "Terminal Scrollitus.",
    color: "text-red-500",
    bg: "bg-red-500",
    border: "border-red-500",
    emoji: "🧠🔥",
    prescription: "Delete TikTok. Install LingoDrip. Pray.",
    sideEffect: "Inability to watch movies without second screen."
  }
];

export default function BrainRotCalculator() {
  const [hours, setHours] = useState(2);

  // Memoize the calculation so it doesn't jitter
  const level = useMemo(() => {
    return LEVELS.find(l => hours < l.max) || LEVELS[LEVELS.length - 1];
  }, [hours]);

  // Dynamic calculations based on input
  const iqLost = Math.floor(hours * 3.5);
  const wordsMissed = Math.floor(hours * 60); // Assuming 1 word/min learning speed

  return (
    <div className="bg-white rounded-[2.5rem] border-4 border-panda-black p-6 md:p-8 shadow-[8px_8px_0px_#000] max-w-2xl mx-auto transform transition-all hover:-translate-y-1 relative overflow-hidden group">

      {/* Decorative Background Blob */}
      <div className={`absolute -right-20 -top-20 w-64 h-64 rounded-full opacity-10 transition-colors duration-500 ${level.bg}`}></div>

      <div className="relative z-10">
        <h3 className="font-fredoka text-3xl md:text-4xl mb-2 text-panda-black text-center">
          📉 Brain Rot Calculator
        </h3>
        <p className="font-nunito text-center text-gray-500 mb-8 font-bold">
          Be honest. We won't judge (much).
        </p>

        {/* Input Section */}
        <div className="mb-10 px-2">
          <div className="flex justify-between font-bold font-fredoka text-lg mb-4 text-panda-black">
            <span>Hours on TikTok/Reels?</span>
            <span className={`text-3xl ${level.color} transition-colors duration-300`}>{hours}h</span>
          </div>

          <div className="relative h-6 flex items-center">
            {/* Custom Range Slider Styling */}
            <input
              type="range"
              min="0"
              max="10"
              step="0.5"
              value={hours}
              onChange={(e) => setHours(parseFloat(e.target.value))}
              className="w-full h-4 bg-gray-200 rounded-full appearance-none cursor-pointer border-2 border-panda-black z-20 relative accent-panda-black"
              style={{
                background: `linear-gradient(to right, #22C55E 0%, #EF4444 100%)`
              }}
            />
            {/* Custom CSS for the thumb (put this in your global css or style tag) */}
            <style>{`
              input[type=range]::-webkit-slider-thumb {
                -webkit-appearance: none;
                height: 32px;
                width: 32px;
                border-radius: 50%;
                background: #ffffff;
                border: 4px solid #052e16;
                box-shadow: 2px 2px 0px #000;
                margin-top: -14px; /* Center vertical */
                cursor: grab;
              }
              input[type=range]::-moz-range-thumb {
                height: 32px;
                width: 32px;
                border-radius: 50%;
                background: #ffffff;
                border: 4px solid #052e16;
                box-shadow: 2px 2px 0px #000;
                cursor: grab;
              }
            `}</style>
          </div>
          <div className="flex justify-between text-xs font-bold text-gray-400 mt-2 px-1">
            <span>😇 0h</span>
            <span>💀 10h+</span>
          </div>
        </div>

        {/* The "Diagnosis" Card */}
        <div className={`rounded-3xl border-4 ${level.border} p-6 bg-white transition-colors duration-500 relative overflow-hidden shadow-sm`}>
          <div className={`absolute inset-0 opacity-5 pointer-events-none ${level.bg}`}></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-6 items-center md:items-start">

            {/* Score Circle */}
            <div className="flex-shrink-0 text-center">
              <div className={`w-24 h-24 rounded-full border-4 ${level.border} flex items-center justify-center bg-white mb-2 mx-auto shadow-[4px_4px_0px_rgba(0,0,0,0.1)]`}>
                <span className={`font-black font-fredoka text-3xl ${level.color}`}>
                  {level.score}%
                </span>
              </div>
              <span className="text-4xl animate-bounce inline-block">{level.emoji}</span>
            </div>

            {/* Text Report */}
            <div className="flex-1 text-left w-full">
              <div className="mb-4">
                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Diagnosis</h4>
                <p className={`font-fredoka text-3xl leading-none ${level.color}`}>{level.label}</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400">IQ Points Lost</p>
                  <p className="font-fredoka text-xl text-panda-black">-{iqLost} pts</p>
                </div>
                <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <p className="text-xs font-bold text-gray-400">Vocab Missed</p>
                  <p className="font-fredoka text-xl text-panda-black">{wordsMissed} words</p>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-400 text-xs uppercase tracking-widest mb-1">Prescription</h4>
                <p className="font-nunito font-bold text-panda-black text-lg leading-tight">
                  {level.prescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}