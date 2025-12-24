const reactNativeCssInteropBabel = require('react-native-css-interop/babel');

module.exports = function (api) {
    api.cache(true);
    const cssInteropConfig = reactNativeCssInteropBabel();
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            ...cssInteropConfig.plugins,
        ],
    };
};

