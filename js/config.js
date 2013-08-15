requirejs.config({
    deps: ['main'],
    paths: {
        // Core functionality
        'Game':             'classes/core/Game',
        'Input':            'classes/core/Input',
        'Renderer':         'classes/core/Renderer',

        // Creature classes
        'Creature':         'classes/creatures/Creature',
        'Player':           'classes/creatures/Player',
        'CreatureFactory':  'classes/creatures/CreatureFactory',

        // Screens
        'Screen':           'classes/screens/Screen',
        'ScreenMain':       'classes/screens/ScreenMain',
        'SubscreenTest':    'classes/screens/SubscreenTest',

        // Utilities
        'DebugTools':       'classes/utils/DebugTools'
    }
});

