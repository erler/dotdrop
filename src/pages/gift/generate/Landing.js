import { useContext } from 'react';
import { GenerateContext } from './GenerateMain';
import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate } from '../../../substrate-lib';
import { lookupResource } from '../../../utils';
export default function Landing() {
  const { nextStep } = useContext(GenerateContext);

  const { theme, chainInfo } = useSubstrate();
  const resources = {
    title: {
      default: `Gift Some ${chainInfo?.token}`,
      polkadot: 'Gift Some DOTs',
      kusama: 'Gift Some KSMs',
    },
    cardText: {
      default: `Send ${chainInfo?.token} to your friends and familiy, and have them join the ${chainInfo?.chainName} Network today.`,
      polkadot:
        'Send DOTs to your friends and familiy, and have them join the Polkadot Network today.',
      kusama:
        'Send KSMs to your friends and familiy, and have them join the Kusama Network today.',
    },
  };
  return (
    <>
      <Card.Body className="d-flex flex-column">
        <CardHeader
          title={lookupResource(resources, 'title', theme)}
          cardText={lookupResource(resources, 'cardText', theme)}
        />
        <Row className="justify-content-center align-items-center">
          <Col className="d-flex flex-column justify-content-around align-items-center">
            <div className="pt-5">
              <button
                className="btn btn-primary btn-lg"
                onClick={() => nextStep()}>
                Send a New Gift
              </button>
            </div>
            <a
              className="pt-5 small text-underline"
              href="#/About"
              target="_blank">
              {'How do gifts work?'}
            </a>
          </Col>
        </Row>
      </Card.Body>
    </>
  );
}
