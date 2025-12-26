const socialIcons = {
  Github: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"
    ></path>
  </svg>`,
  Facebook: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path
      d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"
    ></path>
  </svg>`,
  Instagram: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="4"></rect>
    <circle cx="12" cy="12" r="3"></circle>
    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
  </svg>`,
  LinkedIn: `<svg
    xmlns="http://www.w3.org/2000/svg"
    class="icon-tabler"
    stroke-linecap="round"
    stroke-linejoin="round"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <rect x="4" y="4" width="16" height="16" rx="2"></rect>
    <line x1="8" y1="11" x2="8" y2="16"></line>
    <line x1="8" y1="8" x2="8" y2="8.01"></line>
    <line x1="12" y1="16" x2="12" y2="11"></line>
    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
  </svg>`,
  Mail: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <rect x="3" y="5" width="18" height="14" rx="2"></rect>
      <polyline points="3 7 12 13 21 7"></polyline>
    </svg>`,
  Twitter: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z"></path>
    </svg>`,
  Twitch: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path>
    </svg>`,
  YouTube: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>`,
  WhatsApp: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
      <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
    </svg>`,
  Snapchat: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.882 7.842a4.882 4.882 0 0 0 -9.764 0c0 4.273 -.213 6.409 -4.118 8.118c2 .882 2 .882 3 3c3 0 4 2 6 2s3 -2 6 -2c1 -2.118 1 -2.118 3 -3c-3.906 -1.709 -4.118 -3.845 -4.118 -8.118zm-13.882 8.119c4 -2.118 4 -4.118 1 -7.118m17 7.118c-4 -2.118 -4 -4.118 -1 -7.118"></path>
    </svg>`,
  Pinterest: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <line x1="8" y1="20" x2="12" y2="11"></line>
      <path d="M10.7 14c.437 1.263 1.43 2 2.55 2c2.071 0 3.75 -1.554 3.75 -4a5 5 0 1 0 -9.7 1.7"></path>
      <circle cx="12" cy="12" r="9"></circle>
    </svg>`,
  TikTok: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5"></path>
    </svg>`,
  CodePen: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M3 15l9 6l9 -6l-9 -6l-9 6"></path>
      <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
      <line x1="3" y1="9" x2="3" y2="15"></line>
      <line x1="21" y1="9" x2="21" y2="15"></line>
      <line x1="12" y1="3" x2="12" y2="9"></line>
      <line x1="12" y1="15" x2="12" y2="21"></line>
    </svg>`,
  Discord: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <circle cx="9" cy="12" r="1"></circle>
      <circle cx="15" cy="12" r="1"></circle>
      <path d="M7.5 7.5c3.5 -1 5.5 -1 9 0"></path>
      <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
      <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-1 2.5"></path>
      <path d="M8.5 17c0 1 -1.356 3 -1.832 3c-1.429 0 -2.698 -1.667 -3.333 -3c-.635 -1.667 -.476 -5.833 1.428 -11.5c1.388 -1.015 2.782 -1.34 4.237 -1.5l1 2.5"></path>
    </svg>`,
  GitLab: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z"></path>
    </svg>`,
  Reddit: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"></path>
      <path d="M12 8l1 -5l6 1"></path>
      <circle cx="19" cy="4" r="1"></circle>
      <circle cx="9" cy="13" r=".5" fill="currentColor"></circle>
      <circle cx="15" cy="13" r=".5" fill="currentColor"></circle>
      <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"></path>
    </svg>`,
  Skype: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M12 3a9 9 0 0 1 8.603 11.65a4.5 4.5 0 0 1 -5.953 5.953a9 9 0 0 1 -11.253 -11.253a4.5 4.5 0 0 1 5.953 -5.954a8.987 8.987 0 0 1 2.65 -.396z"></path>
      <path d="M8 14.5c.5 2 2.358 2.5 4 2.5c2.905 0 4 -1.187 4 -2.5c0 -1.503 -1.927 -2.5 -4 -2.5s-4 -.997 -4 -2.5c0 -1.313 1.095 -2.5 4 -2.5c1.642 0 3.5 .5 4 2.5"></path>
    </svg>`,
  Steam: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M16.5 5a4.5 4.5 0 1 1 -.653 8.953l-4.347 3.009l0 .038a3 3 0 0 1 -2.824 2.995l-.176 .005a3 3 0 0 1 -2.94 -2.402l-2.56 -1.098v-3.5l3.51 1.755a2.989 2.989 0 0 1 2.834 -.635l2.727 -3.818a4.5 4.5 0 0 1 4.429 -5.302z"></path>
      <circle fill="currentColor" cx="16.5" cy="9.5" r="1"></circle>
    </svg>`,
  Telegram: `<svg
        xmlns="http://www.w3.org/2000/svg"
        class="icon-tabler"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
      </svg>`,
  Mastodon: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
      <path d="M18.648 15.255c-1.116 2.026 -3.033 2.724 -5.47 2.815c-2.437 .092 -4.714 -.46 -5.504 -1.125c-.15 -.126 -.275 -.26 -.374 -.4c-.06 -.086 -.11 -.175 -.15 -.265c-.04 -.093 -.06 -.189 -.07 -.285c-.008 -.062 -.013 -.125 -.013 -.188l.003 -1.13c2.436 .945 4.872 1.107 7.308 .484c.07 -.017 .14 -.034 .21 -.051c.957 -.231 1.748 -.735 2.37 -1.51c.153 -.19 .302 -.456 .447 -.797c.01 -.026 .02 -.052 .03 -.077l.056 -.132c.546 -1.282 .839 -2.998 .839 -5.148c0 -3.058 -1.877 -4.121 -1.877 -4.121c-1.167 -.54 -3.51 -.617 -5.328 -.617c-1.818 0 -4.161 .077 -5.328 .617c0 0 -1.877 1.063 -1.877 4.121c0 2.15 .293 3.866 .84 5.148l.055 .132c.01 .025 .02 .05 .03 .077c.145 .341 .294 .606 .447 .797c.23 .285 .448 .547 .656 .787c1.246 1.446 3.526 1.892 6.84 1.892c1.962 0 3.376 -.12 4.24 -.385l.084 -.028a5.872 5.872 0 0 0 .54 -.209c.714 -.348 1.423 -.696 1.423 -.696l.042 -1.167z"></path>
      <path d="M12 7.322c.307 -.067 .399 -.35 .4 -.56l.01 -1.245c0 -.209 -.093 -.492 -.4 -.56c-.307 -.067 -.401 .217 -.4 .427l-.01 1.245c-.001 .21 .093 .493 .4 .56z"></path>
      <path d="M14.947 8.01c.21 .157 .462 .124 .643 -.027l.98 -.818c.182 -.15 .244 -.442 .062 -.665c-.183 -.223 -.495 -.301 -.705 -.145l-.98 .819c-.21 .157 -.182 .481 0 .836z"></path>
      <path d="M9.053 8.01c-.21 .157 -.462 .124 -.643 -.027l-.98 -.818c-.182 -.15 -.244 -.442 -.062 -.665c.183 -.223 .495 -.301 .705 -.145l.98 .819c.21 .157 .182 .481 0 .836z"></path>
    </svg>`,
  RuTracker: `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      viewBox="0 0 48 48"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g transform="scale(1)">
        <rect
          style="opacity:0.28240741;fill:#2e3436;fill-opacity:1;stroke:none;"
          width="41.901279"
          height="8.9116125"
          x="3"
          y="39"
          rx="2.2980971"
          ry="2.2980971" />
        <path
          style="fill:#babcb9;fill-rule:evenodd;stroke:#555753;stroke-width:1px;"
          d="M 10,16.59375 C 8.8196081,16.548814 7.6402135,17.571722 7.53125,18.8125 C 6.643292,26.100083 5.3269606,33.403527 4.65625,40.6875 L 4.65625,43.75 C 4.6900093,45.329492 5.7271791,46.392039 6.875,46.59375 L 41.5,46.59375 C 42.479024,46.569246 43.565009,45.89005 43.53125,44.59375 L 43.53125,40.65625 L 40.40625,19.4375 C 40.152431,18.135677 39.039534,16.752716 37.5,16.59375 L 10,16.59375 z" />
        <path
          style="fill:#f0f2ef;fill-rule:evenodd;stroke:#555753;stroke-width:1px;"
          d="M 10.601853,39.624614 C 9.47224,39.502143 8.6733861,38.760954 8.7014295,37.401046 L 10.601853,21.407733 C 10.893931,20.339398 11.586949,19.485349 12.680909,19.488442 L 34.605501,19.488442 C 35.691818,19.455762 36.778134,20.208796 37.062569,21.104687 L 39.478435,37.237611 C 39.535481,38.706714 38.931012,39.557098 37.913093,39.523599 L 10.601853,39.624614 z" />
        <path
          style="fill:#555753;fill-rule:evenodd;stroke:#2e3436;stroke-width:1px;"
          d="M 20.46875,20.4375 L 18.40625,32.46875 L 15.4375,32.46875 L 23.46875,37.625 L 32.4375,32.46875 L 29.46875,32.46875 L 27.59375,20.4375 L 20.46875,20.4375 z" />
        <rect
          style="fill:#ef0000;stroke:#930000;stroke-width:1px;"
          width="31.113209"
          height="6.0609155"
          x="8.4847708"
          y="4.5135489"
          rx="5.0159144"
          ry="1.9854566" />
        <rect
          style="fill:#eeeeec;stroke:#888a85;stroke-width:1px;"
          width="7.0964494"
          height="25.970053"
          x="20.48369"
          y="3.6044116"
          rx="1.0763195"
          ry="1.0763192" />
      </g>
    </svg>`,
  "NNM Club": `<svg
      xmlns="http://www.w3.org/2000/svg"
      class="icon-tabler"
      viewBox="0 0 283 111"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M0 0 C93.39 0 186.78 0 283 0 C283 36.63 283 73.26 283 111 C189.61 111 96.22 111 0 111 C0 74.37 0 37.74 0 0 Z " fill="#79A0C8"/>
      <path d="M158 0 C157.67 0.66 157.34 1.32 157 2 C153.9375 2.625 153.9375 2.625 151 3 C153.13034253 5.18911155 153.13034253 5.18911155 156 7 C158.01055661 6.73775349 160.01178687 6.39764263 162 6 C165.875 6.9375 165.875 6.9375 169 8 C169 8.33 169 8.66 169 9 C167.14375 8.9690625 167.14375 8.9690625 165.25 8.9375 C162.90696493 8.92924988 161.03052344 8.99236914 158.75 9.5625 C156.55559342 10.11110164 155.12569402 9.68325879 153 9 C153 9.66 153 10.32 153 11 C152.01 11.33 151.02 11.66 150 12 C152.23259665 13.22772827 152.23259665 13.22772827 155 14 C155.78375 13.649375 156.5675 13.29875 157.375 12.9375 C160.42595753 11.84787231 160.95860248 12.12893207 163.8125 13.375 C164.864375 13.91125 165.91625 14.4475 167 15 C167 15.66 167 16.32 167 17 C167.66 17.33 168.32 17.66 169 18 C168.67 18.33 168.34 18.66 168 19 C168.40929986 21.05396726 168.40929986 21.05396726 169 23 C169.99 23 170.98 23 172 23 C173.4375 24.3125 173.4375 24.3125 175 26 C175.721875 26.515625 176.44375 27.03125 177.1875 27.5625 C177.785625 28.036875 178.38375 28.51125 179 29 C179 29.66 179 30.32 179 31 C177.02 30.34 175.04 29.68 173 29 C171.89363605 31.39068734 171.89363605 31.39068734 171 34 C171.33 34.66 171.66 35.32 172 36 C168.37673261 37.2077558 167.35853631 36.54311128 164 35 C163.01 36.32 162.02 37.64 161 39 C162.98 41.97 162.98 41.97 165 45 C162.11562221 43.70700306 160.12780579 42.34058637 158 40 C158.56371414 43.26954202 159.49962266 44.82575883 162 47 C161.34 47 160.68 47 160 47 C160.11341534 49.40877257 160.11341534 49.40877257 161 52 C163.49759982 53.69882448 163.49759982 53.69882448 166 55 C166 55.66 166 56.32 166 57 C165.01 57.33 164.02 57.66 163 58 C162.43410156 57.2059375 161.86820313 56.411875 161.28515625 55.59375 C160.55167969 54.5728125 159.81820312 53.551875 159.0625 52.5 C157.96615234 50.96859375 157.96615234 50.96859375 156.84765625 49.40625 C156.23792969 48.6121875 155.62820312 47.818125 155 47 C154.67 47 154.34 47 154 47 C156.64 51.29 159.28 55.58 162 60" fill="white" />
    </svg>`,
};

export default socialIcons;
