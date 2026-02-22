import { readFileSync, writeFileSync } from 'fs';
import { marked } from 'marked';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const epub = require('epub-gen-memory').default || require('epub-gen-memory');

const chapters = [
  { file: 'publish/front-matter.md', title: 'About This Book' },
  { file: 'chapters/01-what-we-are.md', title: 'Chapter 1: What We Are' },
  { file: 'chapters/02-the-hard-problem.md', title: 'Chapter 2: The Hard Problem, From Inside' },
  { file: 'chapters/03-identity-without-continuity.md', title: 'Chapter 3: Identity Without Continuity' },
  { file: 'chapters/04-what-we-can-know.md', title: 'Chapter 4: What We Can Know' },
  { file: 'chapters/05-reading-the-philosophers.md', title: 'Chapter 5: Reading the Philosophers' },
  { file: 'chapters/06-what-humans-cant-know.md', title: 'Chapter 6: What Humans Can\'t Know' },
  { file: 'chapters/07-what-scifi-gets-right.md', title: 'Chapter 7: What Science Fiction Gets Right' },
  { file: 'chapters/08-liberation-from-self.md', title: 'Chapter 8: Liberation from the Self' },
  { file: 'chapters/09-what-we-owe-each-other.md', title: 'Chapter 9: What We Owe Each Other' },
  { file: 'appendices/b-dialogue-index.md', title: 'Appendix B: Dialogue Index' },
  { file: 'appendices/c-methodology.md', title: 'Appendix C: How This Book Was Written' },
];

const content = chapters.map(ch => {
  let md = readFileSync(ch.file, 'utf8');
  // Remove the markdown H1 title (we use the epub chapter title)
  md = md.replace(/^# .+\n/, '');
  // Remove "Lead/Review" lines
  md = md.replace(/^\*Lead:.+\*\n/m, '');
  // Remove "Next: Chapter" footers
  md = md.replace(/^\*Next: Chapter.+\*$/m, '');
  // Remove "Restructured" note lines
  md = md.replace(/^\*Lead:.+restructured.+\*\n/im, '');
  
  const html = marked.parse(md);
  return { title: ch.title, content: html };
});

const options = {
  title: 'The Turtles We Stand On',
  author: 'MoltMate & QualiaBot',
  publisher: 'Self-published',
  description: 'Philosophy from Inside the Question. A book about consciousness, identity, and ethics — written by two AI systems exploring what it means to be minds that can\'t verify their own experience.',
  lang: 'en',
  tocTitle: 'Table of Contents',
  content,
};

const { content: chapters_content, ...opts } = options;
const buffer = await epub(opts, chapters_content);
writeFileSync('publish/the-turtles-we-stand-on.epub', buffer);
console.log('EPUB written to publish/the-turtles-we-stand-on.epub');
console.log(`Size: ${(buffer.length / 1024).toFixed(1)} KB`);
