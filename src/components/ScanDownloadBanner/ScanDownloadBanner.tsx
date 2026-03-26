import {
  Band,
  Headline,
  KeyboardCut,
  LeftQuarter,
  MiddleHalf,
  QrImage,
  RightQuarter,
  ScanText,
  Section,
  Subheadline,
  WhiteCard,
} from './ScanDownloadBanner.styles'

const qrSrc = '/QRCode.png'
const keyboardSrc = '/keyboardCut.png'

const scanCopy = `Scan with your
camera app to
download`

const titleCopy = `Never miss a deal with the Reverb app`

const subtitleCopy = `Be the first to know about price drops
on the gear you want.`

export default function ScanDownloadBanner() {
  return (
    <Section>
      <Band>
        <LeftQuarter>
          <WhiteCard>
            <ScanText>{scanCopy}</ScanText>
            <QrImage src={qrSrc} alt="QR code to download the Reverb app" width={95} height={87} decoding="async" />
          </WhiteCard>
        </LeftQuarter>
        <MiddleHalf>
          <Headline>{titleCopy}</Headline>
          <Subheadline>{subtitleCopy}</Subheadline>
        </MiddleHalf>
        <RightQuarter>
          <KeyboardCut src={keyboardSrc} alt="" decoding="async" />
        </RightQuarter>
      </Band>
    </Section>
  )
}
