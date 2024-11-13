# 데이터라이즈 채용과제

## 전체적인 과제 설계에 대한 설명

전체적인 구조는 기능 분할 설계(Feature-Sliced Design, FSD) 아키텍쳐를 적용하여 개발하였습니다.

### src 디렉토리 구조

```
src
 ┣ shared
 ┣ entities
 ┃ ┣ customer
 ┃ ┗ purchase
 ┣ features
 ┃ ┣ customer-list
 ┃ ┣ customer-purchase-history
 ┃ ┣ period-selector
 ┃ ┗ purchase-frequency-chart
 ┣ pages
 ┃ ┣ customer-detail
 ┃ ┣ customer-list
 ┃ ┗ purchase-statistics
 ┣ app
 ┗ main.tsx
```

## 사용한 주요 라이브러리들과 사용 목적

- `@tanstack/react-query`:

  - 서버 데이터 페칭과 캐싱을 효율적으로 처리하고 API error 핸들링, 재시도 등과 같은 기능을 위한 보일러 플레이트 코드를 줄이기 위해 선택했습니다.

- `zod`:

  - API 응답 스키마 정의를 위해 사용했습니다. 이를 통해 API 응답 데이터를 Type safe하게 처리하고, 예상치 못한 데이터 구조로 인한 오류를 방지했습니다.

- `axios`:

  - Promise 기반의 HTTP 클라이언트로서 HTTP 요청 관리를 위해 사용했습니다.

- `recharts`:

  - 이전에 d3를 사용한 경험이 있어 Visx와 Recharts 사이에서 고민을 많이 했습니다. 그러나 요구사항이 간단했고, recharts를 사용하면 코드가 훨씬 간결해져서 선택하게 되었습니다. 이를 통해 개발 시간을 단축하고 유지 보수를 용이하게 할 수 있었습니다.

- `react-error-boundary`:
  - 에러 상태를 컴포넌트 단위로 일관되게 처리하기 위해 사용했습니다.

## Suspense의 사용

과제 요구사항에서 모든 데이터 요청에 대한 로딩 상태와 에러 처리를 구현해야 했습니다. 이를 효과적으로 관리하기 위해 React Suspense와 react-query의 useSuspenseQuery를 사용했습니다.
useSuspenseQuery에 의존하는 컴포넌트를 독립된 컴포넌트로 정의하고 해당 컴포넌트를 사용할 때는 Suspense로 감싸 컴포넌트 단위로 로딩 상태를 선언적으로 관리 할 수 있도록 처리했습니다.
