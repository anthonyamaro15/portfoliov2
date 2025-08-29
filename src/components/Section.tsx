import React from 'react';

type Props = { id?: string; className?: string; children: React.ReactNode };

const Section: React.FC<Props> = ({ id, className = '', children }) => (
  <section id={id} className={`py-16 md:py-20 ${className}`}>
    <div className="mx-auto max-w-[1100px] px-5 md:px-8">{children}</div>
  </section>
);

export default Section;
