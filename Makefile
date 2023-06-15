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
