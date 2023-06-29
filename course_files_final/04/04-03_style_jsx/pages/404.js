import Layout from "../components/Layout"
export default function NotFound() {
    return(
        <Layout>
            <h1>Not Found</h1>
            <style jsx>
                {`
                    h1 {
                        color: orange;
                    }
                `}
            </style>
        </Layout>
    )
}