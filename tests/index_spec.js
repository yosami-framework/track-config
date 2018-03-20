const t           = require('track-spec');
const TrackConfig = require('../lib/index');

t.describe('TrackConfig', () => {
  t.describe('#loader', () => {
    const subject = (() => TrackConfig.loader);

    t.beforeEach(() => {
      global.TrackConfigs.loader = 'hoge';
    });

    t.it('Get .loader', () => {
      t.expect(subject()).equals('hoge');
    });
  });

  t.describe('#loader=', () => {
    const subject = (() => {
      TrackConfig.configure((c) => {
        c.loader = 'fuga';
      });
    });

    t.it('Set .loader', () => {
      subject();
      t.expect(global.TrackConfigs.loader).equals('fuga');
    });
  });
});
