import Image from "next/image"

const Logo = () => {
    return (
        <a href="/">
            <Image
                src="/images/logo/cubicus_logo.png"
                alt="logo"
                width={50}
                height={30}
                className="hidden w-full dark:block"
            />
            <Image
                src="/images/logo/cubicus_logo.png"
                alt="logo"
                width={50}
                height={30}
                className="w-full dark:hidden"
            />
        </a>
    )
}

export default Logo;