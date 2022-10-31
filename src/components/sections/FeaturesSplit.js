import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import Button from '../elements/Button';

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    title: 'Great... So Now What?',
    paragraph: 'Great Question. Tommy builds up 1000s of Websites based on the top 1% of searches in your niche, with keywords and content that drives our indexed site to the top of the search result for that query. We redirect that traffic from our Tommy page to your Store/Landing page. Congratulations, you have now got warm, organic traffic at a fraction of your current CPA. Each of our sites does on average 300 views per month. When 80% of those land on your website and 3% convert....YEAH.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>


           
            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Warm
                  </div>
                <h3 className="mt-0 mb-12">
                  Warm Leads
                  </h3>
                <p className="m-0">
                  Our State of the Art Traffic AI knows EXACTLY what Google is looking for and helps place your website in the path of ORGANIC, WARM LEADS.
                  </p>
                  <br/>
                  <p>If one of our sites falls below 300 views per month, we replace it free of charge, leading to consistent, organic traffic.</p>
                  <br/>
                  <Button tag="a" color="primary" wideMobile href="https://calendly.com/justin-crowded-mind/30min?month=2022-10">
                    Book a Demo
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/shopify-analytics.jpeg')}
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Organic
                  </div>
                <h3 className="mt-0 mb-12">
                  Completely Organic Traffic
                  </h3>
                <p className="m-0">
                No more gambling with FB ads. No more A/B testing, hiring a copywriter, learning SEO, losing money to freelancers.</p>
                <br/>
                <p> We make traffic EASY, so you can focus on delivery.
                  </p>
                  <br/>
                  <Button tag="a" color="primary" wideMobile href="https://calendly.com/justin-crowded-mind/30min?month=2022-10">
                    Book a Demo
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/completely-organic-traffic.jpeg')}
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Cheaper
                  </div>
                <h3 className="mt-0 mb-12">
                  Cheaper than Paid Traffic
                  </h3>
                <p className="m-0">
                We position you in the path of those LOOKING for your Product/Service.</p>
                <br/>
                <p>
                All organic. No Paid Traffic. We deliver your ideal client who is LOOKING TO BUY.
                  </p>
                  <br/>
                  <Button tag="a" color="primary" wideMobile href="https://calendly.com/justin-crowded-mind/30min?month=2022-10">
                    Book a Demo
                    </Button>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src={require('./../../assets/images/cheaper-than-paid-traffic.jpeg')}
                  alt="Features split 01"
                  width={528}
                  height={396} />
              </div>     
            </div>



          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;