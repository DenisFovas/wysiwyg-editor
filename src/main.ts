function hello(compiler: string) {
    return ('Hello ' + compiler);
}

function showHello(divName: string, name: string) {
    const element = document.getElementById(divName);
    element.innerText = hello(name);
}

showHello('gr', 'Typescript');