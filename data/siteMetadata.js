const siteMetadata = {
  title: 'มหาวิทยาลัยบูรพา',
  author: 'มหาวิทยาลัยบูรพา',
  headerTitle: 'มหาวิทยาลัยบูรพา อันดับที่ 1',
  description: 'มหาวิทยาลัยบูรพา อันดับที่ 1 ได้รับรางวัล “มหาวิทยาลัยสุขภาพ ระดับ 4 ดาว',
  language: 'th-th',
  theme: 'light',
  siteUrl: 'https://buudatacenter.vercel.app',
  siteRepo: '#',
  siteLogo: '/static/images/logo.png',
  image: '/static/images/avatar.png',
  socialBanner: '/static/images/Home_Hero.jpg',
  email: 'arees@go.buu.ac.th',
  github: '#',
  twitter: 'https://twitter.com/buu',
  facebook: 'https://facebook.com/buu',
  youtube: 'https://youtube.com/buu',
  linkedin: 'https://www.linkedin.com/buu',
  locale: 'th-TH',
  analytics: {
    plausibleDataDomain: '',
    simpleAnalytics: false,
    umamiWebsiteId: '',
    googleAnalyticsId: '',
    posthogAnalyticsId: '',
  },
  newsletter: {
    provider: '',
  },
  comment: {
    provider: '',
    giscusConfig: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname',
      reactions: '1', 
      metadata: '0',
      theme: 'light',
      inputPosition: 'bottom',
      lang: 'th',
      darkTheme: 'transparent_dark',
      themeURL: '',
    },
    utterancesConfig: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '',
      label: '',
      theme: '',
      darkTheme: '',
    },
    disqusConfig: {
      shortname: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
  },
}

module.exports = siteMetadata
