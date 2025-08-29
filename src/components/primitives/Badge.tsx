import React from 'react';

type Props = { children: React.ReactNode; className?: string };

const Badge: React.FC<Props> = ({ children, className = '' }) => (
  <span className={`badge ${className}`}>{children}</span>
);

export default Badge;

