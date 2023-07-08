import { ThemeProvider } from 'styled-components/native'
import { StatusBar } from 'expo-status-bar'
import { useColorScheme } from 'react-native'
import {
  useFonts,
  Urbanist_500Medium,
  Urbanist_700Bold,
} from '@expo-google-fonts/urbanist'
import theme from './src/theme'
import { Home } from './src/screens/Home'
import { Splash } from './src/screens/Splash'

export default function App() {
  const deviceTheme = useColorScheme()
  const [fonts] = useFonts({
    Urbanist_500Medium,
    Urbanist_700Bold,
  })

  const userTheme = deviceTheme ? theme[deviceTheme] : theme.dark
  if (!fonts) {
    return
  }

  return (
    <ThemeProvider theme={userTheme}>
      <StatusBar style="auto" backgroundColor="transparent" translucent />
      {/* <Home /> */}
      <Splash />
    </ThemeProvider>
  )
}
