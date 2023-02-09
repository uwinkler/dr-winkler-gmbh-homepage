import { Box, Typography, useTheme } from '@mui/material';
import { Block } from 'src/common/Block';
import { BlockWithImage } from 'src/common/BlockWithImage';
import { getThemeFromCookies } from 'src/common/getThemeFromCookies';
import { useEmail } from 'src/common/useEmail';
import Main from 'src/layouts/Main';
import Lawyer from 'src/svg/illustrations/Lawyer';
import WithLayout from 'src/WithLayout';
import { useTelephone } from '../src/common/useTelephone';

export const getServerSideProps = async ({ req }) => {
  console.log(req.headers.cookie);
  return getThemeFromCookies(req);
};

export default function App(props) {
  return (
    <WithLayout
      component={Imprint}
      layout={Main}
      initialThemeMode={props.initialThemeMode}
    />
  );
}

const Imprint = () => {
  const theme = useTheme();
  const email = useEmail();
  const telephone = useTelephone();
  return (
    <>
      <Block background="alternate">
        <BlockWithImage Image={<Lawyer width={'100%'} height={'100%'} />}>
          <Typography variant="h1">Impressum</Typography>
          <p>
            Dr. Winkler GmbH
            <br />
            Nordstraße 10
            <br />
            01996 Hosena
          </p>
          <p>
            Telefon:{' '}
            <Box
              component="a"
              sx={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
              }}
              href={`tel:${telephone}`}
            >
              {telephone}
            </Box>
            <br />
            E-Mail:{' '}
            <Box
              component="a"
              sx={{
                textDecoration: 'none',
                color: theme.palette.text.primary,
              }}
              href={`mailto:${email}`}
            >
              {email}
            </Box>
            <br />
          </p>
          <p>
            <strong>Vertreten durch:</strong>
            <br />
            Geschäftsführer Dr. Ulrich Winkler
          </p>
          <p>
            <strong>Registereintrag:</strong>
            <br />
            Eingetragen im Handelsregister.
            <br />
            Registergericht: Cottbus
            <br />
            Registernummer: HRB 16633
          </p>
          <p>
            <strong>Umsatzsteuer-ID: </strong>
            <br />
            Umsatzsteuer-Identifikationsnummer nach §27a Umsatzsteuergesetz:
            <br />
            DE287189325
          </p>
          <p>
            <strong>Verantwortlich für den Inhalt</strong> (gem. § 55 Abs. 2
            RStV):
            <br />
            Dr. Ulrich Winkler
          </p>
        </BlockWithImage>
      </Block>

      <Block>
        <Typography variant="h4">Disclaimer – rechtliche Hinweise</Typography>
        <Typography variant="h5" sx={{ paddingTop: 5 }}>
          § 1 Warnhinweis zu Inhalten
        </Typography>
        <Box>
          Die kostenlosen und frei zugänglichen Inhalte dieser Webseite wurden
          mit größtmöglicher Sorgfalt erstellt. Der Anbieter dieser Webseite
          übernimmt jedoch keine Gewähr für die Richtigkeit und Aktualität der
          bereitgestellten kostenlosen und frei zugänglichen journalistischen
          Ratgeber und Nachrichten. Namentlich gekennzeichnete Beiträge geben
          die Meinung des jeweiligen Autors und nicht immer die Meinung des
          Anbieters wieder. Allein durch den Aufruf der kostenlosen und frei
          zugänglichen Inhalte kommt keinerlei Vertragsverhältnis zwischen dem
          Nutzer und dem Anbieter zustande, insoweit fehlt es am
          Rechtsbindungswillen des Anbieters.
        </Box>
        <Typography variant="h5" sx={{ paddingTop: 5 }}>
          § 2 Externe Links
        </Typography>
        <Box>
          Diese Website enthält Verknüpfungen zu Websites Dritter ("externe
          Links"). Diese Websites unterliegen der Haftung der jeweiligen
          Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
          externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
          Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
          ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle und
          zukünftige Gestaltung und auf die Inhalte der verknüpften Seiten. Das
          Setzen von externen Links bedeutet nicht, dass sich der Anbieter die
          hinter dem Verweis oder Link liegenden Inhalte zu Eigen macht. Eine
          ständige Kontrolle der externen Links ist für den Anbieter ohne
          konkrete Hinweise auf Rechtsverstöße nicht zumutbar. Bei Kenntnis von
          Rechtsverstößen werden jedoch derartige externe Links unverzüglich
          gelöscht.
        </Box>
        <Typography variant="h5" sx={{ paddingTop: 5 }}>
          § 3 Urheber- und Leistungsschutzrechte
        </Typography>
        <Box>
          Die auf dieser Website veröffentlichten Inhalte unterliegen dem
          deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
          Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung bedarf
          der vorherigen schriftlichen Zustimmung des Anbieters oder jeweiligen
          Rechteinhabers. Dies gilt insbesondere für Vervielfältigung,
          Bearbeitung, Übersetzung, Einspeicherung, Verarbeitung bzw. Wiedergabe
          von Inhalten in Datenbanken oder anderen elektronischen Medien und
          Systemen. Inhalte und Rechte Dritter sind dabei als solche
          gekennzeichnet. Die unerlaubte Vervielfältigung oder Weitergabe
          einzelner Inhalte oder kompletter Seiten ist nicht gestattet und
          strafbar. Lediglich die Herstellung von Kopien und Downloads für den
          persönlichen, privaten und nicht kommerziellen Gebrauch ist erlaubt.
        </Box>
        <Box>
          Die Darstellung dieser Website in fremden Frames ist nur mit
          schriftlicher Erlaubnis zulässig.
        </Box>
        <Typography variant="h5" sx={{ paddingTop: 5 }}>
          § 4 Besondere Nutzungsbedingungen
        </Typography>
        <Box>
          Soweit besondere Bedingungen für einzelne Nutzungen dieser Website von
          den vorgenannten Paragraphen abweichen, wird an entsprechender Stelle
          ausdrücklich darauf hingewiesen.In diesem Falle gelten im jeweiligen
          Einzelfall die besonderen Nutzungsbedingungen.
        </Box>
      </Block>
    </>
  );
};
