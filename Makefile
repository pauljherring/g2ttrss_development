
.PHONY: eslint

eslint:
	npx eslint eslint.config.mjs g2ttrss-mobile --ignore-pattern '**/jquery-1.9.1.min.js'
