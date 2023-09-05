import { Navbar, Footer } from "@components/ui/common"

export default function BaseLayout({children}) {
  return (
    <>
      <div className="flex flex-row min-h-screen">
        <div className=" w-16">
        <Navbar />
        </div>
        <div className="flex-grow flex-col">
          <div className="flex-grow h-full" >
            {children}
          </div>
          <div className="h-7">
            <Footer/>
          </div>
        </div>
      </div>
    </>
  )
}
