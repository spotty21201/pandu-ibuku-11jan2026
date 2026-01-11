
import React from 'react';
import { HashRouter as Router, Routes, Route, useParams, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Article from './components/Article';
import { INITIAL_ENTRIES, DOMAINS } from './constants';
import { DomainSlug } from './types';

// Page Components
const HomePage = () => {
  const beranda = INITIAL_ENTRIES.find(e => e.domain === DomainSlug.BERANDA);
  if (!beranda) return null;
  return <Article entry={beranda} showTitle={false} />;
};

const DomainIndexPage = () => {
  const { domainSlug } = useParams<{ domainSlug: string }>();
  const domain = Object.values(DOMAINS).find(d => d.slug === domainSlug);
  
  if (!domain) return <Navigate to="/" />;

  const entries = INITIAL_ENTRIES.filter(e => e.domain === domain.slug && !e.isPermanent);

  return (
    <div>
      <section className="mb-12 border-b border-[#D6D6D2] pb-8">
        <h1 className="text-4xl font-serif mb-6">{domain.title}</h1>
        <div className="text-[16px] md:text-[18px] leading-[1.65] font-serif text-[#5F5F5F] italic">
          {domain.intro}
        </div>
      </section>

      <div className="space-y-16">
        {entries.length > 0 ? (
          entries.map(entry => (
            <Article key={entry.id} entry={entry} />
          ))
        ) : (
          <p className="font-sans-custom text-[#5F5F5F] italic">Belum ada tulisan di bagian ini.</p>
        )}
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/domain/:domainSlug" element={<DomainIndexPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
