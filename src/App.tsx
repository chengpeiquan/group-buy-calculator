import { ConfigProvider, Layout, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ToggleTheme from '@/components/ToggleTheme'
import { GlobalContextProvider } from '@/context'
import InputForm from '@/components/InputForm'
import { useTheme } from '@/hooks'

const { Content } = Layout

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout>
        <Header>
          <ToggleTheme isDark={isDark} toggleTheme={toggleTheme} />
        </Header>

        <Content>
          <GlobalContextProvider>
            <div className="container">
              <InputForm />
              {/* <InputForm /> */}
            </div>
          </GlobalContextProvider>
        </Content>

        <Footer />
      </Layout>
    </ConfigProvider>
  )
}
