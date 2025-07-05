
import Tutorials from "@/lib/db/mongodb/models/tutorials/Tutorials";
import { ConnectToMongoClientDb } from "@/lib/db/connection/mognodb";
import Link from "next/link";

export default async function TutorialPage({ params }) {
  const { lang, chapter } = params;
  await ConnectToMongoClientDb();
  const tutorial = await Tutorials.findOne({ tutorialLink: `/tutorials/${lang}` }).lean();
  const chapterData = tutorial?.chapters?.[chapter] || (tutorial?.chapters instanceof Map ? tutorial.chapters.get(chapter) : undefined);
  const sidebar = tutorial?.sidebar || [];
  if (!tutorial || !chapterData) {
    return <div>Not found</div>;
  }

  return (
    <div className="flex w-full max-w-7xl mx-auto px-4 py-8 gap-8">
      {/* Sidebar */}
      <aside className="w-64 min-w-[200px] bg-white dark:bg-[#181b20] rounded-2xl shadow-md p-4 h-fit sticky top-24 self-start border border-gray-200 dark:border-gray-800">
        <h2 className="text-xl font-bold mb-4 text-blue-600 dark:text-blue-400">{tutorial.name} Tutorial</h2>
        <nav>
          {sidebar.map((section) => (
            <div key={section.section} className="mb-4">
              <h3 className="text-base font-semibold text-gray-700 dark:text-gray-200 mb-2">{section.section}</h3>
              <ul className="space-y-1">
                {section.items.map((item) => (
                  <li key={item.key}>
                    <Link
                      href={`/tutorials/${lang}/${item.key}`}
                      className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${item.key === chapter ? "bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300" : "hover:bg-blue-50 dark:hover:bg-blue-900/20 text-gray-800 dark:text-gray-100"}`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>
      </aside>
      {/* Main Content */}
      <main className="flex-1 bg-white dark:bg-[#23272f] rounded-2xl shadow-md p-6 border border-gray-200 dark:border-gray-800">
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2">{chapterData.title}</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">{chapterData.chapter_description}</p>
        {/* Render main content (HTML/Markdown) */}
        {chapterData.content && (
          <div className="prose dark:prose-invert max-w-none mb-6" dangerouslySetInnerHTML={{ __html: chapterData.content }} />
        )}
        {/* Render blocks */}
        {chapterData.blocks?.map((block, idx) => (
          <section key={idx} className="mb-8">
            {block.heading && <h2 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">{block.heading}</h2>}
            {block.text && <p className="mb-2 text-gray-800 dark:text-gray-200">{block.text}</p>}
            {/* Code examples */}
            {block.codeExamples?.map((ex, i) => (
              <div key={i} className="mb-4 bg-gray-100 dark:bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm text-gray-800 dark:text-gray-100"><code>{ex.code}</code></pre>
                {ex.explanation && <div className="text-xs text-gray-600 dark:text-gray-400 mt-1">{ex.explanation}</div>}
              </div>
            ))}
            {/* Image if present */}
            {block.image && <img src={block.image} alt="" className="my-4 rounded-lg shadow" />}
          </section>
        ))}
        {/* Images */}
        {chapterData.images?.length > 0 && (
          <div className="flex flex-wrap gap-4 my-6">
            {chapterData.images.map((img, i) => (
              <img key={i} src={img} alt="" className="w-64 rounded-lg shadow" />
            ))}
          </div>
        )}
        {/* Tips */}
        {chapterData.tips?.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 rounded-lg my-6">
            <h3 className="font-bold text-blue-700 dark:text-blue-300 mb-2">Tips</h3>
            <ul className="list-disc ml-6">
              {chapterData.tips.map((tip, i) => <li key={i}>{tip}</li>)}
            </ul>
          </div>
        )}
        {/* FAQs */}
        {chapterData.faqs?.length > 0 && (
          <div className="bg-gray-50 dark:bg-gray-900/30 border rounded-lg p-4 my-6">
            <h3 className="font-bold text-purple-700 dark:text-purple-300 mb-2">FAQs</h3>
            <ul className="space-y-2">
              {chapterData.faqs.map((faq, i) => (
                <li key={i}>
                  <span className="font-semibold">Q:</span> {faq.question}<br />
                  <span className="font-semibold">A:</span> {faq.answer}
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}