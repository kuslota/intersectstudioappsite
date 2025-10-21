const baseUrl = new URL('../', import.meta.url);
const basePath = baseUrl.pathname.endsWith('/') ? baseUrl.pathname : `${baseUrl.pathname}/`;

const assetPath = (relativePath) => new URL(relativePath, baseUrl).pathname;

const navLinks = [
  {
    key: 'home',
    label: 'Home',
    href: (active) => (active === 'home' ? '#home' : basePath),
  },
  {
    key: 'support',
    label: 'Support',
    href: () => `${basePath}support/`,
  },
  {
    key: 'privacy',
    label: 'Privacy',
    href: () => `${basePath}privacy/`,
  },
  {
    key: 'terms',
    label: 'Terms',
    href: () => `${basePath}terms/`,
  },
  {
    key: 'contact',
    label: 'Contact',
    href: () => `${basePath}contact/`,
  },
];

const footerLinks = navLinks.filter(({ key }) => key !== 'home');

export function renderHeader(active = 'home') {
  const header = document.querySelector('[data-site-header]');
  if (!header) return;

  const brandHref = active === 'home' ? '#home' : basePath;

  const navItemsHtml = navLinks
    .map(({ key, label, href }) => {
      const linkHref = href(active);
      const ariaCurrent =
        key !== 'home' && key === active ? ' aria-current="page"' : '';
      return `<li><a href="${linkHref}"${ariaCurrent}>${label}</a></li>`;
    })
    .join('');

  header.innerHTML = `
    <div class="container nav">
      <a class="brand" href="${brandHref}">
        <picture class="logo">
          <source srcset="${assetPath('images/icon_dark_32.png')}" media="(prefers-color-scheme: dark)">
          <img src="${assetPath('images/icon_light_32.png')}" alt="Intersect Studio logo" width="28" height="28" style="border-radius:6px">
        </picture>
        <span>Intersect Studio</span>
      </a>
      <nav aria-label="Primary">
        <ul>
          ${navItemsHtml}
        </ul>
      </nav>
    </div>
  `;
}

export function renderFooter(active = 'home') {
  const footer = document.querySelector('[data-site-footer]');
  if (!footer) return;

  const footerLinksHtml = footerLinks
    .map(({ key, label, href }) => {
      const linkHref = href(active);
      const ariaCurrent = key === active ? ' aria-current="page"' : '';
      return `<a href="${linkHref}"${ariaCurrent}>${label}</a>`;
    })
    .join('<span>•</span>');

  footer.innerHTML = `
    <div class="container">
      <div>© <span data-current-year></span> Intersect Studio</div>
      <div class="link-row">
        ${footerLinksHtml}
      </div>
    </div>
  `;

  const yearTarget = footer.querySelector('[data-current-year]');
  if (yearTarget) {
    yearTarget.textContent = new Date().getFullYear();
  }
}

export function attachCopyButton(buttonId, sourceId) {
  const button = document.getElementById(buttonId);
  const source = document.getElementById(sourceId);
  if (!button || !source) return;

  const clipboardText = source.textContent?.trim();
  if (!clipboardText) return;

  const defaultLabel = button.textContent || 'Copy';
  button.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(clipboardText);
      button.textContent = 'Copied!';
    } catch {
      button.textContent = 'Failed to copy';
    }
    setTimeout(() => {
      button.textContent = defaultLabel;
    }, 2000);
  });
}
