
import React from 'react';
import { Entry } from '../types';

interface ArticleProps {
  entry: Entry;
  showTitle?: boolean;
}

/**
 * Simple parser to convert basic Markdown syntax into JSX
 */
const formatText = (text: string) => {
  // Split by bold (**), then map through to handle italic (*)
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    return part;
  });
};

const Article: React.FC<ArticleProps> = ({ entry, showTitle = true }) => {
  return (
    <article className="mb-16 last:mb-0 animate-in fade-in duration-700">
      {showTitle && (
        <header className="mb-8">
          <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-2 leading-tight">
            {entry.title}
          </h1>
          <div className="font-sans-custom text-[14px] text-[#5F5F5F] uppercase tracking-widest">
            {new Date(entry.date).toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}
          </div>
        </header>
      )}
      <div className="text-[17px] md:text-[19px] leading-[1.7] font-serif space-y-6 text-[#2C2C2C]">
        {entry.content.split('\n\n').map((para, i) => (
          <p key={i} className="whitespace-pre-wrap">
            {formatText(para.trim())}
          </p>
        ))}
      </div>
    </article>
  );
};

export default Article;
