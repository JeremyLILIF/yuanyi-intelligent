'use client';

import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

export function ModalShell({ className, label, onClose, onPrevious, onNext, children }: {
  className: string; label: string; onClose: () => void;
  onPrevious?: () => void; onNext?: () => void; children: ReactNode;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const opener = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, []);

  return createPortal(
    <dialog ref={dialog} className={className} aria-label={label}
      onCancel={(event) => { event.preventDefault(); onClose(); }}
      onClick={(event) => { if (event.target === event.currentTarget) onClose(); }}
      onKeyDown={(event) => {
        if (event.key === 'ArrowLeft' && onPrevious) { event.preventDefault(); onPrevious(); }
        if (event.key === 'ArrowRight' && onNext) { event.preventDefault(); onNext(); }
      }}>
      {children}
    </dialog>, document.body,
  );
}

export function ImageLightbox({ images, index, basePath, label, onChange, onClose }: {
  images: { src: string; alt: string; label: string; detail?: string }[];
  index: number; basePath: string; label: string;
  onChange: (index: number) => void; onClose: () => void;
}) {
  const image = images[index];
  const previous = () => onChange((index + images.length - 1) % images.length);
  const next = () => onChange((index + 1) % images.length);
  return <ModalShell className="image-lightbox" label={label} onClose={onClose} onPrevious={previous} onNext={next}>
    <button className="lightbox-close" type="button" onClick={onClose} aria-label="关闭大图" autoFocus>×</button>
    <button className="lightbox-arrow lightbox-prev" type="button" onClick={previous} aria-label="上一张">‹</button>
    <figure>
      <img key={image.src} src={`${basePath}/assets/${image.src}`} alt={image.alt} />
      <figcaption aria-live="polite"><span>{String(index + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}</span><strong>{image.label}</strong>{image.detail && <small>{image.detail}</small>}</figcaption>
    </figure>
    <button className="lightbox-arrow lightbox-next" type="button" onClick={next} aria-label="下一张">›</button>
  </ModalShell>;
}

export function TabRail({ id, className, label, items, active, onChange }: {
  id: string; className: string; label: string; items: ReactNode[];
  active: number; onChange: (index: number) => void;
}) {
  return <div className={className} role="tablist" aria-label={label}>
    {items.map((item, index) => <button key={index} id={`${id}-tab-${index}`} type="button"
      className={active === index ? 'active' : ''} role="tab" aria-selected={active === index}
      aria-controls={`${id}-panel`} tabIndex={active === index ? 0 : -1}
      onClick={() => onChange(index)} onKeyDown={(event) => {
        const next = event.key === 'ArrowRight' ? (index + 1) % items.length
          : event.key === 'ArrowLeft' ? (index + items.length - 1) % items.length
            : event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : null;
        if (next === null) return;
        event.preventDefault();
        onChange(next);
        const target = event.currentTarget.parentElement?.children[next] as HTMLElement;
        target?.focus({ preventScroll: true });
        target?.scrollIntoView({ block: 'nearest', inline: 'nearest', behavior: 'instant' });
      }}>{item}</button>)}
  </div>;
}

export function CarouselControls({ targetId, count, label }: { targetId: string; count: number; label: string }) {
  const [active, setActive] = useState(0);
  const hintId = useId();
  useEffect(() => {
    const target = document.getElementById(targetId);
    if (!target) return;
    const update = () => {
      const left = target.getBoundingClientRect().left;
      const children = Array.from(target.children);
      const nearest = children.reduce((best, el, index) => Math.abs(el.getBoundingClientRect().left - left) < Math.abs(children[best].getBoundingClientRect().left - left) ? index : best, 0);
      const atEnd = target.scrollLeft > 1 && target.scrollLeft + target.clientWidth >= target.scrollWidth - 3;
      setActive(atEnd ? count - 1 : nearest);
    };
    target.setAttribute('aria-describedby', hintId);
    target.addEventListener('scroll', update, { passive: true });
    const observer = new ResizeObserver(update);
    observer.observe(target);
    return () => { target.removeEventListener('scroll', update); target.removeAttribute('aria-describedby'); observer.disconnect(); };
  }, [targetId, count, hintId]);

  const go = (index: number) => {
    const target = document.getElementById(targetId);
    const card = target?.children[index] as HTMLElement | undefined;
    if (!target || !card) return;
    const left = card.getBoundingClientRect().left - target.getBoundingClientRect().left + target.scrollLeft;
    target.scrollTo({ left, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  };
  return <div className="carousel-controls" aria-label={`${label}翻页`}>
    <span id={hintId}>左右滑动查看</span><span className="carousel-count" aria-live="polite">{String(active + 1).padStart(2, '0')} / {String(count).padStart(2, '0')}</span>
    <button type="button" aria-label={`上一项${label}`} aria-controls={targetId} disabled={active === 0} onClick={() => go(active - 1)}>←</button>
    <button type="button" aria-label={`下一项${label}`} aria-controls={targetId} disabled={active === count - 1} onClick={() => go(active + 1)}>→</button>
  </div>;
}

export async function copyText(value: string) {
  try { await navigator.clipboard.writeText(value); return true; } catch { /* Older embedded browsers may require a selected text field. */ }
  const opener = document.activeElement as HTMLElement | null;
  const field = document.createElement('textarea');
  field.value = value;
  field.style.cssText = 'position:fixed;top:0;left:0;width:1px;height:1px;opacity:0;font-size:16px';
  // Keep the fallback inside the active dialog, which makes the rest of the page inert.
  (document.querySelector('dialog[open]') ?? document.body).appendChild(field);
  field.focus({ preventScroll: true });
  field.select();
  let copied = false;
  try { copied = document.execCommand('copy'); } catch { copied = false; }
  field.remove();
  opener?.focus({ preventScroll: true });
  return copied;
}
