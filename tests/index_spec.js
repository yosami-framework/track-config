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

  t.describe('#localeLoader', () => {
    const subject = (() => TrackConfig.localeLoader);

    t.beforeEach(() => {
      global.TrackConfigs.localeLoader = 'hoge';
    });

    t.it('Get .localeLoader', () => {
      t.expect(subject()).equals('hoge');
    });
  });

  t.describe('#localeLoader=', () => {
    const subject = (() => {
      TrackConfig.configure((c) => {
        c.localeLoader = 'fuga';
      });
    });

    t.it('Set .localeLoader', () => {
      subject();
      t.expect(global.TrackConfigs.localeLoader).equals('fuga');
    });
  });

  t.describe('#localeSelector', () => {
    const subject = (() => TrackConfig.localeSelector);

    t.beforeEach(() => {
      global.TrackConfigs.localeSelector = 'hoge';
    });

    t.it('Get .localeSelector', () => {
      t.expect(subject()).equals('hoge');
    });
  });

  t.describe('#localeSelector=', () => {
    const subject = (() => {
      TrackConfig.configure((c) => {
        c.localeSelector = 'fuga';
      });
    });

    t.it('Set .localeSelector', () => {
      subject();
      t.expect(global.TrackConfigs.localeSelector).equals('fuga');
    });
  });

  t.describe('#relativeUrlRoot', () => {
    const subject = (() => TrackConfig.relativeUrlRoot);

    t.beforeEach(() => {
      global.TrackConfigs.relativeUrlRoot = 'hoge';
    });

    t.it('Get .relativeUrlRoot', () => {
      t.expect(subject()).equals('hoge');
    });
  });

  t.describe('#relativeUrlRoot=', () => {
    const subject = (() => {
      TrackConfig.configure((c) => {
        c.relativeUrlRoot = 'fuga';
      });
    });

    t.it('Set .relativeUrlRoot', () => {
      subject();
      t.expect(global.TrackConfigs.relativeUrlRoot).equals('fuga');
    });
  });
});
