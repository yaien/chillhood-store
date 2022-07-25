import { FC } from "react";

const Footer: FC = () => {
  return (
    <footer>
        <div className="info">
          <div className="copyright">©CHILLHOOD APPAREL</div>
          <div className="social-media">
            <a href="https://www.instagram.com/chillhoodapparel" target="_blank">
              <img src="/static/ig.png" alt="" />
            </a>
            <a href="https://wa.link/vkokp1" target="_blank">
              <img src="/static/ws.png" alt="" />
            </a>
          </div>
        </div>
        <div className="payment-media">
          <img src="/static/pay.png" alt="" />
        </div>
      <style jsx>{`
          footer {
            margin-top: 2.5rem;
            border-top: 1px solid var(--border-light);
            height: 100px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: column;
          }  
          .info {
            margin-top: 0.5rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .copyright {
            color: var(--text-secondary);
            text-transform: uppercase;
            letter-spacing: 0.125rem;
            font-size: 0.6rem;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-left: 1rem;
          }
          
          .social-media {
            margin: 0 0.5rem;
            display: flex;
            align-items: center;
          }
          
          .social-media a {
            margin-right: 0.8rem;
            margin-left: 0.8rem;
          }

          .social-media a img {
            width: 20px;
          }

          .payment-media img {
            height: 70px;
          }

          @media (min-width: 640px) {
            footer {
              flex-direction: row;
            }

            .info {
              margin-top: 0;
            }

            .payment-media img {
              height: 100px;
            }

          }
      `}</style>
    </footer>
  )
}

export default Footer