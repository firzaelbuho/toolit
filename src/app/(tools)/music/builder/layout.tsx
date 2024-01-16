import { Metadata } from 'next';


 
export const metadata: Metadata = {
  title: 'Music Builder',
};

export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        {/* <nav></nav> */}
        <div className="">
           
        </div>
   
        {children}
      </section>
    )
  }