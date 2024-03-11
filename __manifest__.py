{
    'name': 'Origen Theme LBX',
    'version': '0.1',
    'sequence': 4,
    'description': 
    """Origen module to improve interface""",
    'category': 'Theme',
    'author': 'Levant Business Experts',
    'images': [],
    'depends': ['crm', 'website'],
    'data': [
        'views/navbar.xml',
        'views/pages/login.xml',
        'views/header.xml',
        'views/custome_favicon.xml',
        'views/footer.xml',
        'views/pages/aboutus.xml',
        'views/pages/homepage.xml',
        'views/pages/contactus.xml',
        'views/assets.xml',
    ],
    'qweb': [
    ],
    'assets': {
        # 'web._assets_primary_variables': [
        #     # ('origen_theme_lbx/static/css/style.css'),
        #     # ('origen_theme_lbx/static/css/wrapwrap_replacement.css'),
        #     # ('origen_theme_lbx/static/css/slick.css'),
            
            
        # ],
        'web.assets_frontend': [
            ('origen_theme_lbx/static/scss/style.scss'),
            # ('origen_theme_lbx/static/scss/primary_variables.scss'),
            # ('origen_theme_lbx/static/js/slick.min.js'),
            # ('origen_theme_lbx/static/js/jquery.validate.min.js'),
            # ('origen_theme_lbx/static/js/svginject.min.js'),
            # ('origen_theme_lbx/static/js/sticky.min.js'),
            # ('origen_theme_lbx/static/src/lib/underscore.js'),
        ],
        'web.assets_frontend_lazy': [
            # ('origen_theme_lbx/static/js/jquery.validate.min.js'),
            # ('origen_theme_lbx/static/js/svginject.min.js'),
            # ('origen_theme_lbx/static/js/sticky.min.js'),
            # ('origen_theme_lbx/static/js/script.js'),
        ],
        # 'web.assets_backend': [
            # ('origen_theme_lbx/static/css/style.css'),
            # ('origen_theme_lbx/static/css/styles_backend.css'),#for app screen nave bar
            # ('origen_theme_lbx/static/less/styles_backend.less'),
        # ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
}

