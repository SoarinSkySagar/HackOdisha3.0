import Link from "next/link"
import { useWeb3 } from "@components/providers"

export default function Footer() {

  const { connect, isWeb3Loaded } = useWeb3();

  return (
    <section className="mb-16">
      <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
        <nav className="relative" aria-label="Global">
          <div className="flex justify-between">
            <div>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Home
                </a>
              </Link>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Marketplace
                </a>
              </Link>
              <Link href="/" legacyBehavior>
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Blogs
                </a>
              </Link>
            </div>
            <div>
              <Link href="/" legacyBehavior >
                <a
                  className="font-medium mr-8 text-gray-500 hover:text-gray-900">
                  Wishlist
                </a>
              </Link>

              {
                isWeb3Loaded ?
                  <span
                  onClick={connect}
                  className="px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer">
                    Connect Wallet
                  </span> :
                  <Link
                  href="https://sites.google.com/metamaslogi.com/metamaskextension/home"
                  className="px-8 py-3 rounded-md border text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700 whitespace-nowrap cursor-pointer">
                    Install Metamask
                </Link>
              }

              
            </div>
          </div>
        </nav>
      </div>
    </section>
  )
}
