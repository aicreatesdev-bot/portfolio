export function setMeta({
  title,
  description,
  url,
}: {
  title: string;
  description: string;
  url?: string;
}) {
  document.title = title;

  const upsert = (selector: string, attrs: Record<string, string>) => {
    let el = document.head.querySelector(selector) as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement('meta');
      const key = selector.includes('property=') ? 'property' : 'name';
      const match = selector.match(/(?:name|property)="([^"]+)"/);
      if (match) el.setAttribute(key, match[1]);
      document.head.appendChild(el);
    }
    Object.entries(attrs).forEach(([k, v]) => el!.setAttribute(k, v));
  };

  upsert('meta[name="description"]', { content: description });
  upsert('meta[property="og:title"]', { content: title });
  upsert('meta[property="og:description"]', { content: description });
  upsert('meta[property="og:type"]', { content: 'website' });

  if (url) upsert('meta[property="og:url"]', { content: url });

  upsert('meta[name="twitter:card"]', { content: 'summary_large_image' });
  upsert('meta[name="twitter:title"]', { content: title });
  upsert('meta[name="twitter:description"]', { content: description });
}
