# herb.log

Astro와 Markdown으로 운영하는 한국어 개발 블로그입니다. Node.js 22.12 이상이 필요하며, 로컬과 CI에서는 Node.js 24 LTS를 권장합니다.

## 시작하기

```bash
cd /Users/yunsung/blog-tech
npm install
npm run dev
```

개발 주소: http://localhost:4321/herb-github.io/

```bash
npm run check   # Astro / TypeScript 검사
npm run build   # dist/에 정적 사이트 생성
npm run preview # 빌드 결과 확인
```

## 글 쓰기

```bash
npm run new:post -- my-first-post "나의 첫 번째 글"
```

`src/content/posts/my-first-post.md`에 다음 메타데이터와 Markdown 본문을 작성합니다.

```yaml
---
title: "나의 첫 번째 글"
description: "목록과 검색 엔진에 표시할 요약"
date: 2026-10-12
tags: ["개발", "기록"]
draft: false
---
```

- 새 글은 `draft: true`로 생성됩니다. 공개하려면 `false`로 변경합니다.
- 초안은 개발 모드에서도 목록, 상세 페이지, RSS, 사이트맵에 포함되지 않습니다.
- 공개 글은 날짜 내림차순으로 정렬됩니다. 미래 날짜는 예약 발행 기능이 아니며, `draft: false`이면 바로 공개됩니다.
- 파일 이름이 URL입니다. 링크 안정성을 위해 영문 소문자와 하이픈을 권장합니다.
- `##` 제목으로 목차가 생성됩니다. 코드 블록에는 언어 이름을 붙이세요.
- 글 옆 `images/` 폴더의 이미지는 `![설명](./images/example.png)`처럼 연결할 수 있습니다.
- 포함된 세 공개 글과 `draft-example.md` 초안은 예시입니다. 삭제하거나 실제 글로 교체하세요.

## 내 블로그로 바꾸기

| 파일 | 설정 |
| --- | --- |
| `src/consts.ts` | 블로그 이름, 작성자, 소개, GitHub 링크 |
| `src/pages/index.astro` | 홈 소개 문구와 장식 코드 |
| `src/pages/about.astro` | 소개 페이지 |
| `src/styles/global.css` | 색상, 글꼴, 반응형 레이아웃 |
| `public/favicon.svg` | 브라우저 아이콘 |
| `astro.config.mjs` | 도메인과 저장소 경로 |

태그 필터, 제목·설명·태그 검색, 다크 모드, RSS, 사이트맵, SEO 메타데이터, 목차, 404 페이지를 포함합니다. 검색과 테마 기능 외에는 클라이언트 프레임워크가 필요하지 않습니다.

## GitHub Pages 배포

현재 원격 저장소 `Ycastle1/herb-github.io`에 맞춰 설정되어 있습니다.

- 사이트 주소: **https://ycastle1.github.io/herb-github.io/**
- `site`: `https://ycastle1.github.io`
- `base`: `/herb-github.io`

1. GitHub 저장소의 **Settings → Pages → Build and deployment → Source**를 **GitHub Actions**로 선택합니다.
2. 변경사항을 커밋하고 `main` 브랜치에 푸시합니다.
3. **Actions → Deploy blog to GitHub Pages**의 완료 여부를 확인합니다.

Pull Request에서는 검사와 빌드만 실행하고, `main` 푸시나 수동 실행에서 Pages에 배포합니다. 별도 배포 토큰은 필요하지 않습니다. 저장소 가시성과 계정 요금제가 GitHub Pages 사용을 지원해야 합니다.

`herb-github.io`라는 저장소 이름 자체가 `herb.github.io` 도메인이 되는 것은 아닙니다. 사용자 사이트 주소 `https://ycastle1.github.io/`를 사용하려면 저장소 이름을 `Ycastle1.github.io`로 변경하고 `base`를 `/`로 바꾸세요. 사용자 지정 도메인을 사용하면 `site`를 해당 도메인, `base`를 `/`로 바꾸고 Pages의 Custom domain과 DNS를 설정하세요.

공식 배포 가이드: https://docs.astro.build/en/guides/deploy/github/

## 구조

```text
src/
  components/      글 목록 카드
  content/posts/   Markdown 게시글
  layouts/         공통 레이아웃과 메타데이터
  lib/             경로·날짜·게시글 유틸리티
  pages/           홈, 소개, 상세, RSS, 404
  styles/          공통 스타일
scripts/           초안 생성 도구
public/            정적 파일
.github/workflows/ 검사 및 배포
```
