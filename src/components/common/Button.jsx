import clsx from 'clsx';

const VARIANTS = {
  primary:
    'bg-button-primary text-bg-primary hover:opacity-90',
  secondary:
    'bg-transparent border border-border text-text-primary hover:border-accent',
  text:
    'bg-transparent text-text-primary underline-offset-4 hover:underline px-0',
};

export default function Button({
  as: Component = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  return (
    <Component
      className={clsx(
        'inline-flex items-center justify-center gap-2',
        'font-sans text-[14px] font-semibold uppercase tracking-wide',
        'px-6 py-3 rounded-pill transition-all duration-300',
        VARIANTS[variant],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
