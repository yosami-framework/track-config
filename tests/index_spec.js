const t           = require('track-spec');
const TrackConfig = require('../lib/index');

t.describe('TrackConfig', () => {
  t.describe('#m', () => {
    const subject = (() => TrackConfig.m);

    t.beforeEach(() => {
      global.TrackConfigs.m = 'hoge';
    });

    t.it('Get .m', () => {
      t.expect(subject()).equals('hoge');
    });
  });

  t.describe('#m=', () => {
    const subject = (() => {
      TrackConfig.configure((c) => {
        c.m = 'fuga'
      });
    });

    t.it('Set .m', () => {
      subject();
      t.expect(global.TrackConfigs.m).equals('fuga');
    });
  });
});
