import React from 'react';

const footerLinks = [
  {
    title: 'Quick Links',
    links: [
      { name: 'Home', href: '/' },
      { name: 'Courses', href: '/courses' },
      { name: 'Tutorials', href: '/tutorials' },
      { name: 'Practice', href: '/practice' },
      { name: 'Explore', href: '/explore' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Blog', href: '/blog' },
      { name: 'FAQ', href: '/faq' },
      { name: 'Contact', href: '/contact' },
      { name: 'Support', href: '/support' },
    ],
  },
  {
    title: 'Socials',
    links: [
      { name: 'GitHub', href: 'https://github.com/' },
      { name: 'LinkedIn', href: 'https://linkedin.com/' },
      { name: 'Twitter', href: 'https://twitter.com/' },
      { name: 'YouTube', href: 'https://youtube.com/' },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="w-full px-4 py-12 bg-gradient-to-b from-[#23272f] via-[#181b20] to-[#111111] dark:from-[#181b20] dark:via-[#181b20] dark:to-[#23272f] text-gray-200 dark:text-gray-300 border-t border-gray-800 mt-12 relative overflow-hidden">
      {/* Decorative background */}
      <span className="absolute left-0 top-0 w-40 h-40 bg-gradient-to-br from-blue-100/20 to-purple-200/10 dark:from-blue-900/10 dark:to-purple-900/10 rounded-br-3xl pointer-events-none blur-2xl opacity-60" />
      <span className="absolute right-0 bottom-0 w-40 h-40 bg-gradient-to-tl from-purple-100/20 to-blue-200/10 dark:from-purple-900/10 dark:to-blue-900/10 rounded-tl-3xl pointer-events-none blur-2xl opacity-60" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12 z-10 relative">
        {/* About Section */}
        <div className="flex-1 min-w-[220px] mb-8 md:mb-0">
          <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent audiowide drop-shadow-lg">Round Table</h2>
          <p className="text-base text-gray-300 dark:text-gray-400 mb-4 max-w-md">
            Round Table is your go-to platform for mastering programming, preparing for interviews, and building real-world projects. Learn, practice, and grow with a supportive community.
          </p>
          <p className="text-xs text-gray-400 mt-4">Developed by <span className="font-semibold text-blue-400">Ankush</span></p>
        </div>
        {/* Links Sections */}
        <div className="flex flex-1 flex-wrap gap-10 justify-between">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="min-w-[140px]">
              <h3 className="text-lg font-bold mb-3 text-blue-300 dark:text-purple-300 tracking-wide uppercase">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:underline hover:text-blue-400 dark:hover:text-purple-400 transition-colors text-base font-medium"
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 border-t border-gray-700 pt-6 text-center text-sm text-gray-400 dark:text-gray-500 z-10 relative">
        &copy; {new Date().getFullYear()} <span className="font-bold bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Round Table</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;