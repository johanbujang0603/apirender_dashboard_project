import React, { useEffect, useState } from 'react';
import { Row, Card, CardTitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { Colxx } from '../components/common/CustomBootstrap';
import IntlMessages from '../helpers/IntlMessages';
import queryString from 'query-string';

const Thankyou = ({match}) => {
  const [action, setAction] = useState(null);
  
  const queryParams = new URLSearchParams(window.location.search);
  const isQuote = queryParams.get("quote");
  // const params = queryString.parse(this.props.location.search)

  // console.log(params);
  useEffect(() => {
    setAction(match.params.action);
    document.body.classList.add('background');
    document.body.classList.add('no-footer');

    return () => {
      document.body.classList.remove('background');
      document.body.classList.remove('no-footer');
    };
  }, []);

  return (
    <>
      <div className="fixed-background" />
      <main>
        <div className="container">
          <Row className="h-100">
            <Colxx xxs="12" md="10" className="mx-auto my-auto">
              <Card className="auth-card">
                <div className="position-relative image-side thankyou-side">
                </div>
                <div className="form-side">
                  <NavLink to="/" className="white">
                    <span className="logo-single" />
                  </NavLink>
                  <CardTitle className="mb-4">
                    {
                      action && action==='payment' && ( 
                        <>
                          Payment Confirmed.<br />
                          Thanks!
                        </> 
                      )
                    }
                    {
                      action && action === 'briefing' && isQuote === 'true' && ( 
                        <>
                          <p className="">Thank you for submitting your quote request.</p>
                          <p className="">One of our team members will be in touch shortly to discuss your project and provide a quote.</p>
                          <p className="">If you have any questions in the meantime, please contact your account manager via the dashboard.</p>
                        </> 
                      )
                    }
                    {
                      action && action === 'briefing' && isQuote !== 'true' && ( 
                        <>
                          <p className="">Thank you, the project brief has been submitted successsfully.</p>
                          <p className="">Your order is now in progress. </p>
                          <p className="">We will contact you if we require any further information. </p>
                          <p className="">If you have any questions, please contact your account manager via the dashboard.</p>
                        </> 
                      )
                    }
                  </CardTitle>
                  <Button
                    href={action==='payment' ? `/app/projects/details/${match.params.id}` : `/app/projects/view-briefing/${match.params.id}`}
                    color="primary"
                    className="btn-shadow"
                    size="lg"
                  >
                    {
                      action && action==='payment' && (
                        <IntlMessages id="pages.start-project-briefing" />
                      )
                    }
                    {
                      action && action==='briefing' && ( 
                        <IntlMessages id="pages.view-service-briefing" />
                      )
                    }
                  </Button>
                </div>
              </Card>
            </Colxx>
          </Row>
        </div>
      </main>
    </>
  );
};

export default Thankyou;
