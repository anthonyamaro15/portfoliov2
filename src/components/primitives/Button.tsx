import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost';
  as?: 'button' | 'a';
  href?: string;
};

const classes = {
  base: 'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition shadow-sm',
  primary: 'bg-white text-slate-900 hover:opacity-90',
  ghost: 'border borderD border-slate-700 text-slate-200 hover:bg-slate-800',
};

export const Button: React.FC<ButtonProps> = ({ variant = 'primary', as = 'button', href, className = '', children, ...rest }) => {
  const cls = `${classes.base} ${variant === 'primary' ? classes.primary : classes.ghost} ${className}`;
  if (as === 'a' && href) {
    return (
      <a href={href} className={cls} {...(rest as any)}>
        {children}
      </a>
    );
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
};

export default Button;

