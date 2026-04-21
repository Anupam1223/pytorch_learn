import React, { useState } from 'react';
import { 
  Layers, Box, Cpu, Zap, ArrowRight, Database, Network, Activity, 
  GitBranch, ChevronRight, ChevronLeft, Code, Terminal, 
  CheckCircle2, PlusSquare, Calculator, AlertTriangle, ArrowLeftRight, LineChart
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('intro');

  const tabs = [
    { id: 'intro', label: 'Introduction', icon: Box },
    { id: 'dimensions', label: 'Dimensionality Flow', icon: Layers },
    { id: 'dl', label: 'Deep Learning Context', icon: Network },
    { id: 'why', label: 'Why PyTorch?', icon: Zap },
    { id: 'creation', label: 'Creating Tensors', icon: PlusSquare },
    { id: 'operations', label: 'Basic Operations', icon: Calculator },
    { id: 'numpy', label: 'NumPy Interop', icon: ArrowLeftRight }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 p-6 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2 tracking-tight">Introduction to Tensors</h1>
          <p className="text-lg text-slate-600">The core data structure of PyTorch</p>
        </header>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 ${
                  isActive 
                    ? 'bg-blue-600 text-white shadow-md transform scale-105' 
                    : 'bg-white text-slate-600 hover:bg-blue-50 border border-slate-200 hover:text-blue-600'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Main Content Area */}
        <main className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8 min-h-[400px]">
          {activeTab === 'intro' && <IntroSection />}
          {activeTab === 'dimensions' && <DimensionsSection />}
          {activeTab === 'dl' && <DeepLearningSection />}
          {activeTab === 'why' && <WhyPyTorchSection />}
          {activeTab === 'creation' && <CreationSection />}
          {activeTab === 'operations' && <OperationsSection />}
          {activeTab === 'numpy' && <NumpySection />}
        </main>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-4 border-b pb-2">What is a Tensor?</h2>
      <div className="prose prose-blue max-w-none text-slate-600 text-lg leading-relaxed">
        <p className="mb-4">
          The <strong>Tensor</strong> is the core data structure for working with PyTorch. If you have experience with NumPy, you will find PyTorch Tensors quite familiar. Tensors are multi-dimensional arrays, very similar to NumPy's <code>ndarray</code>.
        </p>
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg my-6">
          <p className="m-0 text-blue-900">
            <strong>Key Concept:</strong> Think of tensors as generalizations of familiar mathematical objects. They allow us to structure data in increasingly complex, multi-dimensional grids.
          </p>
        </div>
        <p>
          Click on the <strong>Dimensionality Flow</strong> tab above to interactively explore how tensors scale from simple scalars to complex higher-dimensional structures.
        </p>
      </div>
    </div>
  );
}

function DimensionsSection() {
  const [step, setStep] = useState(0);

  const dimensions = [
    {
      title: "Scalar",
      dim: "0D Tensor",
      desc: "A single number. No axes.",
      example: "7",
      visual: <div className="w-12 h-12 bg-blue-100 border-2 border-blue-400 rounded flex items-center justify-center font-mono font-bold text-blue-800 text-xl">7</div>
    },
    {
      title: "Vector",
      dim: "1D Tensor",
      desc: "A list or array of numbers. One axis.",
      example: "[1, 2, 3]",
      visual: (
        <div className="flex gap-1">
          {[1, 2, 3].map(n => (
            <div key={n} className="w-10 h-10 bg-indigo-100 border-2 border-indigo-400 rounded flex items-center justify-center font-mono font-bold text-indigo-800">{n}</div>
          ))}
        </div>
      )
    },
    {
      title: "Matrix",
      dim: "2D Tensor",
      desc: "A grid of numbers. Two axes (rows, columns).",
      example: "[[1, 2], [3, 4]]",
      visual: (
        <div className="flex flex-col gap-1">
          <div className="flex gap-1">
            <div className="w-10 h-10 bg-purple-100 border-2 border-purple-400 rounded flex items-center justify-center font-mono font-bold text-purple-800">1</div>
            <div className="w-10 h-10 bg-purple-100 border-2 border-purple-400 rounded flex items-center justify-center font-mono font-bold text-purple-800">2</div>
          </div>
          <div className="flex gap-1">
            <div className="w-10 h-10 bg-purple-100 border-2 border-purple-400 rounded flex items-center justify-center font-mono font-bold text-purple-800">3</div>
            <div className="w-10 h-10 bg-purple-100 border-2 border-purple-400 rounded flex items-center justify-center font-mono font-bold text-purple-800">4</div>
          </div>
        </div>
      )
    },
    {
      title: "3D Tensor",
      dim: "3D Tensor",
      desc: "A cube of numbers. Often used for RGB images (HxWxC).",
      example: "[[[...]]]",
      visual: (
        <div className="relative w-24 h-24">
          <div className="absolute top-4 left-4 w-16 h-16 bg-teal-100/80 border-2 border-teal-400 rounded"></div>
          <div className="absolute top-2 left-2 w-16 h-16 bg-teal-200/80 border-2 border-teal-500 rounded"></div>
          <div className="absolute top-0 left-0 w-16 h-16 bg-teal-300/80 border-2 border-teal-600 rounded flex items-center justify-center font-bold text-teal-900 shadow-sm">RGB</div>
        </div>
      )
    },
    {
      title: "Higher-Dim Tensor",
      dim: "4D+ Tensor",
      desc: "e.g., Batches of images (Batch BxHxWxC).",
      example: "[[[[...]]]]",
      visual: (
        <div className="flex gap-2">
          <div className="relative w-16 h-16">
            <div className="absolute top-2 left-2 w-12 h-12 bg-slate-200 border-2 border-slate-400 rounded"></div>
            <div className="absolute top-0 left-0 w-12 h-12 bg-slate-300 border-2 border-slate-500 rounded flex items-center justify-center font-bold text-xs text-slate-800">Img 1</div>
          </div>
          <div className="relative w-16 h-16">
            <div className="absolute top-2 left-2 w-12 h-12 bg-slate-200 border-2 border-slate-400 rounded"></div>
            <div className="absolute top-0 left-0 w-12 h-12 bg-slate-300 border-2 border-slate-500 rounded flex items-center justify-center font-bold text-xs text-slate-800">Img 2</div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-slate-800">Dimensionality Flow</h2>
        <div className="flex gap-2">
          <button 
            onClick={() => setStep(Math.max(0, step - 1))}
            disabled={step === 0}
            className="px-4 py-2 bg-slate-100 text-slate-600 rounded hover:bg-slate-200 disabled:opacity-50 font-medium"
          >
            Previous
          </button>
          <button 
            onClick={() => setStep(Math.min(dimensions.length - 1, step + 1))}
            disabled={step === dimensions.length - 1}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 flex items-center gap-2 font-medium"
          >
            Add Dimension <ArrowRight size={16} />
          </button>
        </div>
      </div>

      <div className="bg-slate-50 rounded-xl p-8 border border-slate-200 flex flex-col items-center min-h-[320px] justify-center relative overflow-hidden mb-6">
        <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-500 uppercase tracking-wider shadow-sm border border-slate-100">
          {dimensions[step].dim}
        </div>
        
        <div className="transform transition-all duration-500 scale-125 mb-8">
          {dimensions[step].visual}
        </div>
        
        <div className="text-center mt-4">
          <h3 className="text-2xl font-bold text-slate-800 mb-2">{dimensions[step].title}</h3>
          <p className="text-slate-600 mb-3">{dimensions[step].desc}</p>
          <code className="bg-slate-200 px-3 py-1.5 rounded text-sm text-slate-700 font-mono shadow-inner">
            {dimensions[step].example}
          </code>
        </div>
      </div>

      <div className="flex justify-between items-center relative px-4">
        <div className="absolute left-0 top-1/2 w-full h-1 bg-slate-200 -z-10 rounded-full transform -translate-y-1/2"></div>
        <div className="absolute left-0 top-1/2 h-1 bg-blue-500 -z-10 rounded-full transform -translate-y-1/2 transition-all duration-500" style={{ width: `${(step / (dimensions.length - 1)) * 100}%` }}></div>
        
        {dimensions.map((d, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 transition-all ${
              i === step 
                ? 'bg-blue-600 text-white border-blue-600 shadow-lg scale-110' 
                : i < step 
                  ? 'bg-blue-100 text-blue-600 border-blue-500 cursor-pointer hover:bg-blue-200' 
                  : 'bg-white text-slate-400 border-slate-300 cursor-pointer hover:border-blue-300'
            }`}
          >
            {i}
          </button>
        ))}
      </div>
    </div>
  );
}

function DeepLearningSection() {
  const items = [
    { icon: Database, title: "Input Data", desc: "A batch of images, sequences of text, or tables of features.", color: "text-emerald-600", bg: "bg-emerald-100" },
    { icon: Network, title: "Model Parameters", desc: "Weights and biases of neural network layers.", color: "text-blue-600", bg: "bg-blue-100" },
    { icon: Activity, title: "Intermediate Activations", desc: "The outputs of layers within the network.", color: "text-purple-600", bg: "bg-purple-100" },
    { icon: GitBranch, title: "Gradients", desc: "Values computed during backpropagation used to update model parameters.", color: "text-rose-600", bg: "bg-rose-100" },
  ];

  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Tensors in Deep Learning</h2>
      <p className="text-slate-600 mb-8 text-lg">In the context of deep learning, tensors are used to represent virtually everything. They are the universal language of neural networks.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, i) => {
          const Icon = item.icon;
          return (
            <div key={i} className="flex gap-4 p-5 rounded-xl border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${item.bg} ${item.color}`}>
                <Icon size={24} />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}

function WhyPyTorchSection() {
  return (
    <div className="animate-in fade-in duration-500">
      <h2 className="text-2xl font-bold text-slate-800 mb-6 border-b pb-2">Why PyTorch Tensors?</h2>
      <p className="text-slate-600 mb-8 text-lg">
        What makes PyTorch Tensors particularly suited for deep learning, compared to standard Python lists or even NumPy arrays?
      </p>

      <div className="space-y-6">
        <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-indigo-50 to-blue-50 p-6 rounded-xl border border-indigo-100">
          <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-indigo-200 transform -rotate-3">
            <Cpu size={32} />
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold text-indigo-900 mb-2">1. GPU Acceleration</h3>
            <p className="text-indigo-800/80 leading-relaxed mb-4">
              Tensors can be easily moved to and processed on Graphics Processing Units (GPUs) or other hardware accelerators. This provides massive speedups for the computationally intensive operations common in deep learning.
            </p>
            <div className="bg-indigo-100/50 p-4 rounded-lg text-sm text-indigo-900 space-y-2 border border-indigo-100">
              <p className="font-semibold mb-1">How PyTorch enables this under the hood:</p>
              <ul className="list-disc pl-5 space-y-2 text-indigo-800/90">
                <li><strong>C++/CUDA Backends:</strong> Core operations aren't executed in standard Python. PyTorch translates your Python commands into highly optimized C++ and CUDA (for NVIDIA) or MPS (for Apple) code.</li>
                <li><strong>Direct VRAM Allocation:</strong> When you call <code>tensor.to('cuda')</code>, PyTorch bypasses system RAM and allocates memory directly in the GPU's ultra-fast Video RAM.</li>
                <li><strong>Kernel Dispatching:</strong> When you perform a calculation (e.g., matrix multiplication), PyTorch's internal "dispatcher" detects the tensor's device. If it's on a GPU, it routes the operation to specialized hardware libraries like <strong>cuBLAS</strong> or <strong>cuDNN</strong> instead of the CPU processor.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-xl border border-amber-100">
          <div className="w-16 h-16 bg-amber-500 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-lg shadow-amber-200 transform rotate-3">
            <Zap size={32} />
          </div>
          <div>
            <h3 className="text-xl font-bold text-amber-900 mb-2">2. Automatic Differentiation</h3>
            <p className="text-amber-800/80 leading-relaxed">
              PyTorch Tensors have built-in support for automatic differentiation through the <strong>Autograd</strong> system. This mechanism automatically calculates gradients, which are fundamental for training neural networks via backpropagation.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-slate-100 rounded-lg text-slate-600 text-sm text-center">
        While the concept is similar to NumPy arrays, these two features are what make PyTorch Tensors the foundation for building and training models efficiently.
      </div>
    </div>
  );
}

// ==========================================
// INTEGRATED TENSOR CREATION SLIDER
// ==========================================

function CreationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'existing', title: 'From Existing Data', component: ExistingDataSlide },
    { id: 'shapes', title: 'Specific Shapes & Values', component: ShapesSlide },
    { id: 'random', title: 'Random Values', component: RandomSlide },
    { id: 'like', title: 'Based on Other Tensors', component: LikeSlide },
  ];

  const handleNext = () => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  const handlePrev = () => setCurrentSlide((prev) => Math.max(0, prev - 1));

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Integrated Slider Header */}
      <div className="bg-slate-900 px-6 py-6 rounded-2xl text-white relative overflow-hidden mb-6 shadow-md">
        <div className="absolute top-0 right-0 opacity-10">
          <Box size={100} className="transform translate-x-4 -translate-y-4" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Creating PyTorch Tensors</h2>
        <p className="text-slate-400 text-sm mb-4">Interactive Visual Study Guide</p>
        
        {/* Progress Steps */}
        <div className="flex gap-2">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 flex-1 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentSlide ? 'bg-blue-500' : idx < currentSlide ? 'bg-blue-800' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs mt-2 text-slate-400 font-medium">
          {slides.map((slide, idx) => (
            <span key={slide.id} className={idx === currentSlide ? 'text-blue-400' : ''}>
              {idx + 1}. {slide.title}
            </span>
          ))}
        </div>
      </div>

      {/* Slide Content Container */}
      <div className="min-h-[450px] flex flex-col">
        <div className="flex-1">
          <CurrentComponent />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          <button 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <div className="text-slate-400 font-medium text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>

    </div>
  );
}

// --- Slide 1: Existing Data ---
function ExistingDataSlide() {
  const [source, setSource] = useState('list');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">From Existing Data</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          The most direct way to create a tensor is from existing Python data structures using <code>torch.tensor()</code>. PyTorch intelligently infers the data type (dtype) and copies the input data.
        </p>
        
        <div className="space-y-3 mb-6">
          <button 
            onClick={() => setSource('list')}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between ${source === 'list' ? 'border-blue-500 bg-blue-50 text-blue-900 font-semibold' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
          >
            <span>Python List (Integers)</span>
            {source === 'list' && <CheckCircle2 size={18} className="text-blue-500" />}
          </button>
          <button 
            onClick={() => setSource('numpy')}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all flex items-center justify-between ${source === 'numpy' ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-semibold' : 'border-slate-200 text-slate-600 hover:border-slate-300'}`}
          >
            <span>NumPy Array (Floats)</span>
            {source === 'numpy' && <CheckCircle2 size={18} className="text-emerald-500" />}
          </button>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 text-xs text-amber-800">
          <strong>Note:</strong> PyTorch automatically infers <code>int64</code> for integer lists and <code>float64</code> for standard NumPy float arrays.
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python Code</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1">
          {source === 'list' ? (
            <pre>
<span className="text-pink-400">import</span> torch{'\n\n'}
<span className="text-slate-500"># Create from list</span>{'\n'}
data_list = [[<span className="text-orange-400">1</span>, <span className="text-orange-400">2</span>], [<span className="text-orange-400">3</span>, <span className="text-orange-400">4</span>]]{'\n'}
tensor = torch.<span className="text-blue-300">tensor</span>(data_list)
            </pre>
          ) : (
            <pre>
<span className="text-pink-400">import</span> torch{'\n'}
<span className="text-pink-400">import</span> numpy <span className="text-pink-400">as</span> np{'\n\n'}
<span className="text-slate-500"># Create from numpy</span>{'\n'}
data_numpy = np.<span className="text-blue-300">array</span>([[<span className="text-orange-400">5.0</span>, <span className="text-orange-400">6.0</span>], [<span className="text-orange-400">7.0</span>, <span className="text-orange-400">8.0</span>]]){'\n'}
tensor = torch.<span className="text-blue-300">tensor</span>(data_numpy)
            </pre>
          )}
        </div>

        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400">
          {source === 'list' ? (
            <pre>
tensor([[1, 2],{'\n'}
        [3, 4]]){'\n'}
dtype: torch.int64{'\n'}
shape: torch.Size([2, 2])
            </pre>
          ) : (
            <pre>
tensor([[5., 6.],{'\n'}
        [7., 8.]], dtype=torch.float64){'\n'}
dtype: torch.float64{'\n'}
shape: torch.Size([2, 2])
            </pre>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Slide 2: Specific Shapes ---
function ShapesSlide() {
  const [func, setFunc] = useState('zeros');

  const funcs = [
    { id: 'zeros', label: 'torch.zeros()', val: '0.' },
    { id: 'ones', label: 'torch.ones()', val: '1.' },
    { id: 'empty', label: 'torch.empty()', val: '?' },
  ];

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-4">Specific Shapes & Values</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          Often you need to initialize tensors with a specific size. PyTorch provides dedicated functions to create tensors filled with 0s, 1s, or uninitialized memory (garbage values).
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {funcs.map((f) => (
            <button
              key={f.id}
              onClick={() => setFunc(f.id)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs font-bold border-2 transition-all ${
                func === f.id ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-600'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col items-center justify-center min-h-[160px]">
          <p className="text-xs text-slate-500 font-bold uppercase tracking-widest mb-4">Visualizer: Shape (2, 3)</p>
          <div className="grid grid-cols-3 gap-2 w-full max-w-[200px]">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={`h-12 rounded flex items-center justify-center font-mono font-bold text-sm shadow-sm border-2 ${
                func === 'zeros' ? 'bg-indigo-50 border-indigo-200 text-indigo-700' :
                func === 'ones' ? 'bg-blue-50 border-blue-200 text-blue-700' :
                'bg-slate-200 border-slate-300 text-slate-500 text-[10px] text-center p-1'
              }`}>
                {func === 'empty' ? `${(Math.random() * 1e-10).toExponential(1)}` : funcs.find(f=>f.id===func).val}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1">
<pre>
shape = (<span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>){'\n\n'}
<span className="text-slate-500"># Default dtype is float32</span>{'\n'}
tensor = torch.<span className="text-blue-300">{func}</span>(shape)
</pre>
        </div>

        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400">
          {func === 'zeros' && <pre>tensor([[0., 0., 0.],{'\n'}        [0., 0., 0.]])</pre>}
          {func === 'ones' && <pre>tensor([[1., 1., 1.],{'\n'}        [1., 1., 1.]])</pre>}
          {func === 'empty' && <pre>tensor([[1.2e-38, 4.5e-41, 0.0e+00],{'\n'}        [3.1e-32, 1.8e+00, 2.1e-40]])</pre>}
        </div>
      </div>
    </div>
  );
}

// --- Slide 3: Random Values ---
function RandomSlide() {
  const [dist, setDist] = useState('rand');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Random Values</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          Initializing model parameters (like weights) requires random values. PyTorch provides different distributions for this purpose.
        </p>

        <div className="space-y-4 mb-6">
          <div 
            onClick={() => setDist('rand')}
            className={`cursor-pointer p-3 rounded-xl border-2 transition-all ${dist === 'rand' ? 'border-purple-500 bg-purple-50' : 'border-slate-200 hover:border-slate-300'}`}
          >
            <h4 className={`font-bold font-mono text-sm mb-1 ${dist === 'rand' ? 'text-purple-700' : 'text-slate-700'}`}>torch.rand()</h4>
            <p className="text-xs text-slate-600">Uniform distribution between <code>[0, 1)</code>.</p>
          </div>
          
          <div 
            onClick={() => setDist('randn')}
            className={`cursor-pointer p-3 rounded-xl border-2 transition-all ${dist === 'randn' ? 'border-rose-500 bg-rose-50' : 'border-slate-200 hover:border-slate-300'}`}
          >
            <h4 className={`font-bold font-mono text-sm mb-1 ${dist === 'randn' ? 'text-rose-700' : 'text-slate-700'}`}>torch.randn()</h4>
            <p className="text-xs text-slate-600">Standard normal distribution (mean 0, variance 1). Can be negative or positive.</p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1">
<pre>
shape = (<span className="text-orange-400">2</span>, <span className="text-orange-400">3</span>){'\n\n'}
<span className="text-slate-500"># Random initialization</span>{'\n'}
tensor = torch.<span className="text-blue-300">{dist}</span>(shape)
</pre>
        </div>

        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output (Sample)</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400 flex-1 flex items-center">
          {dist === 'rand' ? (
<pre>
tensor([[0.6580, 0.5089, 0.1642],{'\n'}
        [0.3742, 0.5989, 0.7775]])
</pre>
          ) : (
<pre>
tensor([[-0.2651, -0.3249, -1.0134],{'\n'}
        [ 1.1314,  1.1751, -0.1411]])
</pre>
          )}
        </div>
      </div>
    </div>
  );
}

// --- Slide 4: Like Variants ---
function LikeSlide() {
  const [func, setFunc] = useState('zeros_like');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-4">Based on Other Tensors</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          To create a new tensor that shares the exact <strong>shape</strong> and <strong>dtype</strong> of an existing tensor, use the <code>_like</code> variants.
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          <button onClick={() => setFunc('zeros_like')} className={`px-2 py-1 rounded font-mono text-[10px] sm:text-xs border-2 ${func === 'zeros_like' ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 text-slate-600'}`}>zeros_like()</button>
          <button onClick={() => setFunc('ones_like')} className={`px-2 py-1 rounded font-mono text-[10px] sm:text-xs border-2 ${func === 'ones_like' ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 text-slate-600'}`}>ones_like()</button>
          <button onClick={() => setFunc('rand_like')} className={`px-2 py-1 rounded font-mono text-[10px] sm:text-xs border-2 ${func === 'rand_like' ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-300 text-slate-600'}`}>rand_like()</button>
        </div>

        <div className="flex-1 bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col justify-center gap-4">
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="flex-1 bg-white p-3 rounded-xl shadow-sm border border-slate-200">
              <p className="text-[10px] font-bold text-slate-400 mb-2 uppercase">Base Tensor</p>
              <div className="grid grid-cols-2 gap-1 w-16">
                <div className="bg-slate-200 h-6 flex items-center justify-center font-mono text-xs">1.</div>
                <div className="bg-slate-200 h-6 flex items-center justify-center font-mono text-xs">2.</div>
                <div className="bg-slate-200 h-6 flex items-center justify-center font-mono text-xs">3.</div>
                <div className="bg-slate-200 h-6 flex items-center justify-center font-mono text-xs">4.</div>
              </div>
            </div>

            <ArrowRight className="text-blue-400 flex-shrink-0" size={24} />

            <div className="flex-1 bg-blue-50 p-3 rounded-xl shadow-sm border border-blue-200">
              <p className="text-[10px] font-bold text-blue-500 mb-2 uppercase">New Tensor</p>
              <div className="grid grid-cols-2 gap-1 w-16">
                {func === 'zeros_like' && [...Array(4)].map((_,i)=><div key={i} className="bg-blue-200 text-blue-800 h-6 flex items-center justify-center font-mono text-xs">0.</div>)}
                {func === 'ones_like' && [...Array(4)].map((_,i)=><div key={i} className="bg-blue-200 text-blue-800 h-6 flex items-center justify-center font-mono text-xs">1.</div>)}
                {func === 'rand_like' && [...Array(4)].map((_,i)=><div key={i} className="bg-purple-200 text-purple-800 h-6 flex items-center justify-center font-mono text-[10px]">0.{Math.floor(Math.random()*99)}</div>)}
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1">
<pre>
base = torch.<span className="text-blue-300">tensor</span>([[<span className="text-orange-400">1.</span>, <span className="text-orange-400">2.</span>],{'\n'}                     [<span className="text-orange-400">3.</span>, <span className="text-orange-400">4.</span>]]){'\n\n'}
<span className="text-slate-500"># Copies shape & dtype</span>{'\n'}
new_tensor = torch.<span className="text-blue-300">{func}</span>(base)
</pre>
        </div>

        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400">
          {func === 'zeros_like' && <pre>tensor([[0., 0.],{'\n'}        [0., 0.]])</pre>}
          {func === 'ones_like' && <pre>tensor([[1., 1.],{'\n'}        [1., 1.]])</pre>}
          {func === 'rand_like' && <pre>tensor([[0.1216, 0.5908],{'\n'}        [0.3264, 0.9272]])</pre>}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// INTEGRATED TENSOR OPERATIONS SLIDER
// ==========================================

function OperationsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'arithmetic', title: 'Arithmetic & Scalars', component: ArithmeticSlide },
    { id: 'inplace', title: 'In-place Operations', component: InPlaceSlide },
    { id: 'math', title: 'Math Functions', component: MathSlide },
    { id: 'reduction', title: 'Reductions & Dimensions', component: ReductionSlide },
    { id: 'logic', title: 'Logical & Comparison', component: LogicSlide },
  ];

  const handleNext = () => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  const handlePrev = () => setCurrentSlide((prev) => Math.max(0, prev - 1));

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Integrated Slider Header */}
      <div className="bg-slate-900 px-6 py-6 rounded-2xl text-white relative overflow-hidden mb-6 shadow-md">
        <div className="absolute top-0 right-0 opacity-10">
          <Calculator size={100} className="transform translate-x-4 -translate-y-4" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Basic Tensor Operations</h2>
        <p className="text-slate-400 text-sm mb-4">Arithmetic, Math Functions, Reductions, and Logic</p>
        
        {/* Progress Steps */}
        <div className="flex gap-2">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 flex-1 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentSlide ? 'bg-indigo-500' : idx < currentSlide ? 'bg-indigo-800' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs mt-2 text-slate-400 font-medium">
          {slides.map((slide, idx) => (
            <span key={slide.id} className={idx === currentSlide ? 'text-indigo-400' : ''}>
              {idx + 1}. {slide.title}
            </span>
          ))}
        </div>
      </div>

      {/* Slide Content Container */}
      <div className="min-h-[450px] flex flex-col">
        <div className="flex-1">
          <CurrentComponent />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          <button 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <div className="text-slate-400 font-medium text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed font-semibold transition-colors"
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Slide 1: Arithmetic & Scalars ---
function ArithmeticSlide() {
  const [op, setOp] = useState('add');

  const outputs = {
    add: `Addition (a + b):\ntensor([[ 6.,  8.],\n        [10., 12.]])`,
    sub: `Subtraction (a - b):\ntensor([[-4., -4.],\n        [-4., -4.]])`,
    mul: `Element-wise Multiplication:\ntensor([[ 5., 12.],\n        [21., 32.]])`,
    div: `Division (a / b):\ntensor([[0.2000, 0.3333],\n        [0.4286, 0.5000]])`,
    pow: `Exponentiation (a ** 2):\ntensor([[ 1.,  4.],\n        [ 9., 16.]])`,
    add_scalar: `t + scalar:\ntensor([[11, 12, 13],\n        [14, 15, 16]])`,
    mul_scalar: `t * scalar:\ntensor([[10, 20, 30],\n        [40, 50, 60]])`,
    sub_scalar: `t - scalar:\ntensor([[-9, -8, -7],\n        [-6, -5, -4]])`
  };

  const isScalar = op.includes('scalar');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Element-wise & Scalar Arithmetic</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Standard arithmetic functions operate <strong>element-wise</strong>. Tensors must have compatible shapes.
          PyTorch also automatically expands a <strong>scalar</strong> to match the tensor's shape.
        </p>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Element-wise (a &amp; b)</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <button onClick={() => setOp('add')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'add' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>+ add</button>
              <button onClick={() => setOp('sub')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'sub' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>- sub</button>
              <button onClick={() => setOp('mul')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'mul' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>* mul</button>
              <button onClick={() => setOp('div')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'div' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>/ div</button>
              <button onClick={() => setOp('pow')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'pow' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>** pow</button>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Scalar Operations (t &amp; 10)</span>
            <div className="flex flex-wrap gap-2 mt-2">
              <button onClick={() => setOp('add_scalar')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'add_scalar' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>t + 10</button>
              <button onClick={() => setOp('mul_scalar')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'mul_scalar' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>t * 10</button>
              <button onClick={() => setOp('sub_scalar')} className={`px-2 py-1.5 rounded font-mono text-xs font-bold border-2 ${op === 'sub_scalar' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>t - 10</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
<pre>
{isScalar ? (
`t = torch.tensor([[1, 2, 3], [4, 5, 6]])
scalar = 10\n
${op === 'add_scalar' ? 'result = t + scalar' : op === 'mul_scalar' ? 'result = t * scalar' : 'result = t - scalar'}`
) : (
`a = torch.tensor([[1., 2.], [3., 4.]])
b = torch.tensor([[5., 6.], [7., 8.]])\n
${op === 'add' ? '# torch.add(a, b)\nresult = a + b' : 
  op === 'sub' ? '# torch.sub(a, b)\nresult = a - b' : 
  op === 'mul' ? '# torch.mul(a, b)\nresult = a * b' : 
  op === 'div' ? '# torch.div(a, b)\nresult = a / b' : 
  '# torch.pow(a, 2)\nresult = a ** 2'}`
)}
</pre>
        </div>
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400 overflow-x-auto">
          <pre>{outputs[op]}</pre>
        </div>
      </div>
    </div>
  );
}

// --- Slide 2: In-Place Operations ---
function InPlaceSlide() {
  const [step, setStep] = useState(0);

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">In-place Operations</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Functions with a trailing underscore (e.g., <code>add_</code>, <code>mul_</code>) modify the tensor directly without creating a new object. This saves memory but should be used cautiously to preserve Autograd gradients.
        </p>

        <div className="space-y-3">
          <button 
            onClick={() => setStep(0)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${step === 0 ? 'border-indigo-500 bg-indigo-50 text-indigo-900 font-bold' : 'border-slate-200 text-slate-600'}`}
          >
            1. Original Tensor
          </button>
          <button 
            onClick={() => setStep(1)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${step === 1 ? 'border-indigo-500 bg-indigo-50 text-indigo-900 font-bold' : 'border-slate-200 text-slate-600'}`}
          >
            2. a.add_(b)
          </button>
          <button 
            onClick={() => setStep(2)}
            className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${step === 2 ? 'border-indigo-500 bg-indigo-50 text-indigo-900 font-bold' : 'border-slate-200 text-slate-600'}`}
          >
            3. a.mul_(2)
          </button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python Memory View</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
<pre>
{`a = torch.tensor([[1., 2.], [3., 4.]])
b = torch.tensor([[5., 6.], [7., 8.]])`}
{step >= 1 && `\n# Modified directly in memory\na.add_(b)`}
{step >= 2 && `\n\n# Multiplied in memory\na.mul_(2)`}
</pre>
        </div>
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output (Tensor 'a')</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400 overflow-x-auto">
          {step === 0 && <pre>{`Original tensor 'a':\ntensor([[1., 2.],\n        [3., 4.]])`}</pre>}
          {step === 1 && <pre>{`Tensor 'a' after a.add_(b):\ntensor([[ 6.,  8.],\n        [10., 12.]])`}</pre>}
          {step === 2 && <pre>{`Tensor 'a' after a.mul_(2):\ntensor([[12., 16.],\n        [20., 24.]])`}</pre>}
        </div>
      </div>
    </div>
  );
}

// --- Slide 3: Math Functions ---
function MathSlide() {
  const [op, setOp] = useState('sqrt');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Other Mathematical Functions</h3>
        <p className="text-slate-600 mb-6 leading-relaxed text-sm">
          PyTorch provides a rich library of functions that operate element-wise, similar to NumPy's ufuncs.
        </p>

        <div className="grid grid-cols-2 gap-2 mb-6">
          <button onClick={() => setOp('sqrt')} className={`px-3 py-2 rounded-lg font-mono text-xs font-bold border-2 transition-all ${op === 'sqrt' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>torch.sqrt(t)</button>
          <button onClick={() => setOp('exp')} className={`px-3 py-2 rounded-lg font-mono text-xs font-bold border-2 transition-all ${op === 'exp' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>torch.exp(t)</button>
          <button onClick={() => setOp('log')} className={`px-3 py-2 rounded-lg font-mono text-xs font-bold border-2 transition-all ${op === 'log' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>torch.log(t)</button>
          <button onClick={() => setOp('abs')} className={`px-3 py-2 rounded-lg font-mono text-xs font-bold border-2 transition-all ${op === 'abs' ? 'bg-indigo-600 text-white border-indigo-600' : 'bg-white text-slate-600 border-slate-200'}`}>torch.abs(t)</button>
        </div>
        
        {op === 'log' && (
          <div className="bg-amber-50 text-amber-800 text-xs p-3 rounded-lg border border-amber-200 mb-4">
            <strong>Note:</strong> Ensure values are positive for log! We add a small epsilon (like <code>1e-6</code>) for stability if zeros might exist.
          </div>
        )}
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
<pre>
{op === 'abs' ? (
`t_neg = torch.tensor([[-1., 2.], [-3., 4.]])\n\n# Absolute value\nresult = torch.abs(t_neg)`
) : op === 'log' ? (
`t = torch.tensor([[1., 4.], [9., 16.]])\n\n# Natural Logarithm\nt_pos = torch.abs(t) + 1e-6 # For stability\nresult = torch.log(t_pos)`
) : op === 'exp' ? (
`t = torch.tensor([[1., 4.], [9., 16.]])\n\n# Exponential (e^x)\nresult = torch.exp(t)`
) : (
`t = torch.tensor([[1., 4.], [9., 16.]])\n\n# Square root\nresult = torch.sqrt(t)`
)}
</pre>
        </div>
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400 overflow-x-auto">
          {op === 'abs' && <pre>{`tensor([[1., 2.],\n        [3., 4.]])`}</pre>}
          {op === 'log' && <pre>{`tensor([[0.0000, 1.3863],\n        [2.1972, 2.7726]])`}</pre>}
          {op === 'exp' && <pre>{`tensor([[2.7183e+00, 5.4598e+01],\n        [8.1031e+03, 8.8861e+06]])`}</pre>}
          {op === 'sqrt' && <pre>{`tensor([[1., 2.],\n        [3., 4.]])`}</pre>}
        </div>
      </div>
    </div>
  );
}

// --- Slide 4: Reduction & Dims ---
function ReductionSlide() {
  const [op, setOp] = useState('sum');
  const [dim, setDim] = useState('all');

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-4">Reduction Operations</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Reductions reduce the number of elements. Using the <code>dim</code> argument collapses a specific dimension, returning a tensor with one fewer dimension.
        </p>

        <div className="flex flex-col gap-4 mb-4">
          <div className="flex gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase w-20 pt-2">Function:</span>
            <div className="flex gap-2">
              <button onClick={() => setOp('sum')} className={`px-2 py-1 rounded text-xs border ${op === 'sum' ? 'bg-indigo-600 text-white' : 'border-slate-300'}`}>sum()</button>
              <button onClick={() => setOp('mean')} className={`px-2 py-1 rounded text-xs border ${op === 'mean' ? 'bg-indigo-600 text-white' : 'border-slate-300'}`}>mean()</button>
              <button onClick={() => setOp('max')} className={`px-2 py-1 rounded text-xs border ${op === 'max' ? 'bg-indigo-600 text-white' : 'border-slate-300'}`}>max()</button>
              <button onClick={() => setOp('min')} className={`px-2 py-1 rounded text-xs border ${op === 'min' ? 'bg-indigo-600 text-white' : 'border-slate-300'}`}>min()</button>
            </div>
          </div>
          <div className="flex gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase w-20 pt-2">Dimension:</span>
            <div className="flex gap-2">
              <button onClick={() => setDim('all')} className={`px-2 py-1 rounded text-xs border ${dim === 'all' ? 'bg-emerald-600 text-white' : 'border-slate-300'}`}>All (Scalar)</button>
              <button onClick={() => setDim('0')} className={`px-2 py-1 rounded text-xs border ${dim === '0' ? 'bg-emerald-600 text-white' : 'border-slate-300'}`}>dim=0 (Cols)</button>
              <button onClick={() => setDim('1')} className={`px-2 py-1 rounded text-xs border ${dim === '1' ? 'bg-emerald-600 text-white' : 'border-slate-300'}`}>dim=1 (Rows)</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
<pre>
{`t = torch.tensor([[1., 2., 3.], 
                  [4., 5., 6.]])`}
{op === 'mean' && '\n# Requires float tensor for mean\nt = t.float()'}

{dim === 'all' ? (
  `\n# Reduce entire tensor\nresult = torch.${op}(t)`
) : (
  `\n# Collapse dim ${dim}\nresult = torch.${op}(t, dim=${dim})`
)}
</pre>
        </div>
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-emerald-400 overflow-x-auto">
          {op === 'sum' && dim === 'all' && <pre>tensor(21.)</pre>}
          {op === 'sum' && dim === '0' && <pre>tensor([5., 7., 9.])</pre>}
          {op === 'sum' && dim === '1' && <pre>tensor([ 6., 15.])</pre>}
          
          {op === 'mean' && dim === 'all' && <pre>tensor(3.5000)</pre>}
          {op === 'mean' && dim === '0' && <pre>tensor([2.5000, 3.5000, 4.5000])</pre>}
          {op === 'mean' && dim === '1' && <pre>tensor([2.0000, 5.0000])</pre>}

          {op === 'max' && dim === 'all' && <pre>tensor(6.)</pre>}
          {op === 'max' && dim === '0' && <pre>values=tensor([4., 5., 6.])</pre>}
          {op === 'max' && dim === '1' && <pre>values=tensor([3., 6.])</pre>}

          {op === 'min' && dim === 'all' && <pre>tensor(1.)</pre>}
          {op === 'min' && dim === '0' && <pre>values=tensor([1., 2., 3.])</pre>}
          {op === 'min' && dim === '1' && <pre>values=tensor([1., 4.])</pre>}
        </div>
      </div>
    </div>
  );
}

// --- Slide 5: Logic ---
function LogicSlide() {
  const [op, setOp] = useState('eq'); 

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Logical & Comparison</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Standard comparison operators and logical functions return a boolean tensor (<code>torch.bool</code>). Boolean tensors are extremely useful for masking operations.
        </p>

        <div className="space-y-4">
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Comparisons</span>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setOp('eq')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'eq' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>a == b</button>
              <button onClick={() => setOp('gt')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'gt' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>a &gt; b</button>
              <button onClick={() => setOp('lte')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'lte' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>a &lt;= b</button>
            </div>
          </div>
          <div>
            <span className="text-xs font-bold text-slate-400 uppercase">Logical Operations</span>
            <div className="flex gap-2 mt-2">
              <button onClick={() => setOp('and')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'and' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>logical_and</button>
              <button onClick={() => setOp('or')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'or' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>logical_or</button>
              <button onClick={() => setOp('not')} className={`flex-1 py-2 rounded font-mono text-xs border ${op === 'not' ? 'bg-amber-500 text-white border-amber-600' : 'bg-white text-slate-600 border-slate-200'}`}>logical_not</button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
          {['and', 'or', 'not'].includes(op) ? (
<pre>
{`bool_a = torch.tensor([[True, False], [True, True]])
bool_b = torch.tensor([[False, True], [True, False]])\n`}
{op === 'and' && `result = torch.logical_and(bool_a, bool_b)`}
{op === 'or' && `result = torch.logical_or(bool_a, bool_b)`}
{op === 'not' && `result = torch.logical_not(bool_a)`}
</pre>
          ) : (
<pre>
{`a = torch.tensor([[1, 2], [3, 4]])
b = torch.tensor([[1, 5], [0, 4]])\n`}
{op === 'eq' && `result = (a == b)`}
{op === 'gt' && `result = (a > b)`}
{op === 'lte' && `result = (a <= b)`}
</pre>
          )}
        </div>

        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Output</span>
        </div>
        <div className="bg-black/40 p-4 rounded-xl text-amber-400 overflow-x-auto">
          {op === 'eq' && <pre>{`tensor([[ True, False],\n        [False,  True]])`}</pre>}
          {op === 'gt' && <pre>{`tensor([[False, False],\n        [ True, False]])`}</pre>}
          {op === 'lte' && <pre>{`tensor([[ True,  True],\n        [False,  True]])`}</pre>}
          
          {op === 'and' && <pre>{`tensor([[False, False],\n        [ True, False]])`}</pre>}
          {op === 'or' && <pre>{`tensor([[ True,  True],\n        [ True,  True]])`}</pre>}
          {op === 'not' && <pre>{`tensor([[False,  True],\n        [False, False]])`}</pre>}
        </div>
      </div>
    </div>
  );
}

// ==========================================
// INTEGRATED NUMPY RELATIONSHIP SLIDER
// ==========================================

function NumpySection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { id: 'compare', title: 'Tensors vs NumPy', component: NumpyCompareSlide },
    { id: 'totensor', title: 'NumPy to Tensor', component: NumpyToTensorSlide },
    { id: 'tonumpy', title: 'Tensor to NumPy & GPU', component: TensorToNumpySlide },
    { id: 'workflow', title: 'Leveraging Both Worlds', component: LeveragingWorldsSlide },
  ];

  const handleNext = () => setCurrentSlide((prev) => Math.min(slides.length - 1, prev + 1));
  const handlePrev = () => setCurrentSlide((prev) => Math.max(0, prev - 1));

  const CurrentComponent = slides[currentSlide].component;

  return (
    <div className="animate-in fade-in duration-500">
      
      {/* Integrated Slider Header */}
      <div className="bg-slate-900 px-6 py-6 rounded-2xl text-white relative overflow-hidden mb-6 shadow-md">
        <div className="absolute top-0 right-0 opacity-10">
          <ArrowLeftRight size={100} className="transform translate-x-4 -translate-y-4" />
        </div>
        <h2 className="text-2xl font-bold mb-2">Relationship with NumPy</h2>
        <p className="text-slate-400 text-sm mb-4">Bridging scientific computing and deep learning</p>
        
        {/* Progress Steps */}
        <div className="flex gap-2">
          {slides.map((slide, idx) => (
            <div 
              key={slide.id} 
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 flex-1 rounded-full cursor-pointer transition-all duration-300 ${
                idx === currentSlide ? 'bg-emerald-500' : idx < currentSlide ? 'bg-emerald-800' : 'bg-slate-700'
              }`}
            />
          ))}
        </div>
        <div className="flex justify-between text-xs mt-2 text-slate-400 font-medium">
          {slides.map((slide, idx) => (
            <span key={slide.id} className={idx === currentSlide ? 'text-emerald-400' : ''}>
              {idx + 1}. {slide.title}
            </span>
          ))}
        </div>
      </div>

      {/* Slide Content Container */}
      <div className="min-h-[450px] flex flex-col">
        <div className="flex-1">
          <CurrentComponent />
        </div>

        {/* Navigation Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          <button 
            onClick={handlePrev}
            disabled={currentSlide === 0}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50 font-semibold transition-colors"
          >
            <ChevronLeft size={20} /> Previous
          </button>
          
          <div className="text-slate-400 font-medium text-sm">
            Slide {currentSlide + 1} of {slides.length}
          </div>

          <button 
            onClick={handleNext}
            disabled={currentSlide === slides.length - 1}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 disabled:opacity-50 font-semibold transition-colors"
          >
            Next <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

// --- Slide 1: Comparison ---
function NumpyCompareSlide() {
  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Similar Structures, Different Capabilities</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Both libraries represent dense numerical data in multiple dimensions. PyTorch recognizes NumPy's prevalence and provides excellent interoperability. Many operations have direct equivalents:
        </p>
        <ul className="text-sm text-slate-600 space-y-2 ml-6 list-disc mb-6">
          <li><strong>Creation:</strong> Zeros, ones, random numbers, from lists.</li>
          <li><strong>Math:</strong> Element-wise arithmetic, trig functions, exponentiation.</li>
          <li><strong>Indexing & Slicing:</strong> Accessing sub-arrays uses comparable syntax.</li>
          <li><strong>Shape Manipulation:</strong> Reshaping, transposing, and concatenating.</li>
        </ul>
      </div>

      <div className="space-y-4">
        <div className="bg-slate-50 border border-slate-200 rounded-xl p-4">
          <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
            <Cpu size={18} className="text-slate-500" /> Standard NumPy
          </h4>
          <ul className="text-sm text-slate-600 space-y-1 ml-6 list-disc">
            <li>Primarily designed for <strong>CPU computation</strong>.</li>
            <li>No built-in capability for calculating gradients.</li>
            <li>The standard for general scientific operations in Python.</li>
          </ul>
        </div>

        <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
          <h4 className="font-bold text-emerald-900 mb-2 flex items-center gap-2">
            <Zap size={18} className="text-emerald-600" /> PyTorch Tensors
          </h4>
          <ul className="text-sm text-emerald-800 space-y-1 ml-6 list-disc">
            <li><strong>GPU Acceleration:</strong> Can be moved to GPUs for massive parallel computation (crucial for deep learning).</li>
            <li><strong>Automatic Differentiation:</strong> Built-in <code>Autograd</code> system tracks operations and computes gradients during backpropagation.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

// --- Slide 2: NumPy to Tensor ---
function NumpyToTensorSlide() {
  const [step, setStep] = useState(0);

  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div className="flex flex-col">
        <h3 className="text-xl font-bold mb-4">NumPy to PyTorch (Memory Sharing)</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Create a PyTorch Tensor from a NumPy array using <code>torch.from_numpy()</code>.
        </p>
        
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3 mb-6">
          <AlertTriangle className="text-amber-500 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-amber-800 text-sm mb-1">Important Note on Memory Sharing</h4>
            <p className="text-xs text-amber-700 leading-relaxed">
              The resulting Tensor and the original NumPy array share the same underlying memory location on the CPU. Modifying one object will affect the other! This avoids copying data but requires awareness.
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <button onClick={() => setStep(0)} className={`w-full text-left px-4 py-2 rounded-lg border text-sm transition-all ${step === 0 ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-50 text-slate-600'}`}>1. Original State</button>
          <button onClick={() => setStep(1)} className={`w-full text-left px-4 py-2 rounded-lg border text-sm transition-all ${step === 1 ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-50 text-slate-600'}`}>2. Modify NumPy Array</button>
          <button onClick={() => setStep(2)} className={`w-full text-left px-4 py-2 rounded-lg border text-sm transition-all ${step === 2 ? 'bg-emerald-600 text-white font-bold' : 'bg-slate-50 text-slate-600'}`}>3. Modify PyTorch Tensor</button>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Memory View</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
          <div className="flex justify-between items-center mb-6 px-2">
            <span className="text-emerald-400 font-bold">numpy_array</span>
            <span className="text-slate-500 font-bold tracking-widest text-[10px]">{'<-- SHARED CPU RAM -->'}</span>
            <span className="text-blue-400 font-bold">pytorch_tensor</span>
          </div>
          
          <div className="flex justify-center gap-12 text-sm">
            <div>
              [<span className={step >= 1 ? "text-amber-400 font-bold" : ""}>{step >= 1 ? "99" : " 1"}</span>,  2]<br/>
              [ 3, <span className={step === 2 ? "text-amber-400 font-bold" : ""}>{step === 2 ? "-1" : " 4"}</span>]
            </div>
            <div>
              [<span className={step >= 1 ? "text-amber-400 font-bold" : ""}>{step >= 1 ? "99" : " 1"}</span>,  2]<br/>
              [ 3, <span className={step === 2 ? "text-amber-400 font-bold" : ""}>{step === 2 ? "-1" : " 4"}</span>]
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Terminal size={14} /> <span className="font-semibold uppercase tracking-wider">Python Code & Output</span>
        </div>
        <div className="bg-black/40 p-3 rounded-xl text-emerald-400 overflow-x-auto">
<pre>
{step === 0 && `numpy_array = np.array([[1, 2], [3, 4]], dtype=np.float32)
pytorch_tensor = torch.from_numpy(numpy_array)
> PyTorch Tensor type: torch.float32`}
{step === 1 && `# Modifying numpy_array changes pytorch_tensor too
numpy_array[0, 0] = 99
> PyTorch Tensor after modifying NumPy array:
tensor([[99.,  2.], [ 3.,  4.]])`}
{step === 2 && `# Modifying pytorch_tensor changes numpy_array too
pytorch_tensor[1, 1] = -1
> NumPy array after modifying PyTorch Tensor:
[[99.  2.] [ 3. -1.]]`}
</pre>
        </div>
      </div>
    </div>
  );
}

// --- Slide 3: Tensor to NumPy ---
function TensorToNumpySlide() {
  return (
    <div className="grid md:grid-cols-2 gap-8 animate-in fade-in duration-500">
      <div>
        <h3 className="text-xl font-bold mb-4">Tensor to NumPy & The GPU Catch</h3>
        <p className="text-slate-600 mb-4 leading-relaxed text-sm">
          Conversely, convert a CPU Tensor back to NumPy using <code>.numpy()</code>. Again, modifications to one will impact the other.
        </p>
        
        <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 flex gap-3 mb-6">
          <Activity className="text-rose-500 flex-shrink-0" size={20} />
          <div>
            <h4 className="font-bold text-rose-800 text-sm mb-1">GPU Tensors Cannot Convert Directly</h4>
            <p className="text-xs text-rose-700 leading-relaxed">
              Attempting to call <code>.numpy()</code> directly on a GPU Tensor results in an error. You must move it to the CPU first using <code>.cpu()</code>.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-900 rounded-2xl p-4 shadow-inner flex flex-col font-mono text-xs">
        <div className="flex items-center gap-2 text-slate-400 mb-2 px-2">
          <Code size={14} /> <span className="font-semibold uppercase tracking-wider">Python</span>
        </div>
        <div className="bg-slate-800/50 p-4 rounded-xl text-slate-300 mb-4 flex-1 overflow-x-auto">
<pre>
{`# 1. CPU TENSOR (Bidirectional sharing)
cpu_tensor = torch.tensor([[10., 20.], [30., 40.]])
numpy_arr = cpu_tensor.numpy()
cpu_tensor[0, 1] = 25.0     # Changes numpy_arr too
numpy_arr[1, 0] = 35.0      # Changes cpu_tensor too

# 2. GPU TENSOR
if torch.cuda.is_available():
    gpu_tensor = torch.tensor([1., 2.], device='cuda')
    
    # ❌ ERROR: Can't convert cuda tensor to numpy
    # wrong_arr = gpu_tensor.numpy()

    # ✅ CORRECT: Move to CPU first
    cpu_tensor_from_gpu = gpu_tensor.cpu()
    numpy_from_gpu = cpu_tensor_from_gpu.numpy()
    
    # Note: numpy_from_gpu shares memory with cpu_tensor_from_gpu,
    # but NOT with the original gpu_tensor!`}
</pre>
        </div>
      </div>
    </div>
  );
}

// --- Slide 4: Leveraging Both Worlds ---
function LeveragingWorldsSlide() {
  return (
    <div className="animate-in fade-in duration-500">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h3 className="text-2xl font-bold mb-4">Leveraging Both Worlds</h3>
        <p className="text-slate-600 leading-relaxed text-sm">
          The ability to easily convert between NumPy arrays and PyTorch Tensors allows you to write highly efficient code that bridges general scientific Python with specialized deep learning capabilities.
        </p>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-6 relative">
        {/* Step 1 */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex-1 w-full text-center relative z-10 shadow-sm">
          <div className="bg-slate-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-slate-600 mb-4">
            <Database size={28} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">1. Data Loading</h4>
          <p className="text-xs text-slate-500">
            Perform initial data loading and preprocessing using familiar NumPy functions or libraries (like Pandas).
          </p>
          <div className="mt-4 inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-1 rounded">np.array()</div>
        </div>

        <ChevronRight size={32} className="text-slate-300 hidden md:block" />
        <div className="h-8 w-1 bg-slate-300 md:hidden"></div>

        {/* Step 2 */}
        <div className="bg-emerald-50 border-2 border-emerald-500 rounded-2xl p-6 flex-1 w-full text-center relative z-10 shadow-md transform md:scale-105">
          <div className="bg-emerald-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-emerald-600 mb-4">
            <Network size={28} />
          </div>
          <h4 className="font-bold text-emerald-900 mb-2">2. Deep Learning</h4>
          <p className="text-xs text-emerald-700">
            Convert to PyTorch Tensors to take advantage of GPU acceleration and automatic differentiation (training).
          </p>
          <div className="mt-4 inline-block bg-emerald-200 text-emerald-800 font-mono text-[10px] px-2 py-1 rounded">torch.from_numpy()</div>
        </div>

        <ChevronRight size={32} className="text-slate-300 hidden md:block" />
        <div className="h-8 w-1 bg-slate-300 md:hidden"></div>

        {/* Step 3 */}
        <div className="bg-white border-2 border-slate-200 rounded-2xl p-6 flex-1 w-full text-center relative z-10 shadow-sm">
          <div className="bg-slate-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center text-slate-600 mb-4">
            <LineChart size={28} />
          </div>
          <h4 className="font-bold text-slate-800 mb-2">3. Analysis & Viz</h4>
          <p className="text-xs text-slate-500">
            Convert model output Tensors back to NumPy arrays for analysis or visualization (e.g., Matplotlib, Seaborn).
          </p>
          <div className="mt-4 inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-1 rounded">tensor.numpy()</div>
        </div>
      </div>
    </div>
  );
}