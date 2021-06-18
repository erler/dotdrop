import { Row, Col, Card, Image } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import confetti from '../../../images/confetti.png';
import { useHistory } from 'react-router-dom';
import { useSubstrate, utils } from '../../../substrate-lib';

export default function Claimed({ amount, accountAddress }) {
  const history = useHistory();
  const { giftTheme, chainInfo } = useSubstrate();
  const amountStr = utils.formatBalance(amount, chainInfo?.token);
  return (
    <>
      <Card.Body className="d-flex flex-column">
        <CardHeader title={'Congratulations!'} />
        <Row className="justify-content-center flex-column align-items-center">
          <Col className="pt-4 d-flex justify-content-center align-items-center">
            <Image style={{ width: 120 }} src={confetti} />
          </Col>
          <Col className="pt-5">
            <p className="text-center">
              {`Your ${giftTheme?.network} account has been funded and your gift of ${amountStr} has been successfully transferred.`}
            </p>
          </Col>
        </Row>
        <div className="flex-grow-1" />
        <Col className="pt-5 d-flex justify-content-center align-items-center">
          <button
            className="btn btn-primary"
            onClick={() => history.push(`/account/${accountAddress}`)}>
            See Account
          </button>
        </Col>
      </Card.Body>
    </>
  );
}
