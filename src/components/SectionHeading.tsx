import React from 'react';

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
  children?: React.ReactNode;
};

export const SectionHeading: React.FC<Props> = ({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  children,
}) => {
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex flex-col gap-2 ${alignClass} ${className ?? ''}`}>
      {eyebrow && (
        <span className="text-[11px] uppercase tracking-widest text-slate-400">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-slate-300 text-sm md:text-base">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
