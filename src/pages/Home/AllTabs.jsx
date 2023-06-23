import OriginalTabsGame from "./OriginalTabs"
import SlotsTabsGame from "./SlotsTabs"
import LiveCasinoTabs from './LiveCasinoTabs'
import BaccaratGames from "./BaccaratGames" 
import LiveCasinoTopGames from "./LiveCasinoTopGames"
import TableGames from './TableGames'

const AllTabsGame = () => {
    return (
        
        <>
            <OriginalTabsGame />
            <SlotsTabsGame />
            <LiveCasinoTabs />
            <BaccaratGames />
            <TableGames />
        </>
    
    )
  }
  
  export default AllTabsGame