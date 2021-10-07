import { useCallback, useEffect, useRef, useState } from "react";
import { Transition, TransitionStatus } from "react-transition-group";

import { name } from "./_config";

import { AppDrawerEnterDirection } from "../../contracts";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  addObservedHtmlElement,
  getDrawerContent,
  setDrawerContent,
} from "../../store";
import { Wrapper } from "./Styles";

const AppDrawer = () => {
  const [height, setHeight] = useState<number | undefined>(undefined);

  const dispatch = useAppDispatch();
  const DrawerContent = useAppSelector(getDrawerContent);

  const wrapperRef = useRef<HTMLDivElement>(null);

  const getTransitionStyle = useCallback(
    (state: TransitionStatus) => {
      let transitionStyles;

      if (DrawerContent?.enterDirection === AppDrawerEnterDirection.bottom) {
        transitionStyles = {
          entering: { bottom: 0, opacity: 1 },
          entered: { bottom: 0, opacity: 1 },
          exiting: { opacity: 0 },
          exited: { opacity: 0, zIndex: -1 },
          unmounted: {},
        };
      } else {
        transitionStyles = {
          entering: { opacity: 1, top: 0 },
          entered: { opacity: 1, top: 0 },
          exiting: { opacity: 0 },
          exited: { opacity: 0, zIndex: -1 },
          unmounted: {},
        };
      }

      return transitionStyles[state];
    },
    [DrawerContent?.enterDirection]
  );

  useEffect(() => {
    if (wrapperRef.current) {
      if (wrapperRef.current.dataset.name === "appDrawer") {
        setHeight(() => wrapperRef.current!.getBoundingClientRect().height);
      }
    }
  }, [wrapperRef.current]);

  useEffect(() => {
    if (!!DrawerContent) {
      dispatch(
        addObservedHtmlElement({
          name,
          callback: () => dispatch(setDrawerContent(null)),
        })
      );
    }
  }, [DrawerContent]);

  return (
    <Transition in={!!DrawerContent} timeout={300}>
      {(state) => (
        <Wrapper
          data-name="appDrawer"
          direction={DrawerContent?.enterDirection}
          elementHeight={height}
          ref={wrapperRef}
          style={{ ...getTransitionStyle(state) }}
        >
          {!!DrawerContent ? <DrawerContent.Element /> : <Peep />}
        </Wrapper>
      )}
    </Transition>
  );
};

export default AppDrawer;

export const Peep = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <svg
        width="156"
        height="252"
        viewBox="0 0 156 252"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M112.952 124.093C107.721 119.228 109.4 114.535 107.652 108.606C104.272 101.271 97.2978 94.047 89.2238 92.482C85.1918 90.12 79.9218 91.459 77.1668 95.162C74.5798 95.848 74.4938 99.427 73.6288 101.545C72.0308 105.703 70.8088 109.94 69.8058 114.26C38.6619 120.747 14.7741 141.96 9.7939 174.135C8.9425 178.811 8.2457 183.518 7.5912 188.225C7.2077 192.28 5.1774 198.715 9.351 201.339C9.4704 204.247 9.8194 207.185 10.9265 209.923C11.3515 212.652 11.6951 215.398 12.5934 218.028C14.5738 222.583 14.8791 227.578 17.1031 232.118C18.6572 235.467 20.9386 238.156 23.7601 240.498C24.9521 241.543 26.5892 242.676 26.8396 244.311C26.7648 246.776 28.6339 250.338 31.5859 249.18C33.681 249.968 35.931 250.173 38.1504 250.157C75.7608 248.531 113.45 248.393 151.061 250.212C152.38 250.273 153.632 249.008 153.577 247.694C152.978 233.372 151.497 219.09 149.168 204.946C143.969 175.656 138.417 142.895 112.952 124.093Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M72.7138 109.542L72.8548 109.154C73.7058 106.799 74.7498 106.624 74.2468 108.907L74.1708 109.25C73.7358 111.203 73.2148 113.222 72.1468 114.93C70.3068 117.876 65.4858 118.969 62.2698 120.017C62.2808 120.091 62.2808 120.165 62.2718 120.235C64.2368 120.535 66.2548 121.482 67.9008 122.543C69.4068 123.517 70.7668 124.61 71.7818 126.062L76.7418 123.906C78.3798 123.196 80.0288 122.35 81.8078 122.065C84.3158 121.664 88.1818 123.008 87.8868 126.172C87.8478 126.599 87.5798 126.916 87.2508 127.072C87.5018 127.051 87.7558 127.044 88.0068 127.053C89.6838 127.11 92.0548 128.596 91.1778 130.555C90.9538 131.06 90.3078 130.728 90.2568 130.306C89.9248 127.527 87.0538 128.18 85.0618 128.634C83.2598 129.044 81.4788 129.547 79.7358 130.162C77.8718 130.819 76.0698 131.656 74.4078 132.732C72.6918 133.844 71.0888 135.192 71.1938 137.411C71.1978 137.458 71.1248 137.481 71.1028 137.436C70.2178 135.547 71.9418 133.554 73.3428 132.466C75.3708 130.891 77.7458 129.758 80.1458 128.875C81.3798 128.422 82.6518 128.065 83.9288 127.749L84.2228 127.677C84.9728 127.495 85.7508 127.286 86.5318 127.159C86.2428 127.088 85.9908 126.878 85.8788 126.499L85.8648 126.446C84.7358 121.976 78.6898 125.572 76.2418 126.651C74.4898 127.423 72.7168 128.163 70.9848 128.981L70.7618 129.087C69.4188 129.732 68.0188 130.493 67.1168 131.707C64.8008 134.814 66.8798 139.009 67.6108 142.289C67.8198 143.23 68.0208 144.227 68.0338 145.193C68.0438 145.984 67.8008 146.73 67.6048 147.49L67.4908 147.939C67.5918 147.941 67.6958 148.047 67.6618 148.154C66.8398 150.838 65.4498 153.383 64.0958 155.831C62.7138 158.329 61.2918 160.814 59.7665 163.226C54.3412 171.802 48.1299 179.899 41.3165 187.417C38.0503 191.021 34.5179 194.383 31.3299 198.058C29.8468 199.768 28.459 201.56 27.301 203.513C26.6757 204.568 26.1137 205.663 25.6405 206.798L25.5471 207.022C25.1591 207.95 24.7778 208.768 24.056 209.509C23.697 209.879 22.9785 209.723 22.8644 209.194C22.3341 206.709 24.0921 204.025 25.3682 201.996C26.7454 199.806 28.3553 197.764 30.0665 195.826C30.5503 195.277 31.0426 194.736 31.5412 194.201C29.3104 194.814 26.9609 194.977 24.6877 195.378C22.3595 195.788 20.0461 196.277 17.79 196.987C15.7172 197.638 13.744 198.498 11.8576 199.576C10.9532 200.094 10.0682 200.662 9.24 201.298C9.1616 201.357 9.0856 201.421 9.0095 201.482C10.3616 204.881 11.401 208.406 12.487 211.891C13.2283 214.274 13.953 216.663 14.6729 219.053L16.2898 224.433C17.4562 228.311 18.4278 232.53 20.4837 236.057C21.371 237.579 22.5708 238.954 23.944 240.058C24.6097 240.595 25.3344 241.003 26.0863 241.398C26.5595 241.647 26.9778 241.971 27.4172 242.266C27.7065 241.936 28.1453 241.732 28.6838 241.818L28.744 241.829C30.4447 242.163 32.1984 241.56 33.7109 240.817C35.287 240.039 36.8569 239.126 38.1898 237.976C40.8116 235.712 42.9856 232.891 45.1048 230.169C52.6595 220.455 59.0928 209.816 64.3358 198.686C67.0008 193.026 69.4868 187.271 71.8238 181.467C72.9918 178.568 74.1428 175.662 75.2648 172.743L75.4128 172.353C76.4178 169.674 77.2978 166.767 78.9138 164.405C78.9268 164.384 78.9438 164.367 78.9628 164.354C78.9668 164.287 78.9878 164.223 79.0218 164.168C79.5228 163.367 80.4818 163.132 81.3118 162.761C82.2478 162.34 83.1818 161.922 84.1148 161.503C84.8508 161.173 85.9278 160.894 86.4788 160.269C87.1048 159.565 87.3138 158.312 87.6178 157.441C88.3068 155.473 89.0528 153.529 89.7978 151.582C90.4528 149.873 91.0198 148.038 91.9388 146.445C92.7228 145.085 93.8438 144.368 95.1398 143.586L95.4208 143.416C95.9628 143.085 96.5408 142.69 96.7548 142.072C97.1058 141.061 96.3268 140.095 95.4978 139.614C93.6578 138.546 91.4548 139.778 89.8408 140.719C88.2178 141.666 86.6358 142.803 84.9008 143.536C84.8628 143.551 84.8358 143.494 84.8628 143.469C86.2578 142.191 87.9618 141.138 89.5628 140.099L89.9608 139.84C91.0238 139.144 92.2348 138.466 93.5148 138.278C93.2488 138.189 93.3308 137.845 93.5838 137.813C96.1028 137.506 98.6588 137.9 101.152 137.312C103.377 136.788 105.318 135.53 106.873 133.875C108.339 132.316 109.501 130.511 110.585 128.672C111.215 127.603 111.83 126.525 112.467 125.459C112.563 125.299 112.658 125.121 112.755 124.931C111.614 124.667 110.452 123.817 109.677 123.158C108.472 122.135 107.593 120.753 106.981 119.311C105.544 115.928 105.658 112.058 106.734 108.596C106.799 108.384 107.112 108.374 107.173 108.596C107.999 111.561 108.073 114.776 109.37 117.604C109.89 118.736 110.615 119.755 111.506 120.622C111.958 121.059 112.415 121.427 112.968 121.731C113.562 122.059 114.196 122.166 114.667 122.687C114.694 122.716 114.72 122.746 114.743 122.777C115.019 122.74 115.256 122.78 115.446 122.899L115.486 122.925L115.495 122.913C114.643 122.332 113.788 121.757 112.882 121.249C112.641 121.114 112.816 120.791 113.057 120.833L113.653 120.939C115.645 121.294 117.675 121.697 119.494 122.583C121.512 123.568 123.439 124.705 125.277 125.992C128.898 128.524 132.193 131.515 135.077 134.86C140.397 141.034 144.158 148.456 146.484 156.238C149.391 165.963 150.515 176.177 151.742 186.222C152.329 191.031 152.855 195.849 153.323 200.672L153.449 201.987C153.684 204.469 153.937 206.946 154.176 209.42C154.598 210.084 154.628 210.872 154.379 211.557C154.563 213.563 154.728 215.571 154.858 217.585C155.192 222.782 155.408 227.996 155.501 233.206C155.593 238.49 155.401 243.765 155.34 249.049C155.315 251.272 151.947 251.264 151.894 249.049C151.759 243.211 151.341 237.372 151.043 231.538C150.751 225.844 150.481 220.153 150.132 214.463C150.098 213.922 150.067 213.379 150.037 212.838C149.546 213.025 148.937 213.103 148.421 213.205L148.294 213.231C147.256 213.452 146.216 213.611 145.162 213.707L144.82 213.736C143.864 213.802 138.96 213.907 136.062 213.379C136.292 217.101 136.524 220.823 136.78 224.543C137.072 228.784 137.127 233.033 137.34 237.279C137.448 239.4 137.577 241.508 137.847 243.617C137.97 244.577 138.096 245.539 138.247 246.495L138.325 246.973C138.46 247.795 138.629 248.499 138.28 249.233C138.584 250.173 138.111 251.359 136.865 251.264C128.874 250.665 120.865 250.412 112.854 250.376C99.0228 250.31 85.1998 250.865 71.3748 251.245L67.6378 251.346C54.6881 251.701 41.6743 252.079 28.7844 250.646C28.7567 252.297 25.6722 252.278 25.837 250.437L25.8774 249.993C26.063 247.99 26.3036 245.915 26.925 243.987C26.4095 244.002 25.8919 243.981 25.406 243.82C24.7153 243.594 24.0517 243.184 23.4517 242.778C22.1165 241.878 20.9884 240.768 20.0146 239.487C18.1025 236.974 16.8327 233.996 15.8292 231.023C14.7622 227.853 13.7859 224.647 12.8738 221.43L11.8921 217.946C10.6459 213.515 9.4223 209.016 8.6799 204.469C8.5998 204.574 8.4898 204.665 8.3442 204.731C4.3722 206.506 0.974999 202.864 0.303199 199.183C-0.0924011 197.011 0.00039893 194.789 0.0335989 192.591L0.0370016 192.356C0.0708016 189.824 0.0812987 187.292 0.210399 184.762C0.636999 176.304 2.6081 168.108 5.6736 160.229C8.5616 152.812 12.0518 145.337 16.5477 138.749C18.6834 135.621 21.1468 132.616 24.1151 130.238C27.2461 127.734 30.766 125.829 34.4527 124.278C38.2196 122.693 42.1257 121.44 46.0365 120.256C50.3506 118.95 54.7153 117.828 59.1541 117.039C59.4771 116.982 59.794 117.077 59.9738 117.373C60.1298 117.633 60.2758 117.899 60.4168 118.17C61.0238 117.79 61.9548 117.697 62.5618 117.511C64.4648 116.921 67.8898 116.568 69.3988 115.224C71.1188 113.692 71.9458 111.65 72.7138 109.542ZM8.3398 202.072C8.0717 202.317 7.8031 202.562 7.5266 202.793C7.8877 202.64 8.2151 202.742 8.456 202.966C8.4139 202.668 8.3757 202.37 8.3398 202.072ZM95.6608 144.912C95.2508 145.166 94.8458 145.419 94.4758 145.724C93.1478 146.823 92.6988 148.617 92.1458 150.181L92.1098 150.28C91.4298 152.174 90.7428 154.072 90.0228 155.951C89.7968 156.541 89.5848 157.173 89.3588 157.809C92.4058 160.738 95.5198 163.636 98.7798 166.326C104.746 171.249 111.246 175.524 118.155 179.007C121.707 180.799 125.374 182.431 129.147 183.697C130.51 184.154 131.898 184.555 133.307 184.853L133.309 184.832C133.315 184.781 133.398 184.758 133.407 184.819L133.415 184.876C134.019 185.001 134.628 185.107 135.238 185.189C136.396 185.343 137.566 185.413 138.734 185.403C139.459 185.396 140.177 185.307 140.892 185.343C137.729 182.492 134.549 179.662 131.361 176.845C125.319 171.502 119.243 166.201 113.156 160.909C110.454 158.559 107.722 156.237 105.03 153.871L102.439 151.581C100.149 149.555 97.8728 147.497 95.8888 145.181L95.6608 144.912ZM68.6548 160.62C68.4708 160.394 68.7498 160.106 68.9758 160.299C70.3258 161.442 71.8508 161.943 73.4718 162.558C73.8498 162.702 73.8198 163.304 73.3718 163.298C71.4898 163.264 69.7928 162.046 68.6548 160.62ZM87.5678 132.468L87.7028 132.414C89.6058 131.667 92.0758 131.296 93.5738 133.028C94.6598 134.286 94.9358 136.665 93.5208 137.762C93.1808 138.026 92.4598 137.8 92.6758 137.27C93.2968 135.754 93.4278 133.77 91.4738 133.187C89.7788 132.68 87.7958 133.668 86.2518 134.355L85.8108 134.55C82.7998 135.887 79.8098 137.507 77.9658 140.338C77.9168 140.41 77.7878 140.364 77.8198 140.277C79.2918 136.198 83.8008 134.002 87.5678 132.468ZM65.2638 123.733L64.5318 123.456C62.6708 122.761 60.3528 122.055 59.1983 124.056C58.7656 124.804 58.3933 125.73 58.2323 126.591L58.2117 126.709C58.1673 126.975 58.11 127.26 58.3004 127.465C58.5938 127.786 59.5488 127.943 59.9333 128.082L62.3508 128.961L63.5588 129.401C64.1078 129.602 64.8178 129.803 65.2238 130.244C66.6428 128.38 68.9018 127.319 71.0328 126.387C69.1128 125.493 67.2518 124.481 65.2638 123.733Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M70.2448 20.6844C102.267 19.1091 123.994 44.3723 124.928 54.4465C125.577 61.4395 125.137 70.766 125.137 77.015C125.137 80.204 126.746 89.9 124.928 94.549C120.883 104.896 116.313 113.001 103.65 113.001C90.9878 113.001 71.6838 106.436 65.0548 97.967C63.8448 96.421 48.8056 85.103 48.8056 76.207C48.8056 57.2268 47.3957 21.8085 70.2448 20.6844Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M48.3993 0.18449C50.2242 -0.38611 51.3889 0.435391 52.2198 1.70809C52.403 1.67239 52.5803 1.67469 52.7776 1.72229C52.8264 1.73409 52.9445 1.77869 53.0338 1.81379C53.1029 1.84279 53.1653 1.87779 53.2253 1.91499L53.261 1.89619C53.3979 1.74679 53.5417 1.61049 53.697 1.50059C54.046 1.25369 54.4056 1.18189 54.7468 1.23259L54.9048 1.17449C56.2557 0.703592 57.7202 0.922089 58.636 2.08619C58.8133 2.31109 58.9565 2.56159 59.0788 2.82579C59.3535 2.91579 59.6112 3.04599 59.8333 3.20619C59.9892 3.13279 60.1538 3.07109 60.3308 3.02569C61.3268 2.76999 62.3738 3.01129 63.1858 3.62249C63.5818 3.91989 63.8728 4.29229 64.0928 4.71749C64.3438 4.77649 64.5928 4.88259 64.8248 5.02509C65.0248 4.92549 65.2278 4.83209 65.4358 4.76809C66.1968 4.53429 67.0128 4.44829 67.8048 4.50729C69.5108 4.63379 71.1608 6.58349 70.0208 8.25769L69.9858 8.30839C69.8408 8.51019 69.7148 8.71879 69.5978 8.93079C70.0068 9.10859 70.3998 9.34629 70.7638 9.64429C72.5408 11.1016 72.7008 13.3482 72.3688 15.4676L72.3538 15.5558H72.3588C73.3028 15.6455 74.1178 16.6322 73.5608 17.5603L73.5328 17.6038C72.7778 18.7711 72.1308 20.0605 71.4088 21.2889C69.4128 22.009 67.4868 22.8958 65.6738 23.9703C64.5448 24.9598 63.4698 26.006 62.5238 27.1699C62.0518 27.7511 61.6178 28.3664 61.2198 29.0042C61.5378 29.1575 61.9328 29.1496 62.2658 28.8411C65.2268 26.0954 68.8058 24.1685 72.6158 22.8772C72.8898 22.784 73.0698 22.6086 73.1708 22.401C74.8618 21.9189 76.5838 21.545 78.3218 21.2804C78.8008 20.8237 79.3028 20.3871 79.7798 19.9322C80.3888 19.3519 81.1518 19.3603 81.7218 19.7249C82.0048 19.5958 82.2948 19.4818 82.5888 19.3794L82.7708 19.3172C82.8468 19.2923 82.9198 19.2633 82.9948 19.2405C85.0338 18.6167 86.8998 18.8483 88.9058 19.3608L89.1628 19.4277C90.0978 19.676 90.6868 19.6363 91.5928 19.4078L91.6948 19.3817C92.6568 19.1306 93.6858 18.9446 94.6698 19.209C95.6988 19.4857 96.3818 20.1011 97.0828 20.8447L97.1528 20.9194C97.4798 21.2695 97.6688 21.3077 98.0968 21.2992L98.5558 21.2856C100.287 21.2381 101.982 21.3112 103.279 22.6506C103.758 23.146 104.273 23.847 104.581 24.4869L104.626 24.5824C104.641 24.6134 104.653 24.6394 104.665 24.6627C104.851 24.6327 105.14 24.5149 105.278 24.4881C107.165 24.122 108.739 24.6861 109.951 26.1734C110.216 26.4989 110.616 27.138 110.893 27.4893C110.99 27.5717 111.082 27.66 111.169 27.7528C111.624 28.0434 112.268 28.025 112.778 28.1269C114.168 28.4038 115.654 28.9326 116.361 30.2558C116.656 30.8081 116.765 31.4124 116.89 32.016C117.357 32.3231 117.723 32.7656 118.008 33.2448C118.353 33.8264 118.5 34.5389 118.898 35.0882C119.187 35.4872 119.629 35.7002 120.049 35.9441L120.21 36.0384C121.455 36.7802 122.43 37.6035 122.84 39.0569L122.876 39.1862C122.942 39.4088 123.176 40.0442 122.972 39.9488C123.147 40.0454 123.445 40.0794 123.605 40.1322C124.468 40.4182 125.22 40.8802 125.68 41.6916C126.03 42.3091 126.093 42.9529 126.194 43.6336L126.236 43.9085C126.247 43.9749 126.26 44.0522 126.274 44.1271L126.287 44.2007L126.29 44.2024C126.446 44.2701 126.6 44.3434 126.751 44.4224C127.467 44.8441 127.957 45.576 127.957 46.4233C127.957 46.8346 127.828 47.155 127.641 47.441C127.792 47.6701 127.909 47.9142 127.998 48.1862C128.172 48.7173 128.184 49.2981 128.125 49.8476C128.055 50.507 127.886 51.1075 127.687 51.7373C127.61 51.9803 127.579 52.32 127.463 52.552C127.677 52.824 127.804 53.1565 127.764 53.4845C127.708 53.9537 127.494 54.5022 127.069 54.7653C126.861 55.7903 126.414 56.8378 125.974 57.6758C125.923 57.773 125.862 57.8597 125.795 57.9315C125.856 61.2772 125.611 64.6463 125.594 67.9876C125.575 71.625 125.651 75.265 125.778 78.897C125.991 84.919 126.754 91.145 124.977 97.017C123.523 101.823 120.612 105.948 116.708 109.076C112.711 112.276 107.892 114.128 102.775 114.417C100.172 114.563 97.5248 114.267 95.0068 113.593L94.7378 113.52C92.3008 112.85 89.4788 111.827 87.6858 110.036C86.7398 109.089 87.6968 107.083 89.0848 107.635C90.4598 108.182 91.6938 108.992 93.0588 109.562C94.2778 110.072 95.5498 110.463 96.8378 110.75C99.4218 111.331 102.162 111.458 104.788 111.097C114.27 109.799 121.658 101.922 123.116 92.582C123.519 89.996 123.512 87.367 123.484 84.753L123.454 81.89C123.431 79.494 123.423 77.097 123.511 74.702C123.623 71.621 123.84 68.5413 124.132 65.4727L124.284 63.876C124.464 62.0076 124.667 60.1251 125.017 58.2824C124.73 58.2974 122.468 54.4263 121.213 52.2631C120.755 51.8996 120.368 51.4479 120.219 50.8636C120.188 50.7416 120.172 50.6186 120.162 50.4954C119.889 50.067 119.602 49.6496 119.298 49.2446L119.232 49.215C119.181 49.1918 119.142 49.1724 119.118 49.1592C118.456 48.7837 117.903 48.2147 117.525 47.5553C117.397 47.333 117.293 47.1009 117.208 46.8635C116.668 46.3337 116.103 45.8281 115.51 45.3541C115.452 45.3076 115.392 45.264 115.333 45.2182C114.578 44.9362 113.915 44.5114 113.431 43.8996C113.229 43.7744 113.026 43.6519 112.821 43.5318C112.205 43.5261 111.583 43.3826 110.978 43.1338C109.871 42.679 108.987 41.7801 107.875 41.3636C106.699 40.9233 105.459 41.9239 104.21 41.7434C103.891 41.6973 103.575 41.6003 103.28 41.4595C102.577 42.2052 101.83 42.9081 101.007 43.5234C99.8108 44.4165 98.5888 44.8246 97.2038 45.2281C96.5178 45.8797 95.7488 46.5114 94.8218 46.6042C92.6768 48.3195 90.3828 49.7664 87.9688 51.1098C87.5808 51.3258 87.1948 51.4232 86.8288 51.4257C86.0708 51.9013 85.2448 52.2671 84.3718 52.5203C84.0978 52.5996 83.8158 52.6163 83.5388 52.5823L82.7808 53.1996C82.2538 53.6291 81.6908 53.8343 81.1528 53.8476C80.8258 54.0985 80.4868 54.3358 80.1368 54.5641C79.7628 54.809 79.2778 54.9105 78.7898 54.8809C78.0458 55.6096 77.0798 55.6861 76.2708 55.3505C76.1598 55.4156 76.0458 55.4773 75.9168 55.538C75.7428 55.6206 75.5608 55.6904 75.3748 55.7468C74.5318 56.656 73.2968 57.1328 72.0598 57.0081C71.1368 57.5741 70.0608 57.8685 69.0098 57.8024C68.8498 58.6081 68.7168 59.4167 68.6048 60.2281L68.5938 60.8224C68.5918 60.9187 68.5918 60.9938 68.5928 61.0433L68.5938 61.0629C68.6968 63.6686 68.7528 66.2756 68.8548 68.8818L68.8638 69.0875C68.9798 71.364 69.5398 75.516 66.1938 75.425C64.9478 75.392 63.7108 74.473 62.7398 73.718L62.6028 73.611C62.5288 73.553 62.4528 73.494 62.3758 73.434C61.6498 73.339 60.9348 73.163 60.2018 73.136C59.2979 73.104 58.3472 73.197 57.4662 73.402C55.9113 73.764 54.4071 74.472 53.393 75.755C53.3043 75.867 53.2219 75.985 53.1437 76.103C53.0719 76.346 52.9493 76.571 52.7867 76.765C51.8275 78.923 52.3812 81.774 53.4416 83.748C54.705 86.099 56.7043 87.725 59.2183 88.543L59.3444 88.584C61.0618 89.12 61.7188 90.16 62.6528 91.606C63.5278 92.963 64.5308 94.227 65.6088 95.427C67.6938 97.75 70.6198 99.667 71.8328 102.607C72.0778 103.199 71.3758 103.757 70.8328 103.605C68.7058 103.006 67.2138 101.491 65.6678 99.984C64.5978 98.94 63.5678 97.855 62.6028 96.715C62.3998 96.808 62.1768 96.871 61.9448 96.9C60.9198 97.025 59.8633 96.973 58.9662 96.42C58.5528 96.458 58.122 96.314 57.8022 96.021C57.5087 95.752 57.2556 95.46 57.0418 95.149C56.7169 95.178 56.3979 95.187 56.0934 95.136C55.9466 95.122 55.8044 95.084 55.6741 95.02C55.4319 94.925 55.2023 94.777 54.9914 94.551C54.5643 94.092 54.4005 93.444 54.4793 92.828C54.3948 92.81 54.311 92.789 54.2281 92.761C53.6594 92.568 53.2217 92.186 52.9419 91.665C52.4414 91.384 51.9908 91.004 51.6496 90.599C51.2341 90.107 50.9205 89.552 50.7363 88.939C50.546 88.851 50.3611 88.748 50.1841 88.628C48.9154 87.77 48.1891 86.157 48.6872 84.667L48.7042 84.62C48.7294 84.553 48.7752 84.438 48.8313 84.309C48.8233 84.204 48.8148 84.099 48.8091 83.994L48.7916 83.677L48.5374 83.569C47.2698 83.064 46.4129 82.383 46.2606 80.957C46.2289 80.662 46.3434 80.361 46.5241 80.109L46.5232 80.03C46.4408 79.987 46.3624 79.944 46.2934 79.9C45.6023 79.458 45.1776 78.667 45.2252 77.849C45.2688 77.103 45.6819 76.508 46.1463 75.958L46.279 75.804C46.29 75.791 46.3023 75.777 46.3155 75.762L46.0085 75.666C45.8093 75.602 45.6269 75.539 45.4956 75.466C44.9877 75.181 44.5572 74.796 44.2916 74.307C44.2529 74.246 44.2136 74.187 44.1781 74.122C43.8353 73.496 43.7905 72.694 44.0117 72.022C44.0379 71.943 44.0717 71.869 44.1063 71.794C43.1725 71.465 42.4536 70.785 42.3669 69.53C42.3329 69.0372 42.4409 68.5458 42.6756 68.125C42.6236 67.8415 42.6129 67.5478 42.6464 67.2572C42.3179 66.9467 42.0627 66.5726 41.9486 66.1163C41.7329 65.2542 42.1278 64.4339 42.7147 63.6817C42.4975 63.087 42.4863 62.416 42.7343 61.8172C42.6388 61.5184 42.5845 61.2024 42.5816 60.878C42.575 60.1596 42.7962 59.5596 43.1535 59.0492C42.6513 58.435 42.4128 57.6187 42.7094 56.8539C42.9205 56.3103 43.1617 55.813 43.4398 55.3522C43.2938 55.0018 43.2088 54.6093 43.2088 54.1699C43.2088 53.3795 43.505 52.7532 43.9582 52.2407C43.7615 51.3046 44.1615 50.1646 45.0331 49.7525C45.3617 49.5969 45.8015 49.4346 46.2862 49.3082C46.4681 48.7397 46.658 48.1735 46.8585 47.6113C47.1743 46.7264 47.5141 45.8537 47.8741 44.9912C47.6668 45.1727 47.4494 45.342 47.2246 45.4955C46.5137 46.3996 45.5712 47.1829 44.7792 47.6515C43.2091 48.5806 41.4133 48.0294 40.6381 46.4749C39.9097 47.0189 39.0355 47.341 38.1027 47.2309C37.0451 47.106 36.0781 46.4208 35.8141 45.352C35.7758 45.1973 35.7528 45.0301 35.7505 44.8618C35.1439 45.2938 34.5093 45.6914 33.8131 45.919C32.9265 46.209 32.0214 45.5134 31.9043 44.6469C31.8581 44.3035 31.9223 44 32.059 43.7436L31.9724 43.7095C31.958 43.7035 31.9437 43.6972 31.9295 43.6905C31.4645 43.4726 31.1034 43.0732 30.9319 42.6124C29.925 43.0022 28.7723 42.5454 28.4529 41.4378C28.0726 40.121 28.0495 38.7874 28.3472 37.5047C27.2803 36.7291 26.5853 35.4251 26.4669 34.0618C26.3805 33.0833 26.614 32.18 27.0253 31.3447C26.0163 30.9673 25.6694 29.6442 26.149 28.691C25.512 28.3262 25.0967 27.5529 25.0874 26.8001C24.8028 26.3689 24.7117 25.8137 24.9477 25.1915C25.2589 24.3716 25.8927 23.6858 26.6184 23.1479C26.3019 22.5967 26.0668 21.9956 25.9208 21.3745C25.3196 21.1984 24.8343 20.7119 24.7354 19.9813C24.6116 19.0653 25.2143 18.2888 26.0256 18.0838C26.1156 17.8048 26.2255 17.5319 26.3613 17.2699C25.9599 16.3188 26.0191 15.1162 26.5367 14.0763C26.9951 13.157 27.7409 12.5948 28.6388 12.2059C28.4106 11.4239 28.7127 10.644 29.4733 10.0628C30.4018 9.35249 31.4201 8.80949 32.4902 8.42589C32.3951 7.15289 32.9271 5.84929 34.1843 5.40549C34.5205 5.28689 34.8703 5.24319 35.2259 5.24469C35.4841 4.68309 35.9148 4.22659 36.477 3.82249C37.3277 3.21129 38.9176 3.58469 39.3893 4.54319L39.4124 4.59239C39.4365 4.64669 39.4624 4.69639 39.4872 4.74899C39.5822 4.28359 39.8045 3.84399 40.1617 3.48369C41.0548 2.58269 41.9976 2.56579 42.905 2.95109C43.0715 2.53809 43.2731 2.14539 43.5181 1.78629C44.4078 0.483589 45.8776 0.31769 46.9538 1.02309C47.3852 0.64379 47.8667 0.35129 48.3993 0.18449ZM54.7597 78.526C56.551 77.824 58.725 78.031 60.4958 78.705L60.6248 78.756C62.1888 79.374 64.7298 80.75 65.0358 82.509C65.1938 83.421 64.3278 84.209 63.4488 83.729C62.6838 83.313 62.2548 82.474 61.6468 81.865C61.0448 81.263 60.3708 80.779 59.6357 80.354C58.1019 79.468 56.4898 79.124 54.7597 78.868C54.5653 78.841 54.6181 78.58 54.7597 78.526Z"
          fill="black"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M103.223 97.417C101.803 96.838 100.536 95.871 99.6088 94.636C99.2868 94.206 99.2038 93.753 99.2708 93.338C99.3468 92.872 99.6228 92.449 99.9988 92.166C100.376 91.882 100.848 91.741 101.304 91.813C101.701 91.875 102.095 92.092 102.408 92.542L102.473 92.632C103.024 93.378 103.741 93.989 104.559 94.384C105.347 94.764 106.229 94.941 107.141 94.838C108.879 94.642 110.076 93.702 111.349 92.425C111.507 92.264 111.665 92.098 111.823 91.929C111.923 91.776 112.063 91.677 112.217 91.626C112.388 91.568 112.582 91.572 112.76 91.634C112.931 91.693 113.084 91.807 113.187 91.958C113.284 92.101 113.34 92.278 113.322 92.482C113.205 93.804 112.514 94.985 111.532 95.912C110.441 96.942 108.995 97.654 107.634 97.904C106.135 98.179 104.607 97.982 103.223 97.417ZM108.342 77.009C109.937 77.979 112.368 80.241 110.652 82.646C108.631 84.767 105.723 82.336 104.29 81.236C102.961 80.384 101.467 82.576 102.7 83.571C113.057 91.242 117.261 77.263 109.149 75.869C108.255 75.715 107.924 76.709 108.342 77.009ZM89.7818 68.0859C89.9578 65.8971 93.2898 65.4 93.6218 67.566C93.9178 69.506 93.5688 71.288 92.6948 73.035C91.8608 74.704 89.7628 73.926 89.6038 72.406C89.3908 70.369 89.6718 69.447 89.7818 68.0859ZM115.147 67.1168C115.612 66.5082 116.283 66.0926 117.086 66.3275C119.597 67.0615 118.857 70.628 117.975 72.363C117.496 73.306 115.947 73.545 115.247 72.715C114.106 71.362 113.56 68.6586 115.01 67.3255C115.05 67.2566 115.094 67.187 115.147 67.1168ZM92.6598 58.5084L93.0568 58.4389C94.2838 58.2266 95.8088 58.0226 96.6768 59.0095C97.1378 59.5328 97.2958 60.5054 96.6768 61.0063C95.5888 61.8876 94.3848 61.5461 93.0808 61.6207C92.0058 61.6824 90.9728 61.8604 89.9378 62.1565C87.6658 62.806 85.8148 63.9916 83.8748 65.2936C83.6208 65.4643 83.3608 65.1386 83.4818 64.9004C84.6018 62.706 86.7718 60.9034 88.9458 59.8046C90.1068 59.2181 91.3758 58.7315 92.6598 58.5084ZM112.858 57.5253L113.162 57.5875C116.466 58.2783 120.758 59.6583 122.322 62.9045C122.382 63.3635 122.319 63.4619 122.268 63.5262L122.251 63.5476C122.208 63.6025 122.175 63.6781 121.976 63.7406C121.921 63.7274 121.865 63.7135 121.809 63.6987C121.091 63.5107 120.524 63.2517 119.975 62.983L119.379 62.6895C118.688 62.3506 117.991 62.024 117.252 61.7829C115.676 61.2684 114.054 60.9061 112.408 60.7126C112.051 60.6707 111.707 60.5502 111.436 60.3436C111.179 60.1476 110.982 59.8762 110.892 59.5154C110.776 59.0486 110.81 58.6951 111.06 58.2739C111.248 57.9576 111.518 57.7383 111.827 57.6124C112.142 57.4841 112.501 57.4538 112.858 57.5253Z"
          fill="black"
        />
      </svg>
    </div>
  );
};
