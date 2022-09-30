import DefaultLink from "next/link";

export default function Link({children, href, ...props}){
    return(
        <DefaultLink href={href} >
        <a {...props}>{children}</a>
      </DefaultLink>
    )
}