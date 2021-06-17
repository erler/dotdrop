import { Card, Row, Col } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import Divider from '../../../components/Divider';
import { useSubstrate } from '../../../substrate-lib';
import { lookupResource } from '../../../utils';

export default function ConnectAccount({ setAccountSourceHandler }) {
  const { theme } = useSubstrate();
  const content = {
    title: { default: 'Claim Your Gift' },
    cardText: {
      default:
        'To claim your gift, create a new account, or connect your existing account',
      polkadot:
        'To claim your gift, create a new Polkadot account, or connect your existing account',
      kusama:
        'To claim your gift, create a new Kusama account, or connect your existing account',
    },
    buttonTitle: {
      default: 'Create Account',
      polkadot: 'Create Polkadot Account',
      kusama: 'Create Kusama Account',
    },
  };
  return (
    <>
      <Card.Body className="d-flex flex-column">
        <CardHeader
          title={lookupResource(content, 'title', theme)}
          cardText={lookupResource(content, 'cardText', theme)}
        />
        <Col className="d-flex flex-column  flex-grow-1 justify-content-center align-items-center">
          <Row className="d-flex flex-column justify-content-center align-items-center pt-2">
            <button
              className="btn btn-primary btn-lg"
              onClick={() => setAccountSourceHandler('NEW')}>
              {lookupResource(content, 'buttonTitle', theme)}
            </button>
          </Row>
          <Divider text="Or" />
          <Row className="d-flex flex-column justify-content-center align-items-center">
            <button
              className="btn btn-link"
              onClick={() => setAccountSourceHandler('EXISTING')}>
              Connect Existing Account
            </button>
          </Row>
        </Col>
      </Card.Body>
      <Card.Footer>
        <span>
          By connecting an account, I accept the&nbsp;
          <a href="policy" target="_blank">
            terms and conditions
          </a>
          .
        </span>
      </Card.Footer>
    </>
  );
}
