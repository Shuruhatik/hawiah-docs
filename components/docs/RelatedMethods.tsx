import { ArrowRight } from 'lucide-react';

interface RelatedMethod {
  id: string;
  label: string;
}

interface RelatedMethodsProps {
  methods: RelatedMethod[];
  onNavigate: (id: string) => void;
}

export default function RelatedMethods({ methods, onNavigate }: RelatedMethodsProps) {
  if (methods.length === 0) return null;

  return (
    <div className="mt-12 p-6 bg-[#111111] border border-white/10 rounded-lg">
      <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
        Related Methods
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {methods.map((method) => (
          <button
            key={method.id}
            onClick={() => onNavigate(method.id)}
            className="flex items-center justify-between p-3 bg-[#0c0c0c] hover:bg-white/5 border border-white/5 hover:border-teal-500/30 rounded-lg transition-all group text-left"
          >
            <span className="text-sm text-gray-300 group-hover:text-white font-mono">
              {method.label}
            </span>
            <ArrowRight className="w-4 h-4 text-gray-500 group-hover:text-teal-400 transition-colors" />
          </button>
        ))}
      </div>
    </div>
  );
}
