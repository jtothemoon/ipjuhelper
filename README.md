# IpJuHelper

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-16-000000?style=for-the-badge&logo=next.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black"/>
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript&logoColor=white"/>
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white"/>
  <img src="https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white"/>
  <img src="https://img.shields.io/badge/Supabase-3FCF8E?style=for-the-badge&logo=supabase&logoColor=white"/>
  <img src="https://img.shields.io/badge/Turborepo-EF4444?style=for-the-badge&logo=turborepo&logoColor=white"/>
  <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"/>
</div>
<br>

> 입주 하자 점검 플랫폼

---

## 📋 목차

- [기술 스택](#-기술-스택)
- [프로젝트 구조](#-프로젝트-구조)
- [개발 환경 설정](#-개발-환경-설정)
- [Git 컨벤션](#-git-컨벤션)
- [배포](#-배포)

---

## 🛠 기술 스택

| Category      | Technology                        |
| ------------- | --------------------------------- |
| Monorepo      | Turborepo + pnpm                  |
| Framework     | Next.js 16 (App Router)           |
| Language      | TypeScript 5                      |
| UI Library    | React 19                          |
| Styling       | Tailwind CSS 4                    |
| UI Components | shadcn/ui                         |
| DB / Auth     | Supabase                          |
| Font          | Pretendard (문자) + Roboto (숫자) |
| DevOps        | Vercel                            |

---

## 📁 프로젝트 구조

Turborepo 모노레포

```
IpJuHelper/
├── apps/
│   ├── web/                  # 사용자 앱 (localhost:3000)
│   └── admin/                # 관리자 앱 (localhost:3001)
├── packages/
│   ├── ui/                   # shadcn/ui 공통 컴포넌트 + 디자인 토큰
│   ├── shared/               # 공통 타입, 상수, 유틸
│   ├── supabase/             # DB 클라이언트, 타입
│   ├── eslint-config/        # ESLint 공통 설정
│   └── typescript-config/    # TypeScript 공통 설정
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

---

## ⚙️ 개발 환경 설정

### 필수 요구사항

- Node.js 24.x
- pnpm

### 환경 변수 설정

루트의 `.env.example`을 참고하여 각 앱 폴더에 `.env.local` 생성:

```bash
cp .env.example apps/web/.env.local
cp .env.example apps/admin/.env.local
```

### 프로젝트 실행

```bash
# 의존성 설치
pnpm install

# 전체 dev 서버
pnpm dev

# 특정 앱만 실행
pnpm dev --filter=web       # localhost:3000
pnpm dev --filter=admin     # localhost:3001

# 빌드
pnpm build

# 린트
pnpm lint

# 타입 체크
pnpm check-types

# 포맷팅
pnpm format
```

### shadcn/ui 컴포넌트 추가

```bash
cd apps/web && npx shadcn@latest add <component-name>
```

---

## 📝 Git 컨벤션

### 브랜치 전략

```
main                         ← 단일 브랜치, 바로 머지
├── feat/web-*               ← 사용자 앱 기능
├── feat/admin-*             ← 관리자 앱 기능
└── feat/shared-*            ← 공통 패키지
```

### 커밋 메시지 (Conventional Commits)

commitlint로 강제됩니다.

```
feat: 새 기능
fix: 버그 수정
chore: 설정, 빌드 등
refactor: 리팩토링
style: 포맷팅 (코드 변경 없음)
docs: 문서
test: 테스트
```

### Git Hooks (husky)

| 시점       | 실행 내용                     |
| ---------- | ----------------------------- |
| commit-msg | commitlint (메시지 형식 검사) |
| pre-commit | lint-staged (prettier)        |
| pre-push   | lint + check-types + build    |

---

## 🚀 배포

| 환경        | 플랫폼 | URL                   |
| ----------- | ------ | --------------------- |
| Development | Local  | http://localhost:3000 |
| Production  | Vercel | TBD                   |
