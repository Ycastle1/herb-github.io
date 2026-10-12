---
title: "Markdown으로 첫 번째 글 작성하기"
description: "제목부터 코드 블록까지. 글 한 편을 추가하는 가장 간단한 방법을 정리합니다."
date: 2026-10-11
tags: ["Markdown", "블로그"]
draft: false
---
> 기본 서식과 글 작성 흐름을 보여주는 예시 글입니다.

## 새 글 만들기

저장소 터미널에서 다음 명령을 실행합니다.

```bash
npm run new:post -- my-first-post "나의 첫 번째 글"
```

`src/content/posts/my-first-post.md` 파일이 생성됩니다. 파일 맨 위의 설정을 수정하고, 아래에 본문을 작성하세요.

```yaml
title: "나의 첫 번째 글"
description: "목록에 표시할 짧은 소개"
date: 2026-10-12
tags: ["개발", "기록"]
draft: false
```

`draft: true`인 글은 목록, 상세 페이지, RSS에서 제외됩니다. 로컬에서도 공개 글만 표시하므로 완성된 모습을 확인하려면 잠시 `false`로 바꾸세요.

## 제목과 본문

본문의 큰 제목은 `##`, 작은 제목은 `###`로 작성합니다. 큰 제목은 오른쪽 목차에 자동으로 나타납니다. 글 제목은 설정에 이미 있으므로 본문에 다시 적지 않아도 됩니다.

**굵은 글씨**, *기울임*, `인라인 코드`를 사용할 수 있습니다.

### 코드 블록

백틱 세 개 뒤에 언어 이름을 적으면 코드에 색상이 적용됩니다.

```typescript
function greet(name: string): string {
  return `Hello, ${name}!`;
}

console.log(greet('Herb'));
```

## 이미지와 링크

글 옆에 `images` 폴더를 만들고 이미지를 넣으면 상대 경로로 연결할 수 있습니다.

```markdown
![이미지 설명](./images/my-image.png)
```

다른 글을 연결할 때는 상대 경로를 사용하면 GitHub Pages의 저장소 경로에도 대응하기 쉽습니다. 예를 들어 같은 글 폴더의 경로는 `../hello-world/`입니다.

## 게시하기

`npm run check`와 `npm run build`로 확인한 다음 `main` 브랜치에 푸시하면 배포 워크플로가 실행됩니다. 최초 한 번은 저장소의 **Settings → Pages → Source**를 **GitHub Actions**로 설정해야 합니다.
