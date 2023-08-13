import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { SafeAreaView, useColorScheme } from 'react-native'
import {
  useFonts,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist'
import theme from './src/theme'
import { Routes } from './src/routes'

export default function App() {
  const deviceTheme = useColorScheme()
  const [fonts] = useFonts({
    Urbanist_500Medium,
    Urbanist_700Bold,
  })

  if (!fonts) {
    return
  }
  return (
    <ThemeProvider theme={deviceTheme ? theme[deviceTheme] : theme.dark}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      <SafeAreaView style={{ flex: 1 }}>
        <Routes />
      </SafeAreaView>
    </ThemeProvider>
  )
}
