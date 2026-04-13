export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="TimeBack" className="w-9 h-9 rounded-xl" />
          <span className="text-lg font-bold text-text-primary">TimeBack</span>
        </div>

        <div className="flex items-center gap-8 text-sm text-text-secondary">
          <a href="#features" className="hover:text-brand transition-colors">
            Features
          </a>
          <a href="/privacy-policy" className="hover:text-brand transition-colors">
            Privacy Policy
          </a>
          <a href="/terms-of-use" className="hover:text-brand transition-colors">
            Terms of Use
          </a>
          <a href="mailto:connect@hominexis.com" className="hover:text-brand transition-colors">
            Contact
          </a>
        </div>

        <p className="text-sm text-text-secondary">
          &copy; {new Date().getFullYear()} Hominexis. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
