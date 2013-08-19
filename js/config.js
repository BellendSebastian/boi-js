requirejs.config({
    deps: ['main'],
    paths: {
        // Core functionality
        'Game':             'classes/core/Game',
        'Input':            'classes/core/Input',
        'Renderer':         'classes/core/Renderer',
        'Loader':           'classes/core/Loader',

        // Creature classes
        'Creature':         'classes/creatures/Creature',
        'Player':           'classes/creatures/Player',
        'CreatureFactory':  'classes/creatures/CreatureFactory',

        // Entities
        'Projectile':       'classes/entities/Projectile',

        // Screens
        'Screen':           'classes/screens/Screen',
        'ScreenMain':       'classes/screens/ScreenMain',
        'MainMenu':         'classes/screens/MainMenu',

        // Utilities
        'DebugTools':       'classes/utils/DebugTools'
    }
});

