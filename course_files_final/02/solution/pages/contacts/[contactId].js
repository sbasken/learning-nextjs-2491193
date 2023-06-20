import Layout from "../../components/Layout";
import { useRouter } from "next/router"
import contacts from "../api/contacts"

export default function Contact() {
    const router = useRouter()
    const { contactId } = router.query
    const contact = contacts.find(contact => contact.id === contactId);
    const [first, last] = contact?.name.split(" ");
    return(
    <Layout>
        <a href="#" onClick={() => router.back()}>Back</a>
        <h2>Name: {last.toUpperCase()}, {first}</h2>
        <p>ID: {contact.id}</p>
        <h3>Country: {contact.country}</h3>
    </Layout>)
}
