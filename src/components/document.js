import Script from 'next/script';

export default function Document() {
  // {/* Getting Theme preference from localStorage */}
  return (
    <Script id="theme-switcher" strategy="beforeInteractive">
      {`
          if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark')
} else {
  document.documentElement.classList.remove('dark')
}
`}
    </Script>
  );
}
