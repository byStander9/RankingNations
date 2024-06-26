/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/00QXaFKI6mg
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Arimo } from 'next/font/google'
import { Chivo } from 'next/font/google'

arimo({
  subsets: ['latin'],
  display: 'swap',
})

chivo({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"

export default function page() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header
        className="bg-gray-900 text-white px-4 lg:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center">
          <Link className="flex items-center" href="#">
            <MountainIcon className="h-6 w-6" />
            <span className="ml-2 font-semibold">Acme Inc</span>
          </Link>
          <div className="ml-6 flex gap-4 sm:gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#">
                  Category Selection
                </Link>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                className="w-48 mt-2 bg-white dark:bg-gray-950 rounded-md shadow-lg"
                side="bottom">
                <DropdownMenuItem>
                  <Link href="#">Category 1</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Category 2</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="#">Category 3</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#">
              Comment Board
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#">
              myPage
            </Link>
          </div>
        </div>
      </header>
      <div className="bg-gray-100 dark:bg-gray-800 py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-4">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Discover the Best Products</h1>
            <p
              className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Browse through our wide selection of high-quality products and find the perfect one for you.
            </p>
          </div>
        </div>
      </div>
      <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="col-span-1 md:col-span-2">
            <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory">
              <div className="flex-shrink-0 snap-center">
                <img
                  alt="Product"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300" />
              </div>
              <div className="flex-shrink-0 snap-center">
                <img
                  alt="Product"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300" />
              </div>
              <div className="flex-shrink-0 snap-center">
                <img
                  alt="Product"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300" />
              </div>
              <div className="flex-shrink-0 snap-center">
                <img
                  alt="Product"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300" />
              </div>
              <div className="flex-shrink-0 snap-center">
                <img
                  alt="Product"
                  className="rounded-lg object-cover"
                  height="200"
                  src="/placeholder.svg"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col gap-4">
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Category Selection</h3>
              <div className="grid gap-2">
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#">
                  Category 1
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#">
                  Category 2
                </Link>
                <Link
                  className="text-sm font-medium hover:underline underline-offset-4"
                  href="#">
                  Category 3
                </Link>
              </div>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">Comment Board</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Check out the latest comments and discussions.</p>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#">
                View Comment Board
              </Link>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">myPage</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Manage your account and settings.</p>
              <Link
                className="text-sm font-medium hover:underline underline-offset-4"
                href="#">
                Go to myPage
              </Link>
            </div>
          </div>
        </div>
      </div>
      <footer className="bg-gray-100 p-6 md:py-12 w-full dark:bg-gray-800">
        <div
          className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Company</h3>
            <Link href="#">About Us</Link>
            <Link href="#">Our Team</Link>
            <Link href="#">Careers</Link>
            <Link href="#">News</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#">Men</Link>
            <Link href="#">Women</Link>
            <Link href="#">Kids</Link>
            <Link href="#">Accessories</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Resources</h3>
            <Link href="#">Blog</Link>
            <Link href="#">Community</Link>
            <Link href="#">Support</Link>
            <Link href="#">FAQs</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
            <Link href="#">Cookie Policy</Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Contact</h3>
            <Link href="#">Support</Link>
            <Link href="#">Sales</Link>
            <Link href="#">Press</Link>
            <Link href="#">Partnerships</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MountainIcon(props) {
  return (
    (<svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round">
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>)
  );
}
