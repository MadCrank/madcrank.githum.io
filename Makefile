JEKYLL_VERSION = 3.8.5

.PHONY: help

help: ## Отобразить это сообщение
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-0-9]+:.*?## / {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

.DEFAULT_GOAL := help

start: ## Запустить проект локально в режиме livereload, сайт будет доступен по адресу http://localhost:4000/
	@docker-compose up --build -d
stop: ## Остановить проект
	@docker-compose down
clear: ## Остановить проект и очистить контейнер
	@docker-compose down -v --remove-orphans && rm -rf _site
build: ## Собрать проект, результат будет лежать в папке _site
	@docker run --rm --volume="$(PWD):/srv/jekyll" -it jekyll/builder:$(JEKYLL_VERSION) jekyll build
logs: ## Показать логи
	@docker-compose logs --tail 10 -f
