export default {
  esm: { type: 'babel', importLibToEs: true },
  cjs: { type: 'babel' },
  // target: 'browser',
  pkgFilter: {
    include: ['wandou-system'],
  },
  // disableTypeCheck: false,
};
