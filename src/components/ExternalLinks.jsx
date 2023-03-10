import React from "react";

function ExternalLinks({ externals }) {
  return (
    <div className="flex  gap-1">
      {externals.imdb && (
        <a
          target="_blank"
          className="text-4xl  text-blue  "
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${externals.imdb}`}
        >
          <i className=" fa fa-imdb"></i>
        </a>
      )}
      {externals.tvrage && (
        <a
          target="_blank"
          className="text-xl text-blue  "
          rel="noopener noreferrer"
          href={externals.tvrage}
        >
          <svg
            fill="#000000"
            height="200px"
            width="200px"
            version="1.1"
            id="Capa_1"
            className="h-10 w-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 455 455"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              {" "}
              <g>
                {" "}
                <path d="M382.5,160c-17.921,0-32.5,14.58-32.5,32.5s14.579,32.5,32.5,32.5s32.5-14.58,32.5-32.5S400.421,160,382.5,160z M382.5,210 c-9.649,0-17.5-7.851-17.5-17.5s7.851-17.5,17.5-17.5s17.5,7.851,17.5,17.5S392.149,210,382.5,210z"></path>{" "}
                <path d="M382.5,240c-17.921,0-32.5,14.58-32.5,32.5s14.579,32.5,32.5,32.5s32.5-14.58,32.5-32.5S400.421,240,382.5,240z M382.5,290 c-9.649,0-17.5-7.851-17.5-17.5s7.851-17.5,17.5-17.5s17.5,7.851,17.5,17.5S392.149,290,382.5,290z"></path>{" "}
                <path d="M407.5,400h-50c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h50c4.143,0,7.5-3.358,7.5-7.5S411.643,400,407.5,400z"></path>{" "}
                <path d="M407.5,370h-50c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h50c4.143,0,7.5-3.358,7.5-7.5S411.643,370,407.5,370z"></path>{" "}
                <path d="M407.5,340h-50c-4.143,0-7.5,3.358-7.5,7.5s3.357,7.5,7.5,7.5h50c4.143,0,7.5-3.358,7.5-7.5S411.643,340,407.5,340z"></path>{" "}
                <path d="M427.5,120H209.159l51.71-95.148c6.029-0.887,10.676-6.08,10.676-12.352c0-6.893-5.607-12.5-12.5-12.5 s-12.5,5.607-12.5,12.5c0,1.853,0.416,3.607,1.143,5.19L192.086,120h-31.079L105.402,17.69c0.727-1.583,1.143-3.337,1.143-5.19 c0-6.893-5.607-12.5-12.5-12.5s-12.5,5.607-12.5,12.5c0,6.272,4.648,11.464,10.677,12.352L143.934,120H27.5 C12.336,120,0,132.336,0,147.5v280C0,442.664,12.336,455,27.5,455h400c15.163,0,27.5-12.336,27.5-27.5v-280 C455,132.336,442.663,120,427.5,120z M440,427.5c0,6.893-5.607,12.5-12.5,12.5h-400c-6.893,0-12.5-5.607-12.5-12.5v-280 c0-6.893,5.607-12.5,12.5-12.5h129.031c0.007,0,0.015,0.001,0.022,0.001c0.008,0,0.016-0.001,0.024-0.001h39.938 c0.008,0,0.016,0.001,0.024,0.001c0.007,0,0.015-0.001,0.022-0.001H427.5c6.893,0,12.5,5.607,12.5,12.5V427.5z"></path>{" "}
                <path d="M295.288,186.301C273.339,169.832,231.175,160,182.5,160s-90.839,9.832-112.789,26.301 c-16.584,12.442-27.284,42.286-29.358,81.878c-2.17,41.436,5.903,95.697,28.756,116.916C92.856,407.144,143.253,415,182.5,415 s89.644-7.856,113.39-29.905c8.923-8.284,16.072-21.94,21.251-40.588c1.108-3.991-1.229-8.125-5.22-9.233 c-3.997-1.109-8.125,1.229-9.233,5.22c-4.362,15.71-10.242,27.332-17.004,33.609C268.741,389.834,228.239,400,182.5,400 s-86.241-10.166-103.185-25.897c-16.032-14.886-26.342-60.085-23.982-105.139c1.813-34.624,10.554-61.041,23.38-70.665 C97.868,183.928,137.637,175,182.5,175s84.632,8.928,103.786,23.299c18.288,13.721,27.929,63.492,21.949,113.307 c-0.494,4.113,2.439,7.847,6.553,8.341c4.104,0.486,7.846-2.44,8.34-6.553C328.762,266.469,322.452,206.681,295.288,186.301z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </a>
      )}
      {externals.thetvdb && (
        <a
          target="_blank"
          className="text-xl text-blue  "
          rel="noopener noreferrer"
          href={`https://thetvdb.com/movies/${externals.thetvdb}`}
        >
          <svg
            fill="black"
            className="h-10 w-10  "
            viewBox="0 0 14 14"
            role="img"
            focusable="false"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path d="m 1.7844605,10.190309 c -0.18713,-0.1871 -0.16477,-0.051 -0.51038,-3.1043001 -0.31619004,-2.7933 -0.32906004,-3.0127 -0.18855,-3.2133 0.20306,-0.2899 0.35119,-0.2847 3.38314,0.1182 1.5657,0.2081 2.90794,0.4091 2.98277,0.4467 0.20486,0.1029 0.27728,0.3277 0.27728,0.8604 0,0.4646 -0.008,0.4914 -0.22973,0.7364 -0.66325,0.7342 -0.66447,1.7632 -0.003,2.4001 0.20736,0.1996 0.23128,0.2567 0.23188,0.5529 5.1e-4,0.2526 -0.0334,0.3699 -0.14403,0.4985 -0.14015,0.1629 -0.22084,0.179 -2.55946,0.5106 -2.7992,0.3968001 -3.02365,0.4103001 -3.24009,0.1938001 z m 2.1925,-1.8830001 c 0,-0.2521 -0.002,-0.2543 -0.24164,-0.2543 -0.1329,0 -0.27597,-0.034 -0.31794,-0.076 -0.05,-0.05 -0.0763,-0.3143 -0.0763,-0.7658 l 0,-0.6894 0.48353,0.019 0.48354,0.019 0.39397,0.9857 0.39397,0.9856 0.37838,0.017 0.37838,0.017 0.49075,-1.1616 c 0.26992,-0.6389 0.50968,-1.2133 0.5328,-1.2765 0.0377,-0.1031 0.007,-0.1129 -0.29745,-0.095 l -0.33948,0.02 -0.34779,0.8744 c -0.19128,0.4809 -0.36856,0.8743 -0.39396,0.8743 -0.0254,0 -0.13202,-0.236 -0.23694,-0.5246 -0.10493,-0.2885 -0.25277,-0.6891 -0.32853,-0.8902 l -0.13776,-0.3657 -0.7267,0 -0.72671,0 0,-0.5087 0,-0.5087 -0.34974,0 -0.34974,0 0,0.5087 0,0.5087 -0.22256,0 c -0.21726,0 -0.22256,0.01 -0.22256,0.2544 0,0.2465 0.007,0.2544 0.21472,0.2544 l 0.21472,0 0.0299,0.7471 c 0.0438,1.096 0.1763,1.2804 0.92375,1.2852 l 0.39743,0 0,-0.2544 z m 2.98407,-2.6475 c 0.17076,-0.2171 0.16614,-0.3126 -0.0243,-0.503 -0.19684,-0.1968 -0.31765,-0.1968 -0.51449,0 -0.19564,0.1956 -0.20111,0.4329 -0.013,0.5641 0.21276,0.1484 0.40363,0.1273 0.55179,-0.061 z m 0.88409,2.773 c -0.42812,-0.2261 -0.65774,-0.7228 -0.61236,-1.3245 0.0359,-0.4765 0.20564,-0.8102 0.51695,-1.0163 0.22173,-0.1469 0.33378,-0.1722 0.84851,-0.1913 l 0.59305,-0.022 0,-0.4708 0,-0.4708 0.38153,0 0.38154,0 0,1.8123 0,1.8123 -0.93794,0 c -0.80185,0 -0.9718,-0.021 -1.17128,-0.1261 z m 1.34615,-1.1747 0,-0.7312 -0.38643,0 c -0.34232,0 -0.40764,0.021 -0.5723,0.1858 -0.25433,0.2544 -0.26586,0.7268 -0.0247,1.0133 0.17036,0.2025 0.27757,0.2408 0.7132,0.2547 l 0.27026,0.01 0,-0.7313 z m 1.0810095,-0.5087 0,-1.8123 0.38154,0 0.38153,0 0,0.4769 0,0.477 0.51076,0 c 1.05257,0 1.49508,0.4262 1.45089,1.3975 -0.0183,0.4032 -0.0525,0.5334 -0.19712,0.752 -0.29504,0.4458 -0.5269,0.5212 -1.60302,0.5212 l -0.92458,0 0,-1.8123 z m 1.47191,1.1749 c 0.38358,-0.1066 0.57492,-0.5705 0.41833,-1.0143 -0.0988,-0.2798 -0.30034,-0.381 -0.76153,-0.3822 l -0.36564,-9e-4 0,0.7312 0,0.7313 0.23846,-5e-4 c 0.13115,0 0.34282,-0.029 0.47038,-0.065 z"></path>
            </g>
          </svg>
        </a>
      )}
    </div>
  );
}

export default ExternalLinks;
