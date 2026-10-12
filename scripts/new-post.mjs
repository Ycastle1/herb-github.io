import { mkdir, writeFile } from 'node:fs/promises';
const slug = process.argv[2];
const title = process.argv[3] || slug;
if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
  console.error('사용법: npm run new:post -- my-post "글 제목" (영문 소문자, 숫자, 하이픈)');
  process.exit(1);
}
const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());
await mkdir('src/content/posts', { recursive: true });
const filename = `src/content/posts/${slug}.md`;
try {
  await writeFile(filename, `---\ntitle: ${JSON.stringify(title)}\ndescription: "글의 내용을 한두 문장으로 소개해주세요."\ndate: ${date}\ntags: ["개발"]\ndraft: true\n---\n\n## 시작하며\n\n여기에 첫 문장을 적어보세요.\n`, { flag: 'wx' });
  console.log(`${filename} 생성 완료. 공개하려면 draft를 false로 바꾸세요.`);
} catch (error) {
  if (error.code === 'EEXIST') { console.error('같은 이름의 글이 이미 있습니다. 다른 이름을 사용해주세요.'); process.exitCode = 1; }
  else throw error;
}
