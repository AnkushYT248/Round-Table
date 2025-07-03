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
    <footer className="w-full px-4 py-8 bg-[#202020] dark:bg-[#181b20] text-gray-200 dark:text-gray-300 border-t border-gray-800 mt-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-8">
        {/* About Section */}
        <div className="flex-1 min-w-[220px] mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2 text-green-400 audiowide">Round Table</h2>
          <p className="text-sm text-gray-300 dark:text-gray-400 mb-4">
            Round Table is your go-to platform for mastering programming, preparing for interviews, and building real-world projects. Learn, practice, and grow with a supportive community.
          </p>
          <p className="text-xs text-gray-400 mt-4">Developed by <span className="font-semibold text-blue-400">Ankush</span></p>
        </div>
        {/* Links Sections */}
        <div className="flex flex-1 flex-wrap gap-8 justify-between">
          {footerLinks.map((section, idx) => (
            <div key={idx} className="min-w-[140px]">
              <h3 className="text-lg font-semibold mb-2 text-green-300 dark:text-blue-300">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="hover:underline hover:text-green-400 dark:hover:text-blue-400 transition-colors text-sm"
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
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-xs text-gray-400 dark:text-gray-500">
        &copy; {new Date().getFullYear()} Round Table. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;