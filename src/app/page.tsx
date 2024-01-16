// `app/page.tsx` is the UI for the `/` URL
import { Metadata } from 'next'
import Link from 'next/link'
 
export const metadata: Metadata = {
  title: 'Elbuho app',
}


export default function Page() {
    return(
      <div>
        <h1>Hello, Home page!</h1>
        <Link href="/dashboard">Dashboard</Link>
      </div>
    ) 
  }