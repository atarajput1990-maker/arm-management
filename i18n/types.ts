// ARM Management · Translation shape
// All language files must satisfy this type.

export interface Translation {
  meta: {
    siteName:        string;
    homeTitle:       string;
    homeDescription: string;
  };
  nav: {
    services:    string;
    regions:     string;
    about:       string;
    leadership:  string;
    clients:     string;
    insights:    string;
    partnership: string;
    contact:     string;
    servicesDropdown: {
      transactionAdvisory: string;
      companyFormation:    string;
      accountingTax:       string;
      payrollHr:           string;
      globalMobility:      string;
      cryptoWeb3:          string;
    };
    regionsDropdown: {
      eu:    string;
      gcc:   string;
      asia:  string;
      latam: string;
    };
  };
  footer: {
    tagline:     string;
    colServices: string;
    colCompany:  string;
    colRegions:  string;
    colLegal:    string;
    links: {
      aboutArm:        string;
      leadership:      string;
      insights:        string;
      partnership:     string;
      contact:         string;
      privacyPolicy:   string;
      legalDisclaimer: string;
      armVerify:       string;
    };
    copyright: string;
  };
  cta: {
    speak:         string;
    explore:       string;
    contact:       string;
    exploreRegion: string;
  };
  home: {
    eyebrow:      string;
    heroHeading:  string;
    heroSub:      string;
    cities:       string;

    statementEyebrow: string;
    statementHeading: string;
    statementBody:    string;

    stats: Array<{ n: string; l: string }>;

    gatewaysLabel: string;
    gateways: Array<{ num: string; city: string; ctry: string; href: string }>;

    capabilitiesEyebrow: string;
    capabilitiesHeading: string;
    capabilities: Array<{ n: string; title: string; body: string; href: string }>;

    differenceEyebrow: string;
    differenceHeading: string;
    differenceBody:    string;
    differenceCTA:     string;

    insightsEyebrow: string;
    insightsHeading: string;
    insightsCTA:     string;

    closingEyebrow: string;
    closingHeading: string;
    closingBody:    string;
  };
}
