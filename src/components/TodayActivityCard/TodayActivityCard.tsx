import { ActivityTimeSummary, InformationTextWrapper, Wrapper } from "./Styles";

const TodayActivityCard = () => {
  return (
    <Wrapper>
      <InformationTextWrapper>
        <div>
          <h2>Today's</h2>
          <h2>activity</h2>
        </div>
        <ActivityTimeSummary>No activity</ActivityTimeSummary>
      </InformationTextWrapper>
      <div>
        <svg
          width="142"
          height="142"
          viewBox="0 0 142 142"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M137.267 134.503V124.248C137.275 119.469 134.4 115.155 129.984 113.324L108.509 104.376L102.967 82.2171L138.94 46.2435L135.594 42.8969L123.067 55.4235L95.6472 28.0037L120.007 3.64377L116.661 0.29718L76.9174 40.0403L64.9281 28.051L83.3714 9.60779L80.0225 6.26119L33.9224 52.3635L5.52262 80.7634L2.08126 84.2116C0.673752 85.6192 -0.0796936 87.5525 0.00697574 89.5401C0.0924895 91.5289 1.00887 93.3905 2.5331 94.6698L52.7771 136.87L54.4342 141.603H61.5815H85.2007H92.3007H126.173L136.831 136.87C137.111 136.112 137.259 135.312 137.267 134.503ZM105.589 108.288L128.162 117.7C130.81 118.797 132.535 121.382 132.534 124.248V127.403H95.5236L56.3559 94.7622C59.3524 86.3587 58.6544 77.0782 54.4342 69.2167L66.2675 57.3834L71.0216 62.1387C71.5728 74.8017 81.9916 84.7894 94.6673 84.8033H98.735L99.9183 89.5366H85.2007V94.2699H101.102L102.285 99.0032H87.5673V103.737H103.468L104.204 106.679C104.386 107.403 104.899 108.001 105.589 108.288ZM50.9455 72.7054C53.7143 78.5909 54.2609 85.2794 52.4836 91.5369L41.3725 82.2784L50.9455 72.7054ZM119.721 58.7701L98.4207 80.07H94.6673C84.215 80.0584 75.7456 71.5891 75.7341 61.1368C75.7341 60.5093 75.4845 59.9072 75.0407 59.4635L69.6141 54.0368L92.3007 31.3502L119.721 58.7701ZM73.5708 43.3869L47.1609 69.7968C45.7753 67.1204 45.0554 64.1506 45.0624 61.1368C45.0612 60.5093 44.8127 59.9072 44.369 59.4635L38.9412 54.0368L61.5815 31.3976L73.5708 43.3869ZM21.8188 91.5369L10.6962 82.2737L20.2691 72.7008C23.0437 78.5862 23.5949 85.2771 21.8188 91.5369ZM5.57924 91.047C5.07078 90.6206 4.7657 90 4.73681 89.3367C4.70792 88.6745 4.95869 88.0297 5.42786 87.5606L7.3473 85.6388L62.4806 131.587C62.9058 131.942 63.4432 132.138 63.9979 132.136H68.6341V127.403H64.8588L25.6935 94.7645C28.6911 86.3553 27.9919 77.0712 23.7694 69.2051L35.6027 57.3719L40.3568 62.126C40.5278 66.0504 41.688 69.8684 43.7299 73.2231L36.2013 80.7518L32.7461 84.2116C31.3374 85.618 30.5851 87.5513 30.6706 89.5401C30.7561 91.5289 31.6714 93.3894 33.1956 94.6698L83.4349 136.87H60.1324L5.57924 91.047ZM90.7949 136.87L36.2417 91.047C35.7321 90.6206 35.427 89.9989 35.4016 89.3355C35.3681 88.6722 35.6189 88.0274 36.0926 87.5606L38.0144 85.6388L93.1569 131.587C93.581 131.941 94.1149 132.135 94.6673 132.136H132.534V134.503C132.534 139.967 95.7822 136.87 90.7949 136.87Z"
            fill="#A3D2EF"
          />
        </svg>
      </div>
    </Wrapper>
  );
};

export default TodayActivityCard;
