# 개발 환경
- [Git Flow](#git-flow)
- [깃 컨벤션](#깃-컨벤션)

## Git Flow
- Jira에서 이슈 티켓 생성 후 브랜치를 생성한다 (master => feature)
- commit msg는 "SCRUM-{이슈번호} feat: 작업 내용" 으로 통일

## 깃 컨벤션
| 태그 이름          | 설명                                                      |
|--------------------|-----------------------------------------------------------|
| Feat               | 새로운 기능을 추가                                        |
| Fix                | 버그 수정                                                 |
| Design             | CSS 등 사용자 UI 디자인 변경                             |
| !BREAKING CHANGE   | 커다란 API 변경의 경우                                    |
| !HOTFIX            | 급하게 치명적인 버그를 고쳐야하는 경우                   |
| Style              | 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우    |
| Refactor           | 프로덕션 코드 리팩토링                                    |
| Comment            | 필요한 주석 추가 및 변경                                  |
| Docs               | 문서 수정                                                 |
| Test               | 테스트 코드, 리팩토링 테스트 코드 추가, Production Code(실제로 사용하는 코드) 변경 없음 |
| Chore              | 빌드 업무 수정, 패키지 매니저 수정, 패키지 관리자 구성 등 업데이트, Production Code 변경 없음 |
| Rename             | 파일 혹은 폴더명을 수정하거나 옮기는 작업만인 경우       |
| Remove             | 파일을 삭제하는 작업만 수행한 경우                        |

## 로컬 환경 실행
```bash
nvm use // 설치되어 있지 않다면 수동으로 버전 맞추기

npm i

npm run dev // (turbo 적용)
```
