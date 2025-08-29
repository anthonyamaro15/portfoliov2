import React from 'react';

type Props = {
  as?: 'div' | 'button';
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
};

const Card: React.FC<Props> = ({ as = 'div', onClick, className = '', children }) => {
  const Comp: any = as;
  return (
    <Comp
      onClick={onClick}
      className={`group rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-card)]/90 backdrop-blur-[2px] shadow-card overflow-hidden ${className}`}
    >
      {children}
    </Comp>
  );
};

export default Card;
