import React from 'react'
import { Global, css } from '@emotion/react'
import { Route, Switch } from 'react-router-dom'
import StoryPage from './pages/Story/StoryPage'
import AppLayout from './components/AppLayout/AppLayout'
import { useMediaQuery } from 'react-responsive'
import AccountPage from './pages/Account/AccountPage'

//minWidth: 768px;
function Tablet({ children }: { children: React.ReactNode }) {
  const isTablet = useMediaQuery({ minWidth: 0, maxWidth: 991 })
  return isTablet ? <div>{children}</div> : null
}
function App() {
  return (
    <>
      <Switch>
        <Tablet>
          <AppLayout>
            <AppLayout.Main>
              <Route exact path="/">
                Home
              </Route>
              <Route exact path="/story">
                <StoryPage />
              </Route>
              <Route exact path="/account">
                <AccountPage />
              </Route>
            </AppLayout.Main>
          </AppLayout>
        </Tablet>
      </Switch>
      <Global styles={globalStyle} />
    </>
  )
}

export default App

const globalStyle = css`
  html,
  body,
  #root {
    height: 100%;
  }
  html {
    box-sizing: border-box;

    * {
      box-sizing: inherit;
    }
  }
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Helvetica Neue',
      'Apple SD Gothic Neo', 'Malgun Gothic', '맑은 고딕', 나눔고딕,
      'Nanum Gothic', 'Noto Sans KR', 'Noto Sans CJK KR', arial, 돋움, Dotum,
      Tahoma, Geneva, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
  }
`
