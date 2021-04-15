# GitFlow

## Branches Types

- [Master](#Master)
- [Develop](#Develop)
- [Feature](#Feature/)
- [Release](#Release/)
- [Hotfix](#Hotfix/)

### Master

- `master`

Essa é a branch destinada ao ambiente de produção, os merges são realizados a partir de uma branch do tipo release e quando isso é realizado é criado uma tag de versionamento ou a partir de uma branch do tipo hotfix.

Esse merge acontece a partir de um `Pull Request` para Equipe de Arquitetura.

### Develop

- `develop`

Essa é a branch destinada ao ambiente de desenvolvimento, os merges são realizados a partir de uma branch do tipo feature, isso deve acontecer após o QA aprovar.

Esse merge acontece a partir de um `Pull Request` para o Líder Técnico da squad.

### Feature

- `feature/feature-name`

Essa é uma branch onde o desenvolvedor codifica a melhoria, correção ou uma refatoração do projeto. É importante que tenha um objetivo claro e singular, o nome deve refletir esse objetivo e deve ser no padrão kebab-case. Se são duas tarefas distintas, crie uma branch para cada uma delas.

Essa branch deve ser criada sempre a partir da `develop` e ter como último commit a descrição do que foi realizado no `changelog`, segue o exemplo de comando para cria-la.

    git
    git checkout develop
    git checkout -b feature/gitflow-md-init

## Release

- `release/v[major.minior.patch]`

Essa branch tem como objetivo reunir todas as melhorias, correções e fatorações realizadas que foram aprovadas pelo QA e pelo lider técnico, de forma individual, reunidas e versionadas para que seja criado uma `Pull Request` para a equipe de Arquitetos aprovarem e darem merge na `master`.

Essa branch deve ser criada a parti da `develop` e deve ter como único commit o fechamento da release no arquivo `changelog`. Segue o exemplo de comando para cria-la.

    git
    git checkout develop
    git checkout -b release/v1.0.1

## Hotfix

- `hotfix/hotfix-name`

A ideia é que esse tipo de branch não exista, mas caso algo esteja não conforme na produção (branch `master`), uma branch `hotfix` deve ser criada para realizar a correção.

É importante que tenha um objetivo claro e singular, o nome deve refletir esse objetivo e deve ser no padrão kebab-case.

Essa branch é criada a partir da `master` porém as melhorias devem ir para `master` através de uma `Pull Request` para equipe de arquitetura e para `develop` através de uma `Pull Request` para o líder técnico.

    git
    git checkout master
    git checkout -b hotfix/apple-login