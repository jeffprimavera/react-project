import Homepageslider from "./homepage-slider"
import Homepagehero from "./homepage-hero"
import Announcement from "./annoucement"
import HomeBanners from "./homebanners"
import TabsGame from "./tabs-game"
import BetTabs from "./BetTabs"

const Home = () => {
  return (
  <>
    <Homepagehero />
    <Homepageslider />
    <Announcement />
    <HomeBanners />
    <TabsGame />
    <BetTabs />
  </>
  )
}

export default Home
