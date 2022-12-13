import { ConfigProvider, Layout, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import Header from './components/Header'
import Footer from './components/Footer'
import ToggleTheme from '@/components/ToggleTheme'
import InputForm from './components/InputForm'
import { useTheme } from '@/hooks'
import 'antd/dist/reset.css'
import './App.css'

const { Content } = Layout

export default function App() {
  const { isDark, toggleTheme } = useTheme()

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
          colorPrimary: '#ff0000',
        },
      }}
    >
      <Layout>
        <Header>
          <ToggleTheme isDark={isDark} toggleTheme={toggleTheme} />
        </Header>

        <Content>
          <InputForm />
        </Content>

        <Footer />
      </Layout>
    </ConfigProvider>
  )
}
