import {css} from '@emotion/core';
import Text from './Text';
import {mq} from '~/constants';
import mapSrc from '~/assets/images/map.svg';

const styles = css`
  display: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 70px 40px 85px 40px;
  color: #fff;
  text-align: center;

  ${mq.tablet} {
    padding: 50px 40px 85px 40px;
  }
  .hero-container {
    display: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .hero-subheading {
    margin-top: 10px;
  }

  .cta {
    display: flex;
    flex: 1;
    padding-top: 24px;
    width: 100%;
    justify-content: center;
    align-items: center;
  }

  .temporary-graphic {
    width: 300px;
    height: 200px;
    background-image: url(${mapSrc});
    background-repeat: no-repeat;
    background-size: contain;


    @media screen and (max-width: 800px) {
      display: none;
    }
  }
`;

// make sure 'color' is inherited

export default ({background, textColor, heading, subheading, cta}) => (
  <div
    css={css`
      ${styles}
      background: ${background};
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;

      .hero-heading,
      .hero-subheading {
        color: ${textColor};
      }
    `}
  >
  <div className='hero-container'>
  <Text h2 className='hero-heading' children={heading} />
    <Text h3 className='hero-subheading' children={subheading} />
    <div className='cta' children={cta} />
  </div>
    <div className='temporary-graphic' />
  </div>
);
