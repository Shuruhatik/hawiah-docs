import CodeBlock from './CodeBlock';

interface DocSectionProps {
  title: string;
  description: string;
  signature?: string;
  examples: { title?: string; code: string }[];
  returnValue?: string;
  parameters?: { name: string; type: string; description: string }[];
}

export default function DocSection({
  title,
  description,
  signature,
  examples,
  returnValue,
  parameters,
}: DocSectionProps) {
  return (
    <section className="mb-16 scroll-mt-20" id={title.toLowerCase().replace(/[()]/g, '').replace(/\./g, '-')}>
      <div className="mb-6">
        <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {title}
        </h2>
        <p className="text-gray-400 text-lg leading-relaxed">{description}</p>
      </div>

      {signature && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Type Signature
          </h3>
          <CodeBlock code={signature} language="typescript" />
        </div>
      )}

      {parameters && parameters.length > 0 && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Parameters
          </h3>
          <div className="bg-[#111111] rounded-lg border border-white/10 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Name</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Type</th>
                  <th className="text-left p-4 text-sm font-semibold text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                {parameters.map((param, idx) => (
                  <tr key={idx} className="border-b border-white/5 last:border-0">
                    <td className="p-4 text-sm font-mono text-[#C5F74F]">{param.name}</td>
                    <td className="p-4 text-sm font-mono text-gray-400">{param.type}</td>
                    <td className="p-4 text-sm text-gray-400">{param.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {returnValue && (
        <div className="mb-6">
          <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
            Return Value
          </h3>
          <p className="text-gray-400 bg-[#111111] rounded-lg p-4 border border-white/10">
            <code className="font-mono text-[#C5F74F]">{returnValue}</code>
          </p>
        </div>
      )}

      <div>
        <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
          {examples.length > 1 ? 'Examples' : 'Example'}
        </h3>
        <div className="space-y-4">
          {examples.map((example, idx) => (
            <div key={idx}>
              {example.title && (
                <h4 className="text-sm font-medium text-gray-300 mb-2">{example.title}</h4>
              )}
              <CodeBlock code={example.code} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
