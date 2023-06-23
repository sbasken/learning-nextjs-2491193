import Head from 'next/head'
import Link from 'next/link'
import Layout from "../../components/Layout"
import { handler } from "../api";

function Sections({ results, title }) {
  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
          <h1>{title}</h1>
          <ul>
            {results?.map(result => {
              return(
                <>
                  - <Link href={`sections/${result.section}`}><a>{result.display_name}</a></Link><br/>
                </>
              )
            })}
          </ul>
        </main>
    </Layout>);
}


const API_KEY = "9hUvOqGGdnCBvGKg4EB3L7mGdBC8hKKJ"
export async function getStaticProps({ params }) {
  const SECTIONS_URL = `https://api.nytimes.com/svc/news/v3/content/section-list.json?api-key=${API_KEY}`


   // The value of the `props` key will be
  //  passed to the `Home` component
  
    return {
        props: {
            results : await handler(SECTIONS_URL),
            title: "Sections" 
        }
    }
}
export default Sections;
