import React, { useState } from 'react';
import { 
  Layers, Box, Cpu, Zap, ArrowRight, Database, Network, Activity, 
  GitBranch, ChevronRight, ChevronLeft, Code, Terminal, 
  CheckCircle2, PlusSquare, Calculator, AlertTriangle, ArrowLeftRight, 
  LineChart, Play, Scissors 
} from 'lucide-react';

import IntroSection from './sections/IntroSection';
import DimensionsSection from './sections/DimensionsSection';
import DeepLearningSection from './sections/DeepLearningSection';
import WhyPyTorchSection from './sections/WhyPyTorchSection';
import CreationSection from './sections/CreationSection';
import OperationsSection from './sections/OperationsSection';
import NumpySection from './sections/NumpySection';
import IndexingSection from './sections/IndexingSection';
import ReshapeSection from './sections/ReshapeSection';
import JoinSplitSection from './sections/JoinSplitSection';

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: Box },
    { id: 'dimensions', label: 'Dimensionality Flow', icon: Layers },
    { id: 'dl', label: 'Deep Learning Context', icon: Network },
    { id: 'why', label: 'Why PyTorch?', icon: Zap },
    { id: 'creation', label: 'Creating Tensors', icon: PlusSquare },
    { id: 'operations', label: 'Basic Operations', icon: Calculator },
    { id: 'numpy', label: 'NumPy Interop', icon: ArrowLeftRight },
    { id: 'indexing', label: 'Indexing & Slicing', icon: Scissors },
    { id: 'reshape', label: 'Reshaping & Rearranging', icon: ArrowRight },
    { id: 'join-split', label: 'Joining & Splitting', icon: ArrowRight },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-4 md:p-6 font-sans">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Introduction to Tensors</h1>
          <p className="text-lg text-slate-600">The core data structure of PyTorch</p>
        </header>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200 hover:text-blue-600'
                }`}
              >
                <Icon size={16} />
                {tab.label}
              </button>
            );
          })}
        </div>

        <main className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 min-h-[500px]">
          {activeTab === 'intro' && <IntroSection />}
          {activeTab === 'dimensions' && <DimensionsSection />}
          {activeTab === 'dl' && <DeepLearningSection />}
          {activeTab === 'why' && <WhyPyTorchSection />}
          {activeTab === 'creation' && <CreationSection />}
          {activeTab === 'operations' && <OperationsSection />}
          {activeTab === 'numpy' && <NumpySection />}
          {activeTab === 'indexing' && <IndexingSection />}
          {activeTab === 'reshape' && <ReshapeSection />}
          {activeTab === 'join-split' && <JoinSplitSection />}
        </main>
      </div>
    </div>
  );
}
