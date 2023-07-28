define HELP_TEXT

  Makefile commands

	make deps       - Install dependent programs and libraries
	make ...     	  - (see the Makefile)

endef

help:
	$(info $(HELP_TEXT))

build:
	npm run build

start:
	npm start

dev:
	npm run dev

generate-pdf:
	npm run pdf:generate

generate-pdf-in-ci:
	npm run pdf:generate-in-ci

lint:
	npm run lint

clean:
	npm run clean

deps:
	npm install

format:
	npm run format

format-check:
	npm run format:check
