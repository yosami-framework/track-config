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
   * Get application loader.
   * @return {function} Application loader.
   */
  static get loader() {
    return global.TrackConfigs.loader;
  }

  /**
   * Set application loader.
   * @param {function} value Application loader.
   */
  static set loader(value) {
    global.TrackConfigs.loader = value;
  }

  /**
   * Get application locale loader.
   * @return {function} Application locale loader.
   */
  static get localeLoader() {
    return global.TrackConfigs.localeLoader;
  }

  /**
   * Set application locale loader.
   * @param {function} value Application locale loader.
   */
  static set localeLoader(value) {
    global.TrackConfigs.localeLoader = value;
  }

  /**
   * Get application locale selector.
   * @return {function} Application locale selector.
   */
  static get localeSelector() {
    return global.TrackConfigs.localeSelector;
  }

  /**
   * Set application locale selector.
   * @param {function} value Application locale selector.
   */
  static set localeSelector(value) {
    global.TrackConfigs.localeSelector = value;
  }

  /**
   * Get application relative url root.
   * @return {function} Application relative url root.
   */
  static get relativeUrlRoot() {
    return global.TrackConfigs.relativeUrlRoot;
  }

  /**
   * Set application relative url root.
   * @param {function} value Application relative url root.
   */
  static set relativeUrlRoot(value) {
    global.TrackConfigs.relativeUrlRoot = value;
  }
}

TrackConfig.initialize();
module.exports = TrackConfig;
