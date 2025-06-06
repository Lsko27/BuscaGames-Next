import LaunchCountdownCube from '../components/LaunchCountdownCube'
import GamesSection from '../components/GamesSection'
import { DailyQuests, Newsletter } from '../components/DailyQuests'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Homepage from './home/page'

const page = () => {
  return (
    <div>
      <Nav />
      <Homepage />
      <Footer />
    </div>
  )
}

export default page
