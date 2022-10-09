import { About } from './components/AboutVetic'
import { BookingAppointment } from './components/BookingAppointment'
import { Header } from './components/Header'
import { OurServices } from './components/OurServices'
import { GlobalStyle } from './styles/globals'


function App() {
  return (
    <>
    <GlobalStyle />
    <Header />
    <BookingAppointment />
    <OurServices />
    <About />
    </>
  )
}

export default App
