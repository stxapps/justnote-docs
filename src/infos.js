const GRP_FS = 'Features';
const GRP_CRS = 'Compare';
const GRP_101 = 'Justnote 101';
const GRP_MISC = 'Misc.';

export const navGrpInfos = [
  { grp: GRP_FS }, /*{ grp: GRP_CRS },*/ { grp: GRP_101 }, { grp: GRP_MISC },
];

export const navIndexInfo = { slug: 'index', name: 'Documentation', path: '/' };

const cnmi = (slug, name, grp, path = '') => {
  return { slug, name, grp, path };
};
const _navMenuInfos = [
  cnmi('account', 'Account', GRP_FS),
  cnmi('encryption', 'Encryption', GRP_FS),
  cnmi('data-server', 'Data Server', GRP_FS),
  cnmi('take-a-note', 'Take a Note', GRP_FS),
  cnmi('organize-notes', 'Organize Notes', GRP_FS),
  cnmi('note-taking-app-101', 'Note-Taking App', GRP_101),
  cnmi('faqs', 'FAQs', GRP_MISC),
];
for (const info of _navMenuInfos) {
  if (info.path.length === 0) info.path = '/' + info.slug;
}
export const navMenuInfos = _navMenuInfos;

export const DOMAIN_NAME = 'https://docs.justnote.cc';

export const twInfo = {
  site: '@justnotecc',
  images: [DOMAIN_NAME + '/twitter-card-image-pattern1.png'],
  card: 'summary_large_image',
};

export const ogInfo = {
  siteName: 'Docs - Justnote',
  url: DOMAIN_NAME,
  type: 'article',
  images: [DOMAIN_NAME + '/twitter-card-image-pattern1.png'],
};
