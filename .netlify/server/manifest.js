export const manifest = {
	appDir: "_app",
	assets: new Set(["assets/css/argon-dashboard.css","assets/css/argon-dashboard.css.map","assets/css/argon-dashboard.min.css","assets/css/nucleo-icons.css","assets/css/nucleo-svg.css","assets/fonts/nucleo-icons.eot","assets/fonts/nucleo-icons.svg","assets/fonts/nucleo-icons.ttf","assets/fonts/nucleo-icons.woff","assets/fonts/nucleo-icons.woff2","assets/fonts/nucleo.eot","assets/fonts/nucleo.ttf","assets/fonts/nucleo.woff","assets/fonts/nucleo.woff2","assets/img/apple-icon.png","assets/img/bg-profile.jpg","assets/img/bg1.jpg","assets/img/bruce-mars.jpg","assets/img/carousel-1.jpg","assets/img/carousel-2.jpg","assets/img/carousel-3.jpg","assets/img/curved-images/curved-10.jpg","assets/img/curved-images/curved-11.jpg","assets/img/curved-images/curved-6.jpg","assets/img/curved-images/curved-8.jpg","assets/img/curved-images/curved0.jpg","assets/img/curved-images/curved1.jpg","assets/img/curved-images/curved10.jpg","assets/img/curved-images/curved11-small.jpg","assets/img/curved-images/curved11.jpg","assets/img/curved-images/curved12.jpg","assets/img/curved-images/curved13.jpg","assets/img/curved-images/curved14.jpg","assets/img/curved-images/curved19.jpg","assets/img/curved-images/curved2.jpg","assets/img/curved-images/curved21.jpg","assets/img/curved-images/curved3.jpg","assets/img/curved-images/curved4.jpg","assets/img/curved-images/curved5-small.jpg","assets/img/curved-images/curved5.jpg","assets/img/curved-images/curved6-small.jpg","assets/img/curved-images/curved6.jpg","assets/img/curved-images/curved7.jpg","assets/img/curved-images/curved8.jpg","assets/img/curved-images/curved9.jpg","assets/img/curved-images/white-curved.jpeg","assets/img/down-arrow-dark.svg","assets/img/down-arrow-white.svg","assets/img/down-arrow.svg","assets/img/favicon.png","assets/img/home-decor-1.jpg","assets/img/home-decor-2.jpg","assets/img/home-decor-3.jpg","assets/img/icons/flags/AU.png","assets/img/icons/flags/BR.png","assets/img/icons/flags/DE.png","assets/img/icons/flags/GB.png","assets/img/icons/flags/US.png","assets/img/illustrations/icon-documentation.svg","assets/img/illustrations/rocket-white.png","assets/img/ivana-square.jpg","assets/img/ivancik.jpg","assets/img/kal-visuals-square.jpg","assets/img/logo-ct-dark.png","assets/img/logo-ct.png","assets/img/logos/mastercard.png","assets/img/logos/visa.png","assets/img/marie.jpg","assets/img/shapes/pattern-lines.svg","assets/img/shapes/shape-1.svg","assets/img/shapes/shape-2.svg","assets/img/shapes/shape-3.svg","assets/img/shapes/wave-down.svg","assets/img/shapes/wave-up.svg","assets/img/shapes/waves-gray.svg","assets/img/shapes/waves-white.svg","assets/img/small-logos/icon-sun-cloud.png","assets/img/small-logos/logo-atlassian.svg","assets/img/small-logos/logo-invision.svg","assets/img/small-logos/logo-jira.svg","assets/img/small-logos/logo-slack.svg","assets/img/small-logos/logo-spotify.svg","assets/img/small-logos/logo-webdev.svg","assets/img/small-logos/logo-xd.svg","assets/img/team-1.jpg","assets/img/team-2.jpg","assets/img/team-3.jpg","assets/img/team-4.jpg","assets/img/theme/angular.jpg","assets/img/theme/bootstrap.jpg","assets/img/theme/dribbble.png","assets/img/theme/dropbox.png","assets/img/theme/mastercard.png","assets/img/theme/paypal.png","assets/img/theme/react.jpg","assets/img/theme/sketch.jpg","assets/img/theme/slack.png","assets/img/theme/spotify.jpeg","assets/img/theme/tim.png","assets/img/theme/unass.jpg","assets/img/theme/visa.png","assets/img/theme/vue.jpg","assets/img/vr-bg.jpg","assets/js/argon-dashboard.js","assets/js/argon-dashboard.js.map","assets/js/argon-dashboard.min.js","assets/js/core/bootstrap.bundle.min.js","assets/js/core/bootstrap.min.js","assets/js/core/popper.min.js","assets/js/plugins/bootstrap-notify.js","assets/js/plugins/Chart.extension.js","assets/js/plugins/chartjs.min.js","assets/js/plugins/perfect-scrollbar.min.js","assets/js/plugins/smooth-scrollbar.min.js","assets/scss/argon-dashboard/bootstrap/bootstrap-grid.scss","assets/scss/argon-dashboard/bootstrap/bootstrap-reboot.scss","assets/scss/argon-dashboard/bootstrap/bootstrap-utilities.scss","assets/scss/argon-dashboard/bootstrap/bootstrap.scss","assets/scss/argon-dashboard/bootstrap/forms/_floating-labels.scss","assets/scss/argon-dashboard/bootstrap/forms/_form-check.scss","assets/scss/argon-dashboard/bootstrap/forms/_form-control.scss","assets/scss/argon-dashboard/bootstrap/forms/_form-range.scss","assets/scss/argon-dashboard/bootstrap/forms/_form-select.scss","assets/scss/argon-dashboard/bootstrap/forms/_form-text.scss","assets/scss/argon-dashboard/bootstrap/forms/_input-group.scss","assets/scss/argon-dashboard/bootstrap/forms/_labels.scss","assets/scss/argon-dashboard/bootstrap/forms/_validation.scss","assets/scss/argon-dashboard/bootstrap/helpers/_clearfix.scss","assets/scss/argon-dashboard/bootstrap/helpers/_color-bg.scss","assets/scss/argon-dashboard/bootstrap/helpers/_colored-links.scss","assets/scss/argon-dashboard/bootstrap/helpers/_position.scss","assets/scss/argon-dashboard/bootstrap/helpers/_ratio.scss","assets/scss/argon-dashboard/bootstrap/helpers/_stacks.scss","assets/scss/argon-dashboard/bootstrap/helpers/_stretched-link.scss","assets/scss/argon-dashboard/bootstrap/helpers/_text-truncation.scss","assets/scss/argon-dashboard/bootstrap/helpers/_visually-hidden.scss","assets/scss/argon-dashboard/bootstrap/helpers/_vr.scss","assets/scss/argon-dashboard/bootstrap/mixins/_alert.scss","assets/scss/argon-dashboard/bootstrap/mixins/_backdrop.scss","assets/scss/argon-dashboard/bootstrap/mixins/_border-radius.scss","assets/scss/argon-dashboard/bootstrap/mixins/_box-shadow.scss","assets/scss/argon-dashboard/bootstrap/mixins/_breakpoints.scss","assets/scss/argon-dashboard/bootstrap/mixins/_buttons.scss","assets/scss/argon-dashboard/bootstrap/mixins/_caret.scss","assets/scss/argon-dashboard/bootstrap/mixins/_clearfix.scss","assets/scss/argon-dashboard/bootstrap/mixins/_color-scheme.scss","assets/scss/argon-dashboard/bootstrap/mixins/_container.scss","assets/scss/argon-dashboard/bootstrap/mixins/_deprecate.scss","assets/scss/argon-dashboard/bootstrap/mixins/_forms.scss","assets/scss/argon-dashboard/bootstrap/mixins/_gradients.scss","assets/scss/argon-dashboard/bootstrap/mixins/_grid.scss","assets/scss/argon-dashboard/bootstrap/mixins/_image.scss","assets/scss/argon-dashboard/bootstrap/mixins/_list-group.scss","assets/scss/argon-dashboard/bootstrap/mixins/_lists.scss","assets/scss/argon-dashboard/bootstrap/mixins/_pagination.scss","assets/scss/argon-dashboard/bootstrap/mixins/_reset-text.scss","assets/scss/argon-dashboard/bootstrap/mixins/_resize.scss","assets/scss/argon-dashboard/bootstrap/mixins/_table-variants.scss","assets/scss/argon-dashboard/bootstrap/mixins/_text-truncate.scss","assets/scss/argon-dashboard/bootstrap/mixins/_transition.scss","assets/scss/argon-dashboard/bootstrap/mixins/_utilities.scss","assets/scss/argon-dashboard/bootstrap/mixins/_visually-hidden.scss","assets/scss/argon-dashboard/bootstrap/utilities/_api.scss","assets/scss/argon-dashboard/bootstrap/vendor/_rfs.scss","assets/scss/argon-dashboard/bootstrap/_accordion.scss","assets/scss/argon-dashboard/bootstrap/_alert.scss","assets/scss/argon-dashboard/bootstrap/_badge.scss","assets/scss/argon-dashboard/bootstrap/_breadcrumb.scss","assets/scss/argon-dashboard/bootstrap/_button-group.scss","assets/scss/argon-dashboard/bootstrap/_buttons.scss","assets/scss/argon-dashboard/bootstrap/_card.scss","assets/scss/argon-dashboard/bootstrap/_carousel.scss","assets/scss/argon-dashboard/bootstrap/_close.scss","assets/scss/argon-dashboard/bootstrap/_containers.scss","assets/scss/argon-dashboard/bootstrap/_dropdown.scss","assets/scss/argon-dashboard/bootstrap/_forms.scss","assets/scss/argon-dashboard/bootstrap/_functions.scss","assets/scss/argon-dashboard/bootstrap/_grid.scss","assets/scss/argon-dashboard/bootstrap/_helpers.scss","assets/scss/argon-dashboard/bootstrap/_images.scss","assets/scss/argon-dashboard/bootstrap/_list-group.scss","assets/scss/argon-dashboard/bootstrap/_maps.scss","assets/scss/argon-dashboard/bootstrap/_mixins.scss","assets/scss/argon-dashboard/bootstrap/_modal.scss","assets/scss/argon-dashboard/bootstrap/_nav.scss","assets/scss/argon-dashboard/bootstrap/_navbar.scss","assets/scss/argon-dashboard/bootstrap/_offcanvas.scss","assets/scss/argon-dashboard/bootstrap/_pagination.scss","assets/scss/argon-dashboard/bootstrap/_placeholders.scss","assets/scss/argon-dashboard/bootstrap/_popover.scss","assets/scss/argon-dashboard/bootstrap/_progress.scss","assets/scss/argon-dashboard/bootstrap/_reboot.scss","assets/scss/argon-dashboard/bootstrap/_root.scss","assets/scss/argon-dashboard/bootstrap/_spinners.scss","assets/scss/argon-dashboard/bootstrap/_tables.scss","assets/scss/argon-dashboard/bootstrap/_toasts.scss","assets/scss/argon-dashboard/bootstrap/_tooltip.scss","assets/scss/argon-dashboard/bootstrap/_transitions.scss","assets/scss/argon-dashboard/bootstrap/_type.scss","assets/scss/argon-dashboard/bootstrap/_utilities.scss","assets/scss/argon-dashboard/bootstrap/_variables.scss","assets/scss/argon-dashboard/cards/card-background.scss","assets/scss/argon-dashboard/cards/card-carousel.scss","assets/scss/argon-dashboard/custom/_styles.scss","assets/scss/argon-dashboard/custom/_variables.scss","assets/scss/argon-dashboard/forms/_form-check.scss","assets/scss/argon-dashboard/forms/_form-select.scss","assets/scss/argon-dashboard/forms/_form-switch.scss","assets/scss/argon-dashboard/forms/_forms.scss","assets/scss/argon-dashboard/forms/_input-group.scss","assets/scss/argon-dashboard/forms/_inputs.scss","assets/scss/argon-dashboard/forms/_labels.scss","assets/scss/argon-dashboard/mixins/mixins.scss","assets/scss/argon-dashboard/mixins/_badge.scss","assets/scss/argon-dashboard/mixins/_colored-shadows.scss","assets/scss/argon-dashboard/mixins/_hover.scss","assets/scss/argon-dashboard/mixins/_social-buttons.scss","assets/scss/argon-dashboard/plugins/free/plugins.scss","assets/scss/argon-dashboard/plugins/free/_flatpickr.scss","assets/scss/argon-dashboard/plugins/free/_nouislider.scss","assets/scss/argon-dashboard/plugins/free/_perfect-scrollbar.scss","assets/scss/argon-dashboard/plugins/free/_prism.scss","assets/scss/argon-dashboard/theme.scss","assets/scss/argon-dashboard/variables/_animations.scss","assets/scss/argon-dashboard/variables/_avatars.scss","assets/scss/argon-dashboard/variables/_badge.scss","assets/scss/argon-dashboard/variables/_breadcrumb.scss","assets/scss/argon-dashboard/variables/_cards-extend.scss","assets/scss/argon-dashboard/variables/_cards.scss","assets/scss/argon-dashboard/variables/_choices.scss","assets/scss/argon-dashboard/variables/_dark-version.scss","assets/scss/argon-dashboard/variables/_dropdowns.scss","assets/scss/argon-dashboard/variables/_fixed-plugin.scss","assets/scss/argon-dashboard/variables/_form-switch.scss","assets/scss/argon-dashboard/variables/_full-calendar.scss","assets/scss/argon-dashboard/variables/_header.scss","assets/scss/argon-dashboard/variables/_info-areas.scss","assets/scss/argon-dashboard/variables/_misc-extend.scss","assets/scss/argon-dashboard/variables/_misc.scss","assets/scss/argon-dashboard/variables/_navbar-vertical.scss","assets/scss/argon-dashboard/variables/_navbar.scss","assets/scss/argon-dashboard/variables/_pagination.scss","assets/scss/argon-dashboard/variables/_rtl.scss","assets/scss/argon-dashboard/variables/_social-buttons.scss","assets/scss/argon-dashboard/variables/_table.scss","assets/scss/argon-dashboard/variables/_timeline.scss","assets/scss/argon-dashboard/variables/_utilities-extend.scss","assets/scss/argon-dashboard/variables/_utilities.scss","assets/scss/argon-dashboard/variables/_virtual-reality.scss","assets/scss/argon-dashboard/_alert.scss","assets/scss/argon-dashboard/_avatars.scss","assets/scss/argon-dashboard/_badge.scss","assets/scss/argon-dashboard/_breadcrumbs.scss","assets/scss/argon-dashboard/_buttons.scss","assets/scss/argon-dashboard/_cards.scss","assets/scss/argon-dashboard/_dark-version.scss","assets/scss/argon-dashboard/_dropdown.scss","assets/scss/argon-dashboard/_dropup.scss","assets/scss/argon-dashboard/_fixed-plugin.scss","assets/scss/argon-dashboard/_footer.scss","assets/scss/argon-dashboard/_forms.scss","assets/scss/argon-dashboard/_gradients.scss","assets/scss/argon-dashboard/_header.scss","assets/scss/argon-dashboard/_info-areas.scss","assets/scss/argon-dashboard/_misc.scss","assets/scss/argon-dashboard/_nav.scss","assets/scss/argon-dashboard/_navbar-vertical.scss","assets/scss/argon-dashboard/_navbar.scss","assets/scss/argon-dashboard/_pagination.scss","assets/scss/argon-dashboard/_popovers.scss","assets/scss/argon-dashboard/_progress.scss","assets/scss/argon-dashboard/_rtl.scss","assets/scss/argon-dashboard/_social-buttons.scss","assets/scss/argon-dashboard/_tables.scss","assets/scss/argon-dashboard/_tilt.scss","assets/scss/argon-dashboard/_timeline.scss","assets/scss/argon-dashboard/_tooltips.scss","assets/scss/argon-dashboard/_typography.scss","assets/scss/argon-dashboard/_utilities-extend.scss","assets/scss/argon-dashboard/_utilities.scss","assets/scss/argon-dashboard/_variables.scss","assets/scss/argon-dashboard.scss","favicon.png"]),
	mimeTypes: {".css":"text/css",".map":"application/json",".eot":"application/vnd.ms-fontobject",".svg":"image/svg+xml",".ttf":"font/ttf",".woff":"font/woff",".woff2":"font/woff2",".png":"image/png",".jpg":"image/jpeg",".jpeg":"image/jpeg",".js":"application/javascript",".scss":"text/x-scss"},
	_: {
		entry: {"file":"_app/immutable/start-eab5a780.js","imports":["_app/immutable/start-eab5a780.js","_app/immutable/chunks/index-58e3e6ff.js","_app/immutable/chunks/singletons-cb72bd95.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js'),
			() => import('./nodes/6.js')
		],
		routes: [
			{
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "login",
				pattern: /^\/login\/?$/,
				names: [],
				types: [],
				page: { layouts: [0], errors: [1], leaf: 6 },
				endpoint: null
			},
			{
				id: "app/contracts",
				pattern: /^\/app\/contracts\/?$/,
				names: [],
				types: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
