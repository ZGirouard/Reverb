import {
  BottomAppColumn,
  DownloadAppButton,
  SocialIconLink,
  SocialRow,
} from './Footer.bottom.styles'

export function FooterBottomApp() {
  return (
    <BottomAppColumn>
      <SocialRow>
        <SocialIconLink href="#">
          <img src="/facebook.svg" alt="" width={24} height={24} decoding="async" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <img src="/instagram.svg" alt="" width={24} height={24} decoding="async" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <img src="/x.svg" alt="" width={24} height={24} decoding="async" />
        </SocialIconLink>
        <SocialIconLink href="#">
          <img src="/youtube.svg" alt="" width={24} height={24} decoding="async" />
        </SocialIconLink>
      </SocialRow>
      <DownloadAppButton type="button">Download the Reverb App</DownloadAppButton>
    </BottomAppColumn>
  )
}
