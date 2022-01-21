import { useRequestData } from "../../hooks/useRequestData"
import { GlobalContext } from "./GlobalContext"

const GlobalState = ({ children }) => {
    const [users, requestUser] =
        useRequestData([], "https://cubobackend.herokuapp.com/user/all")

    const states = { users }
    const request = { requestUser }
    return <GlobalContext.Provider value={{ states, request}}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalState