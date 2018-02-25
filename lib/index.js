/**
 * Configure for track.
 */
class TrackConfig {
  /**
   * Initialize
   */
  static initialize() {
    global.TrackConfigs = {};
  }

  /**
   * Execute function with configure.
   * @param {function} func configure function.
   */
  static configure(func) {
    func(this);
  }

  /**
   * Get mithril.js
   * @return {mithril} Mithril
   */
  static get m() {
    return global.TrackConfigs.m;
  }

  /**
   * Set mithril.js
   * @param {mithril} mithril Mithril
   */
  static set m(mithril) {
    global.TrackConfigs.m = mithril;
  }
}
TrackConfig.initialize();
module.exports = TrackConfig;
