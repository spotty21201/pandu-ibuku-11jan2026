
import React from 'react';
import { Entry } from '../types';

interface ArticleProps {
  entry: Entry;
  showTitle?: boolean;
}

const Article: React.FC<ArticleProps> = ({ entry, showTitle = true }) => {
  return (
    <article className="mb-16 last:mb-0">
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
      <div className="text-[16px] md:text-[18px] leading-[1.65] font-serif space-y-6 whitespace-pre-wrap">
        {entry.content.split('\n\n').map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </div>
    </article>
  );
};

export default Article;
