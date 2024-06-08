import { Bold } from "lucide-react"
import Link from "next/link"

export default function Hello() {
    return (
      <div>
        <h1>Hello World</h1>
        <br></br>
        <Link href="http://localhost:3000/mainpage"><h3>메인페이지로</h3></Link>
      </div>
      

    )
  }