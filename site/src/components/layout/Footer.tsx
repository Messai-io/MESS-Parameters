export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-mes-text-muted">
          <p>
            MIT License &middot;{' '}
            <a
              href="https://github.com/messai-io/MESS-Parameters"
              className="text-mes-text-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </p>
          <p>
            Part of the{' '}
            <a
              href="https://messai.io"
              className="text-mes-text-link hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              MESSAI
            </a>{' '}
            platform
          </p>
        </div>
      </div>
    </footer>
  );
}
