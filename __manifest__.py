{
    'name': 'Shahidh Test',
    'version': '0.1',
    'sequence': 4,
    'description': 
    """Origen module to improve interface""",
    'category': 'Theme',
    'author': 'Shahidh',
    'images': [],
    'depends': ['crm', 'website'],
    'data': [
        'views/navbar.xml',
        'views/custome_favicon.xml',
        'views/footer.xml',
        'views/pages/aboutus.xml',
        'views/pages/homepage.xml',
        'views/assets.xml',
    ],
    'qweb': [
    ],
    'assets': {
        # 'web._assets_primary_variables': [
        #     # ('shahidh_origen/static/css/style.css'),
        #     # ('shahidh_origen/static/css/wrapwrap_replacement.css'),
        #     # ('shahidh_origen/static/css/slick.css'),
            
            
        # ],
        'web.assets_frontend': [
            ('shahidh_origen/static/scss/style.scss'),
            # ('shahidh_origen/static/scss/primary_variables.scss'),
            ('shahidh_origen/static/js/slick.min.js'),
            # ('shahidh_origen/static/js/jquery.validate.min.js'),
            # ('shahidh_origen/static/js/svginject.min.js'),
            # ('shahidh_origen/static/js/sticky.min.js'),
            # ('shahidh_origen/static/js/script.js'),
        ],
        # 'web.assets_backend': [
            # ('shahidh_origen/static/css/style.css'),
            # ('shahidh_origen/static/css/styles_backend.css'),#for app screen nave bar
            # ('shahidh_origen/static/less/styles_backend.less'),
        # ],
    },
    'installable': True,
    'application': True,
    'auto_install': False,
}

