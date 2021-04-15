# Commits

## Tipos

- `fix:` soluciona um problema na sua base de código (PATCH);
- `feat:` inclui um novo recurso na sua base de código (MINIOR);
- `docs:` somente alterações na documentação;
- `style:` alterações que não afetam o significado do código;
- `perf:` uma alteração de código que melhora o desempenho;
- `refactor:` uma alteração de código que não corrige um bug nem adiciona um recurso;
- `test:` adicionando testes ausentes ou corrigindo testes existentes;
- `BREAKING CHANGE:` inclui uma modificação que quebra a compatibilidade da API (MAJOR).

## Especificação

1. A mensagem de commit DEVE ser prefixado com um tipo, que consiste em um substantivo, feat,fix, etc., seguido por um escopo OPCIONAL, e OBRIGATÓRIO terminar com dois-pontos e um espaço.
2. O tipo `feat` DEVE ser usado quando um commit adiciona um novo recurso ao seu aplicativo ou biblioteca.
3. O tipo `fix` DEVE ser usado quando um commit representa a correção de um problema em seu aplicativo ou biblioteca.
4. Um escopo PODE ser fornecido após um tipo. Um escopo DEVE consistir em um substantivo que descreve uma seção da base de código entre parênteses, por exemplo, `fix(parser)`:
5. Uma descrição DEVE existir depois do espaço após o prefixo tipo/escopo. A descrição é um breve resumo das alterações de código, por exemplo, `fix: problema na interpretação do array quando uma string tem vários espaços`.
6. Um corpo de mensagem de commit mais longo PODE ser fornecido após a descrição curta, fornecendo informações contextuais adicionais sobre as alterações no código. O corpo DEVE começar depois de uma linha em branco após a descrição.
7. Um rodapé de uma ou mais linhas PODE ser fornecido depois de uma linha em branco após o corpo. O rodapé DEVE conter informações adicionais sobre o commit, por exemplo, pull-requests, revisores, modificações que quebram a compatibilidade, com uma informação adicional por linha.
8. A modificação que quebra a compatibilidade DEVE ser indicadas logo no início da seção do corpo ou no início de uma linha na seção de rodapé. Uma modificação que quebra a compatibilidade DEVE consistir de um texto em maiúsculas BREAKING CHANGE, seguido por dois-pontos e um espaço.
9. Uma descrição DEVE ser fornecida após o texto “BREAKING CHANGE:“, descrevendo o que mudou na API, por exemplo, `BREAKING CHANGE: as variáveis de ambiente agora têm preferência sobre os arquivos de configuração`.
10. Além de feat e fix, outro tipo PODE ser usados em suas mensagens de commit.
11. Cada bloco de informação que compõem o commit convencional NÃO DEVE ser tratado como sensível a maiúscula e minúscula pelos implementadores, com exceção de BREAKING CHANGE, que DEVE ser maiúscula.
12. Pode ser acrescentado antes do : no prefixo tipo/escopo, para chamar a atenção para modificações que quebram a compatibilidade. BREAKING CHANGE: description também DEVE ser incluído no corpo ou no rodapé, junto com o ! no prefixo.

## Formatos

    <tipo>(escopo opcional): <descrição>

    [corpo opcional]

    [rodapé opcional]

## Exemplos

    feat: verificar se o cpf é válido

    fix: corrige erro de digitação no nome da variável

    docs: ortografia correta de CHANGELOG

    BREAKING CHANGE: removendo Node 6 que atinge o final de vida em Abril