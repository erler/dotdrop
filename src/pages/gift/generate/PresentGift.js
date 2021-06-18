import { Row, Col, Card } from 'react-bootstrap';
import CardHeader from '../../../components/CardHeader';
import { useSubstrate, utils } from '../../../substrate-lib';

export default function PresentGift({ gift, removeGiftHandler }) {
  const { email, amount, secret } = gift;
  const { giftTheme, chainInfo } = useSubstrate();
  const amountStr = amount && utils.formatBalance(amount, chainInfo?.token);
  const mailSubject = 'Sending you some DOTs';
  const mailBody = `
  Hey! \n 
  I'm sending you ${amountStr} as a gift! You can go to \n
  https://hamidra.github.io/dotdrop/#/claim \n
  and type in the following secret message to claim your ${giftTheme?.content}. 
  \n \n 
  ${secret} 
  \n \n 
  The website will walk you through to create your own secure
  ${giftTheme.network} account. \n 
  Enjoy!`;
  const mailToLink = `${email}?subject=${mailSubject}&body=${encodeURIComponent(
    mailBody
  )}`;

  const mailToHandler = () => {
    window.open(`mailto:${mailToLink}`, 'sendGiftEmail');
  };

  const printHandler = () => {
    window.print();
  };

  return (
    <>
      <Card.Body>
        <CardHeader
          title={'Send Message'}
          cardText={`Send ${giftTheme.content} to your friends and familiy, and have them join the
          ${giftTheme.network} Network today.`}
        />
        <Row className="justify-content-center align-items-center my-4 mx-2">
          <Col>
            <Card className="printable border">
              <Card.Body className="p-4">
                <p>Hey!</p>
                <p>
                  I'm sending you {`${amountStr}`} as a gift! You can follow
                  this{' '}
                  <a
                    href="https://hamidra.github.io/dotdrop/#/claim"
                    target="_blank">
                    link
                  </a>{' '}
                  and type in the following secret message to claim your{' '}
                  {`${giftTheme.content}`}.
                  <strong
                    style={{
                      backgroundColor: '#EDF1F5',
                      display: 'block',
                      textAlign: 'center',
                      padding: '5px',
                      marginTop: '20px',
                      marginBottom: '20px',
                      borderRadius: '5px',
                    }}>
                    {secret}
                  </strong>
                  The website will walk you through to create your own secure{' '}
                  {`${giftTheme.network}`} account.
                </p>
                <p>Enjoy!</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="px-5 d-flex justify-content-end">
            <button
              className="btn btn-link ml-3"
              onClick={() => removeGiftHandler(secret)}>
              Delete
            </button>
            <button
              className="btn btn-link ml-3"
              onClick={() => printHandler()}>
              Print
            </button>
            <button
              className="btn btn-primary ml-3"
              onClick={() => mailToHandler()}>
              Email
            </button>
          </Col>
        </Row>
      </Card.Body>
    </>
  );
}
