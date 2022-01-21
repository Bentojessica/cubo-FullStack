import  Header  from "../../components/Header/Header"
import  TableData  from "../../components/TableData/TableData"
import  TitleData  from "../../components/TitleData/TitleData"
import { SectionData } from "./styled"


const Home = () => {
    return <div>
            <Header/>
        <TitleData/>
        <SectionData>
            <TableData/>
        </SectionData>
        </div>
    
}
export default Home