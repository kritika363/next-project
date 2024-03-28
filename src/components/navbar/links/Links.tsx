import Link from "next/link";

const Links = () => {
    const links = [
        {
            title : 'Home',
            path : '/'
        },
        {
            title : 'About',
            path : '/about'
        },
        {
            title : 'Blog',
            path : '/blog'
        },
        {
            title : 'Contact',
            path : '/contact'
        }
    ]
  return (
    <div className="navbar">{links.map((link => (
        <Link href = {link.path} key = {link.title}> {link.title} </Link>)))}</div>
  )
}

export default Links