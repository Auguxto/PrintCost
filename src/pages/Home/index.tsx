import React, { useState } from "react";

import * as S from "./styles";

const Home = () => {
  const [horas, setHoras] = useState(0);
  const [minutos, setMinutos] = useState(0);
  const [custoPorHora, setCustoPorHora] = useState(0);
  const [peso, setPeso] = useState(0);
  const [custoPorPeso, setCustoPorPeso] = useState(0);
  const [custo, setCusto] = useState(0);

  function calcular() {
    const tempoEmMinutos = horas * 60 + minutos;
    const custoPorMinuto = custoPorHora / 60;
    const custoPorTempo = tempoEmMinutos * custoPorMinuto;
    const custoPorQuilograma = custoPorPeso / 1000;
    const custoPeloPeso = custoPorQuilograma * peso;

    setCusto(custoPorTempo + custoPeloPeso);
  }

  return (
    <S.Container>
      <S.InputWrapper>
        <S.Text>Tempo de impressão H</S.Text>
        <S.Input
          value={horas}
          onChange={(e) => setHoras(Number(e.target.value))}
          type="number"
          placeholder="00"
          size={50}
        />
        <S.Text>M</S.Text>
        <S.Input
          value={minutos}
          onChange={(e) => setMinutos(Number(e.target.value))}
          type="number"
          placeholder="00"
          size={50}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>Custo por Hora</S.Text>
        <S.Input
          value={custoPorHora}
          onChange={(e) => setCustoPorHora(Number(e.target.value))}
          type="number"
          placeholder="R$0,00"
          size={100}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>Peso Kg</S.Text>
        <S.Input
          value={peso}
          onChange={(e) => setPeso(Number(e.target.value))}
          type="number"
          placeholder="0,000"
          size={100}
        />
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Text>Custo por Kg</S.Text>
        <S.Input
          value={custoPorPeso}
          onChange={(e) => setCustoPorPeso(Number(e.target.value))}
          type="number"
          placeholder="R$0,00"
          size={100}
        />
      </S.InputWrapper>
      <S.Button onClick={calcular}>
        <S.ButtonText>Calcular</S.ButtonText>
      </S.Button>
      <S.Cost>R${custo}</S.Cost>
    </S.Container>
  );
};

export default Home;
