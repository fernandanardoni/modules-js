"use strict";

var _Alunos = require("./Alunos.js");

function showNames() {
  return _Alunos.Alunos.map(function (aluno) {
    return aluno.nome;
  });
}

console.log(showNames());
