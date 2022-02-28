export default {
  kind: "customsearch#search",
  url: {
    type: "application/json",
    template:
      "https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json",
  },
  queries: {
    request: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "9310000000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 1,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "05c0466d56e9387f3",
      },
    ],
    nextPage: [
      {
        title: "Google Custom Search - hello world",
        totalResults: "9310000000",
        searchTerms: "hello world",
        count: 10,
        startIndex: 11,
        inputEncoding: "utf8",
        outputEncoding: "utf8",
        safe: "off",
        cx: "05c0466d56e9387f3",
      },
    ],
  },
  context: {
    title: "Google",
  },
  searchInformation: {
    searchTime: 0.702518,
    formattedSearchTime: "0.70",
    totalResults: "9310000000",
    formattedTotalResults: "9,310,000,000",
  },
  items: [
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e",
      link: "https://www.helloworldstudio.org/",
      displayLink: "www.helloworldstudio.org",
      snippet:
        "Hello World. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and ...",
      htmlSnippet:
        "\u003cb\u003eHello World\u003c/b\u003e. Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and&nbsp;...",
      cacheId: "7GkArFo05XQJ",
      formattedUrl: "https://www.helloworldstudio.org/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehelloworlds\u003c/b\u003etudio.org/",
      pagemap: {
        metatags: [
          {
            "og:type": "website",
            "twitter:title": "Hello World",
            "twitter:card": "summary",
            "og:site_name": "Hello World",
            viewport: "width=device-width, initial-scale=1",
            "twitter:url": "https://www.helloworldstudio.org",
            "twitter:description":
              "Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses",
            "og:title": "Hello World",
            "og:url": "https://www.helloworldstudio.org",
            "og:description":
              "Hello World   Computer science enrichment programs taught by software engineers, AI architects, data scientists and educators on a mission to equip and empower next generation innovators     Virtual Courses",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: '"Hello, World!" program - Wikipedia',
      htmlTitle:
        "&quot;\u003cb\u003eHello\u003c/b\u003e, \u003cb\u003eWorld\u003c/b\u003e!&quot; program - Wikipedia",
      link: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      displayLink: "en.wikipedia.org",
      snippet:
        'A "Hello, World!" program is generally a computer program that outputs or displays the message "Hello, World!". This program is very simple to write in many ...',
      htmlSnippet:
        "A &quot;\u003cb\u003eHello\u003c/b\u003e, \u003cb\u003eWorld\u003c/b\u003e!&quot; program is generally a computer program that outputs or displays the message &quot;\u003cb\u003eHello\u003c/b\u003e, \u003cb\u003eWorld\u003c/b\u003e!&quot;. This program is very simple to write in many&nbsp;...",
      cacheId: "UInCiDfJyeUJ",
      formattedUrl: "https://en.wikipedia.org/wiki/%22Hello,_World!%22_program",
      htmlFormattedUrl:
        "https://en.wikipedia.org/wiki/%22\u003cb\u003eHello\u003c/b\u003e,_\u003cb\u003eWorld\u003c/b\u003e!%22_program",
      pagemap: {
        metatags: [
          {
            referrer: "origin",
            "og:type": "website",
            "og:title": '"Hello, World!" program - Wikipedia',
            "format-detection": "telephone=no",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - Lifestyle & Gift Shop",
      htmlTitle:
        "\u003cb\u003eHello World\u003c/b\u003e - Lifestyle &amp; Gift Shop",
      link: "https://shophelloworld.com/",
      displayLink: "shophelloworld.com",
      snippet:
        "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are ...",
      htmlSnippet:
        "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are&nbsp;...",
      cacheId: "nXxyhCa9L0sJ",
      formattedUrl: "https://shophelloworld.com/",
      htmlFormattedUrl:
        "https://shop\u003cb\u003ehelloworld\u003c/b\u003e.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ72mtu4OzVI8mIsVb4o59VpcK_4yjIcHI-2bJV7QR0M3AjmsCwYwz7ZOKk",
            width: "225",
            height: "225",
          },
        ],
        organization: [
          {
            name: "Hello World",
            logo: "https://cdn.shopify.com/s/files/1/0043/9642/files/PACKINGSLIP_Logo_DoNotDelete_260x.png?v=1630856259",
            url: "https://shophelloworld.com/",
          },
        ],
        metatags: [
          {
            "og:image":
              "http://cdn.shopify.com/s/files/1/0043/9642/files/PACKINGSLIP_Logo_DoNotDelete_1200x1200.png?v=1630856259",
            "theme-color": "#12ce8c",
            "og:type": "website",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World - Lifestyle & Gift Shop",
            "og:site_name": "Hello World",
            "og:title": "Hello World - Lifestyle & Gift Shop",
            "og:image:height": "628",
            "shopify-checkout-api-token": "5725ca2823da741bd6feea4776d60b94",
            "og:description":
              "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are met.",
            "og:image:secure_url":
              "https://cdn.shopify.com/s/files/1/0043/9642/files/PACKINGSLIP_Logo_DoNotDelete_1200x1200.png?v=1630856259",
            viewport: "width=device-width,initial-scale=1.0",
            "twitter:description":
              "Offering affordable gifts, art, housewares, houseplants, furniture accessories, and more. With complimentary gift packaging, all of your shopping needs are met.",
            "shopify-digital-wallet": "/439642/digital_wallets/dialog",
            "og:url": "https://shophelloworld.com/",
          },
        ],
        cse_image: [
          {
            src: "http://cdn.shopify.com/s/files/1/0043/9642/files/PACKINGSLIP_Logo_DoNotDelete_1200x1200.png?v=1630856259",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World | Code.org",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e | Code.org",
      link: "https://code.org/helloworld",
      displayLink: "code.org",
      snippet:
        'In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: "Hello World!" Say hello to the world ...',
      htmlSnippet:
        "In Computer Science 101, the first program many students create is a simple one that outputs an iconic line of text: &quot;\u003cb\u003eHello World\u003c/b\u003e!&quot; Say hello to the world&nbsp;...",
      cacheId: "TWg46TeXY_8J",
      formattedUrl: "https://code.org/helloworld",
      htmlFormattedUrl:
        "https://code.org/\u003cb\u003ehelloworld\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT3ISD0H1ReEh2CCEWMdDQAeOtVTzO42YiWocPWa5Jnqq6z8_BYniiBtEk",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "og:type": "article",
            "twitter:title": "Hello World!",
            "og:image:width": "1200",
            "twitter:card": "summary_large_image",
            "og:site_name": "Code.org",
            "og:title": "Hello World!",
            "og:image:height": "630",
            "og:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity!",
            "article:publisher": "https://www.facebook.com/Code.org",
            "twitter:image:src":
              "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
            "fb:app_id": "500177453358606",
            viewport:
              "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no",
            "twitter:description":
              "Choose from fun themes to code interactive characters in a world you create in this Hour of Code activity",
            "og:url": "https://code.org/helloworld",
          },
        ],
        cse_image: [
          {
            src: "https://code.org/images/social-media/helloworld-og-image-1200x630.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title:
        "HelloWorld - Digital promotions & loyalty programs for the world's ...",
      htmlTitle:
        "\u003cb\u003eHelloWorld\u003c/b\u003e - Digital promotions &amp; loyalty programs for the world&#39;s ...",
      link: "http://www.helloworld.com/",
      displayLink: "www.helloworld.com",
      snippet:
        "HelloWorld is Now Proud to be Known as Merkle. create moments of value that drive people closer to your brand. Digital promotions and loyalty solutions for ...",
      htmlSnippet:
        "\u003cb\u003eHelloWorld\u003c/b\u003e is Now Proud to be Known as Merkle. create moments of value that drive people closer to your brand. Digital promotions and loyalty solutions for&nbsp;...",
      cacheId: "QaCp7ECVKlQJ",
      formattedUrl: "www.helloworld.com/",
      htmlFormattedUrl: "www.\u003cb\u003ehelloworld\u003c/b\u003e.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRCyPpeIUe9Jne9FsA_Wu1Itp6lK0o16WIdvzxMCvn-lyntOXR4bH_0Alg",
            width: "197",
            height: "256",
          },
        ],
        WebPage: [
          {
            name: "HelloWorld - Digital promotions & loyalty programs for the world's best brands",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#ffffff",
            "theme-color": "#ffffff",
            handheldfriendly: "true",
            viewport: "width=device-width, initial-scale=1.0",
            "apple-mobile-web-app-capable": "yes",
            mobileoptimized: "width",
          },
        ],
        cse_image: [
          {
            src: "http://www.helloworld.com/sites/default/files/2019-06/intro-carousel-01-mobile.jpg",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World - GitHub Docs",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e - GitHub Docs",
      link: "https://docs.github.com/en/get-started/quickstart/hello-world",
      displayLink: "docs.github.com",
      snippet:
        "You'll create your own Hello World repository and learn GitHub's pull request workflow, a popular way to create and review code. In this quickstart guide, ...",
      htmlSnippet:
        "You&#39;ll create your own \u003cb\u003eHello World\u003c/b\u003e repository and learn GitHub&#39;s pull request workflow, a popular way to create and review code. In this quickstart guide,&nbsp;...",
      cacheId: "m64ap4KkCeoJ",
      formattedUrl:
        "https://docs.github.com/en/get-started/quickstart/hello-world",
      htmlFormattedUrl:
        "https://docs.github.com/en/get-started/quickstart/\u003cb\u003ehello\u003c/b\u003e-\u003cb\u003eworld\u003c/b\u003e",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCwTsxFVHqKiYpNvIA-GSY8M1EYwBczxJKHBwY_QpZi-vlCiuZisBYQKI",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "page-document-type": "article",
            "og:image":
              "https://github.githubassets.com/images/modules/open_graph/github-logo.png",
            "og:type": "article",
            "og:site_name": "GitHub Docs",
            "og:title": "Hello World - GitHub Docs",
            "path-article": "get-started/quickstart/hello-world",
            "path-version": "free-pro-team@latest",
            "path-product": "get-started",
            "next-head-count": "26",
            "path-language": "en",
            viewport: "width=device-width, initial-scale=1",
            "page-type": "quick_start",
            "csrf-token": "zJQmzOGp-f0FJIWDnY-HM2DtFMhLO2egibXQ",
            "og:url":
              "https://docs.github.com/en/get-started/quickstart/hello-world",
            status: "200",
          },
        ],
        cse_image: [
          {
            src: "https://github.githubassets.com/images/modules/open_graph/github-logo.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e",
      link: "https://helloworld.raspberrypi.org/",
      displayLink: "helloworld.raspberrypi.org",
      snippet:
        "Hello World issue 17. Not only is health and well-being an engaging context to bring computing to life for your students, it's also never been more relevant ...",
      htmlSnippet:
        "\u003cb\u003eHello World\u003c/b\u003e issue 17. Not only is health and well-being an engaging context to bring computing to life for your students, it&#39;s also never been more relevant&nbsp;...",
      cacheId: "POS2s4YXPC0J",
      formattedUrl: "https://helloworld.raspberrypi.org/",
      htmlFormattedUrl:
        "https://\u003cb\u003ehelloworld\u003c/b\u003e.raspberrypi.org/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcT6uWbQPc7zgMVmvAPfHp-LaKax82KnBVXr4WGxhhrwZ74yffcH_lELN-Y",
            width: "225",
            height: "225",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
            "twitter:card": "summary_large_image",
            "twitter:title": "Hello World",
            "og:type": "website",
            "og:site_name": "Hello World",
            "og:title": "Hello World",
            "csrf-param": "authenticity_token",
            "og:description": "For Computing and Digital Making Educators",
            "twitter:creator": "@HelloWorld_Edu",
            "twitter:image":
              "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
            "twitter:site": "@HelloWorld_Edu",
            viewport: "width=device-width, initial-scale=1",
            "csrf-token":
              "1nFry+D977dxPJRx8BN22FhVuEw/wulM4pbg1eMvbs7PoIXXQWB7LDp+iyGnQDyhy+rM/EpVFwgA8AlFXdiggA==",
            "og:locale": "en_GB",
            "og:url": "https://helloworld.raspberrypi.org/",
          },
        ],
        cse_image: [
          {
            src: "https://helloworld.raspberrypi.org/assets/helloworld/meta_image-1e940b77afe31f357ca27e518a38bec065ed86531f12dec73292828707b0ad62.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: 'Express "Hello World" example',
      htmlTitle:
        "Express &quot;\u003cb\u003eHello World\u003c/b\u003e&quot; example",
      link: "https://expressjs.com/en/starter/hello-world.html",
      displayLink: "expressjs.com",
      snippet:
        "Hello world example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you'd get if you use the ...",
      htmlSnippet:
        "\u003cb\u003eHello world\u003c/b\u003e example. Embedded below is essentially the simplest Express app you can create. It is a single file app — not what you&#39;d get if you use the&nbsp;...",
      cacheId: "Ag5WPLoY5PIJ",
      formattedUrl: "https://expressjs.com/en/starter/hello-world.html",
      htmlFormattedUrl:
        "https://expressjs.com/en/starter/\u003cb\u003ehello\u003c/b\u003e-\u003cb\u003eworld\u003c/b\u003e.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQkDB2aWrpzUyql-VCFAdpHstna-_dqmQ845_hD8YjdljTeTUdoXGUFEYMo",
            width: "374",
            height: "135",
          },
        ],
        metatags: [
          {
            "og:image":
              "https://expressjs.com/images/express-facebook-share.png",
            viewport: "width=device-width, initial-scale=1",
          },
        ],
        cse_image: [
          {
            src: "https://expressjs.com/images/express-facebook-share.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World – React",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e – React",
      link: "https://reactjs.org/docs/hello-world.html",
      displayLink: "reactjs.org",
      snippet:
        "The smallest React example looks like this: ReactDOM.render( \u003ch1\u003eHello, world!",
      htmlSnippet:
        "The smallest React example looks like this: ReactDOM.render( &lt;h1&gt;\u003cb\u003eHello\u003c/b\u003e, \u003cb\u003eworld\u003c/b\u003e!",
      cacheId: "We7zpakyqG8J",
      formattedUrl: "https://reactjs.org/docs/hello-world.html",
      htmlFormattedUrl:
        "https://reactjs.org/docs/\u003cb\u003ehello\u003c/b\u003e-\u003cb\u003eworld\u003c/b\u003e.html",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRfoO6h2pHfrElGwudOq05MGR-ESjebbBJaWuKIJNz6Ut3_SBrPloUxWYM",
            width: "310",
            height: "163",
          },
        ],
        metatags: [
          {
            "og:image": "https://reactjs.org/logo-og.png",
            "og:type": "article",
            "fb:app_id": "623268441017527",
            "theme-color": "#20232a",
            viewport: "width=device-width, initial-scale=1.0",
            "apple-mobile-web-app-capable": "yes",
            "apple-mobile-web-app-title": "React",
            "og:title": "Hello World – React",
            "og:url": "https://reactjs.org/docs/hello-world.html",
            "og:description":
              "A JavaScript library for building user interfaces",
          },
        ],
        cse_image: [
          {
            src: "https://reactjs.org/logo-og.png",
          },
        ],
      },
    },
    {
      kind: "customsearch#result",
      title: "Hello World ;)",
      htmlTitle: "\u003cb\u003eHello World\u003c/b\u003e ;)",
      link: "https://www.helloworlddevs.com/",
      displayLink: "www.helloworlddevs.com",
      snippet:
        "Hello World! A development company with heart. Why choose Us?Because we are Honest. Honesty translates to ...",
      htmlSnippet:
        "\u003cb\u003eHello World\u003c/b\u003e! A development company with heart. Why choose Us?Because we are Honest. Honesty translates to&nbsp;...",
      cacheId: "J1MYVrqcSYoJ",
      formattedUrl: "https://www.helloworlddevs.com/",
      htmlFormattedUrl:
        "https://www.\u003cb\u003ehelloworld\u003c/b\u003edevs.com/",
      pagemap: {
        cse_thumbnail: [
          {
            src: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRjjoA-PL6eICWiiHBtjXZVHQnZTnguukzsxTyfdeCIXa4lhpWRkbeOAa8",
            width: "201",
            height: "250",
          },
        ],
        metatags: [
          {
            "msapplication-tilecolor": "#333333",
            "theme-color": "#333333",
            viewport: "width=device-width, initial-scale=1",
            author: "Hello World",
            "msapplication-tileimage": "/ms-icon-144x144.png",
          },
        ],
        cse_image: [
          {
            src: "https://www.helloworlddevs.com/images/pdx.jpg",
          },
        ],
      },
    },
  ],
};
