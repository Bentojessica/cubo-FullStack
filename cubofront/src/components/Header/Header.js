 import axios from "axios"
 import { useForm }  from "../../hooks/userForm"
 import { ContainerHeader, Input, Button, Form } from "./styled"
 

 const Header = () => {
    const initialForm = {
        firstName: "",
        lasttName: "",
        participation: ""
    }

    const [form, onChange, clear] = useForm(initialForm)

    const sendUser = (event) => {
        event.preventDefault()
        const {firstName, lastName, participation} = form
        
        const body = {
            firstName, 
            lastName,
            participation: Number(participation)
        }

        axios.post(`https://cubobackend.herokuapp.com/user/create`, body)
        .then((res) => {
            clear()
            alert(res.data.message)
        }).catch((error) =>{
            alert("Unexpected error, try again")
        })
    }

    return <ContainerHeader onSubmit={sendUser}>
         <Form>
        <Input name="firstName"
            placeholder="First Name"
            onChange={onChange}
            value={form.firstName} />
        <Input name="lastName"
            placeholder="Last Name"
            onChange={onChange}
            value={form.lastName}
        />
        <Input name="participation"
            placeholder="Participation"
            value={form.participation}
            onChange={onChange}
        />
        <Button type="submit">
            Send
        </Button>
    </Form>
    </ContainerHeader>
 }
 export default Header