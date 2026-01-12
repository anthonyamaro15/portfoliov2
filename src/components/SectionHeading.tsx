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
    <div className={`flex flex-col gap-3 ${alignClass} ${className ?? ''}`}>
      {eyebrow && (
        <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
          {eyebrow}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-muted-foreground text-base leading-relaxed">
          {subtitle}
        </p>
      )}
      {children}
    </div>
  );
};

export default SectionHeading;
