
.PHONY: eslint

eslint:
	docker run -it --rm -v .:/data cytopia/eslint /data/g2ttrss-mobile/js/g2tt-config.js  -c eslint.config.js