import React from 'react'
import { css } from '@emotion/react'

type AppLayoutProps = {
  children: React.ReactNode
}

function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>
}

function Main({ children }: { children: React.ReactNode }) {
  return <main css={mainStyle}>{children}</main>
}

AppLayout.Main = Main
export default AppLayout

const mainStyle = css`
  padding-left: 1rem;
  padding-right: 1rem;
`
