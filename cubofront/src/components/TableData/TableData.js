import { GlobalContext } from "../../contexts/Global/GlobalContext"
import { ContainerTableData } from "./styled"
import { useContext } from "react"


const TableData = () => {
    const { states, request } = useContext(GlobalContext)
    console.log(states.users)
    return <ContainerTableData>
        <tr>
            <th></th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Participation</th>
        </tr>
        {
            states.users.map((user, index)=>{
               return <tr key={user.id}>
                <td>{index + 1}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.participation}%</td>
                </tr>
            })
        }
    </ContainerTableData>

}

export default TableData