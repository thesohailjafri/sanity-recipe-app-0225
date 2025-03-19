import { siteConfig } from '@/lib/config/site.config'
import { pagePath } from '@/lib/config/site.config'
import Link from 'next/link'

export default function Logo() {
  return (
    <div className='min-w-fit'>
      <Link href={pagePath.home}>
        {/* <Image
          height={40}
          width={40}
          objectFit={"contain"}
          src="/assets/logo.svg"
          alt="Logo"
        /> */}
        {/* <Text
          hidden={!isShowText}
          whiteSpace={"nowrap"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          {...textProps}
        > */}
        <p>{siteConfig.name}</p>
        {/* </Text> */}
      </Link>
    </div>
  )
}
