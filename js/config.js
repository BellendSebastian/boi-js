requirejs.config({
    deps: ['main'],
    paths: {
        // Core functionality
        'Game':             'classes/core/Game',
        'Renderer':         'classes/core/Renderer',

        // Creature classes
        'Creature':         'classes/creatures/Creature',
        'Player':           'classes/creatures/Player',
        'CreatureFactory':  'classes/creatures/CreatureFactory',

        // Screens
        'Screen':           'classes/screens/Screen',
        'ScreenMain':       'classes/screens/ScreenMain',

        // Utilities
        'DebugTools':       'classes/utils/DebugTools'
    }
});

