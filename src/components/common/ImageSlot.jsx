import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import clsx from 'clsx';

export default function ImageSlot({
  src,
  alt = '',
  label,
  className,
  imgClassName,
  loading = 'lazy',
  sizes,
}) {
  const [failed, setFailed] = useState(false);

  const showPlaceholder = !src || failed;

  if (showPlaceholder) {
    return (
      <div
        className={clsx(
          'flex flex-col items-center justify-center gap-2 text-center p-4',
          'border border-dashed border-border bg-bg-secondary text-text-tertiary',
          className
        )}
      >
        <ImageOff size={20} />

        <span className="font-sans text-[10px] uppercase tracking-wide leading-relaxed">
          {label || 'Image placeholder'}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      sizes={sizes}
      className={clsx(
        'block w-full h-full object-cover',
        imgClassName
      )}
      onError={() => setFailed(true)}
    />
  );
}